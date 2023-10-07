import clsx from "clsx";

interface Props {
    variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";

    component?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "div"
    | "p"
    | "span";

    theme?:
    | "black"
    | "gray"
    | "white"
    | "primary"
    | "secondary";

    weight?:
    | "regular"
    | "medium";

    className?: string;


    children: React.ReactNode;
}

export const Typography = ({ variant = "h3", children, component: Component = "div", theme = "black", weight = "regular", className }: Props) => {

    let variantStyles: string = "";

    switch (variant) {
        case "display":
            variantStyles = "text-red-500"
            break;
        case "h1":
            variantStyles = "text-green-500"
            break;
    }


    return (
        <Component className={clsx(variantStyles, className)}>
            {children}
        </Component>
    )
}