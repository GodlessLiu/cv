import { cn, formateText } from "@/lib/utils";
import { FC } from "react";


type Props = FC<{ lists: string[] | undefined, className?: string }>


export const SectionWithoutTitle: Props = ({ lists, className }) => {
    return (
        <div className={cn("", className)}>
            <ul className="px-4">
                {lists && lists?.map((item) => {
                    const r = formateText(item);
                    return <li className=" list-[square]" key={r} dangerouslySetInnerHTML={{ __html: r }}>
                    </li>
                })}
            </ul>
        </div>
    )
}

