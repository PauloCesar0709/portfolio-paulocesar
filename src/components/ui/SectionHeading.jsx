export default function SectionHeading({as: Tag = "h2", children, ...rest}){
    return (
        <Tag className="mb-4 font-mono text-lg" {...rest}>
            <span className="text-accent" aria-hidden="true">#</span> {children}
        </Tag>
    );
}