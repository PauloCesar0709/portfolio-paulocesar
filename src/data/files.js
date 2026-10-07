export const files = [
    { type: "file", id: "home", ext: "jsx", href: "/" },
    {
        type: "folder",
        id: "portfolio",
        defaultOpen: true,
        children: [
            { type: "file", id: "about", ext: "md", href: "/sobre" },
            { type: "file", id: "stack", ext: "jsx", href: "/linguagens" },
            {
                type: "folder",
                id: "projects",
                defaultOpen: true,
                children: [
                    { type: "file", id: "project1", ext: "py", href: "/projetos" },
                    { type: "file", id: "project2", ext: "java", href: "/projetos" },
                ],
            },
            { type: "file", id: "resume", ext: "pdf", href: "/curriculo" },
            { type: "file", id: "contact", ext: "js", href: "/contato" },
        ],
    },
];