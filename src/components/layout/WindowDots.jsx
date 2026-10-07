import { useI18n } from "../../i18n/useI18n";

export default function WindowDots({onClose, onMinimize, onExpand}){
    const { t } = useI18n();

    const dots = [
        {label: t("window.close"), color: "bg-mac-red", symbol: "×", onClick: onClose},
        {label: t("window.minimize"), color: "bg-mac-yellow", symbol: "-", onClick: onMinimize},
        {label: t("window.fullscreen"), color: "bg-mac-green", symbol: "⤡", onClick: onExpand}
    ];
    return (
        <div className="group flex items-center gap-2">
            {dots.map((dot) => (
                <button
                    key={dot.label}
                    type="button"
                    aria-label={dot.label}
                    title={dot.label}
                    onClick={dot.onClick}
                    className={`flex h-3 w-3 items-center justify-center rounded-full text-[10px] font-bold leading-none text-black/60 ${dot.color}`}
                >
                    <span className="opacity-0 transition-opacity group-hover:opacity-100">
                        {dot.symbol}
                    </span>
                </button>
            ))}
        </div>
    );
}