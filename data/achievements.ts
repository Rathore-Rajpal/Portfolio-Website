// data/achievements.ts
import { FaTrophy, FaGraduationCap } from 'react-icons/fa';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  details: {
    overview: string;
    impact: string;
    recognition: string;
  };
  image?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "1st Prize - College Project Exhibition",
    description: "Hey Buddy Virtual Assistant won first prize at the college project exhibition for innovation in AI and automation.",
    date: "2024",
    icon: FaTrophy,
    category: "Project Competition",
    details: {
      overview: "Hey Buddy - AI Virtual Assistant was recognized as the best project at the college project exhibition. The project demonstrated exceptional innovation in combining voice recognition, computer vision, browser automation, and AI-driven responses into a unified personal assistant system.",
      impact: "The project showcased practical applications of AI in everyday tasks, demonstrating how multiple technologies can be integrated to create a seamless user experience. The judges particularly appreciated the face authentication system, real-time voice interaction capabilities, and the integration with popular services like Google and Spotify.",
      recognition: "Awarded first prize among 50+ participating projects for outstanding innovation, technical excellence, and practical implementation. The project was praised for its comprehensive feature set, including speech recognition, face authentication, browser automation, and LLM-powered conversational abilities."
    },
    image: "/pics/achievements.jpeg"
  },
  {
    id: 2,
    title: "Completed Full Stack Java Course",
    description: "Successfully completed a comprehensive 3-month Full Stack Java Development course from Symbiosis Skills and Professional in collaboration with Capgemini.",
    date: "June 2025",
    icon: FaGraduationCap,
    category: "Professional Certification",
    details: {
      overview: "Completed an intensive Full Stack Java Development program offered by Symbiosis Skills and Professional in partnership with Capgemini. The course covered Java programming from basic fundamentals to advanced enterprise-level application development over a period of 3 months.",
      impact: "Gained comprehensive knowledge of Java ecosystem including Core Java, Advanced Java concepts, object-oriented programming, data structures, algorithms, web development frameworks, database integration, and enterprise application architecture. The hands-on training included real-world projects and industry best practices.",
      recognition: "Successfully completed the rigorous 3-month program (June 2025) covering the complete Java development stack. The course was designed and delivered by Symbiosis Skills and Professional in collaboration with Capgemini, ensuring industry-relevant curriculum and practical exposure to enterprise-grade Java development."
    },
    image: "/pics/RAJ.FSJ.jpeg"
  }
];
