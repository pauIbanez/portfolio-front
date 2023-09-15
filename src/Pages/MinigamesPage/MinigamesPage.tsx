import styled from "styled-components";
import BackToProjects from "../../components/projects/BackToProjects/BackToProjects";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import Memory from "../../components/minigames/MemoryGame/Memory/Memory";

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
  return (
    <Holder>
      <BackToProjects />
      <TextHolder>
        <TiteledText
          title="Welcome to <&>mini<&>games!"
          text="I’ve added a couple of minigames design to be <&>light<&> and <&>fast<&>. Feel free to take a break and <&>enjoy disconnecting for a bit<&>!"
        />
      </TextHolder>
      <GamesHolder>
        <Memory />
      </GamesHolder>
    </Holder>
  );
};

export default MinigamesPage;
