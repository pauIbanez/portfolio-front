import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import ScrollContext from "../../../contexts/scrollContext/ScrollContext.contextCreator";
import { useContext, useRef } from "react";
import useEffectOnce from "../../../hooks/useEffectOnce";

const Container = styled.section`
  width: 100%;
  background-color: white;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 70px 20px 70px;
`;

const Holder = styled.div`
  padding: 0 70px 40px 70px;

  p {
    margin: 0;
  }
`;

interface Props {
  title: string;
  name?: string;
  children: JSX.Element;
}
const CVSection = ({ name, title, children }: Props) => {
  const section = useRef(null);
  const { loadItem } = useContext(ScrollContext);

  useEffectOnce(() => {
    loadItem({ name: name ? name : title, ref: section });
  });

  return (
    <Container ref={section}>
      <Content>
        <Title>{title}</Title>
      </Content>
      <Holder>{children}</Holder>
    </Container>
  );
};

export default CVSection;
