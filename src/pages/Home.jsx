import { Link } from "react-router-dom";
import { ChevronDown, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/useI18n";
import Typewriter from "../components/ui/Typewriter";


const NAME = "Paulo César"

export default function Home() {
  const {lang, t} = useI18n();

  return (
    <section className="relative flex min-h-full flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-sm tracking-[0.35em] text-muted">
        {t("home.role")}
      </p>

      <h1 className="font-display text-7xl leading-none md:text-9xl">{NAME}</h1>

      <p className="min-h-[2.5rem] max-w-3xl font-display text-2xl italic text-muted md:text-4xl">
        <Typewriter key={`tagline-${lang}`} words={[t("home.tagline")]} loop={false}/>
      </p>

      <div className="flex w-72 items-center justify-between rounded-full border border-line bg-card px-6 py-3 font-medium">
        <span>
          <Typewriter key={`pill-${lang}`} words={t("home.phrases")}/>
        </span>
        <Sparkles size={16} className="shrink-0 text-accent" aria-hidden="true" />
      </div>

      <Link
        to="/sobre"
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-xs tracking-[0.3em] text-muted hover:text-white"
      >
        {t("home.explore")}
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}