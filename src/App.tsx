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
                    name: "asdasdqwse",
                    concept: "asdasd",
                    dates: {
                      startDate: "JAN 2020",
                      endDate: "SEP 2020",
                    },
                    image: "",
                    textSections: [
                      {
                        text: "·a",
                        title: "asda",
                      },
                    ],
                  },
                  {
                    name: "asdasd",
                    concept: "asdasd",
                    dates: {
                      startDate: "JAN 2020",
                      endDate: "SEP 2020",
                    },
                    image: "",
                    textSections: [
                      {
                        text: "·a",
                        title: "asda",
                      },
                    ],
                  },
                  {
                    name: "assd",
                    concept: "asdasd",
                    dates: {
                      startDate: "JAN 2020",
                      endDate: "SEP 2020",
                    },
                    image: "",
                    textSections: [
                      {
                        text: "·a",
                        title: "asda",
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
