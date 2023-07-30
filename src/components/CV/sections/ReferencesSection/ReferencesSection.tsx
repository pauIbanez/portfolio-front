import styled from "styled-components";
import CVSection from "../../CVSection/CVSection";
import Colors from "../../../../data/style/Colors";
import Letter from "../../Letter/Letter";
import useEffectOnce from "../../../../hooks/useEffectOnce";
import { useState } from "react";
import useSections from "../../../../hooks/useSections";

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
  const [renderItems, setRenderItems] = useState<JSX.Element[]>([]);

  const { sections } = useSections();

  useEffectOnce(() => {
    const allItems: JSX.Element[] = [];

    sections.references.items.forEach((item, index) => {
      allItems.push(<Letter item={item} key={item.name} />);
      if (index !== sections.references.items.length - 1) {
        allItems.push(<Line key={item.name + "Line"} data-testid="line" />);
      }
    });

    setRenderItems(allItems);
  });

  return (
    <CVSection title={sections.references.title}>
      <Content>{renderItems}</Content>
    </CVSection>
  );
};

export default ReferencesSection;
