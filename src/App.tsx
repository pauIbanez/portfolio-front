import { Routes, Route, Navigate } from "react-router-dom";
import Pages from "./data/Pages/Pages";
import Header from "./components/Header/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={Pages.home.path} />} />
      <Route
        path={Pages.home.path}
        element={
          <>
            <Header />
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
  );
}

export default App;
