import Reveal from "../components/ui/Reveal";
import OrbitSystem from "../components/sections/OrbitSystem";
import { stack, rings } from "../data/stack";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";

export default function Stack() {
  const { t } = useI18n();
  
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <h1 className="sr-only">{t("stack.title")}</h1>

      <Reveal className="w-full">
        <OrbitSystem stack={stack} rings={rings} center={profile.initials} />
      </Reveal>

      <ul aria-label={t("stack.orbitLabel")} className="sr-only">
        {stack.map(({ id, label }) => (
          <li key={id}>{label}</li>
        ))}
      </ul>
    </div>
  );
}