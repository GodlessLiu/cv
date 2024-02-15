import { SectionWithTitle } from "@/components/sectionWithTitle";
import { SectionWithoutTitle } from "@/components/sectionWithoutTitle";
import { SectionHandle } from "@/components/ui/section";
import { InfoType } from "@/types";
import { FC } from "react";

const RenderInfo: FC<{ info: InfoType }> = ({ info }) => {
    return <SectionHandle title={info.title} key={info.title} >
        {
            info.data.map(item => {
                switch (item.type) {
                    case "listWithTitle":
                        return <SectionWithTitle titleLeft={item.titleLeft} titleMid={item.titleMid} timeline={item.timeline} key={item.titleLeft} lists={item.lists} />
                    case 'listWithoutTitle':
                        return <SectionWithoutTitle key={item.lists[0]} lists={item.lists} />
                    case 'text':
                        return <p className=" mb-2" key={item.lists[0]}>
                            {
                                item.lists
                            }
                        </p>
                }
            })
        }

    </SectionHandle>
}


export default RenderInfo;