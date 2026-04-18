import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";

/**
 * Default Smoke Animation
 * Uses the default gray color (#808080)
 */
export const SmokeDefault = () => {
  return (
    <div className="w-full h-screen">
      <SmokeBackground />
    </div>
  );
};

/**
 * Red Smoke Animation
 * Perfect for the bug-themed portfolio (matches your red and black theme)
 */
export const SmokeRed = () => {
  return (
    <div className="w-full h-screen">
      <SmokeBackground smokeColor="#DC2626" />
    </div>
  );
};

/**
 * Purple Smoke Animation
 * Alternative theme option
 */
export const SmokePurple = () => {
  return (
    <div className="w-full h-screen">
      <SmokeBackground smokeColor="#8A2BE2" />
    </div>
  );
};

/**
 * Blue Smoke Animation
 * Another theme variation
 */
export const SmokeBlue = () => {
  return (
    <div className="w-full h-screen">
      <SmokeBackground smokeColor="#0066FF" />
    </div>
  );
};

/**
 * Usage as Background with Content Overlay
 * Perfect for hero sections or landing pages
 */
export const SmokeWithOverlay = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Smoke background */}
      <div className="absolute inset-0">
        <SmokeBackground smokeColor="#DC2626" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white mb-4">
            Spooky Smoke Effect
          </h1>
          <p className="text-2xl text-white/80">
            Beautiful WebGL animation with custom colors
          </p>
        </div>
      </div>
    </div>
  );
};

const smokeAnimationDemo = {
  SmokeDefault,
  SmokeRed,
  SmokePurple,
  SmokeBlue,
  SmokeWithOverlay,
};

export default smokeAnimationDemo;
