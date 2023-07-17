import { styled } from "styled-components";
import Pages from "../../data/Pages/Pages";
import { Link } from "react-router-dom";
import Colors from "../../data/style/Colors";

const NavBarContainer = styled.nav`
  height: 100%;
  display: flex;
`;
const NavItem = styled(Link)`
  height: 100%;
  width: 140px;
  color: ${Colors.textGray};
  font-size: 16;
  font-weight: 700;

  &:hover {
    color: white;
    background-color: ${Colors.main};
  }
`;

const NavBar = () => {
  const pages = Object.values(Pages).map((page) => (
    <NavItem to={page.path}>{page.name}</NavItem>
  ));

  return <NavBarContainer>{pages}</NavBarContainer>;
};

export default NavBar;
