import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage";
import CVListSection from "./components/CV/CVListSection";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={Pages.home.path} />} />
        <Route path={Pages.home.path} element={<HomePage />} />
        <Route path={Pages.aboutMe.path} element={<p>About me Page</p>} />
        <Route path={Pages.projects.path} element={<p>Projects Page</p>} />
        <Route path={Pages.project.path}>
          <Route path={Pages.project.id} element={<p>Project page</p>} />
        </Route>
        <Route
          path={Pages.curriculum.path}
          element={
            <div style={{ margin: 30 }}>
              {" "}
              <CVListSection
                title="Example"
                items={[
                  {
                    name: "ISDI Coders Bootcamp",
                    location: "Barcelona, Spain",
                    concept: "Bootcamp in Full-Stack Web Development",
                    dates: {
                      startDate: "Jan 2022",
                      endDate: "Mar 2022",
                    },
                    image: "ISDI_Coders.jpg",
                    textSections: [
                      {
                        title: "What I learned",
                        text: "During my tenure at the ISDI Coders bootcamp, I had the opportunity to work extensively with some of my favorite technologies, including React, Node, Express, MongoDB, and Git. The program played a crucial role in deepening my understanding of JavaScript, enabling me to enhance my coding efficiency and sharpen my troubleshooting skills.",
                      },
                      {
                        title: "Projects",
                        text: "Throughout my academic journey, I successfully completed a diverse range of projects, showcasing my expertise in various areas of software development. These projects encompassed front-end, back-end, and full-stack development, involving both native applications and framework-like apps.",
                      },
                    ],
                  },
                  {
                    name: "Jesuïtes El Clot",
                    location: "Barcelona, Spain",
                    concept:
                      "Professional Formation in Computer Systems and Networks",
                    dates: {
                      startDate: "Sep 2017",
                      endDate: "Jun 2019",
                    },
                    image: "jesuites.png",
                    textSections: [
                      {
                        title: "What I learned",
                        text: "In this course I learned the ins and outs of PCs and Server Systems. I built both hardware and software, from assembling a PC to creating an HTTP Apache server. We did a lot of system virtualization and we worked on HTTP, Static and SMTP servers. We also learned to correctly use the consoles in different Operating Systems as well as to create scripts for task automation with them.",
                      },
                      {
                        title: "Remarks",
                        text: "In this course, we did not have any programming classes, but I already loved it, so I spent a lot of free time in them trying out stuff. It’s while coursing in here that I was developing mini-games in unity.",
                      },
                    ],
                  },
                ]}
              />
            </div>
          }
        />
        <Route path={Pages.contact.path} element={<p>Contact Page</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
