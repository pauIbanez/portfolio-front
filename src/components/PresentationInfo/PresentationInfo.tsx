import { styled } from "styled-components";

const Container = styled.div`
  height: 75px;
  background-color: white;
  display: flex;
  align-items: center;
`;

const MyLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const Text = styled.h3``;

const PresentationInfo = () => {
  return (
    <Container>
      <MyLogo alt="My logo" src="./media/logo.svg" />
    </Container>
  );
};

export default PresentationInfo;
