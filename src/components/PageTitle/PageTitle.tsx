import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;
  color: black;

  font-size: 48px;
  font-weight: 800;
`;

interface Props {
  title: JSX.Element;
}

const PageTitle = ({ title }: Props) => {
  return <Container>{title}</Container>;
};

export default PageTitle;
