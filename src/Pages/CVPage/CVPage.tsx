import { useRef } from "react";
import PresentationText from "../../components/textComponents/PresentationText/PresentationText";
import styled from "styled-components";
import CVListSection from "../../components/CV/CVListSection/CVListSection";
import ScrollContextProvider from "../../contexts/scrollContext/ScrollContextProvider";
import InternalNavigation from "../../components/CV/InternalNavigation/InternalNavigation";
import TechnologiesSection from "../../components/CV/sections/TechnologiesSection/TechnologiesSection";
import DownloadSection from "../../components/CV/sections/DownloadSection/DownloadSection";
import LanguagesSection from "../../components/CV/sections/LanguagesSection/LanguagesSection";
import ReferencesSection from "../../components/CV/sections/ReferencesSection/ReferencesSection";
import { ErrorrContextProvider } from "react-errorr";
import { useTranslation } from "react-i18next";
import useSections from "../../hooks/useSections";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
`;

const Content = styled.div`
  max-width: 1775px;
  display: flex;
  flex-direction: column;
`;

const CVContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1175px;
`;
const CVHolder = styled.div`
  display: flex;
  gap: 50px;
  padding: 0 50px;
`;

const CVPage = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const { sections } = useSections();

  const onClick = () => {
    const rect = cvRef.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top || 0) + window.scrollY - 100,
      behavior: "smooth",
    });
  };

  return (
    <ScrollContextProvider>
      <Holder>
        <Content>
          <PresentationText
            title={t("CV.presentation.title")}
            text={t("CV.presentation.text")}
            button={{
              content: (
                <>
                  <p>{t("CV.presentation.button")}</p>
                </>
              ),
              onClick: onClick,
            }}
          />
          <CVHolder ref={cvRef}>
            <InternalNavigation />
            <CVContent>
              <CVListSection
                title={sections.education.title}
                items={sections.education.items}
              />
              <CVListSection
                title={t(sections.experience.title)}
                items={sections.experience.items}
              />
              <LanguagesSection />
              <TechnologiesSection />
              <ReferencesSection />
              <ErrorrContextProvider
                options={{
                  activeTime: 300,
                }}
              >
                <DownloadSection />
              </ErrorrContextProvider>
            </CVContent>
          </CVHolder>
        </Content>
      </Holder>
    </ScrollContextProvider>
  );
};

export default CVPage;
