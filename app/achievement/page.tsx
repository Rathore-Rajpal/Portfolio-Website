'use client';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { achievements } from '@/data/achievements';
import { FaArrowLeft, FaTrophy, FaCalendar, FaAward } from 'react-icons/fa';
import Image from 'next/image';

function AchievementContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [achievement, setAchievement] = useState<typeof achievements[0] | null>(null);

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const found = achievements.find(a => a.id === parseInt(id));
      setAchievement(found || null);
    }
  }, [searchParams]);

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Achievement Not Found</h1>
          <button 
            onClick={() => router.push('/#achievements')}
            className="text-primary hover:underline"
          >
            Back to Achievements
          </button>
        </div>
      </div>
    );
  }

  const Icon = achievement.icon;

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
            onClick={() => router.push('/#achievements')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Portfolio</span>
          </button>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg">
            <FaTrophy />
            <span className="font-semibold">Achievement</span>
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
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/10 p-4 rounded-xl">
              <Icon className="text-5xl text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {achievement.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center mt-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FaCalendar className="text-primary" />
                  <span>{achievement.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FaAward className="text-primary" />
                  <span>{achievement.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Image */}
          {achievement.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 border-2 border-primary/20"
            >
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                className="object-cover"
              />
            </motion.div>
          )}
        </motion.div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Overview
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{achievement.details.overview}</p>
          </motion.section>

          {/* Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card p-8 rounded-xl border-l-4 border-primary"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Impact
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{achievement.details.impact}</p>
          </motion.section>

          {/* Recognition */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <span className="w-2 h-10 bg-primary rounded-full"></span>
              Recognition
            </h2>
            <p className="text-foreground leading-relaxed text-lg">{achievement.details.recognition}</p>
          </motion.section>
        </div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => router.push('/#achievements')}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-lg"
          >
            <FaArrowLeft />
            Back to All Achievements
          </button>
        </motion.div>
      </div>
    </main>
  );
}

export default function AchievementPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-primary">Loading...</div></div>}>
      <AchievementContent />
    </Suspense>
  );
}
