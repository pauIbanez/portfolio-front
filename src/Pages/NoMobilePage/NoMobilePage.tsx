import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import Button from "../../components/Button/Button";

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0 10%;
  gap: 30px;
`;

const Content = styled.main`
  background-color: white;
  padding: 20px;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
`;

const NoMobilePage = ({ onClick }: { onClick: () => void }) => {
  return (
    <Holder>
      <Content>
        <TiteledText
          title="No <&>mobile<&>"
          text="Since I expect 99% of the trafic to this website to be from desktop, and for time management reasons, <&>I have not implemented a mobile version<&>. If you wish to comfortably visit my portfolio, please do so in a Desktop, laptop or tablet. \n \n You can still visit by pressing the button bellow, but understand this site is not <&>currently<&> built for mobile."
        />
      </Content>
      <Button
        onClick={onClick}
        styleObject={{
          fontSize: 14,
          radius: 15,
          padding: 20,
          height: 40,
        }}
      >
        Visit anyway
      </Button>
    </Holder>
  );
};

export default NoMobilePage;
