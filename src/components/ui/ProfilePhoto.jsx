import { useState } from "react";

export default function ({src, alt, initials}){
    const [failed, setFailed] = useState(false);

    return (
        <div className="shrink-0 rounded-full border-2 border-white shadow-[0_0_0_4px_var(--color-base),0_0_0_5px_var(--color-accent),0_0_32px_#7C7CF059] transition-transform duration-300 motion-safe:hover:scale-105">
            {failed ? (
                <div
                    role="img"
                    aria-label={alt}
                    className="flex h-32 w-32 items-center justify-center rounded-full bg-card font-display text-5xl text-muted md:h-44 md:w-44"
                >
                    {initials}
                </div>    
            ) : (
                <img
                    src={src}
                    alt={alt}
                    width={176}
                    height={176}
                    decoding="async"
                    onError={() => setFailed(true)}
                    className="h-32 w-32 rounded-full object-cover md:h-44 md:w-44"
                />
            )}
        </div>
    );
}