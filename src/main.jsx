import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Routes
import Home from "./pages/Home";
import Arrangementer from "./pages/Arrangementer";
import Kontakt from "./pages/Kontakt";
import About from "./pages/About";
import Vine from "./pages/Vine";
import "./App.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/arrangementer" element={<Arrangementer />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/about" element={<About />} />
      <Route path="/vine" element={<Vine />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
