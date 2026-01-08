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
              👋 Hello there! I&apos;m Rajpal Singh Rathore, an AI Automation Engineer with hands-on experience building production-grade automation systems and AI-powered applications.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> 
              I specialize in designing end-to-end workflows using Python, n8n, REST APIs, and Large Language Models to replace manual, error-prone business processes with scalable and reliable systems.
            </p>
            <p>
              Currently working as an AI Automation Intern, I&apos;ve developed and deployed real-world solutions such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>AI-driven call analysis platforms</li>
              <li>Internal CRMs and workflow automation tools</li>
              <li>Virtual assistants used by teams in production</li>
            </ul>
            <p>
              My work focuses on workflow orchestration, API integrations, AI-powered analytics, and system automation — with an emphasis on reliability, performance, and real business impact.
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
