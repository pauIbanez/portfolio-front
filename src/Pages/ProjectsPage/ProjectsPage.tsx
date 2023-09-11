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
    </Holder>
  );
};

export default ProjectsPage;
