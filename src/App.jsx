import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Stack from "./pages/Stack";
import Projetos from "./pages/Projetos";
import Curriculo from "./pages/Curriculo";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="linguagens" element={<Stack />} />
        <Route path="projetos" element={<Projetos />} />
        <Route path="curriculo" element={<Curriculo />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
