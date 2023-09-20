import styled from "styled-components";
import Pages from "../../../data/Pages/Pages";
import { Link, useLocation } from "react-router-dom";
import Colors from "../../../data/style/Colors";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ResponsiveContext from "../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { navBar } from "../../../data/Pages/responsive/layout";

const NavBarContainer = styled.nav`
  height: 100%;
  display: flex;
`;

interface NavItemProps {
  $active?: boolean;
  $width: number;
  size: number;
}

const NavItem = styled(Link)<NavItemProps>`
  height: 100%;
  width: ${(props) => props.$width}px;

  font-size: ${(props) => props.size}px;
  font-weight: 700;

  color: ${(props) => (props.$active ? Colors.main : Colors.textGray)};

  ${(props) =>
    props.$active
      ? `border-bottom: 3px solid ${Colors.main}`
      : "border-bottom: 3px solid transparent"};

  &:hover {
    color: ${Colors.main};
    border-bottom: 3px solid ${Colors.main};
  }

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  transition: all ease-in-out 200ms;
`;

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
`;

const ContactLink = styled(Link)<NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  padding: 0 30px 0 30px;

  height: 75%;
  width: ${(props) => props.$width}px;

  background-color: ${(props) => (props.$active ? "white" : Colors.main)};
  color: ${(props) => (props.$active ? Colors.main : "white")};

  border: ${(props) =>
    props.$active ? "3px solid " + Colors.main : "3px solid transparent"};

  border-radius: 25px;

  font-size: ${(props) => props.size}px;
  font-weight: 700;

  transition: all ease-in-out 200ms;

  &:hover {
    background-color: white;
    color: ${Colors.main};

    border: 3px solid ${Colors.main};
  }
`;

const NavBar = () => {
  const currentPage = useLocation().pathname;
  const { t } = useTranslation();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const pages = Object.values(Pages)
    .filter((page) => !page.isHidden && page.name !== "Contact")
    .map((page) => (
      <NavItem
        key={page.name}
        $active={
          currentPage === page.path ||
          (page.name === "Projects" && currentPage.includes("project"))
        }
        to={page.path}
        $width={navBar[currentWidthBreakPoint].itemWidth}
        size={navBar[currentWidthBreakPoint].itemSize}
      >
        {t(`navBar.${page.translationKey}`)}
      </NavItem>
    ));

  return (
    <NavBarContainer>
      {pages}
      <ContactContainer>
        <ContactLink
          $active={currentPage === Pages.contact.path}
          $width={navBar[currentWidthBreakPoint].itemWidth}
          size={navBar[currentWidthBreakPoint].itemSize}
          to={Pages.contact.path}
        >
          {t("navBar.contact")}
        </ContactLink>
      </ContactContainer>
    </NavBarContainer>
  );
};

export default NavBar;
