import { Fullscreen } from "lucide-react";
import { title } from "motion/react-client";

export const languages = ["pt", "en"];
export const fallbackLang = "pt";

export const translations = {
    pt: {
        meta: { title: "Paulo César | Engenheiro de Software" },

        shell: {
            portfolio: "PORTFÓLIO",
            explorer: "explorador",
            explorerLabel: "Explorador de Arquivos",
            openExplorer: "Abrir explorador",
            language: "Idioma",
        },

        window: {
            close: "Fechar",
            minimize: "Minimizar",
            fullscreen: "Tela Cheia",
        },

        folders: {
            projects: "projetos",
            portfolio: "meu-portfolio",
        },

        files: {
            home: "home",
            about: "sobre",
            stack: "linguagens-e-habilidades",
            project1: "championsOfThePyArena",
            project2: "radioBrowserAPI",
            stats: "estatisticas",
            resume: "curriculo",
            contact: "contato",
        },

        home: {
            role: "ENGENHEIRO DE SOFTWARE",
            tagline: "Construindo softwares inteligentes, da ideia à implementação",
            phrases: ["Automatizando fluxos", "Criando interfaces", "Analisando dados"],
            explore: "EXPLORAR",
        },

        about: {
            title: "Sobre mim",
            text: "Sou **Paulo César**, graduando em **Engenharia de Software**. Gosto de transformar problemas complexos em soluções simples. Comecei a programar aos meus 16 anos e desde então não parei mais. O que mais me move é a vontade de contribuir para um mundo melhor e mais **acessível**, por meio da tecnologia.",
            photoAlt: "Minha foto",
            status: {ongoing: "Em andamento", completed: "Concluído"},
            education: {
                title: "Formações",
                pucminas: {
                    course: "Engenharia de Software",
                    institution: "Pontifícia Universidade Católica (PUC Minas)",
                },
                senac: {
                    course: "Desenvolvimento de Sistemas",
                    institution: "Senac - RS",
                },
            },
            beyond: {
                title: "Além do código",
                caption: "Interesses e hábitos além da programação",
                columns: {
                    teams: "Times",
                    hobbies: "Hobbies",
                    skills: "Habilidades",
                    media: "Filmes/Séries",
                },
                items: {
                    teams: ["Cruzeiro", "Houston Rockets", "Buffalo Bills"],
                    hobbies: ["Futebol", "Videogames", "Basquete", "Clash Royale"],
                    skills: ["Comunicação", "Planejamento", "Organização"],
                    media: ["Supernatural", "The Flash", "O Mentalista", "Titãs", "Teen Beach Movie", "Harry Potter", "A casa de cera", "Pânico"],
                },
            },
        },

        projects: {

        },
    },

    en: {
        meta: { title: "Paulo César | Software Engineer" },

        shell: {
            portfolio: 'PORTFOLIO',
            explorer: "explorer",
            explorerLabel: "File Explorer",
            openExplorer: "Open explorer",
            language: "Language",
        },

        window: {
            close: "Close",
            minimize: "Minimize",
            fullscreen: "Full Screen",
        },

        folders: {
            projects: "projects",
            portfolio: "my-portfolio",
        },

        files: {
            home: "home",
            about: "about",
            stack: "stack",
            project1: "championsOfThePyArena",
            project2: "radioBrowserAPI",
            stats: "stats",
            resume: "resume",
            contact: "contact",
        },

        home: {
            role: "SOFTWARE ENGINEER",
            tagline: "Building intelligent software, from idea to implementation.",
            phrases: ["Automating workflows", "Building interfaces", "Analyzing data"],
            explore: "EXPLORE",
        },

        about: {
            title: "About me",
            text: "I'm **Paulo César**, a **Software Engineering** student. I like turning complex problems into simple solutions. I started programming at 16 and haven't stopped since. What drives me most is the desire to contribute to a better and more **accessible** world through technology.",
            photoAlt: "My photo",
            status: {ongoing: "In progress", completed: "Completed"},
            education: {
                title: "Education",
                pucminas: {
                    course: "Software Engineering",
                    institution: "Pontifical Catholic University of Minas Gerais (PUC Minas)",
                },
                senac: {
                    course: "Systems Development",
                    institution: "Senac - RS",
                },
            },
            beyond: {
                title: "Beyond the code",
                caption: "Interests and habits outside of work",
                columns: {
                    teams: "Teams",
                    hobbies: "Hobbies",
                    skills: "Skills",
                    media: "Movies/Series",
                },
                items: {
                    teams: ["Cruzeiro", "Houston Rockets", "Buffalo Bills"],
                    hobbies: ["Soccer", "Video games", "Basketball", "Clash Royale"],
                    skills: ["Communication", "Planning", "Organization"],
                    media: ["Supernatural", "The Flash", "The Mentalist", "Titãs", "Teen Beach Movie", "Harry Potter", "House of wax", "Panic"],
                },
            },
        },

        projects: {

        },
    },
};