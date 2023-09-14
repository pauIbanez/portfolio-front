import styled from "styled-components";
import TiteledText from "../../components/textComponents/TitledText/TiteledText";

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
  return (
    <Holder>
      <img
        src="/media/notFound/lost.png"
        alt="lost man"
        height={316}
        width={316}
      />
      <TiteledText
        title="404 Page Not Found"
        text="How did we end up here?"
        styleObject={{ textAlign: "center" }}
      />
    </Holder>
  );
};

export default NotFoundPage;
