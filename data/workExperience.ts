// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaRobot, FaCogs } from 'react-icons/fa';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Tasknova",
    position: "AI Automation Engineer Intern",
    duration: "2025 - Present",
    year: 2025,
    description: [
      "Designed, built, and deployed production-grade AI automation systems used by internal teams, significantly reducing manual effort and improving operational efficiency.",
      "Built and deployed multiple automation workflows handling hundreds of executions per week with robust error handling and monitoring.",
      "Designed AI-driven pipelines for call analysis, CRM operations, and automated reporting systems.",
      "Integrated multiple third-party APIs with comprehensive error handling and real-time monitoring capabilities.",
      "Developed production-ready web applications used by real users across the organization.",
      "Worked extensively with LLMs for data extraction, analysis, and intelligent automation workflows.",
      "Collaborated with cross-functional teams to deliver scalable, maintainable solutions."
    ],
    skills: [
      { name: "Python", icon: FaPython },
      { name: "n8n", icon: FaCogs },
      { name: "REST APIs", icon: FaRobot },
      { name: "LLMs", icon: FaRobot },
      { name: "PostgreSQL", icon: FaDatabase },
    ],
    logo: "/pics/logo.png"
  }
];
