import styled from "styled-components";
import CVSection from "../../CVSection/CVSection";
import RatedSection from "../../RatedSection/RatedSection";
import useSections from "../../../../hooks/useSections";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ItemHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const LanguagesSection = () => {
  const { sections } = useSections();
  return (
    <CVSection title={sections.languages.title}>
      <Content>
        <p>{sections.languages.text}</p>
        <ItemHolder>
          {sections.languages.sections.map((section) => (
            <RatedSection
              key={section.title}
              title={section.title}
              items={section.items}
              notRated={section.notRated}
            />
          ))}
        </ItemHolder>
      </Content>
    </CVSection>
  );
};

export default LanguagesSection;
