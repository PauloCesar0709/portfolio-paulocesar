import ResumeViewer from "../components/sections/ResumeViewer";
import { useI18n } from "../i18n/useI18n";

export default function Curriculo() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="sr-only">{t("resume.title")}</h1>
      <ResumeViewer />
    </div>
  );
}