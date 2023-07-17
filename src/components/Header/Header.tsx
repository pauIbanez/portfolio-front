import { styled } from "styled-components";
import PageTitle from "../PageTitle/PageTitle";
import { useLocation } from "react-router-dom";
import Pages from "../../data/Pages/Pages";
import PageInfo from "../../Types/PageInfo";

const Container = styled.header`
  display: flex;
  flex-direction: column;
`;

const Header = () => {
  const currentPath = useLocation().pathname;
  const currentPage = Object.values(Pages).find(
    (page) => page.path === currentPath
  ) as PageInfo;

  return (
    <Container>
      <PageTitle title={(currentPage as any).title} />
    </Container>
  );
};

export default Header;
