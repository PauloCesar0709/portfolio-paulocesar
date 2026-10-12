import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Reveal from "../ui/Reveal";
import { useI18n } from "../../i18n/useI18n";

export default function ProjectCard({ project, delay = 0 }){
    const { t } = useI18n();
    const [imgFailed, setImgFailed] = useState(false);
    const { id, name, file, image, repo, stack } = project;

    return (
        <li className="h-full">
            <Reveal delay={delay} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors duration-300 hover:border-accent/60">
                    {/* Barra da janela */}
                    <div
                        aria-hidden="true"
                        className="flex items-center gap-1.5 border-b border-line bg-sidebar px-3 py-2.5"
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-mac-red" />
                        <span className="h-2.5 w-2.5 rounded-full bg-mac-yellow" />
                        <span className="h-2.5 w-2.5 rounded-full bg-mac-green" />
                        <span className="ml-3 truncate font-mono text-xs text-muted">{file}</span>
                    </div>

                    {/* Imagem */}
                    <div className="relative aspect-video overflow-hidden">
                        {imgFailed ? (
                            <div 
                                aria-hidden="true"
                                className="flex h-full w-full items-end p-3 font-mono text-xs text-white/70"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, var(--color-accent-soft), var(--color-accent) 70%, var(--color-green))",
                                }}
                            >
                                {file}
                            </div>
                        ) : (
                            <img
                                src={image}
                                alt={t("projects.imageAlt", { name })}
                                width={800}
                                height={450}
                                loading="lazy"
                                decoding="async"
                                onError={() => setImgFailed(true)}
                                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                            />
                        )}
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-1 flex-col gap-4 p-5">
                        <h2 className="text-xl font-medium leading-snug">{name}</h2>
                        <div>
                            <p className="font-mono text-xs text-green">
                                {t("projects.commentDescription")}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                                {t(`projects.items.${id}.description`)}
                            </p>
                        </div>
                        <div>
                            <p className="font-mono text-xs text-green">
                                {t("projects.commentStack")}
                            </p>
                            <ul className="mt-2 flex flex-wrap gap-2">
                                {stack.map((tech) => (
                                    <li
                                        key={tech}
                                        className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent-text"
                                    >
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t("projects.githubLabel", {name})}
                            className="group/btn mt-auto inline-flex w-fit items-center gap-2 rounded-lg border border-line px-4 py-2 font-mono text-xs transition-colors hover:border-accent hover:bg-accent-soft"
                        >
                            <SiGithub size={16} color="currentColor" aria-hidden="true" />
                            GitHub
                            <ArrowUpRight 
                                size={14}
                                aria-hidden="true"
                                className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                            />
                        </a>
                    </div>
                </article>
            </Reveal>
        </li>
    );
}