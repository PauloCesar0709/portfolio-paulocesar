import { useState, useEffect } from "react";

const reduceMotion = () => 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function useTypewriter (
    words, {speed = 70, deleteSpeed = 40, pause = 1600, loop = true} = {}
) {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);
    const reduced = reduceMotion();

    useEffect(() => {
        if (reduced) return;

        const word = words[index % words.length];
        let delay = deleting ? deleteSpeed : speed;
        let next;

        if (!deleting && text === word){
            // Terminou de digitar a palavra
            if (!loop && index >= words.length - 1) return;
            delay = pause;
            next = () => setDeleting(true);
        } else if (deleting && text === ""){
            // Terminou de apagar: vai para a próxima palavra
            delay = 300;
            next = () => {
                setDeleting(false);
                setIndex((i) => i + 1);
            };
        } else {
            // Digita ou apaga uma letra
            next = () => setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        }

        const timer = setTimeout(next, delay);
        return () => clearTimeout(timer);
    }, [text, deleting, index, words, speed, deleteSpeed, pause, loop, reduced]);

    return reduced ? words[0] : text;
}