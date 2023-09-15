import styled from "styled-components";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const Holder = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

const BackToProjects = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/projects");
  };
  return (
    <Holder>
      <Button reversed={true} onClick={onClick}>
        Back to projects
      </Button>
    </Holder>
  );
};

export default BackToProjects;
