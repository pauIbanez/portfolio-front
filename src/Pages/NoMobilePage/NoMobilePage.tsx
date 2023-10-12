import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Holder>
      <Content>
        <TiteledText
          title={t("NoMobile.title")}
          text={t("NoMobile.text")}
          styleObject={{
            title: {
              heading: 1,
            },
          }}
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
        {t("NoMobile.button")}
      </Button>
    </Holder>
  );
};

export default NoMobilePage;
