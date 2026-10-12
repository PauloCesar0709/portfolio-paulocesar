import ProjectCard from "../components/sections/ProjectCard";
import { projects } from "../data/projects";
import { useI18n } from "../i18n/useI18n";

export default function Projetos() {
  const { t } = useI18n();

   return (
      <div className="mx-auto max-w-5xl">
          <h1 className="sr-only">{t("projects.title")}</h1>

          <ul className="grid gap-6 md:grid-cols-2">
              {projects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    delay={(i % 2) * 0.12}
                  />
              ))}
          </ul>
      </div>
   );
}