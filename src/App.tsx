import { Route, Routes } from "react-router-dom";
import Font from "./components/font";
import Navbar from "./components/navbar";
import Home from "./components/pages/home";

function App() {
  return (
    <div className="w-full transition-colors duration-500">
      <Font />
      <Navbar />
      <div className="w-full pt-16 flex justify-center p-3 sm:p-0">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
