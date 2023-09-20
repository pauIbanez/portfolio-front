import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ColoredText from "../../components/textComponents/ColoredText/ColoredText";
import { imageSizes, textSizes } from "../../data/Pages/responsive/aboutMe";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";

const AboutMeHolder = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 100px;
  text-align: justify;
  gap: 100px;
  margin: 0 auto;
  max-width: 1700px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 75px;

  img {
    align-self: center;
  }
`;

const RowItem = styled.div`
  max-width: 700px;
`;

const FloatingImage = styled.img<{ width: number }>`
  float: right;
  margin: 0 ${(props) => (props.width * 80) / imageSizes[0][0].width}px;
`;

const TextSection = styled.div`
  p {
    margin: 0;
  }

  h3 {
    margin: 0;
    margin-bottom: 15px;
  }
`;

const AboutMePage = () => {
  const { t } = useTranslation();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  return (
    <AboutMeHolder>
      <TiteledText
        title={t("AboutMe.textSections.0.title")}
        text={t("AboutMe.textSections.0.text")}
        styleObject={{
          title: {
            size: textSizes[currentWidthBreakPoint].title,
          },
          text: {
            size: textSizes[currentWidthBreakPoint].text,
          },
        }}
      />
      <Row>
        <RowItem>
          <div>
            <div>
              <FloatingImage
                src="./media/aboutMe/team.png"
                alt={t("AboutMe.images.0")}
                width={imageSizes[currentWidthBreakPoint][0].width}
                height={imageSizes[currentWidthBreakPoint][0].height}
              />
            </div>
            <TextSection>
              <ColoredText
                text={t("AboutMe.textSections.1.title")}
                styleData={{
                  heading: 3,
                  weight: 700,
                  size: textSizes[currentWidthBreakPoint].title,
                }}
              />
              <ColoredText
                text={t("AboutMe.textSections.1.text")}
                styleData={{
                  size: textSizes[currentWidthBreakPoint].text,
                }}
              />
            </TextSection>
          </div>
        </RowItem>
        <RowItem>
          <TiteledText
            title={t("AboutMe.textSections.2.title")}
            text={t("AboutMe.textSections.2.text")}
            styleObject={{
              title: {
                size: textSizes[currentWidthBreakPoint].title,
              },
              text: {
                size: textSizes[currentWidthBreakPoint].text,
              },
            }}
          />
        </RowItem>
      </Row>
      <Row>
        <TiteledText
          title={t("AboutMe.textSections.3.title")}
          text={t("AboutMe.textSections.3.text")}
          styleObject={{
            title: {
              size: textSizes[currentWidthBreakPoint].title,
            },
            text: {
              size: textSizes[currentWidthBreakPoint].text,
            },
          }}
        />
        <img
          src="./media/aboutMe/ladder.png"
          alt={t("AboutMe.images.1")}
          width={imageSizes[currentWidthBreakPoint][1].width}
          height={imageSizes[currentWidthBreakPoint][1].height}
        />
      </Row>
    </AboutMeHolder>
  );
};

export default AboutMePage;
