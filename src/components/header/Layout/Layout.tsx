import styled from "styled-components";
import PresentationInfo from "../../textComponents/PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Pages from "../../../data/Pages/Pages";
import PageTitle from "../PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { navBar } from "../../../data/Pages/responsive/layout";

const BarContainer = styled.div<{ $height: number }>`
  width: 100%;
  height: ${(props) => props.$height}px;

  display: flex;
  justify-content: space-between;
  padding: 0 25px 0 25px;

  background-color: white;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
`;

interface Props {
  children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { t } = useTranslation();
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const currentPath = useLocation().pathname;

  const pathNoSlash = currentPath.slice(1);
  const lastPath = pathNoSlash.includes("/")
    ? pathNoSlash.slice(pathNoSlash.indexOf("/") + 1, pathNoSlash.length)
    : currentPath;

  const currentPage = Object.values(Pages).find(
    (page) => page.path === lastPath
  );

  const title = currentPage
    ? t(`${currentPage?.name}.title`)
    : t("NotFound.title");

  return (
    <>
      <PageTitle title={title} />
      <BarContainer $height={navBar[currentWidthBreakPoint].barHeight}>
        <PresentationInfo />
        <NavBar />
      </BarContainer>
      {children}
    </>
  );
};

export default Layout;
