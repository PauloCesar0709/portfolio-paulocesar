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

        stack: {
            title: "Stack",
            orbitLabel: "Tecnologias e Ferramentas",
        },

        projects: {
            title: "Projetos",
            commentDescription: "// descrição",
            commentStack: "// linguagens",
            githubLabel: "Código de {{name}} no GitHub",
            imageAlt: "Captura de tela do projeto {{name}}",
            items: {
                champions: {
                    description: "Jogo de luta local para dois jogadores em que cada participante controla um personagem dentro de uma arena. O objetivo é derrotar o adversário reduzindo sua barra de vida a zero por meio de ataques e movimentação estratégica.",
                },
                radio: {
                    description: "Projeto que consome a Radio Browser API para exibir estações de rádio, permitindo filtrar por capitais, marcar estações como favoritas e ouvi-las diretamente pelo navegador.",
                },
            },
        },

        resume: {
            title: "Currículo",
            viewerLabel: "Visualizador do currículo",
            pagesOne: "{{count}} página",
            pagesOther: "{{count}} páginas",
            zoomIn: "Aumentar zoom",
            zoomOut: "Diminuir zoom",
            zoomReset: "Redefinir zoom (atual: {{value}}%)",
            fullscreen: "Tela cheia",
            exitFullscreen: "Sair da tela cheia",
            download: "Baixar PDF",
            openNewTab: "Abrir em nova aba",
            loading: "Carregando currículo…",
            error: "Não foi possível exibir o currículo aqui.",
        },

        contact: {
            title: "Contato",
            formTitle: "Entre em contato",
            socialsTitle: "Minhas redes",
            socialLink: "{{name}} (abre em nova aba)",
            form: {
                name: "Seu nome:",
                email: "Seu email:",
                message: "Digite sua mensagem:",
                send: "Enviar Mensagem",
                sending: "Enviando...",
            },
            errors: {
                name: "Informe seu nome",
                emailRequired: "Informe seu e-mail",
                emailInvalid: "Digite um e-mail válido",
                message: "Escreva pelo menos 10 caracteres",
            },
            status: {
                success: "Mensagem enviada!",
                error: "Não foi possível enviar agora. Tente de novo ou use uma das redes abaixo.",
                wait: "Aguarde um instante para enviar outra mensagem.",
            },
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

        stack: {
            title: "Stack",
            orbitLabel: "Technologies and Tools",
        },

        projects: {
            title: "Projects",
            commentDescription: "// description",
            commentStack: "// stack",
            githubLabel: "Code for {{name}} on GitHub",
            imageAlt: "Screenshot of the {{name}} project",
            items: {
                champions: {
                    description: "A local two-player fighting game in which each player controls a character inside an arena. The goal is to defeat the opponent by reducing their health bar to zero through attacks and strategic movement.",
                },
                radio: {
                    description: "A project that consumes the Radio Browser API to display radio stations, letting users filter by capital cities, mark stations as favorites and listen to them directly in the browser.",
                },
            },
        },

        resume: {
            title: "Resume",
            viewerLabel: "Resume viewer",
            pagesOne: "{{count}} page",
            pagesOther: "{{count}} pages",
            zoomIn: "Zoom in",
            zoomOut: "Zoom out",
            zoomReset: "Reset zoom (current: {{value}}%)",
            fullscreen: "Full screen",
            exitFullscreen: "Exit full screen",
            download: "Download PDF",
            openNewTab: "Open in new tab",
            loading: "Loading resume…",
            error: "The resume couldn't be displayed here.",
        },
        contact: {
            title: "Contact",
            formTitle: "Get in touch",
            socialsTitle: "My networks",
            socialLink: "{{name}} (opens in a new tab)",
            form: {
                name: "Your name:",
                email: "Your email:",
                message: "Type your message:",
                send: "Send message",
                sending: "Sending…",
            },
            errors: {
                name: "Enter your name",
                emailRequired: "Enter your email",
                emailInvalid: "Enter a valid email",
                message: "Write at least 10 characters",
            },
            status: {
                success: "Message sent!",
                error: "Couldn't send right now. Try again or use one of the networks below.",
                wait: "Please wait a moment before sending another message.",
            },
        },
    },
};