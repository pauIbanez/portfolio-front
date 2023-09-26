import styled from "styled-components";
import BackToProjects from "../../components/projects/BackToProjects/BackToProjects";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Memory from "../../components/minigames/MemoryGame/Memory/Memory";
import { useTranslation } from "react-i18next";
import Simon from "../../components/minigames/SimonGame/Simon/Simon";

const Holder = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
  flex-direction: column;
`;

const TextHolder = styled.div`
  max-width: 700px;
  padding-bottom: 70px;
`;

const GamesHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const MinigamesPage = () => {
  const { t } = useTranslation();

  return (
    <Holder>
      <BackToProjects />
      <TextHolder>
        <TiteledText
          title={t("Minigames.title")}
          text={t("Minigames.text")}
          styleObject={{ title: { heading: 2 } }}
        />
      </TextHolder>
      <GamesHolder>
        <Memory />
        <Simon />
      </GamesHolder>
    </Holder>
  );
};

export default MinigamesPage;
