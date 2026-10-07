import WindowDots from "./WindowDots";
import FileTreeItem from "./FileTreeItem";
import { files } from "../../data/files";
import { useI18n } from "../../i18n/useI18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Sidebar({minimized, onClose, onMinimize, onExpand}){
    const { t } = useI18n();

    return (
        <aside className="flex flex-col gap-6 border-r border-line bg-sidebar p-4">
            {/* Perfil */}
            <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border-2 border-white bg-card" />
                <div>
                    <p className="font-medium">Paulo César</p>
                    <p className="font-mono text-[11px] tracking-[0.25em] text-muted">
                        {t("shell.portfolio")}
                    </p>
                </div>
            </div>

            {/* Janela do Explorador */}
            <div className="rounded-xl border border-line bg-black/20">
                <div className="flex items-center gap-4 px-4 py-3">
                    <WindowDots
                        onClose={onClose}
                        onMinimize={onMinimize}
                        onExpand={onExpand}
                    />
                    <span className="font-mono text-sm text-muted">{t("shell.explorer")}</span>
                </div>
                <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out 
                    ${ minimized ? "grid-rows-[0fr]" : "grid-rows-[1fr]"}`}
                >
                    <nav className="overflow-hidden" aria-label={t("shell.explorerLabel")}>
                        <div className="border-t border-line p-2 font-mono text-sm">
                            {files.map((item) => (
                                <FileTreeItem key={item.id} item={item}/>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            <LanguageSwitcher />

        </aside>
    );
}