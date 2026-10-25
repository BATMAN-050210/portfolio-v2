import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Approach from "./components/Approach";
import Projects from "./components/Projects";
import Notes from "./components/Notes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Approach />
        <Projects />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
