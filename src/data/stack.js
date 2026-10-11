import {
    SiReact, SiPython, SiOpenjdk, SiJavascript, SiGit, SiNodedotjs, SiDocker, SiVite, SiCss,
    SiPostgresql, SiMysql, SiMongodb, SiHtml5, SiTailwindcss, SiSpringboot, SiFigma, SiTrello,
    SiJson,
} from "@icons-pack/react-simple-icons"

// k = raio da órbita como fração da largura do sistema (0 a 0.5)
export const rings = [
    { k: 0.18, duration: 26 },
    { k: 0.35, duration: 38, reverse: true },
    { k: 0.51, duration: 52 },
    { k: 0.68, duration: 60, reverse: true },
];

// ring = índice da órbita em "rings" (0 é a mais interna)
export const stack = [
    { id: "react", label: "React", Icon: SiReact, ring: 0 },
    { id: "python", label: "Python", Icon: SiPython, ring: 0 },
    { id: "openJDK", label: "Java", Icon: SiOpenjdk, ring: 0, color: "#F2F2F4"},

    { id: "html", label: "HTML", Icon: SiHtml5, ring: 1 },
    { id: "javaScript", label: "Java Script", Icon: SiJavascript, ring: 1 },
    { id: "css", label: "CSS", Icon: SiCss, ring: 1 },
    { id: "git", label: "Git", Icon: SiGit, ring: 1 },

    { id: "json", label: "Json", Icon: SiJson, ring: 2, color: "#F2F2F4" },
    { id: "postgreSql", label: "PostgreSQL", Icon: SiPostgresql, ring: 2 },
    { id: "mySql", label: "MySQL", Icon: SiMysql, ring: 2 },
    { id: "mongoDb", label: "MongoDB", Icon: SiMongodb, ring: 2 },
    { id: "springBoot", label: "Spring Boot", Icon: SiSpringboot, ring: 2 },

    { id: "node", label: "Node.js", Icon: SiNodedotjs, ring: 3 },
    { id: "docker", label: "Docker", Icon: SiDocker, ring: 3 },
    { id: "vite", label: "Vite", Icon: SiVite, ring: 3 },
    { id: "tailwind", label: "Tailwind", Icon: SiTailwindcss, ring: 3 },
    { id: "figma", label: "Figma", Icon: SiFigma, ring: 3 },
    { id: "trello", label: "Trello", Icon: SiTrello, ring: 3 },
];
