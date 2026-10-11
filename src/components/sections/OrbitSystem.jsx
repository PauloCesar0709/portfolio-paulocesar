const MAX_K = 0.475; // o anel mais externo ocupa até 46% da largura

export default function OrbitSystem({ stack, rings, center }) {
  // Normaliza: você pode escrever os "k" como quiser (0.18, 0.35, 0.51, 0.68...)
  // e o componente ajusta para o último anel caber dentro do sistema.
  const scale = MAX_K / Math.max(...rings.map((r) => r.k));

  const orphans = stack.filter((s) => !rings[s.ring]);
  if (orphans.length) {
    console.warn("Itens sem órbita correspondente:", orphans.map((s) => s.id));
  }

  return (
    <div
      aria-hidden="true"
      className="orbit-system @container relative mx-auto aspect-square"
      style={{ width: "min(100%, calc(100dvh - 5rem), 900px)" }}
    >
      {/* trilhas */}
      {rings.map((ring) => (
        <div
          key={ring.k}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-line"
          style={{
            width: `${ring.k * scale * 200}%`,
            height: `${ring.k * scale * 200}%`,
          }}
        />
      ))}

      {/* centro */}
      <div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-accent-soft font-display text-accent-text shadow-[0_0_32px_#7C7CF059]"
        style={{
          width: "calc(var(--item) * 1.4)",
          height: "calc(var(--item) * 1.4)",
          fontSize: "calc(var(--item) * 0.6)",
        }}
      >
        {center}
      </div>

      {/* itens em órbita */}
      {rings.flatMap((ring, r) => {
        const items = stack.filter((s) => s.ring === r);

        return items.map(({ id, label, Icon, color }, i) => (
          <div
            key={id}
            className="orbit-item group flex items-center justify-center rounded-[24%] border border-white/15 bg-card transition-colors hover:z-10 hover:border-accent"
            style={{
              "--k": ring.k * scale,
              "--duration": `${ring.duration}s`,
              "--delay": `${-(ring.duration * i) / items.length}s`,
              "--angle": `${(360 / items.length) * i}deg`,
              animationDirection: ring.reverse ? "reverse" : "normal",
            }}
          >
            <Icon className="h-3/5 w-3/5" color={color ?? "default"} />
            <span className="pointer-events-none absolute bottom-full mb-1.5 whitespace-nowrap rounded-md border border-line bg-sidebar px-1.5 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
              {label}
            </span>
          </div>
        ));
      })}
    </div>
  );
}