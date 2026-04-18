"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full py-20 scroll-mt-20" ref={ref}>
      <motion.div
        className="about-stagger w-full"
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full overflow-hidden border-0 bg-card text-card-foreground shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch">
            <div className="about-stagger w-full lg:w-[68%]">
              <CardHeader className="about-stagger">
                <CardTitle className="about-stagger text-2xl sm:text-3xl font-bold bg-gradient-to-r from-black-light to-red-light bg-clip-text text-transparent flex items-center">
                  <FaLightbulb className="mr-2 text-red-light" /> About Me
                </CardTitle>
              </CardHeader>
              <CardContent className="about-stagger text-sm sm:text-base text-foreground space-y-4">
                <p className="about-stagger">
                  👋 I&apos;m an AI Engineer focused on designing and deploying production-ready intelligent systems that solve real-world business problems. My work sits at the intersection of machine learning, large language models (LLMs), and scalable system design.
                </p>
                <p className="about-stagger">
                  <FaCode className="inline-block mr-2" />
                  I specialize in building end-to-end AI solutions using Python, LLMs, vector databases, and modern AI frameworks—covering everything from data ingestion and model orchestration to deployment and optimization in real-world environments.
                </p>
                <p className="about-stagger">
                  Currently working as an AI Engineer Intern, I&apos;ve developed and shipped:
                </p>
                <ul className="about-stagger list-disc pl-5 space-y-2">
                  <li className="about-stagger">AI-powered analytics and NLP pipelines for extracting structured insights from unstructured data</li>
                  <li className="about-stagger">Intelligent agents and virtual assistants leveraging LLMs, embeddings, and tool-calling</li>
                  <li className="about-stagger">Full-stack AI applications with seamless backend–frontend integration and real-time inference</li>
                </ul>
                <p className="about-stagger">
                  My technical expertise includes Machine Learning, Natural Language Processing (NLP), LLM-based systems, AI agent development, prompt engineering, and retrieval-augmented generation (RAG). I&apos;m particularly interested in building scalable, reliable, and impactful AI systems that move beyond demos and into production.
                </p>
                <p className="about-stagger">
                  I&apos;m driven by a simple goal: turn cutting-edge AI into practical, high-impact solutions.
                </p>
              </CardContent>
            </div>

            <div className="about-stagger w-full lg:w-[32%] flex justify-center lg:justify-end items-end px-6 sm:px-8 lg:px-8 pb-6 sm:pb-8 lg:pb-8">
              <div className="w-full max-w-[340px] sm:max-w-[360px] aspect-[9/19]">
                <StyledPic />
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutMe
