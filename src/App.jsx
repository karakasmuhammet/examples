import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Project1 from "../src/pages/Project1";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Project1" element={<Project1 />} />
      </Routes>
    </div>
  );
}

export default App;
