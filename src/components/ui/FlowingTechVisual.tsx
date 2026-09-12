export function FlowingTechVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-inverse-surface">
      {/* Drifting grid */}
      <div
        className="absolute inset-0 opacity-30 animate-[grid-drift_18s_linear_infinite]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden
      />

      {/* Soft moving glow */}
      <div
        className="absolute -left-1/4 top-1/4 h-[60%] w-[60%] rounded-full bg-primary/30 blur-3xl animate-[drift-a_9s_ease-in-out_infinite]"
        aria-hidden
      />
      <div
        className="absolute -right-1/4 bottom-0 h-[55%] w-[55%] rounded-full bg-secondary-container/20 blur-3xl animate-[drift-b_11s_ease-in-out_infinite]"
        aria-hidden
      />

      {/* Flowing data lines */}
      <svg
        viewBox="0 0 480 480"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="flowLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8fa5ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#8fa5ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8fa5ff" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[
          "M -40,80 C 100,40 160,140 260,100 S 420,60 520,110",
          "M -40,190 C 90,230 190,150 270,200 S 430,240 520,200",
          "M -40,300 C 110,270 170,340 260,300 S 420,270 520,320",
          "M -40,400 C 120,420 200,360 280,400 S 420,430 520,400",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="url(#flowLine)"
            strokeWidth="1.5"
            className="animate-[flow-dash_6s_linear_infinite]"
            style={{
              strokeDasharray: "18 22",
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}

        {[
          [90, 120], [260, 100], [340, 210], [140, 300], [300, 340], [220, 400],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="3.5"
            fill="#b7c4ff"
            className="animate-[node-pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </svg>

      {/* Subtle scanline sheen for a screen-like feel */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}
