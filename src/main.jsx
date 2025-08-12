import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

// Routes
import Home from "./pages/Home";
import Arrangementer from "./pages/Arrangementer";
import Kontakt from "./pages/Kontakt";
import About from "./pages/About";
import Vine from "./pages/Vine";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ScrollToTop />
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
