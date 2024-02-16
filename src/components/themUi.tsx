import { useTheme } from "@/components/provider/theme-provider";
import { FC, MouseEvent } from "react";
import { MaterialSymbolsSunnyOutline } from "@/components/icons/sun";
import { MaterialSymbolsDarkModeOutlineRounded } from "@/components/icons/moon";
import { cn } from "@/lib/utils";

export const ThemeSwitch: FC<{ className?: string }> = ({ className }) => {
    const { setTheme, theme } = useTheme()
    let isDark = theme === 'dark'
    const handleThemeChange = (event: MouseEvent<HTMLSpanElement>) => {
        function changeTheme(flag: boolean) {
            flag ? setTheme('dark') : setTheme('light')
        }
        //@ts-expect-error experimental API
        const isAppearanceTrasiation = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!isAppearanceTrasiation) {
            changeTheme(!isDark)
            return
        }
        const x = event.clientX
        const y = event.clientY
        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
        )
        // @ts-expect-error: Transition API
        const transition = document.startViewTransition(() => {
            changeTheme(!isDark)
        })
        transition.ready
            .then(() => {
                const clipPath = [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ]
                document.documentElement.animate(
                    {
                        clipPath: isDark
                            ? [...clipPath].reverse()
                            : clipPath,
                    },
                    {
                        duration: 400,
                        easing: 'ease-in',
                        pseudoElement: isDark
                            ? '::view-transition-old(root)'
                            : '::view-transition-new(root)',
                    },
                )
            })

    }
    return (
        <span className={cn(className)} onClick={handleThemeChange}>
            {
                isDark ? <MaterialSymbolsDarkModeOutlineRounded fontSize={24} /> : <MaterialSymbolsSunnyOutline fontSize={24} />
            }
        </span>
    )
}