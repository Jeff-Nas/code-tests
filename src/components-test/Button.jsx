import { Typography } from "./Typography"

const buttonVariants = {
    default: "bg-(--background)",
    primary: "bg-(--primary)"
}

export function Button({
    variant = "defaault",
    className = "",
    children,
    ...props
}) {
    return (
        <Typography
            as="button"
            textStyle="heading"
            className={`
        flex items-center justify-center rounded-2xl
        p-3 cursor-pointer text-(--text) 
        bg-linear-(--gradient)
        hover:bg-linear-(--gradient-hover)
        shadow-(--shadow)
        active:shadow-none
    
        ${buttonVariants[variant]}
        ${className}
        `}
            {...props}
        >
            {children}
        </Typography>
    )

}