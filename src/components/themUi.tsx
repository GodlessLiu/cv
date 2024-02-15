import { useTheme } from "@/components/theme-provider";
import { FC } from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

export const ThemeSwitch: FC<{ className?: string }> = ({ className }) => {
    const { setTheme, theme } = useTheme()
    const handleThemeChange = (e: boolean) => {
        if (e) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    const isDark = theme === 'dark'
    return (
        <Switch className={cn(className)} onCheckedChange={handleThemeChange} checked={isDark} />
    )
}