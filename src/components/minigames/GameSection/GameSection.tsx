import styled from "styled-components";
import Colors from "../../../data/style/Colors";
import React from "react";

const Container = styled.section`
  width: 100%;
  background-color: white;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1175px;
  padding: 40px 70px 40px 70px;
`;

const Title = styled.h3`
  font-weight: 700;
  font-size: 20px;
  color: black;
  margin: 0;
  padding-bottom: 10px;
`;

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  p {
    margin: 0;
  }
`;

interface Props {
  title: string;
  children: React.JSX.Element;
}
const GameSection = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Holder>{children}</Holder>
    </Container>
  );
};

export default GameSection;
