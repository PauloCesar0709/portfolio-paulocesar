import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import Card from "../components/ui/Card";
import RichText from "../components/ui/RichText";
import ProfilePhoto from "../components/ui/ProfilePhoto";
import { profile } from "../data/profile";
import { useI18n } from "../i18n/useI18n";

export default function Sobre() {
  const { t } = useI18n();

  return (
    <div className="mx-auto max-w-4xl">
      {/* Sobre mim */}
      <Reveal>
        <SectionHeading as="h1">{t("about.title")}</SectionHeading>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <ProfilePhoto
            src={"/foto.jpg"}
            alt={t("about.photoAlt")}
            initials={profile.initials}
          />
          <p className="text-center leading-relaxed text-white/80 md:text-left md:text-lg">
            <RichText text={t("about.text")}/>
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <SectionHeading>{t("about.education.title")}</SectionHeading>
          <Card>{t("about.education.pucminas.course")}</Card>
        </div>
      </Reveal>
    </div>
  );
}