import { GraduationCap } from "lucide-react";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import { useI18n } from "../../i18n/useI18n";

const styles = {
    ongoing: {
        badge: "bg-accent-soft text-accent-text",
        dot: "bg-accent shadow-[0_0_10px_var(--color-accent)]",
        pulse: "bg-accent motion-safe:animate-pulse",
    },
    completed: {
        badge: "bg-green-soft text-green",
        dot: "bg-green",
        pulse: "bg-green",
    },
};

export default function EducationCard({item, delay = 0, isLast = false}){
    const { t } = useI18n();
    const s = styles[item.status];
    const base = `about.education.${item.id}`;

    return (
        <li>
            <Reveal delay={delay} className="flex h-full flex-col">
                {/* Linha do tempo */}
                <div className="mb-3 flex item-center" aria-hidden="true">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.dot}`} />
                    <span className={`ml-2 h-px flex-1 bg-line ${isLast ? "" : "md:-mr-4"}`} />
                </div>

                <Card
                    as="article"
                    className="flex flex-1 flex-col gap-3 transition-colors duration-300 hover:border-accent/60"
                >
                    <div className="flex items-start justify-between gap-3">
                        <div className="rounded-lg bg-accent-soft p-2 text-accent-text">
                            <GraduationCap size={20} aria-hidden="true" />
                        </div>

                        <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${s.badge}`}
                        >
                            <span className={`h-1.5 w-1.5 rounded-full ${s.pulse}`} aria-hidden="true"/>
                            {t(`about.status.${item.status}`)}
                        </span>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium leading-snug">{t(`${base}.course`)}</h3>
                        <p className="mt-1 text-sm text-muted">{t(`${base}.institution`)}</p>
                    </div>

                    <p className="mt-auto font-mono text-xs text-muted">
                        <time dateTime={String(item.start)}>{item.start}</time>
                        {" - "}
                        <time dateTime={String(item.end)}>{item.end}</time>
                    </p>
                </Card>
            </Reveal>
        </li>
    );
}