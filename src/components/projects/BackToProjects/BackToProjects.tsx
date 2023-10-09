import styled from "styled-components";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ScrollRestorationContext from "../../../contexts/ScrollRestoration/ScrollRestoration.contextCreator";
import { useTranslation } from "react-i18next";

const Holder = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
`;

const BackToProjects = () => {
  const navigate = useNavigate();
  const { setScrollToMain } = useContext(ScrollRestorationContext);
  const { t } = useTranslation();

  const onClick = () => {
    setScrollToMain();
    navigate("/projects");
  };
  return (
    <Holder>
      <Button
        reversed={true}
        onClick={onClick}
        styleObject={{
          fontSize: 15,
          height: 40,
          radius: 15,
        }}
      >
        {t("Projects.backToProjects")}
      </Button>
    </Holder>
  );
};

export default BackToProjects;
