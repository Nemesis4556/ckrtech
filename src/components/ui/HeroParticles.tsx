"use client";

import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

async function initEngine(engine: Engine) {
  await loadSlim(engine);
}

/**
 * Ambient, technology-flavoured particle network used as the hero
 * background. Built entirely from an open-source, MIT-licensed library
 * (tsParticles) rather than a stock video, so there is no licensing
 * ambiguity and no external file to host or maintain.
 */
export function HeroParticles() {
  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 55,
          density: { enable: true, width: 1200, height: 900 },
        },
        color: { value: "#b7c4ff" },
        opacity: {
          value: { min: 0.15, max: 0.5 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 140,
          color: "#8fa5ff",
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.45,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: { default: "out" as const },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
          resize: { enable: true },
        },
      },
    }),
    []
  );

  return (
    <div className="absolute inset-0 h-full w-full">
      <ParticlesProvider init={initEngine}>
        <Particles id="hero-particles" className="h-full w-full" options={options} />
      </ParticlesProvider>
    </div>
  );
}
