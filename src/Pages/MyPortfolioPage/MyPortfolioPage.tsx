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
            title={"Project management"}
            text={
              "In order to keep me organized, I've used varius task management and design tools. Other than the obvious version control, git. \n \n For this project I've used <&>GitHub<&> for the version control hosting, <&>Monday<&>, a task management tool and <&>Figma<&> for the website design. Check out these relevant links for an insignt on my project management while building this website."
            }
            styleObject={{ title: { heading: 4 } }}
          />
          <LinkSectionHolder>
            <LinkSection>
              GitHub:
              <FeatureHolder>
                <Bullet />
                <Link
                  to={"https://github.com/pauIbanez/portfolio-front"}
                  target="_blank"
                >
                  Front-End
                </Link>
              </FeatureHolder>
              <FeatureHolder>
                <Bullet />
                <Link
                  to={"https://github.com/pauIbanez/portfolio-back"}
                  target="_blank"
                >
                  Back-End
                </Link>
              </FeatureHolder>
            </LinkSection>
            <LinkSection>
              My monday boards:
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://view.monday.com/4819854154-c3f4ff413160005d2c861c580bc70389"
                  }
                  target="_blank"
                >
                  Project management
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
                  Font-End
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
                  Back-End
                </Link>
              </FeatureHolder>
            </LinkSection>
            <LinkSection>
              Figma:
              <FeatureHolder>
                <Bullet />
                <Link
                  to={
                    "https://www.figma.com/file/ikQCioogrXS3Q2Xu7qpwtZ/Portfolio?type=design&node-id=0%3A1&mode=design&t=IP2djJPdYu8UQsjB-1"
                  }
                  target="_blank"
                >
                  Figma design
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
                  Figma prototype
                </Link>
              </FeatureHolder>
            </LinkSection>
          </LinkSectionHolder>
        </Section>
        <Section>
          <TiteledText
            title={"Enviroments"}
            text={
              "This website has been worked on using the react-embeded webpack solution for the front and using nodemon for the back.\n My production enviroment has been implemented using <&>Netlify<&>'s hosting service for the front and <&>Render<&> for the back."
            }
            styleObject={{ title: { heading: 4 } }}
          />
          <LinkSection>
            Enviroment providers:
            <FeatureHolder>
              <Bullet />
              <Link to={"https://www.netlify.com/"} target="_blank">
                Netlify Front-End
              </Link>
            </FeatureHolder>
            <FeatureHolder>
              <Bullet />
              <Link to={"https://render.com/"} target="_blank">
                Render Back-End
              </Link>
            </FeatureHolder>
          </LinkSection>
          <LinkSection>
            <TiteledText
              title={""}
              text={
                "I've also used both Netlify's actions aswell as my own <&>Audit<&> action which performs some checks before allowing me to push to production. The most important chekcs it perofrms are the ESLint validation (code formating) and the Testing validation which ensures all tests pass. \n \n Check the workflow out:"
              }
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
                Audit action
              </Link>
            </FeatureHolder>
          </LinkSection>
        </Section>
        <Section>
          <TiteledText
            title={"Design"}
            text={
              "This website is almost completley of my own design, all except my home page, that was heavely inspired by a posted template design from a UX/UI designer. Unfortunatley I can't find the original image. If it's your design please contact me so I can add the propper credits!"
            }
            styleObject={{ title: { heading: 4 } }}
          />
        </Section>
        <Section>
          <TiteledText
            title={"Languages"}
            text={
              "I've implemented i18n with i18n-react to be able to present my portfolio en english and spanish, this was my 2nd time ever using i18n, with the first one being at Blikk, using it with Flutter, so kind of the first time. I've learned that It's super easy to use, but translating 800 different texts takes a lot of time 😩. \n \n You can find the language toggle on the top left in case you missed it."
            }
            styleObject={{ title: { heading: 4 } }}
          />
        </Section>
        <Section>
          <TiteledText
            title={"Coding"}
            text={
              "As you've seen in the project tags, this website is built with react and typescript, my favorite platforms for constructiong web elements! I've focused on writing clean and mantainable code, adhering to a DRY mentality, but not going so obverboard that I restrict myself on design changes in the future. \n I strongly invite you to visit the GitHub page linked above and check out some of my code. \n \n This time, for the back-end, I've used my own template for the server base, even though I don't need any users for this website it was still easier to use that template and strip the user parts than to construct a new server yet again!"
            }
          />
          <LinkSection>
            <TiteledText
              title={""}
              text={"You can find my emplate in the projects page or here:"}
            />
            <FeatureHolder>
              <Bullet />
              <Link to={"/project/backendTemplate"} target="_blank">
                Backend template
              </Link>
            </FeatureHolder>
          </LinkSection>
        </Section>
        <Section>
          <TiteledText
            title={"Testing"}
            text={
              "Since the very begining of the project I've been testing most of my code. Even though the <&>80% coverage<&> is standard I usually like to strive for that <&>100%<&>. Who does not get dopamine sseing all the geen 100's haha. Anyway, most of my code has been thurougly tested, but I have encountered some problemts, mostly regarding the scroling functionalities, because aparently <&>jest<&> and <&>testing-library<&> don't have scroll testing support yet, since they are node-based testing enviroments."
            }
            styleObject={{ title: { heading: 4 } }}
          />
          <TiteledText
            title={"SonarQube"}
            text={
              "I like to use SonarQube and Sonar Scanner as my static analizer to keep a more acturate track of my coverage, possible bugs or code smells. This is why I've included my sonar-project.properties file in the repo, allowing a propper implementation in any terminal in a cople clicks. Tis is my last analized summary:"
            }
            styleObject={{ title: { heading: 5, size: 16 }, gap: 5 }}
          />
          <ImageHolder>
            <img
              src="/media/portfolio/sonarQube.png"
              alt="SonarQube summary - 0 Bugs | 0 Code Smells | 0 Vulnerabilities | 0 Security Hotspots | 80.7% Coverage | 1.8% Duplications on 6 blocks"
              height={400}
              width={770}
            />
          </ImageHolder>
          <TiteledText
            title={"Jest and Testing-library"}
            text={
              "I use jest with the react/testing-library when testing my react apps. I find it easy to use and super complete for what it was designed to do. Here are my latests jest coverage metrics by file:"
            }
            styleObject={{ title: { heading: 5, size: 16 }, gap: 5 }}
          />
          <ImageHolder>
            <img
              src="/media/portfolio/test.png"
              alt="jest coverage terminal"
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
