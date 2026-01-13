// data/projects.ts
import { FaPhoneAlt, FaRobot, FaUsers, FaBrain } from 'react-icons/fa';

export interface Skill {
  name: string;
}

export interface ProjectDetails {
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  screenshots?: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  skills: Skill[];
  details?: ProjectDetails;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Calling & Sales Call Analysis System",
    description: "AI-powered platform analyzing calls with 20+ KPIs, role-based dashboards, and automated performance reports.",
    icon: FaPhoneAlt,
    technologies: ["Python", "n8n", "LLMs", "PostgreSQL"],
    githubLink: "https://github.com/Rathore-Rajpal/Sales-Call-Analysis",
    demoLink: "https://sales.rathorerajpal.live",
    skills: [
      { name: "AI/ML Integration" },
      { name: "Workflow Automation" },
      { name: "Data Analytics" },
      { name: "API Development" },
      { name: "Dashboard Design" }
    ],
    details: {
      overview: "An enterprise-grade AI call analysis platform designed to transform how HR and sales teams evaluate performance. The system automatically processes recorded calls, extracts meaningful insights, and generates comprehensive performance metrics without manual intervention.",
      problem: "Sales and HR teams spend countless hours manually reviewing calls, taking notes, and generating performance reports. This manual process is time-consuming, inconsistent, and prone to human bias. Organizations struggle to scale quality assurance and coaching efforts as their teams grow.",
      solution: "Built an AI-driven platform that automatically transcribes calls, analyzes conversations across 20+ KPIs including engagement levels, sentiment analysis, talk-time ratios, and compliance metrics. The system features role-based dashboards for Admins, Managers, and Employees, generates daily/weekly/monthly reports, and provides AI-powered improvement suggestions tailored to each team member.",
      techStack: ["Frontend - React.js (Vite)", "Backend - Node.js", "Database - Supabase", "n8n (Workflow Automation)", "REST APIs", "Large Language Models (LLMs)", "Speech-to-Text APIs", "Vector Embeddings", "RAG", "AWS S3 (Recordings Storage)"],
      screenshots: [
        "/pics/Projects SS/Calling and Sales Call Analysis System/call-analysis-ss-1.png",
        "/pics/Projects SS/Calling and Sales Call Analysis System/call-analysis-ss-2.png",
        "/pics/Projects SS/Calling and Sales Call Analysis System/call-analysis-ss-3.png",
        "/pics/Projects SS/Calling and Sales Call Analysis System/call-analysis-ss-4.png"
      ]
    }
  },
  {
    id: 2,
    title: "Hey Buddy – Virtual Assistant",
    description: "AI assistant with voice control, browser automation, face authentication, and LLM-powered responses.",
    icon: FaRobot,
    technologies: ["Python", "OpenCV", "LLMs", "APIs"],
    githubLink: "https://github.com/Rathore-Rajpal/HeyBuddy",
    demoLink: "https://heybuddy.rathorerajpal.live",
    skills: [
      { name: "Voice Recognition" },
      { name: "Computer Vision" },
      { name: "AI Integration" },
      { name: "Browser Automation" },
      { name: "System Automation" }
    ],
    details: {
      overview: "A comprehensive personal AI virtual assistant that goes beyond simple voice commands. Hey Buddy integrates voice interaction, computer vision, browser automation, and intelligent task handling to provide a truly hands-free computing experience.",
      problem: "Users need to manually switch between multiple applications, perform repetitive tasks, and authenticate themselves repeatedly throughout the day. Traditional assistants lack the ability to perform complex system-level operations or understand context across different platforms.",
      solution: "Developed a multi-modal AI assistant that combines speech recognition for voice commands, OpenCV for face authentication, browser automation for web tasks, and LLM integration for intelligent responses. The system seamlessly integrates with Google services and Spotify, executes system-level commands, and generates images via AI APIs, all while maintaining secure access through facial recognition.",
      techStack: ["Python", "OpenCV (Computer Vision)", "Speech Recognition Libraries", "LLM APIs", "Browser Automation (WebBrowser module)", "UI Automation - PyAutoGUI", "MySQL (Contact Management)", "Spotify API", "Google APIs", "Image Generation APIs"],
      screenshots: [
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-1.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-2.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-3.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-4.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-5.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-6.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-7.png",
        "/pics/Projects SS/Hey-Buddy/hey-buddy-ss-8.png"
      ]
    }
  },
  {
    id: 3,
    title: "Internal Team CRM",
    description: "Team management CRM with access control, task tracking, leave management, and analytics dashboards.",
    icon: FaUsers,
    technologies: ["Python", "PostgreSQL", "REST APIs"],
    githubLink: "https://github.com/Rathore-Rajpal/Internal-Team-CRM",
    demoLink: "https://internalcrm.rathorerajpal.live",
    skills: [
      { name: "CRM Development" },
      { name: "Access Control" },
      { name: "Workflow Automation" },
      { name: "API Integration" },
      { name: "Data Visualization" }
    ],
    details: {
      overview: "A full-featured internal CRM system built to streamline team management, task coordination, leave tracking, and internal communications. The platform centralizes all team operations in one unified interface with intelligent automation and real-time collaboration features.",
      problem: "Organizations struggle with fragmented tools for team management—emails for communication, spreadsheets for task tracking, separate systems for leave management, and manual reporting. This fragmentation leads to inefficiencies, missed deadlines, and poor visibility into team performance.",
      solution: "Created a comprehensive CRM with three-tier access control (Admin, Manager, Employee) that unifies task and project management, automated leave approval workflows, analytics dashboards for performance tracking, and integrated Slack/Discord notifications. The system replaces multiple tools with a single platform that automates routine processes and provides actionable insights.",
      techStack: ["Frontend - React.js", "Backend - Node.js", "REST APIs", "PostgreSQL (Database)", "n8n - Slack/Discord Reports"],
      screenshots: [
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212842.png",
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212853.png",
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212901.png",
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212913.png",
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212923.png",
        "/pics/Projects SS/Internal-Team CRM/Screenshot 2026-01-08 212931.png"
      ]
    }
  },
  {
    id: 4,
    title: "Superbot - NL to SQL AI Agent",
    description: "AI agent converting natural language to SQL queries with vector database schema management.",
    icon: FaBrain,
    technologies: ["Python", "LLMs", "Vector DB", "SQL"],
    githubLink: "https://github.com/Rathore-Rajpal/Superbot-Demo",
    demoLink: "https://superbot.rathorerajpal.live",
    skills: [
      { name: "Natural Language Processing" },
      { name: "SQL Generation" },
      { name: "Vector Databases" },
      { name: "AI Agents" },
      { name: "Database Management" }
    ],
    details: {
      overview: "An intelligent AI agent that democratizes database access by allowing users to query databases using natural language. Superbot eliminates the need for SQL knowledge, making data accessible to non-technical team members while maintaining accuracy and security.",
      problem: "Most team members lack SQL expertise, creating bottlenecks when they need data insights. Data teams are overwhelmed with ad-hoc query requests, slowing down decision-making. Traditional BI tools are rigid and don't support exploratory analysis through conversational interfaces.",
      solution: "Built an AI agent that understands natural language questions, converts them to optimized SQL queries, executes them against the database, and returns results in plain language. The system uses vector databases to maintain and regularly update database schema knowledge, ensuring accurate query generation even as the database evolves. It handles complex queries, joins, aggregations, and follows best practices for query optimization.",
      techStack: ["Large Language Models API (GPT/Gemini)", "Pinecone Vector Database (Schema management)", "Database (Supabase)", "Embeddings (OpenAI/Gemini)", "Frontend (React.js)", "Telegram Bot", "n8n", "RAG"],
      screenshots: [
        "/pics/Projects SS/Superbot/Screenshot 2026-01-08 213155.png",
        "/pics/Projects SS/Superbot/Screenshot 2026-01-08 213359.png",
        "/pics/Projects SS/Superbot/Screenshot 2026-01-08 213411.png"
      ]
    }
  }
];
