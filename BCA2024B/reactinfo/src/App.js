import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  console.log(isActive);
  return (
    <>
      <BrowserRouter>
        <Sidebar isActive={isActive} />
        <div className="main_page">
          <Header setIsActive={setIsActive} isActive={isActive} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
