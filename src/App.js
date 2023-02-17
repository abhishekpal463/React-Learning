import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <>
      <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        homeText="Home"
        aboutText="About Us"
        toggle={toggleMode}
      />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter Text to Analyze"
                placeholder="Enter Text"
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
