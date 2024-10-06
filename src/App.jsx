import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import About from "./components/About";
import posthog from "posthog-js";
// import Footer from './components/Footer';

function App() {
  posthog.init("phc_4wRr396iA3G9Tw4lQUd6h0iOF5smmLScLAWBtDMgduq", {
    api_host: "https://us.i.posthog.com",
    person_profiles: "identified_only",
  });
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Intro theme={theme} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
