import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";


type TypographyType = FC<PropsWithChildren & { className?: string, html?: string }>

const TypographyH1: TypographyType = ({ children, className }) => {
    return <h1 className={cn("font-bold text-3xl ", className)}>{children}</h1>
}

const TypographyH2: TypographyType = ({ children, className }) => {
    return <h2 className={cn("font-extrabold text-md ", className)}>{children}</h2>
}

const TypographyH3: TypographyType = ({ children, className }) => {
    return <h3 className={cn("font-extrabold text-sm ", className)}>{children}</h3>
}
const TypographyH4: TypographyType = ({ children, className }) => {
    return <h4 className={cn("font-extrabold text-sm ", className)}>{children}</h4>
}

const TypographySmall: TypographyType = ({ children, className }) => {
    return <small className={cn('text-gray-500', className)}>{children}</small>
}

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographySmall }