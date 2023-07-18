import { styled } from "styled-components";
import PresentationInfo from "../PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Pages from "../../data/Pages/Pages";
import PageTitle from "../PageTitle/PageTitle";

const BarContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 25px;

  background-color: white;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const currentPath = useLocation().pathname;
  const pageTitle = Object.values(Pages).find(
    (page) => page.path === currentPath
  )?.title;

  const title = pageTitle ? pageTitle : ["Project ", "Name"];

  return (
    <>
      <PageTitle title={title} />
      <BarContainer>
        <PresentationInfo />
        <NavBar />
      </BarContainer>
      {children}
    </>
  );
};

export default Layout;
