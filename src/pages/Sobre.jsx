import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import RichText from "../components/ui/RichText";
import ProfilePhoto from "../components/ui/ProfilePhoto";
import EducationCard from "../components/sections/EducationCard";
import BeyondTable from "../components/sections/BeyondTable";
import { profile } from "../data/profile";
import { education } from "../data/education";
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

      {/* Formações */}
      <section aria-labelledby="education-title" className="mt-14">
        <Reveal>
          <SectionHeading id="education-title">
            {t("about.education.title")}
          </SectionHeading>
        </Reveal>

        <ol className="grid gap-4 md:grid-cols-2">
          {education.map((item, i) => (
            <EducationCard
              key={item.id}
              item={item}
              delay={0.1 + i * 0.12}
              isLast={i === education.length - 1}
            />
          ))}
        </ol>
      </section>

      {/* Além do código */}
      <section aria-labelledby="beyond-title" className="mt-14 pb-8">
        <Reveal>
          <SectionHeading id="beyond-title">
            {t("about.beyond.title")}
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <BeyondTable labelledBy="beyond-title" />
        </Reveal>
      </section>
    </div>
  );
}