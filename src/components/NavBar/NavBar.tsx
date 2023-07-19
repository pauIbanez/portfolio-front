import styled from "styled-components";
import Pages from "../../data/Pages/Pages";
import { Link, useLocation } from "react-router-dom";
import Colors from "../../data/style/Colors";
import { useTranslation } from "react-i18next";

const NavBarContainer = styled.nav`
  height: 100%;
  display: flex;
`;

interface NavItemProps {
  $active?: boolean;
}

const NavItem = styled(Link)<NavItemProps>`
  height: 100%;
  width: 140px;

  font-size: 16px;
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
  width: 300px;
`;

const ContactLink = styled(Link)<NavItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  padding: 0 30px 0 30px;

  height: 60px;
  width: 140px;

  background-color: ${(props) => (props.$active ? "white" : Colors.main)};
  color: ${(props) => (props.$active ? Colors.main : "white")};

  border: ${(props) =>
    props.$active ? "3px solid " + Colors.main : "3px solid transparent"};

  border-radius: 25px;

  font-size: 16px;
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

  const pages = Object.values(Pages)
    .filter((page) => !page.isDynamic && page.name !== "Contact")
    .map((page) => (
      <NavItem
        key={page.name}
        $active={
          currentPage === page.path ||
          (page.name === "Projects" && currentPage.includes(Pages.project.path))
        }
        to={page.path}
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
          to={Pages.contact.path}
        >
          {t("navBar.contact")}
        </ContactLink>
      </ContactContainer>{" "}
    </NavBarContainer>
  );
};

export default NavBar;
