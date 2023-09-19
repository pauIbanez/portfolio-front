import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pages from "../../data/Pages/Pages";
import Button from "../../components/Button/Button";
import Colors from "../../data/style/Colors";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import {
  backgroundTriangles,
  button,
  mainGap,
  orb,
  rightImages,
  textSizes,
} from "../../data/Pages/responsive/homeage";

interface TextSize {
  size: number;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Holder = styled.main<{ gap: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${(props) => props.gap}px;
  height: fit-content;
  margin: 100px 0 100px 0;
`;

const InfoSection = styled.section<{ $width: number }>`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${(props) => props.$width}px;

  p {
    margin: 0;
  }
`;

const AccentText = styled.p<TextSize>`
  color: ${Colors.main};
  font-size: ${(props) => props.size}px;
`;

const MyName = styled.h2<TextSize>`
  margin: 0;

  font-size: ${(props) => props.size}px;
  color: black;
  font-weight: 700;
  width: 100%;
`;

const TextSection = styled.div<TextSize>`
  margin: 30px 0 ${(props) => props.size * 3.6}px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: ${(props) => props.size}px;
  color: ${Colors.textGray};
`;

const BackgroundOrb = styled.img<{ offset: number }>`
  position: absolute;
  right: 6px;
  top: -${(props) => props.offset}px;
  z-index: -1;
`;

const PictureSection = styled.div<{ $height: number; $width: number }>`
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    &:first-child {
      position: absolute;
      top: 0;
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const BackgroundTriangles = styled.img`
  position: absolute;
  z-index: -2;

  top: 0;
  left: 50%;
  transform: translate(-50%, -12%);
`;

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToProjects = () => {
    navigate(Pages.projects.path);
  };

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  return (
    <Container>
      <Holder gap={mainGap[currentWidthBreakPoint]}>
        <InfoSection $width={rightImages[currentWidthBreakPoint][0].width}>
          <BackgroundOrb
            alt={"orb"}
            src="/media/home/background_circle.svg"
            offset={textSizes[currentWidthBreakPoint].name - 50}
            height={orb[currentWidthBreakPoint]}
            width={orb[currentWidthBreakPoint]}
          />
          <AccentText size={textSizes[currentWidthBreakPoint].accent}>
            {t("Home.content.accent")}
          </AccentText>
          <MyName size={textSizes[currentWidthBreakPoint].name}>
            {t("Home.content.heading")}
          </MyName>
          <TextSection size={textSizes[currentWidthBreakPoint].textSection}>
            <p>{t("Home.content.info1")}</p>
            <p>{t("Home.content.info2")}</p>
          </TextSection>
          <Button
            onClick={goToProjects}
            styleObject={{
              height: button[currentWidthBreakPoint].height,
              width: button[currentWidthBreakPoint].width,
              radius: button[currentWidthBreakPoint].radius,
              fontSize: button[currentWidthBreakPoint].size,
            }}
          >
            {t("Home.content.button")}
          </Button>
        </InfoSection>
        <PictureSection
          $height={rightImages[currentWidthBreakPoint][0].height}
          $width={rightImages[currentWidthBreakPoint][0].width}
        >
          <img
            src="/media/home/me.svg"
            alt="Pau Ibáñez"
            height={rightImages[currentWidthBreakPoint][1].height}
            width={rightImages[currentWidthBreakPoint][1].width}
          />
          <img
            src="/media/home/mr_background.svg"
            alt="Background"
            height={rightImages[currentWidthBreakPoint][2].height}
            width={rightImages[currentWidthBreakPoint][2].width}
          />
        </PictureSection>
      </Holder>
      <BackgroundTriangles
        alt="Background"
        src="/media/home/background_triangles.svg"
        height={backgroundTriangles[currentWidthBreakPoint].height}
        width={backgroundTriangles[currentWidthBreakPoint].width}
      />
    </Container>
  );
};

export default HomePage;
