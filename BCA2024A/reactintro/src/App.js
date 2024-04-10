import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <BrowserRouter>
      <SideBar isActive={isActive} setIsActive={setIsActive} />
      <div className="main_page">
        <Header setIsActive={setIsActive} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
