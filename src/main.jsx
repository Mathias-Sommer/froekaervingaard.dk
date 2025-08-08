import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

// Routes
import App from "./app";
import Test from "./pages/Test";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
