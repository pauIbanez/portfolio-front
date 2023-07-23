import { useRef, useContext } from "react";
import PresentationText from "../../components/PresentationText/PresentationText";
import ScrollContext from "../../contexts/scrollContext/ScrollContext.contextCreator";

const CVPage = () => {
  const { scrollToItem } = useContext(ScrollContext);
  const cvRef = useRef<HTMLDivElement>(null);

  return (
    <>
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
              <p>V</p>
            </>
          ),
          onClick: () => {
            scrollToItem("Example");
          },
        }}
      />
    </>
  );
};

export default CVPage;
