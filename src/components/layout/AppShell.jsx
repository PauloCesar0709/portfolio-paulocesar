import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function toggleFullscreen() {
    if (document.fullscreenElement){
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen?.();
    }
}

export default function AppShell(){
    const [sidebar, setSidebar] = useState("open");

    const closed = sidebar === "closed";
    const minimized = sidebar === "minimized"

    return (
        <div
            className={`grid h-screen ${closed ? "grid-cols-1" : "grid-cols-[360px_1fr]"}`}
        >
            {!closed && (
                <Sidebar 
                    minimized={minimized}
                    onClose={() => setSidebar("closed")}
                    onMinimize={() => setSidebar(minimized ? "open" : "minimized")}
                    onExpand={toggleFullscreen}
                />
            )}

            <main className="overflow-y-auto p-8">
                <Outlet />
            </main>

            {closed && (
                <button
                    type="button"
                    onClick={() => setSidebar("open")}
                    className="fixed left-4 top-4 rounded-md border border-line bg-card px-3 py-2 font-mono text-xs text-muted hover:text-white"
                >

                    Abrir explorador
                </button>
            )}
        </div>
    );
}