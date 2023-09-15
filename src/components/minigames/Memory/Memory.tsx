import styled from "styled-components";
import GameSection from "../GameSection/GameSection";
import Button from "../../Button/Button";
import TiteledText from "../../textComponents/TitledText/TiteledText";
import Colors from "../../../data/style/Colors";
import ColoredText from "../../textComponents/ColoredText/ColoredText";

const GameHolder = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const GameRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 75px;
`;

const ControlsHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const StatsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const TileHolder = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  gap: 10px;
`;

const PairsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;

  h3,
  p {
    margin: 0;
  }
`;

const ContinuousText = styled.div`
  display: flex;
`;

const NumberText = styled.div`
  width: 13px;
  display: flex;
  justify-content: center;
`;

const Memory = () => {
  const buttonStyle = {
    fontSize: 13,
    height: 30,
    width: 160,
    radius: 10,
    padding: 0,
  };

  const statStyle = {
    title: {
      size: "15px",
    },
    text: {
      size: "13px",
      color: Colors.lightTextGray,
    },
    gap: 3,
  };
  return (
    <GameSection title="Memory">
      <>
        <p>The goal of this game is to match all the pairs.</p>
        <GameHolder>
          <GameRow>
            <TileHolder></TileHolder>
            <StatsHolder>
              <TiteledText
                title="Difficulty"
                text="Easy"
                styleObject={statStyle}
              />
              <PairsSection>
                <ColoredText
                  text="Pairs Matched"
                  styleData={{ size: "15px", weight: 700 }}
                />
                <ContinuousText>
                  <NumberText>
                    <ColoredText
                      text="15"
                      styleData={{ size: "13px", weight: 700 }}
                    />
                  </NumberText>
                  <ColoredText
                    text="/15"
                    styleData={{ size: "13px", color: Colors.lightTextGray }}
                  />
                </ContinuousText>
              </PairsSection>
              <TiteledText title="Moves" text="0" styleObject={statStyle} />
              <TiteledText
                title="Your minimum moves"
                text="15"
                styleObject={statStyle}
              />
            </StatsHolder>
          </GameRow>
          <ControlsHolder>
            <Button styleObject={buttonStyle}>Restart Game</Button>
            <Button styleObject={buttonStyle}>Change Difficulty</Button>
          </ControlsHolder>
        </GameHolder>
      </>
    </GameSection>
  );
};

export default Memory;
