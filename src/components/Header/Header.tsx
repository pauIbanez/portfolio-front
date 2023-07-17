import { styled } from "styled-components";
import PresentationInfo from "../PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";
import PageTitle from "../PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import Pages from "../../data/Pages/Pages";
import PageInfo from "../../Types/PageInfo";

const Container = styled.header`
  display: flex;
  flex-direction: column;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
`;

const BarContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 25px;

  background-color: white;
`;

const Header = () => {
  const currentPath = useLocation().pathname;
  const currentPage = Object.values(Pages).find(
    (page) => page.path === currentPath
  ) as PageInfo;

  return (
    <Container>
      <PageTitle title={(currentPage as any).title} />
      <BarContainer>
        <PresentationInfo />
        <NavBar currentPage={currentPage} />
      </BarContainer>
    </Container>
  );
};

export default Header;
