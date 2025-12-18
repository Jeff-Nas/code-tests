
const textVariants = {
    default: "text-xl",
    muted: "text-xl text-(--text-secondary)",
    heading: "text-2xl",
    mega: "text-3xl"
}

export function Typography({
    as: Tag = "span",
    textStyle = "default",
    className = "",
    children,
    ...props
}) {
    return (
        <Tag className={`${className} ${textVariants[textStyle]}`}
            {...props}
        >
            {children}
        </Tag>
    )
}