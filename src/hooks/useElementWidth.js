import { useState, useLayoutEffect } from "react";

export function useElementWidth(ref) {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });
        observer.observe(el);

        return () => observer.disconnect();
    }, [ref]);

    return width;
}