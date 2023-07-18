import styled from "styled-components";
import ColoredText from "../ColoredText/ColoredText";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import languages from "../../data/languages/languages";

const Container = styled.header`
  width: 100%;
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: white;

  h1 {
    font-size: 48px;
    font-weight: 800;
    color: black;
  }
`;

interface Props {
  title: string | string[];
}

const PageTitle = ({ title }: Props) => {
  const [lang, setLang] = useState("en");

  const { i18n } = useTranslation();

  const text =
    typeof title === "string" ? (
      <h1>{title}</h1>
    ) : (
      <ColoredText textArray={title} styleData={{ isTitle: true }} />
    );

  return (
    <Container>
      {text}{" "}
      <button
        onClick={() => {
          const lng = languages[lang === "en" ? 1 : 0];
          i18n.changeLanguage(lng.code);
          setLang(lng.code);
          console.log(lng.code);
        }}
      >
        Change lange
      </button>{" "}
    </Container>
  );
};

export default PageTitle;
