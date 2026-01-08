'use client';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import ProjectScreenshots from '@/components/ProjectScreenshots';

function ProjectContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [project, setProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const found = projects.find(p => p.id === parseInt(id));
      setProject(found || null);
    }
  }, [searchParams]);

  if (!project || !project.details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => router.push('/#projects')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </button>
          <div className="flex gap-4">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              <FaGithub />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
            <Link
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaExternalLinkAlt />
              <span className="hidden sm:inline">Live Demo</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-primary/10 p-4 rounded-xl">
              <Icon className="text-5xl text-primary" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Project Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Project Overview
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{project.details.overview}</p>
          </motion.section>

          {/* Problem Statement */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-8 rounded-xl border-l-4 border-primary"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Problem Statement
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{project.details.problem}</p>
          </motion.section>

          {/* Solution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Solution
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{project.details.solution}</p>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Tech Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.details.techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></span>
                  <span className="text-foreground font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Project Screenshots */}
          {project.details.screenshots && project.details.screenshots.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-card p-8 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-primary rounded-full"></span>
                Project Screenshots
              </h2>
              <ProjectScreenshots 
                screenshots={project.details.screenshots} 
                projectName={project.title}
              />
            </motion.section>
          )}

          {/* Links Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-card p-8 rounded-xl text-center"
          >
            <h2 className="text-2xl font-bold text-primary mb-6">Explore the Project</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-lg font-semibold"
              >
                <FaGithub className="text-2xl" />
                View on GitHub
              </Link>
              <Link
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <FaExternalLinkAlt className="text-2xl" />
                Live Demo
              </Link>
            </div>
          </motion.section>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => router.push('/#projects')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
          >
            <FaArrowLeft />
            Back to All Projects
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default function ProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-primary">Loading...</div></div>}>
      <ProjectContent />
    </Suspense>
  );
}
