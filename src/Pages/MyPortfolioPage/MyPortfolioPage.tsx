import styled from "styled-components";
import BackToProjects from "../../components/projects/BackToProjects/BackToProjects";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import { useTranslation } from "react-i18next";
import Colors from "../../data/style/Colors";
import { Link } from "react-router-dom";

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
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
  a {
    text-decoration: none;
    font-size: inherit;
    color: ${Colors.main};
  }
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

const LinkSectionHolder = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ImageHolder = styled.div`
  display: flex;
  justify-content: center;

  img {
    object-fit: contain;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1),
      -4px -4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;

    border: 2px solid ${Colors.disabledMain};
  }
`;

const MyPortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <Holder>
      <BackToProjects />
      <TextHolder>
        <TiteledText
          title={t("MyPortfolio.title")}
          text={t("MyPortfolio.text")}
          styleObject={{ title: { heading: 2 } }}
        />
      </TextHolder>
      <ContentHolder>
        <Section>
          <TiteledText
            title={t("MyPortfolio.management.title")}
            text={t("MyPortfolio.management.text")}
            styleObject={{ title: { heading: 4 } }}
          />
          <LinkSectionHolder>
            <LinkSection>
              {t("MyPortfolio.management.linkSections.0.name")}
              <FeatureHolder>
                <Bullet />
                <Link
                  to={"https://github.com/pauIbanez/portfolio-front"}
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.0.links.0")}
                </Link>
              </FeatureHolder>
              <FeatureHolder>
                <Bullet />
                <Link
                  to={"https://github.com/pauIbanez/portfolio-back"}
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.0.links.1")}
                </Link>
              </FeatureHolder>
            </LinkSection>
            <LinkSection>
              {t("MyPortfolio.management.linkSections.1.name")}
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://view.monday.com/4819854154-c3f4ff413160005d2c861c580bc70389"
                  }
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.1.links.0")}
                </Link>
              </FeatureHolder>
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://view.monday.com/4820666052-611acf51d50bf2c73ace8ea3d65043e1"
                  }
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.1.links.1")}
                </Link>
              </FeatureHolder>
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://view.monday.com/5136835243-4770e8501c1e577a5e7492833157d56b"
                  }
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.1.links.2")}
                </Link>
              </FeatureHolder>
            </LinkSection>
            <LinkSection>
              {t("MyPortfolio.management.linkSections.2.name")}
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://www.figma.com/file/ikQCioogrXS3Q2Xu7qpwtZ/Portfolio?type=design&node-id=0%3A1&mode=design&t=IP2djJPdYu8UQsjB-1"
                  }
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.2.links.0")}
                </Link>
              </FeatureHolder>
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://www.figma.com/proto/ikQCioogrXS3Q2Xu7qpwtZ/Portfolio?type=design&node-id=21-200&t=RWb284i9FEtTQ2xw-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=21%3A200&mode=design"
                  }
                  target="_blank"
                >
                  {t("MyPortfolio.management.linkSections.2.links.1")}
                </Link>
              </FeatureHolder>
            </LinkSection>
          </LinkSectionHolder>
        </Section>
        <Section>
          <TiteledText
            title={t("MyPortfolio.enviroments.title")}
            text={t("MyPortfolio.enviroments.text")}
            styleObject={{ title: { heading: 4 } }}
          />
          <LinkSection>
            {t("MyPortfolio.enviroments.linkSections.0.name")}
            <FeatureHolder>
              <Bullet />
              <Link to={"https://www.netlify.com/"} target="_blank">
                {t("MyPortfolio.enviroments.linkSections.0.links.0")}
              </Link>
            </FeatureHolder>
            <FeatureHolder>
              <Bullet />
              <Link to={"https://render.com/"} target="_blank">
                {t("MyPortfolio.enviroments.linkSections.0.links.1")}
              </Link>
            </FeatureHolder>
          </LinkSection>
          <LinkSection>
            <TiteledText
              title={""}
              text={t("MyPortfolio.enviroments.text2")}
              styleObject={{ title: { heading: 4 } }}
            />
            <FeatureHolder>
              <Bullet />
              <Link
                to={
                  "https://github.com/pauIbanez/portfolio-front/blob/master/.github/workflows/audit.yml"
                }
                target="_blank"
              >
                {t("MyPortfolio.enviroments.linkSections.1.links.0")}
              </Link>
            </FeatureHolder>
          </LinkSection>
        </Section>
        <Section>
          <TiteledText
            title={t("MyPortfolio.design.title")}
            text={t("MyPortfolio.design.text")}
            styleObject={{ title: { heading: 4 } }}
          />
        </Section>
        <Section>
          <TiteledText
            title={t("MyPortfolio.languages.title")}
            text={t("MyPortfolio.languages.text")}
            styleObject={{ title: { heading: 4 } }}
          />
        </Section>
        <Section>
          <TiteledText
            title={t("MyPortfolio.coding.title")}
            text={t("MyPortfolio.coding.text")}
            styleObject={{ title: { heading: 4 } }}
          />
          <LinkSection>
            <TiteledText
              title={""}
              text={t("MyPortfolio.coding.linkSection.name")}
            />
            <FeatureHolder>
              <Bullet />
              <Link to={"/project/backendTemplate"} target="_blank">
                {t("MyPortfolio.coding.linkSection.link")}
              </Link>
            </FeatureHolder>
          </LinkSection>
        </Section>
        <Section>
          <TiteledText
            title={t("MyPortfolio.testing.title")}
            text={t("MyPortfolio.testing.text")}
            styleObject={{ title: { heading: 4 } }}
          />
          <TiteledText
            title={t("MyPortfolio.testing.sections.0.name")}
            text={t("MyPortfolio.testing.sections.0.text")}
            styleObject={{ title: { heading: 5, size: 16 }, gap: 5 }}
          />
          <ImageHolder>
            <img
              src="/media/portfolio/sonarQube.png"
              alt={t("MyPortfolio.testing.sections.0.image")}
              height={400}
              width={770}
            />
          </ImageHolder>
          <TiteledText
            title={t("MyPortfolio.testing.sections.1.name")}
            text={t("MyPortfolio.testing.sections.1.text")}
            styleObject={{ title: { heading: 5, size: 16 }, gap: 5 }}
          />
          <ImageHolder>
            <img
              src="/media/portfolio/test.png"
              alt={t("MyPortfolio.testing.sections.1.image")}
              height={2193}
              width={770}
            />
          </ImageHolder>
        </Section>
      </ContentHolder>
    </Holder>
  );
};

export default MyPortfolioPage;
