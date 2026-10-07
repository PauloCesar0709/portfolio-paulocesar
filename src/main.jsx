import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./i18n/LanguageProvider";
import App from "./App";

import "@fontsource/bebas-neue";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/jetbrains-mono/400.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
