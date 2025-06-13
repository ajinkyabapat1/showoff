import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Awards from "./components/Awards";
import "./index.css";
import ParticlesBackground from "./components/ParticlesBackground";
import Contact from "./components/Contact";
function App() {
  const [count, setCount] = useState(0);
  const ScrollToHashElement = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Use a slight delay to ensure smooth scroll after page load/render
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else {
        // Scroll to top if no hash, or if navigating to home without a specific section
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, [location]);
    return null;
  };
  return (
    <>
      <ThemeProvider>
        <ParticlesBackground />
        <Router>
          <ScrollToHashElement />
          <Navbar />
          <main>
            {/* All sections are rendered on the home route for a single-page feel */}

            <Routes>
              <Route
                path="/showoff"
                element={
                  <>
                    <Hero />
                    <About />
                    <Skills />
                    <Portfolio />
                    <Resume />
                    <Awards />
                    <Contact />
                    {/* <Portfolio />
                                <Awards />
                                <Resume />
                                <Contact /> */}
                  </>
                }
              />
              {/* Fallback for any unhandled routes */}
              <Route
                path="*"
                element={
                  <p style={{ textAlign: "center", padding: "100px" }}>
                    404: Page Not Found
                  </p>
                }
              />
            </Routes>
          </main>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
