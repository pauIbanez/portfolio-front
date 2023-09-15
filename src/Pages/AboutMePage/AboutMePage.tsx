import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import { useTranslation } from "react-i18next";
import ColoredText from "../../components/textComponents/ColoredText/ColoredText";

const AboutMeHolder = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 0;
  text-align: justify;
  gap: 100px;
  margin: 0 auto;
  min-width: 1530px;
  max-width: 1530px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 75px;
`;

const RowItem = styled.div`
  max-width: 700px;
`;

const FloatingImage = styled.img`
  float: right;
  margin: 0 80px;
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

  return (
    <AboutMeHolder>
      <TiteledText
        title={t("AboutMe.textSections.0.title")}
        text={t("AboutMe.textSections.0.text")}
      />
      <Row>
        <RowItem>
          <div>
            <div>
              <FloatingImage
                src="./media/aboutMe/team.png"
                alt={t("AboutMe.images.0")}
                width={222}
                height={216}
              />
            </div>
            <TextSection>
              <ColoredText
                text={t("AboutMe.textSections.1.title")}
                styleData={{
                  heading: 3,
                  weight: 700,
                  size: "20px",
                }}
              />
              <ColoredText text={t("AboutMe.textSections.1.text")} />
            </TextSection>
          </div>
        </RowItem>
        <RowItem>
          <TiteledText
            title={t("AboutMe.textSections.2.title")}
            text={t("AboutMe.textSections.2.text")}
          />
        </RowItem>
      </Row>
      <Row>
        <TiteledText
          title={t("AboutMe.textSections.3.title")}
          text={t("AboutMe.textSections.3.text")}
        />
        <img
          src="./media/aboutMe/ladder.png"
          alt={t("AboutMe.images.1")}
          width={175}
          height={315}
        />
      </Row>
    </AboutMeHolder>
  );
};

export default AboutMePage;
