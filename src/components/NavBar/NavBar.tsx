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
`;

const NavBar = () => {
  const currentPage = useLocation().pathname;
  const { t } = useTranslation();

  const pages = Object.values(Pages)
    .filter((page) => !page.isDynamic)
    .map((page) => (
      <NavItem
        key={page.name}
        $active={currentPage === page.path}
        to={page.path}
      >
        {t(`navBar.${page.translationKey}`)}
      </NavItem>
    ));

  return <NavBarContainer>{pages}</NavBarContainer>;
};

export default NavBar;
