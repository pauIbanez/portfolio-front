import { useRef } from "react";
import PresentationText from "../../components/PresentationText/PresentationText";
import styled from "styled-components";
import CVListSection from "../../components/CV/CVListSection/CVListSection";
import ScrollContextProvider from "../../contexts/scrollContext/ScrollContextProvider";
import sections from "../../data/cv/sections";
import InternalNavigation from "../../components/CV/InternalNavigation/InternalNavigation";
import CVSection from "../../components/CV/CVSection/CVSection";
import RatedSection from "../../components/CV/RatedSection/RatedSection";
import TechnologiesSection from "../../components/CV/sections/TechnologiesSection/TechnologiesSection";
import Letter from "../../components/CV/Letter/Letter";
import Colors from "../../data/style/Colors";
import DownloadSection from "../../components/CV/sections/DownloadSection/DownloadSection";

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

const LanguagesSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const LanguageItemHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const RecommendationSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 15px;
`;

const Line = styled.div`
  background-color: ${Colors.disabledMain};
  height: 2px;
`;

const CVPage = () => {
  const cvRef = useRef<HTMLDivElement>(null);

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
            title="<&>My<&> Curriculum Vitae"
            texts={[
              "Take a look at my curriculum, you can explore my <&>educational background<&> and <&>professional experience<&>. Furthermore, I have dedicated a section to outline the various <&>technologies and skills<&> I’ve worked with and developed over the years, along with my <&>proficiency level<&> in each of them.",
              "To ensure your <&>convenience<&>, I have also created a <&>compact version of my CV in PDF format<&>, which you can easily <&>download<&>. The download options can be found at the <&>bottom of this page<&>.",
            ]}
            button={{
              content: (
                <>
                  <p>Go to CV</p>
                  <p>v</p>
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
                title={sections.experience.title}
                items={sections.experience.items}
              />
              <CVSection title={sections.languages.title}>
                <LanguagesSectionContent>
                  <p>{sections.languages.text}</p>
                  <LanguageItemHolder>
                    {sections.languages.sections.map((section) => (
                      <RatedSection
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        notRated={section.notRated}
                      />
                    ))}
                  </LanguageItemHolder>
                </LanguagesSectionContent>
              </CVSection>
              <TechnologiesSection />
              <CVSection title={sections.references.title}>
                <RecommendationSectionContent>
                  {sections.references.items.map((item, index) => (
                    <>
                      <Letter item={item} key={index} />
                      {index !== sections.references.items.length - 1 && (
                        <Line key={index + "Line"} />
                      )}
                    </>
                  ))}
                </RecommendationSectionContent>
              </CVSection>
              <DownloadSection />
            </CVContent>
          </CVHolder>
        </Content>
      </Holder>
    </ScrollContextProvider>
  );
};

export default CVPage;
