import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useI18n } from "../../i18n/useI18n";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { profile } from "../../data/profile";

function toggleFullscreen() {
    if (document.fullscreenElement){
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen?.();
    }
}

export default function AppShell(){
    const { t } = useI18n();
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const [sidebar, setSidebar] = useState("open");
    const [drawerOpen, setDrawerOpen] = useState(false);

    const sidebarRef = useRef(null);
    const menuButtonRef = useRef(null);
    const wasOpen = useRef(false);

    if (isDesktop && drawerOpen) setDrawerOpen(false);

    const closed = sidebar === "closed";
    const minimized = sidebar === "minimized"
    const showSidebar = !isDesktop || !closed;
    const modalOpen = !isDesktop && drawerOpen;

    useEffect(() => {
      if (!drawerOpen) return;
      const onKey = (e) => e.key === "Escape" && setDrawerOpen(false);
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [drawerOpen]);

  // foco: entra na gaveta ao abrir e volta ao botão ao fechar
  useEffect(() => {
      if (modalOpen) {
        sidebarRef.current
          ?.querySelector("button, a[href]")
          ?.focus({ preventScroll: true });
      } else if (wasOpen.current) {
        menuButtonRef.current?.focus();
      }
      wasOpen.current = modalOpen;
    }, [modalOpen]);

    return (
        <div
            className={`flex h-dvh flex-col md:grid ${closed ? "md:grid-cols-1" : "md:grid-cols-[280px_1fr]"}`}
        >
            <div
                aria-hidden="true"
                onClick={() => setDrawerOpen(false)}
                className={`fixed inset-0 z-30 bg-black/60 transition-opacity duration-300 motion-reduce:transition-none md:hidden ${
                drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
             }`}
            />

            {/* sidebar: gaveta no celular, coluna fixa no desktop */}
            {showSidebar && (
                <div
                        id="sidebar"
                        ref={sidebarRef}
                        inert={!isDesktop && !drawerOpen}
                        role={modalOpen ? "dialog" : undefined}
                        aria-modal={modalOpen ? "true" : undefined}
                        aria-label={modalOpen ? t("shell.menuLabel") : undefined}
                        className={`fixed inset-y-0 left-0 z-40 w-[min(85vw,320px)] shadow-2xl shadow-black/50 transition-transform duration-300 ease-out motion-reduce:transition-none md:static md:z-auto md:h-full md:w-auto md:translate-x-0 md:shadow-none md:transition-none ${
                        drawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <Sidebar
                        minimized={isDesktop && minimized}
                        onClose={() => (isDesktop ? setSidebar("closed") : setDrawerOpen(false))}
                        onMinimize={() => setSidebar(minimized ? "open" : "minimized")}
                        onExpand={toggleFullscreen}
                        onNavigate={() => setDrawerOpen(false)}
                    />
                </div>
            )}

            {/* barra do topo (só no celular) */}
            <header
                inert={modalOpen}
                className="flex h-14 flex-none items-center gap-3 border-b border-line bg-sidebar px-3 md:hidden"
             >
                <button
                    ref={menuButtonRef}
                    type="button"
                    onClick={() => setDrawerOpen(true)}
                    aria-label={t("shell.openMenu")}
                    aria-expanded={drawerOpen}
                    aria-controls="sidebar"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-line transition-colors hover:border-accent"
                >
                    <Menu size={20} aria-hidden="true" />
                </button>
                <span className="font-medium">{profile.name}</span>
            </header>

            <main inert={modalOpen} className="min-h-0 flex-1 overflow-y-auto p-4 md:p-8">
                <Outlet />
            </main>

            {isDesktop && closed && (
                <button
                    type="button"
                    onClick={() => setSidebar("open")}
                    className="fixed left-4 top-4 rounded-md border border-line bg-card px-3 py-2 font-mono text-xs text-muted hover:text-white"
                >
                {t("shell.openExplorer")}
                </button>
            )}
       </div>
    );
}