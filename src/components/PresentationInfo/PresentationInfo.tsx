import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const MyLogo = styled.img`
  height: 50px;
  width: 50px;
`;

const Name = styled.h3`
  color: black;
  font-size: 16px;
  font-weight: 700;
  font-family: "Poppins";
  margin: 0;
`;

const PresentationInfo = () => {
  return (
    <Container>
      <MyLogo alt="My logo" src="/media/logo.svg" />
      <Name>PAU IBÁÑEZ PORTFOLIO</Name>
    </Container>
  );
};

export default PresentationInfo;
