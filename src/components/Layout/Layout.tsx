import { styled } from "styled-components";
import Header from "../Header/Header";
import PresentationInfo from "../PresentationInfo/PresentationInfo";
import NavBar from "../NavBar/NavBar";

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
  return (
    <>
      <Header />
      <BarContainer>
        <PresentationInfo />
        <NavBar />
      </BarContainer>
      {children}
    </>
  );
};

export default Layout;
