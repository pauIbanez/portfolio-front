import styled from "styled-components";
import CVSection from "../../CVSection/CVSection";
import { useState, useEffect, useRef } from "react";
import Button from "../../../Button/Button";
import Colors from "../../../../data/style/Colors";
import RatedSection from "../../RatedSection/RatedSection";
import ColoredText from "../../../ColoredText/ColoredText";
import useSections from "../../../../hooks/useSections";

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`;

const PageCounter = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${Colors.textGray};
  gap: 5px;
  p:last-child {
    display: flex;
    justify-content: flex-end;
    width: 26px;
  }
`;

const buttonStyle = {
  height: 40,
  width: 156,
  radius: 10,
};

const PageView = styled.div`
  display: flex;
  gap: 200px;
  padding: 20px 0 50px 0;

  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Page = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 560px;
`;

const PageTitle = styled.h4`
  margin: 0;
  flex: 1;
  font-weight: 700;
  font-size: 18px;
  color: black;
`;

const SectionsHolder = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  height: 520px;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const InSectionHolder = styled.div`
  background-color: ${Colors.backgroundGray};
  border-radius: 15px;
  padding: 15px;
  width: 100%;
  flex: 1;
`;

const InSectionText = styled.p`
  font-size: 14px;
`;

const TechnologiesSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageViewRef = useRef<HTMLDivElement>(null);
  const { sections } = useSections();

  useEffect(() => {
    switch (currentPage) {
      case 0:
        pageViewRef.current?.scrollTo({
          left: 0,
          behavior: "smooth",
        });
        break;

      case 1:
        pageViewRef.current?.scrollTo({
          left: pageViewRef.current.getBoundingClientRect().right,
          behavior: "smooth",
        });
        break;
    }
  }, [currentPage]);

  return (
    <CVSection
      title={sections.technologies.title}
      name={sections.technologies.name}
    >
      <>
        <SectionContent>
          <p>{sections.technologies.text}</p>
        </SectionContent>
        <PageView ref={pageViewRef}>
          <Page>
            <PageTitle>
              {sections.technologies.pages.technologies.name}
            </PageTitle>
            <SectionsHolder>
              {sections.technologies.pages.technologies.sections.map(
                (column, index) => (
                  <Column key={index}>
                    {column.map((section) => (
                      <RatedSection
                        key={section.title}
                        title={section.title}
                        items={section.items}
                        grow={true}
                      />
                    ))}
                  </Column>
                )
              )}
            </SectionsHolder>
          </Page>
          <Page>
            <PageTitle>{sections.technologies.pages.skills.name}</PageTitle>
            <SectionsHolder>
              {sections.technologies.pages.skills.sections.map(
                (column, index) => (
                  <Column key={index}>
                    {column.map((section) => (
                      <InSectionHolder key={section.title}>
                        <ColoredText
                          text={section.title}
                          styleData={{ size: "16px", weight: 700 }}
                        />
                        <div style={{ padding: 10 }}>
                          <InSectionText>{section.text}</InSectionText>
                        </div>
                      </InSectionHolder>
                    ))}
                  </Column>
                )
              )}
            </SectionsHolder>
          </Page>
        </PageView>
        <ButtonHolder>
          <Button
            disabled={currentPage === 0}
            onClick={() => setCurrentPage(0)}
            style={buttonStyle}
          >
            <ButtonText>{sections.technologies.pages.controls.prev}</ButtonText>
          </Button>
          <PageCounter>
            <p>{sections.technologies.pages.controls.page}</p>
            <p>{`${currentPage + 1}/2`}</p>
          </PageCounter>
          <Button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
            style={buttonStyle}
          >
            <ButtonText>{sections.technologies.pages.controls.next}</ButtonText>
          </Button>
        </ButtonHolder>
      </>
    </CVSection>
  );
};

export default TechnologiesSection;
