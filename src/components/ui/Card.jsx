export default function Card({ as: Tag = "div", className = "", children, ...rest }){
    return (
        <Tag className={`rounded-xl border border-line bg-card p-4 ${className}`} 
        {...rest}>
            {children}            
        </Tag>
    );

}