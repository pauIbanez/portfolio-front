import styled from "styled-components";
import CVSection from "../../CVSection/CVSection";
import RatedSection from "../../RatedSection/RatedSection";
import useSections from "../../../../hooks/useSections";
import ResponsiveContext from "../../../../contexts/responsiveContext/ResponsiveContext.contextCreator";
import { useContext } from "react";
import { textSizes } from "../../../../data/Pages/responsive/cvPage";

const Content = styled.div<{ $size: number }>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: ${(props) => props.$size}px;
`;

const ItemHolder = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;

const LanguagesSection = () => {
  const { sections } = useSections();
  const { currentWidthBreakPoint } = useContext(ResponsiveContext);

  return (
    <CVSection title={sections.languages.title}>
      <Content $size={textSizes[currentWidthBreakPoint].texts}>
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
