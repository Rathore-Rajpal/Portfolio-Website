"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
          <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 I&apos;m an AI Engineer focused on designing and deploying production-ready intelligent systems that solve real-world business problems. My work sits at the intersection of machine learning, large language models (LLMs), and scalable system design.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I specialize in building end-to-end AI solutions using Python, LLMs, vector databases, and modern AI frameworks—covering everything from data ingestion and model orchestration to deployment and optimization in real-world environments.
            </p>
            <p>
              Currently working as an AI Engineer Intern, I&apos;ve developed and shipped:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI-powered analytics and NLP pipelines for extracting structured insights from unstructured data</li>
              <li>Intelligent agents and virtual assistants leveraging LLMs, embeddings, and tool-calling</li>
              <li>Full-stack AI applications with seamless backend–frontend integration and real-time inference</li>
            </ul>
            <p>
              My technical expertise includes Machine Learning, Natural Language Processing (NLP), LLM-based systems, AI agent development, prompt engineering, and retrieval-augmented generation (RAG). I&apos;m particularly interested in building scalable, reliable, and impactful AI systems that move beyond demos and into production.
            </p>
            <p>
              I&apos;m driven by a simple goal: turn cutting-edge AI into practical, high-impact solutions.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
