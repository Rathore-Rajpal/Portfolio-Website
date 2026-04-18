'use client'
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Work from "@/components/sections/Work";
import { AnimatePresence } from 'framer-motion';
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import AnimatedBackground from "@/components/AnimatedBackground";
import PremiumScrollEffects from "@/components/animations/PremiumScrollEffects";

const Home = () => {
  return (
    <AnimatePresence>
      <PremiumScrollEffects />
      <div id="scroll-progress" className="fixed top-0 left-0 z-[70] h-[2px] w-full bg-gradient-to-r from-red-medium via-red-light to-black-light" />
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