import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";

const Holder = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

const NoMobilePage = () => {
  return (
    <Holder>
      <TiteledText
        title="No mobile"
        text="Since I expect 99% of the trafic to this website to be from desktop, I have not implemented a mobile version. If you wish to freely visit this website, please do so in a Tablet or desktop/laptop."
      />
    </Holder>
  );
};

export default NoMobilePage;
