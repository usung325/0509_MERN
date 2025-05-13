import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import PageHome from "./pages/PageHome";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route index element={<PageHome />} />
      {/* <Route path="/convos" element={<PageConvos />} />
      <Route path="/about" element={<PageAbout />} /> */}
    </Routes>
  );
}

export default App;
