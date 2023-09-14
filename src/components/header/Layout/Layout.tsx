import styled from "styled-components";
import PresentationInfo from "../../textComponents/PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";
import { useLocation } from "react-router-dom";
import Pages from "../../../data/Pages/Pages";
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
  z-index: 10;
`;

interface Props {
  children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
  const { t } = useTranslation();

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
    : t("notFoundPage.title");

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
