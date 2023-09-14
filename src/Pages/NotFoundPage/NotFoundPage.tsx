import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";
import { useTranslation } from "react-i18next";

const Holder = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 575px;
  gap: 30px;
`;

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Holder>
      <img
        src="/media/notFound/lost.png"
        alt={t("NotFound.image")}
        height={316}
        width={316}
      />
      <TiteledText
        title={t("NotFound.title")}
        text={t("NotFound.text")}
        styleObject={{ textAlign: "center" }}
      />
    </Holder>
  );
};

export default NotFoundPage;
