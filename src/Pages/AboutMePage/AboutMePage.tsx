import styled from "styled-components";
import TiteledText from "../../components/TitledText/TiteledText";
import Colors from "../../data/style/Colors";
import { useTranslation } from "react-i18next";

const AboutMeHolder = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const SectionsHolder = styled.main`
  display: flex;
  justify-content: center;
  padding: 75px;
  width: 100%;
  gap: 150px;
  text-align: justify;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 700px;
  flex: 1;
`;

const FillerImage = styled.img`
  background-color: ${Colors.lightTextGray};
  border-radius: 15px;
`;

const AboutMePage = () => {
  const { t } = useTranslation();

  return (
    <AboutMeHolder>
      <SectionsHolder>
        <Column>
          <TiteledText
            title={t("AboutMe.textSections.0.title")}
            text={t("AboutMe.textSections.0.text")}
          />
          <FillerImage
            height={250}
            alt={t("AboutMe.images.0")}
            src="./media/aboutMe/code.png"
          />
          <TiteledText
            title={t("AboutMe.textSections.1.title")}
            text={t("AboutMe.textSections.1.text")}
          />
          <TiteledText
            title={t("AboutMe.textSections.2.title")}
            text={t("AboutMe.textSections.2.text")}
          />
        </Column>
        <Column>
          <TiteledText
            title={t("AboutMe.textSections.3.title")}
            text={t("AboutMe.textSections.3.text")}
          />
          <FillerImage
            height={420}
            alt={t("AboutMe.images.1")}
            src="./media/aboutMe/wtf.png"
          />
        </Column>
      </SectionsHolder>
    </AboutMeHolder>
  );
};

export default AboutMePage;
