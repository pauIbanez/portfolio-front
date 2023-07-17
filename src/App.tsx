import { Routes, Route, Navigate } from "react-router-dom";
import PageTitle from "./components/PageTitle/PageTitle";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<PageTitle title={<p>Sample Text</p>} />} />
      <Route path="/aboutme" element={<p>About me Page</p>} />
      <Route path="/projects" element={<p>Projects Page</p>} />
      <Route path="/project">
        <Route path=":id" element={<p>Project page</p>} />
      </Route>
      <Route path="/curriculum" element={<p>CV Page</p>} />
      <Route path="/contact" element={<p>Contact Page</p>} />
    </Routes>
  );
}

export default App;
