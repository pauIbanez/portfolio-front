import { useRef } from "react";
import PresentationText from "../../components/PresentationText/PresentationText";
import styled from "styled-components";
import CVListSection from "../../components/CV/CVListSection/CVListSection";
import ScrollContextProvider from "../../contexts/scrollContext/ScrollContextProvider";

const Holder = styled.div`
  display: flex;
  justify-content: center;
  padding: 150px 75px 100px 75px;
`;

const Content = styled.div`
  max-width: 1775px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;
`;

const CVHolder = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 50px;
  width: 100%;
  max-width: 1175px;
`;

const CVPage = () => {
  const cvRef = useRef<HTMLDivElement>(null);

  const onClick = () => cvRef.current?.scrollIntoView({ behavior: "smooth" });

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
            <CVListSection title="Education" items={[]} />
          </CVHolder>
        </Content>
      </Holder>
    </ScrollContextProvider>
  );
};

export default CVPage;
