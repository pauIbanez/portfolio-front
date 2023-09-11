import styled from "styled-components";
import PresentationInfo from "../textComponents/PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Pages from "../../data/Pages/Pages";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";

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
  children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { t } = useTranslation();

  const currentPath = useLocation().pathname;
  const pathName = currentPath.slice(1).includes("/")
    ? currentPath.slice(0, currentPath.slice(1).indexOf("/") + 1)
    : currentPath;

  const currentPage = Object.values(Pages).find(
    (page) => page.path === pathName
  );

  const title = currentPage?.isDynamic
    ? "Project"
    : t(`${currentPage?.name}.title`);

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
