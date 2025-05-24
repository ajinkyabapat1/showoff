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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
            <main>
                    {/* All sections are rendered on the home route for a single-page feel */}
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Hero />
                                <About />
                               <Skills />
                               <Portfolio/>
                                <Resume />
                                <Awards/>

                                 {/* <Portfolio />
                                <Awards />
                                <Resume />
                                <Contact /> */}
                            </>
                        } />
                        {/* Fallback for any unhandled routes */}
                        <Route path="*" element={<p style={{textAlign: 'center', padding: '100px'}}>404: Page Not Found</p>} />
                    </Routes>
                </main>
                 <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
