import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { 
    Folder,
    FileCode,
    FolderOpen,
    ChevronRight,
 } from "lucide-react";

 import {
    SiReact, SiPython, SiMarkdown, SiJson, SiIlovepdf, SiOpenjdk,
} from "@icons-pack/react-simple-icons"

const kinds = {
    jsx: { Icon: SiReact, color: "text-jsx-blue" },
    json: { Icon: SiJson, color: "text-json-yellow" },
    py: { Icon: SiPython, color: "text-py-blue" },
    java: {Icon: SiOpenjdk, color: "text-white"},
    md: { Icon: SiMarkdown, color: "text-white" },
    pdf: { Icon: SiIlovepdf, color: "text-pdf-red" },
};

export default function FileTreeItem({item, depth = 0, onNavigate}){
    const { t } = useI18n();
    const [open, setOpen] = useState(item.defaultOpen ?? false);

    // Pasta
    if (item.type === "folder"){
        const label = t(`folders.${item.id}`);
        return (
            <div>
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    style={{paddingLeft: 12 + depth * 16}}
                    className="flex w-full items-center gap-2 rounded-md py-1.5 pr-3 text-left text-muted hover:bg-white/5 hover:text-white"
                >
                
                <ChevronRight
                    size={14}
                    className={`shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
                />

                    {open ? (
                        <FolderOpen size={16} className="shrink-0 text-accent" />
                    ) : (
                        <Folder size={16} className="shrink-0 text-accent" />
                    )}
                    {label}
                </button>

                <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                    <div className="overflow-hidden">
                        {item.children.map((child) => (
                            <FileTreeItem key={child.id} item={child} depth={depth + 1} onNavigate={onNavigate} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Arquivo
    const label = `${t(`files.${item.id}`)}.${item.ext}`;
    const { Icon, color } = kinds[item.ext] ?? kinds.md;

    return(
        <NavLink
            to={item.href}
            onClick={onNavigate}
            end={item.href === "/"}
            style={{ paddingLeft: 12 + depth * 16 + 22 }}
            className={({ isActive }) =>
                `flex items-center gap-2 rounded-md py-1.5 pr-3 ${isActive ? "bg-card text-white" : "text-muted hover:bg-white/5 hover:text-white"}`}
        >
            <Icon size={16} className={`shrink-0 ${color}`} />
            {label}
        </NavLink>
    );
}

