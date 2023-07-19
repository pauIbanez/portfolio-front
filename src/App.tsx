import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={Pages.home.path} />} />
        <Route
          path={Pages.home.path}
          element={
            <>
              <div style={{ margin: 30, display: "flex", gap: 30 }}>
                <Button onClick={() => {}}>
                  <p>Normal button</p>
                </Button>
                <Button onClick={() => {}} reversed={true}>
                  <p>Reversed button</p>
                </Button>

                <Button onClick={() => {}} disabled={true}>
                  <p>Diabled button</p>
                </Button>

                <Button onClick={() => {}} active={true}>
                  <p>Active button</p>
                </Button>
              </div>

              <p style={{ height: 2000 }}>Home page</p>
            </>
          }
        />
        <Route path={Pages.aboutMe.path} element={<p>About me Page</p>} />
        <Route path={Pages.projects.path} element={<p>Projects Page</p>} />
        <Route path={Pages.project.path}>
          <Route path={Pages.project.id} element={<p>Project page</p>} />
        </Route>
        <Route path={Pages.curriculum.path} element={<p>CV Page</p>} />
        <Route path={Pages.contact.path} element={<p>Contact Page</p>} />
      </Routes>
    </Layout>
  );
}

export default App;
