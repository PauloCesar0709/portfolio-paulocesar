import { useTypewriter } from "../../hooks/useTypewriter";

export default function Typewriter({words, ...options}) {
    const text = useTypewriter(words, options);

    return (
        <>
            {/* Leitores de tela leem o texto completo, sem a animação */}
            <span className="sr-only">{words.join(". ")}</span>

            <span aria-hidden="true">
                {text}
                <span className="cursor" />
            </span>
        </>
    );
}