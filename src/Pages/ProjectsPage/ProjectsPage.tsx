import styled from "styled-components";
import PresentationText from "../../components/textComponents/PresentationText/PresentationText";
import { useTranslation } from "react-i18next";
import { useRef, useContext } from "react";
import ProjectCards from "../../data/projects/Projects";
import ProjectCard from "../../components/projects/ProjectCard/ProjectCard";
import { useNavigate } from "react-router-dom";
import ScrollRestorationContext from "../../contexts/ScrollRestoration/ScrollRestoration.contextCreator";
import useEffectOnce from "../../hooks/useEffectOnce";

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

const ProjectsHolder = styled.div`
  display: grid;
  grid-template-columns: 440px 440px 440px;
  grid-template-rows: 300px 300px;
  gap: 50px;
`;

const ProjectsPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const { scrollToMain } = useContext(ScrollRestorationContext);

  const onClick = (auto?: boolean) => {
    const rect = projectsRef.current?.getBoundingClientRect();
    console.log(auto);
    window.scrollTo({
      top: (rect?.top || 0) + window.scrollY - 100,
      behavior: auto ? "auto" : "smooth",
    });
  };

  useEffectOnce(() => {
    if (scrollToMain) {
      onClick(true);
    }
  });

  const navigate = useNavigate();

  const renderProjects = ProjectCards.map((projectCard) => (
    <ProjectCard
      cardInfo={projectCard}
      key={projectCard.name}
      onClick={() => {
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
          content: (
            <>
              <p>{t("Projects.presentation.button")}</p>
            </>
          ),
          onClick: () => {
            onClick();
          },
        }}
      />

      <Content ref={projectsRef}>
        <Title>My Projects</Title>
        <ProjectsHolder>{renderProjects}</ProjectsHolder>
      </Content>
    </Holder>
  );
};

export default ProjectsPage;
