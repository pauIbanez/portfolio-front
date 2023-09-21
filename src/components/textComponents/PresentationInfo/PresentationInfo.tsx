import styled from "styled-components";
import LanguageSelector from "../../header/LanguageSelector/LanguageSelector";
import Colors from "../../../data/style/Colors";

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

const SelectorWrapper = styled.div`
  position: relative;
  height: 100%;
  // width: 80px;
  display: flex;
  align-items: center;
`;

const Separator = styled.div`
  width: 1px;
  height: 60%;
  background-color: ${Colors.main};
`;

const PresentationInfo = () => {
  return (
    <Container>
      <MyLogo alt="My logo" src="/media/logos/logo.svg" />
      <Name>PAU IBÁÑEZ PORTFOLIO</Name>
      <Separator />
      <SelectorWrapper>
        <LanguageSelector />
      </SelectorWrapper>
    </Container>
  );
};

export default PresentationInfo;
