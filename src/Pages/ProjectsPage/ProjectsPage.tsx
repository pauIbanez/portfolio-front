import styled from "styled-components";
import PresentationText from "../../components/textComponents/PresentationText/PresentationText";
import { useTranslation } from "react-i18next";
import { useRef, useContext } from "react";
import ProjectCards from "../../data/projects/Projects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import ScrollRestorationContext from "../../contexts/ScrollRestoration/ScrollRestoration.contextCreator";
import useEffectOnce from "../../hooks/useEffectOnce";
import { columns } from "../../data/Pages/responsive/projectsPage";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 30px;
  margin: 0;
  color: black;
`;

const ProjectsHolder = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 440px);
  grid-template-rows: 300px 300px;
  gap: 50px;
`;

const ProjectsPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollToMain } = useContext(ScrollRestorationContext);

  const onClick = (auto?: boolean) => {
    const rect = projectsRef.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top as number) + window.scrollY - 100,
      behavior: auto ? "auto" : "smooth",
    });
  };

  useEffectOnce(() => {
    if (scrollToMain) {
      onClick(true);
    }
  });

  const navigate = useNavigate();

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  const renderProjects = ProjectCards.map((projectCard) => (
    <ProjectCard
      cardInfo={projectCard}
      key={projectCard.name}
      onClick={() => {
        if (projectCard.externalLink) {
          window.open(projectCard.link, "_blank");
          return;
        }
        navigate(projectCard.link);
      }}
    />
  ));

  return (
    <Holder>
      <PresentationText
        title={t("Projects.presentation.title")}
        text={t("Projects.presentation.text")}
        button={{
          content: t("Projects.presentation.button"),
          onClick: () => {
            onClick();
          },
          buttonProps: {
            icon: "chevron.svg",
            hoverIcon: "chevron_main.svg",
            iconRotation: 90,
            styleObject: {
              fontSize: 20,
            },
          },
        }}
      />

      <Content ref={projectsRef}>
        <Title>My Projects</Title>
        <ProjectsHolder columns={columns[currentWidthBreakPoint]}>
          {renderProjects}
        </ProjectsHolder>
      </Content>
    </Holder>
  );
};

export default ProjectsPage;
