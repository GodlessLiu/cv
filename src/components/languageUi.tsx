import { FC } from "react"
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { HeroiconsLanguage20Solid } from "@/components/icons/languageIcon"
import { useI18n } from "@/components/language-provider"
import { I18nHandeleData } from "@/types"
import { cn } from "@/lib/utils"

export const LanguageUi: FC<{ className?: string }> = ({ className }) => {
    const { local, setLanguage } = useI18n()
    const setlg = (lg: string) => {
        setLanguage(lg as keyof I18nHandeleData)
    }
    return <div className={cn(className)}>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <HeroiconsLanguage20Solid fontSize={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuRadioGroup value={local} onValueChange={setlg}>
                    <DropdownMenuRadioItem value="zh">中文</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu >

    </div>
}

