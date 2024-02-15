import { TypographyH3 } from "@/components/typography";
import { cn, formateText } from "@/lib/utils";
import { FC } from "react";

type Props = FC<{ titleLeft: string, titleMid?: string, timeline?: string, lists?: string[], className?: string }>

export const SectionWithTitle: Props = ({ titleLeft, titleMid, timeline, lists, className }) => {
    return (
        <div className={cn("mt-2", className)}>
            <TypographyH3 className="flex flex-row mb-1">
                <span className="flex-1">
                    {titleLeft}
                    <span className="ml-2 hidden sm:inline-block">
                        {titleMid ? titleMid : ''}
                    </span>
                </span>
                <span className="text-right mr-3">
                    {timeline}
                </span>
            </TypographyH3>
            <ul className="px-4">
                {lists?.map((item) => {
                    const r = formateText(item);
                    return <li className=" list-[square]" key={r} dangerouslySetInnerHTML={{ __html: r }}>
                    </li>
                })}
            </ul>
        </div>
    )
}

