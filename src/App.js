import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Home from "./pages/Home";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
