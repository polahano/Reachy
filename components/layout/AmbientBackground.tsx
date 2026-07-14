export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute -top-32 start-[-10%] h-[600px] w-[600px] rounded-full bg-aurora-1 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 end-[-15%] h-[700px] w-[700px] rounded-full bg-aurora-2 blur-3xl animate-float-slow" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-[-10%] start-1/4 h-[500px] w-[500px] rounded-full bg-aurora-3 blur-3xl animate-float-slow" style={{ animationDelay: "-6s" }} />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
