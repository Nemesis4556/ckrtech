"use client";

import { useState } from "react";
import { FlowingTechVisual } from "@/components/ui/FlowingTechVisual";

export function HeroVideo() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {!videoFailed ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero-loop.webm" type="video/webm" />
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
      ) : (
        <FlowingTechVisual />
      )}
    </div>
  );
}
