import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/Layout/Layout";
import ColoredText from "./components/ColoredText/ColoredText";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={Pages.home.path} />} />
        <Route
          path={Pages.home.path}
          element={<p style={{ height: 2000 }}>Home page</p>}
        />
        <Route
          path={Pages.aboutMe.path}
          element={<ColoredText textArray={["About ", "me ", "page"]} />}
        />
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
