import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Layout from "./components/Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import CVPage from "./Pages/CVPage/CVPage";
import ContactForm from "./components/ContactForm/ContactForm";

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
        <Route path={Pages.curriculum.path} element={<CVPage />} />
        <Route
          path={Pages.contact.path}
          element={<ContactForm onSubmit={(values) => console.log(values)} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
