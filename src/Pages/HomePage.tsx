import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pages from "../data/Pages/Pages";
import Button from "../components/Button/Button";
import Colors from "../data/style/Colors";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Holder = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 250px;
  height: fit-content;
  margin: 100px 0 100px 0;
`;

const InfoSection = styled.section`
  margin-top: 67px;
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 637px;
  width: 637px;

  p {
    margin: 0;
  }
`;

const AccentText = styled.p`
  color: ${Colors.main};
  font-size: 18px;
`;

const MyName = styled.h2`
  margin: 0;

  font-size: 75px;
  color: black;
  font-weight: 700;
  width: 100%;
`;

const TextSection = styled.div`
  margin: 30px 0 85px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 16px;
  color: ${Colors.textGray};
`;

const BackgroundOrb = styled.img`
  height: 260px;
  width: 260px;
  position: absolute;
  right: 6px;
  top: -25px;
  z-index: -1;
`;

const PictureSection = styled.div`
  height: 668px;
  width: 702px;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    &:first-child {
      width: 548px;
      height: 506px;
    }

    &:last-child {
      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`;

const BackgroundTriangles = styled.img`
  position: absolute;
  z-index: -2;

  top: 0;
  left: 50%;
  transform: translate(-50%, -12%);
`;

const HomePage = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate(Pages.projects.path);
  };
  return (
    <Container>
      <Holder>
        <InfoSection>
          <BackgroundOrb src="/media/home/background_circle.svg" />
          <AccentText>GET TO KNOW ME!</AccentText>
          <MyName>Hello! I'm Pau Ibáñez</MyName>
          <TextSection>
            <p>
              This website has everything you need to know about me and my work.
              I invite yo to explore it while also considering it's impact as a
              representation of my portfolio.
            </p>
            <p>
              I look forward to the possibility of connecting with you and
              collaborating on exciting projects.
            </p>
          </TextSection>
          <Button
            onClick={goToProjects}
            style={{
              height: 70,
              width: 240,
              radius: 20,
            }}
          >
            My Portfolio -
          </Button>
        </InfoSection>
        <PictureSection>
          <img src="/media/home/me.svg" alt="Pau Ibáñez" />
          <img src="/media/home/mr_background.svg" alt="Background" />
        </PictureSection>
      </Holder>
      <BackgroundTriangles
        alt="Background"
        src="/media/home/background_triangles.svg"
      />
    </Container>
  );
};

export default HomePage;
