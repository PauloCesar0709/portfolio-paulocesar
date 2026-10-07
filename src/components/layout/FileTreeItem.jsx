import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../../i18n/useI18n";
import { 
    Folder,
    FolderOpen,
    FileCode,
    FileText,
    FileJson,
    ChevronRight,
 } from "lucide-react";

const kinds = {
    jsx: { Icon: FileCode, color: "text-blue" },
    js: { Icon: FileCode, color: "text-yellow" },
    py: { Icon: FileCode, color: "text-green" },
    java: {Icon: FileCode, color: "text-orange"},
    md: { Icon: FileText, color: "text-muted" },
    pdf: { Icon: FileText, color: "text-red" },
    json: { Icon: FileJson, color: "text-yellow" },
};

export default function FileTreeItem({item, depth = 0}){
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
                            <FileTreeItem key={child.id} item={child} depth={depth + 1} />
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

