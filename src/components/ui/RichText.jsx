export default function RichText({text}){
    return (
        <>
                {text.split("**").map((part, i) => i % 2 === 1 ? (
                    <strong key={i} className="font-medium text-accent-text">
                        {part}
                    </strong>
                ) : (
                    part
                )
            )}
        </>
    );
}