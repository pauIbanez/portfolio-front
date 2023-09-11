import styled from "styled-components";
import PresentationText from "../../components/textComponents/PresentationText/PresentationText";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
  flex-direction: column;
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
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
`;

const ProjectsPage = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const onClick = () => {
    const rect = projectsRef.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top || 0) + window.scrollY - 100,
      behavior: "smooth",
    });
  };

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
          onClick: onClick,
        }}
      />

      <Content ref={projectsRef}>
        <Title>My Projects</Title>
        <ProjectsHolder></ProjectsHolder>
      </Content>
    </Holder>
  );
};

export default ProjectsPage;
