import { useRef, useContext } from "react";
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
import { cvWidth } from "../../data/Pages/responsive/cvPage";
import ResponsiveContext from "../../contexts/responsiveContext/ResponsiveContext.contextCreator";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
  flex-direction: column;
`;

const CVHolder = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`;

const CVContent = styled.main<{ $width: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: ${(props) => props.$width}px;
`;

const CVPage = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const { t } = useTranslation();
  const { sections } = useSections();

  const onClick = () => {
    const rect = cvRef.current?.getBoundingClientRect();
    window.scrollTo({
      top: (rect?.top ?? 0) + window.scrollY - 100,
      behavior: "smooth",
    });
  };

  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  return (
    <ScrollContextProvider>
      <Holder>
        <PresentationText
          title={t("CV.presentation.title")}
          text={t("CV.presentation.text")}
          button={{
            content: t("CV.presentation.button"),
            onClick: onClick,
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
        <CVHolder ref={cvRef}>
          <InternalNavigation />
          <CVContent $width={cvWidth[currentWidthBreakPoint]}>
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
      </Holder>
    </ScrollContextProvider>
  );
};

export default CVPage;
