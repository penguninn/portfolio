import { Route, Routes } from "react-router-dom";
import Font from "./components/font";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Project from "./pages/project";

function App() {
  return (
    <div className="w-full transition-colors duration-500">
      <Font />
      <Navbar />
      <div className="w-full mt-16 flex justify-center p-3 sm:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
