export const files = [
    { type: "file", name: "home.jsx", href: "/" },
    {
        type: "folder",
        name: "meu-portfolio",
        defaultOpen: true,
        children: [
            { type: "file", name: "sobre.md", href: "/sobre" },
            { type: "file", name: "linguagens-e-ferramentas.jsx", href: "/linguagens" },
            {
                type: "folder",
                name: "projetos",
                defaultOpen: true,
                children: [
                    { type: "file", name: "championsOfThePyArena.py", href: "/projetos" },
                    { type: "file", name: "radioBrowserAPI.js", href: "/projetos" },
                ],
            },
            { type: "file", name: "curriculo.pdf", href: "/curriculo" },
            { type: "file", name: "contatos.json", href: "/contato" },
        ],
    },
];