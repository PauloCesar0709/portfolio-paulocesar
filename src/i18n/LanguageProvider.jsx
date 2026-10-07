import { useState, useEffect, useCallback, useMemo } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations, languages, fallbackLang } from "./i18n";


function lookup(lang, key) {
  return key.split(".").reduce((obj, part) => obj?.[part], translations[lang]);
}

function getInitialLang(){
    try {
        const saved = localStorage.getItem("lang");
        if (languages.includes(saved)) return saved;
    } catch {

    }

    const browser = navigator.language?.slice(0, 2);
    return languages.includes(browser) ? browser : fallbackLang;
}

export default function LanguageProvider({children}){
    const [lang, setLang] = useState(getInitialLang);

    const t = useCallback(
        (key, vars) => {
            let value = lookup(lang, key) ?? lookup(fallbackLang, key);

            if (value === undefined){
                console.warn(`Tradução ausente: "${key}"`);
                return key;
            }

            if (typeof value === "string" && vars){
                value = value.replace(/\{\{(\w+)\}\}/g, (_, name) => vars[name] ?? "");
            }

            return value;
        },

        [lang]
    );

    useEffect(() => {
        document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
        document.title = t("meta.title");
        try {
            localStorage.setItem("lang", lang);
        } catch {
            // ignorar
        }
    }, [lang, t]);

    const value = useMemo( () => ({ lang, setLang, t, languages }), [lang, t]);

    return (
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>);
}