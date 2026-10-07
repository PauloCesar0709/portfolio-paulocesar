import { useI18n } from "../../i18n/useI18n";

export default function LanguageSwitcher() {
  const { lang, setLang, languages, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("shell.language")}
      className="mt-auto flex gap-2 font-mono text-xs"
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-md border px-3 py-1.5 ${
            lang === code ? "border-accent bg-accent-soft text-white" : "border-line text-muted hover:text-white"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}