import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<p>Home Page</p>} />
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
