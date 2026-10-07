import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function useI18n(){
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error ("useI18n precisa estar dentro de <LanguageProvider>");
    }

    return context;
}