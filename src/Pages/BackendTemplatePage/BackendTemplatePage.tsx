import styled from "styled-components";
import BackToProjects from "../../components/projects/BackToProjects/BackToProjects";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import { useTranslation } from "react-i18next";
import Colors from "../../data/style/Colors";
import { Link } from "react-router-dom";
import ColoredText from "../../components/textComponents/ColoredText/ColoredText";

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

const ContentHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  background-color: white;
  color: ${Colors.textGray};
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1175px;
  padding: 40px 70px 40px 70px;

  a {
    text-decoration: none;
    font-size: 14px;
  }
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FeatureHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    color: ${Colors.textGray};
    font-size: 14px;
    margin: 0;
  }
`;

const Bullet = styled.div`
  height: 8px;
  width: 8px;
  background-color: ${Colors.textGray};
  border-radius: 5px;
`;

const BackendTemplatePage = () => {
  const { t } = useTranslation();

  const renderMainFeatures = [...Array(7)].map((_, index) => (
    <FeatureHolder>
      <Bullet />
      <p>{t(`BackendTemplate.sections.0.features.${index}`)}</p>
    </FeatureHolder>
  ));

  const renderUserFeatures = [...Array(5)].map((_, index) => (
    <FeatureHolder>
      <Bullet />
      <p>{t(`BackendTemplate.sections.1.features.${index}`)}</p>
    </FeatureHolder>
  ));

  const renderTestingFeatures = [...Array(3)].map((_, index) => (
    <FeatureHolder>
      <Bullet />
      <ColoredText text={t(`BackendTemplate.sections.2.features.${index}`)} />
    </FeatureHolder>
  ));

  return (
    <Holder>
      <BackToProjects />
      <TextHolder>
        <TiteledText
          title={t("BackendTemplate.title")}
          text={t("BackendTemplate.text")}
          styleObject={{ title: { heading: 2 } }}
        />
      </TextHolder>
      <ContentHolder>
        <Section>
          <TiteledText
            title={t("BackendTemplate.sections.0.title")}
            text={t("BackendTemplate.sections.0.text")}
            styleObject={{ title: { heading: 2 } }}
          />
          <FeatureList>{renderMainFeatures}</FeatureList>
        </Section>
        <Section>
          <TiteledText
            title={t("BackendTemplate.sections.1.title")}
            text={t("BackendTemplate.sections.1.text")}
            styleObject={{ title: { heading: 2 } }}
          />
          <FeatureList>{renderUserFeatures}</FeatureList>
          <TiteledText
            title={""}
            text={t("BackendTemplate.sections.1.text2")}
          />
        </Section>
        <Section>
          <TiteledText
            title={t("BackendTemplate.sections.2.title")}
            text={t("BackendTemplate.sections.2.text")}
            styleObject={{ title: { heading: 2 } }}
          />
          <FeatureList>{renderTestingFeatures}</FeatureList>
          <TiteledText
            title={""}
            text={t("BackendTemplate.sections.2.text2")}
          />
          <FeatureHolder>
            <Bullet />
            <p>{t("BackendTemplate.sections.2.feature2")}</p>
          </FeatureHolder>
        </Section>
        <Section>
          <TiteledText
            title={t("BackendTemplate.sections.3.title")}
            text={t("BackendTemplate.sections.3.text")}
            styleObject={{ title: { heading: 2 } }}
          />
          <Link
            to={"https://github.com/pauIbanez/Template-Backend-Typescript"}
            target="_blank"
          >
            {t("BackendTemplate.sections.3.link")}
          </Link>
        </Section>
      </ContentHolder>
    </Holder>
  );
};

export default BackendTemplatePage;
