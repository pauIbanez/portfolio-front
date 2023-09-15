import styled from "styled-components";
import BackToProjects from "../../components/projects/BackToProjects/BackToProjects";

const Holder = styled.main`
  display: flex;
  justify-content: center;
  padding: 0 75px 200px 75px;
  flex-direction: column;
`;

const MinigamesPage = () => {
  return (
    <Holder>
      <BackToProjects />
    </Holder>
  );
};

export default MinigamesPage;
