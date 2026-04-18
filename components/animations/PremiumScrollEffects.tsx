"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function PremiumScrollEffects() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onLenisScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onLenisScroll);

    const hoverCleanup: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const hero = document.querySelector<HTMLElement>("#hero");
      const about = document.querySelector<HTMLElement>("#about");
      const projects = document.querySelector<HTMLElement>("#projects");
      const achievements = document.querySelector<HTMLElement>("#achievements");
      const experience = document.querySelector<HTMLElement>("#experience");
      const progressBar = document.querySelector<HTMLElement>("#scroll-progress");

      if (!hero || !about || !projects || !achievements || !experience) {
        return;
      }

      if (progressBar) {
        gsap.set(progressBar, { transformOrigin: "left center", scaleX: 0 });
        gsap.to(progressBar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: "top 92%",
          end: "top 35%",
          scrub: 1,
        },
      })
      .to(hero, { yPercent: -16, autoAlpha: 0.18, ease: "none" }, 0)
      .to("#hero .hero-bg-parallax", { scale: 1.12, yPercent: 8, ease: "none" }, 0)
      .fromTo(about, { y: 110, autoAlpha: 0.25 }, { y: 0, autoAlpha: 1, ease: "none" }, 0);

      const aboutStaggerTargets = gsap.utils.toArray<HTMLElement>("#about .about-stagger");
      gsap.fromTo(
        aboutStaggerTargets,
        { y: 36, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.08,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: about,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.timeline({
        scrollTrigger: {
          trigger: about,
          start: "top top+=75",
          end: "+=95%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      })
      .fromTo(
        about,
        { yPercent: 0, autoAlpha: 1 },
        { yPercent: -6, autoAlpha: 0.98, ease: "none" },
        0
      );

      gsap.fromTo(
        projects,
        { autoAlpha: 0, y: 90 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projects,
            start: "top 88%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );

      const projectCards = gsap.utils.toArray<HTMLElement>("#projects .project-card-item");
      gsap.fromTo(
        projectCards,
        { autoAlpha: 0, y: 90, scale: 0.95 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projects,
            start: "top 78%",
            end: "bottom 68%",
            scrub: 1,
          },
        }
      );

      projectCards.forEach((card) => {
        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const cx = event.clientX - rect.left;
          const cy = event.clientY - rect.top;
          const rotateY = ((cx / rect.width) - 0.5) * 8;
          const rotateX = (0.5 - (cy / rect.height)) * 8;

          gsap.to(card, {
            rotationY: rotateY,
            rotationX: rotateX,
            transformPerspective: 1000,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);

        hoverCleanup.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });

      gsap.fromTo(
        achievements,
        { autoAlpha: 0, y: 90 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: achievements,
            start: "top 88%",
            end: "top 55%",
            scrub: 1,
          },
        }
      );

      const achievementCards = gsap.utils.toArray<HTMLElement>("#achievements .achievement-card-item");
      gsap.fromTo(
        achievementCards,
        { autoAlpha: 0, y: 70, scale: 0.93, rotateX: 8 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: achievements,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      const countElements = gsap.utils.toArray<HTMLElement>("#achievements .achievement-count");
      countElements.forEach((el) => {
        const value = Number(el.textContent?.trim());
        if (!Number.isNaN(value)) {
          const counter = { value: 0 };
          gsap.to(counter, {
            value,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = Math.round(counter.value).toString();
            },
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          });
        }
      });

      gsap.fromTo(
        experience,
        { autoAlpha: 0, y: 85 },
        {
          autoAlpha: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: experience,
            start: "top 88%",
            end: "top 58%",
            scrub: 1,
          },
        }
      );

      const timelineItems = gsap.utils.toArray<HTMLElement>("#experience .timeline-item");
      const experienceTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: experience,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 1,
        },
      });

      timelineItems.forEach((item, index) => {
        experienceTimeline.fromTo(
          item,
          { autoAlpha: 0, x: index % 2 === 0 ? -120 : 120, y: 50 },
          { autoAlpha: 1, x: 0, y: 0, duration: 0.6, ease: "power3.out" },
          index * 0.2
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      hoverCleanup.forEach((cleanup) => cleanup());
      ctx.revert();
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
