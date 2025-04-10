import { useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/IntroSection";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased ">
        <div className="fixed inset-0 -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </div>
      </div>
      <div className="container mx-auto px-8 text-white ">
        <Navbar />
        <Intro />
        <Technologies />
        <Projects />
        {/* <Experience /> */}
        <Contact />
      </div>
    </>
  );
}

export default App;
