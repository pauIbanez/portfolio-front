import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/header/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import CVPage from "./Pages/CVPage/CVPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AboutMePage from "./Pages/AboutMePage/AboutMePage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import MinigamesPage from "./Pages/MinigamesPage/MinigamesPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={Pages.home.path} />} />
        <Route path={Pages.home.path} element={<HomePage />} />
        <Route path={Pages.aboutMe.path} element={<AboutMePage />} />
        <Route path={Pages.projects.path} element={<ProjectsPage />} />
        <Route path={"/project"}>
          <Route path={Pages.minigames.path} element={<MinigamesPage />} />
          <Route path={Pages.myPortfolio.path} element={<p>Portfolio</p>} />
        </Route>
        <Route path={Pages.curriculum.path} element={<CVPage />} />
        <Route path={Pages.contact.path} element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
