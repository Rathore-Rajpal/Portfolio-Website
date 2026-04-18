'use client'
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Work from "@/components/sections/Work";
import { AnimatePresence } from 'framer-motion';
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  return (
    <AnimatePresence>
      <AnimatedBackground />
      <Hero />
      <main className="relative flex justify-center items-center flex-col mx-auto w-full pt-16 sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <AboutMe />
          <Projects/>
          <Achievements />
          <Work />
        </div>
      </main>
    </AnimatePresence>
  );
}

export default Home;