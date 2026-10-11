import { span } from "motion/react-client";
import { useI18n } from "../../i18n/useI18n";

const columns = ["teams", "hobbies", "skills", "media"]

export default function BeyondTable({labelledBy}){
    const { t } = useI18n();

    return (
        <div
            role="region"
            aria-labelledby={labelledBy}
            tabIndex={0}
            className="overflow-x-auto rounded-xl border border-line focus-visible: outline-2 focus-visible:outline-accent"
        >
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <caption className="sr-only">{t("about.beyond.caption")}</caption>

                <thead className="bg-card">
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col}
                                scope="col"
                                className="border-line px-4 py-3 font-mono text-xs font-normal text-accent-text first:border-1-0"
                            >
                                {t(`about.beyond.columns.${col}`)}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-line">
                        {columns.map((col) => {
                            const list = t(`about.beyond.items.${col}`);
                            const items = Array.isArray(list) ? list : [];

                            return (
                                <td
                                    key={col}
                                    className="border-l border-line px-4 py-4 align-top transition-colors first:border-l-0 hover:bg-accent/5"
                                >
                                    {items.length > 0 ? (
                                        <ul className="flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent-text"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <span className="text-muted/50" aria-hidden="true">-</span>
                                    )}
                                </td>
                            );
                        })}
                    </tr>  
                </tbody>
            </table>
        </div>
    );
}