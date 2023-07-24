import styled from "styled-components";
import sections from "../../../../data/cv/sections";
import CVSection from "../../CVSection/CVSection";
import Colors from "../../../../data/style/Colors";
import Letter from "../../Letter/Letter";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 15px;
`;

const Line = styled.div`
  background-color: ${Colors.disabledMain};
  height: 2px;
`;

const ReferencesSection = () => {
  return (
    <CVSection title={sections.references.title}>
      <Content>
        {sections.references.items.map((item, index) => (
          <>
            <Letter item={item} key={index} />
            {index !== sections.references.items.length - 1 && (
              <Line key={index + "Line"} />
            )}
          </>
        ))}
      </Content>
    </CVSection>
  );
};

export default ReferencesSection;
