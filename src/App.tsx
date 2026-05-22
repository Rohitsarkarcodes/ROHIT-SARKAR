/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ClientProjects from "./components/ClientProjects";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeScene from "./components/ThreeScene";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Console Branding
    console.log(
      "%cROHIT SARKAR %c CORE_ONLINE",
      "color: #00F0FF; font-weight: bold; font-size: 20px;",
      "color: #FFF; font-weight: bold; font-size: 10px; background: #00F0FF20; padding: 2px 5px; border-radius: 4px;"
    );
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <SmoothScroll>
        <div className="relative min-h-screen">
          {/* Background Systems */}
          <ThreeScene />
          <CustomCursor />
          <div className="grid-background" />
          <div className="noise-overlay" />
          
          {/* UI Layers */}
          <Navbar />
          
          <main>
            <Hero />
            
            <div className="relative z-10 space-y-0">
              <About />
              <Services />
              <Projects />
              <ClientProjects />
              <Features />
              <TechStack />
              <Testimonials />
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

