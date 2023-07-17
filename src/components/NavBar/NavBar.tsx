import { styled } from "styled-components";
import Pages from "../../data/Pages/Pages";
import { Link, useLocation } from "react-router-dom";
import Colors from "../../data/style/Colors";

const NavBarContainer = styled.nav`
  height: 100%;
  display: flex;
`;

interface NavItemProps {
  active?: string;
}

const NavItem = styled(Link)<NavItemProps>`
  height: 100%;
  width: 140px;

  font-size: 16px;
  font-weight: 700;

  color: ${(props) => (props.active === "true" ? "white" : Colors.textGray)};
  background-color: ${(props) =>
    props.active === "true" ? Colors.main : "transparent"};

  &:hover {
    color: white;
    ${(props) =>
      props.active === "true"
        ? ""
        : `background-color: ${Colors.disabledMain};`};
  }

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
`;

const NavBar = () => {
  const currentPage = useLocation().pathname;

  const pages = Object.values(Pages)
    .filter((page) => !(page as any).dynamic)
    .map((page) => (
      <NavItem
        key={page.name}
        active={(currentPage === page.path).toString()}
        to={page.path}
      >
        {page.name}
      </NavItem>
    ));

  return <NavBarContainer>{pages}</NavBarContainer>;
};

export default NavBar;
