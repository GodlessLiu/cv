"use client"

import * as React from "react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator
} from "@/components/ui/command"
import { cn } from "@/lib/utils"
import { MdiGithub } from "@/components/icons/github"
import { IcOutlineLocalPrintshop } from "@/components/icons/print"
import { MdiWebCancel } from "@/components/icons/web"
import { MaterialSymbolsActionKeyOutline } from "@/components/icons/setting"

export const CommandMenu: React.FC<{ calssName?: string }> = ({ calssName }) => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    const go = (url: string) => {
        window.open(url, "_blank");
    }
    return (
        <>
            <p className={cn('text-sm text-muted-foreground py-2 text-center fixed bottom-0 w-full opacity-80 hidden sm:block', calssName)}>
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
            <div className="fixed bottom-5 right-3 opacity-90 p-2 rounded-full shadow-lg">
                <MaterialSymbolsActionKeyOutline fontSize={24} className="cursor-pointer inline-block sm:hidden" onClick={() => setOpen(true)} />
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Actions">
                        <CommandItem onSelect={() => {
                            setOpen(false);
                            setTimeout(() => {
                                window.print();
                            }, 1000);
                        }}>
                            <IcOutlineLocalPrintshop className="mr-2 h-4 w-4" />
                            <span>Print</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem onSelect={() => go("https://github.com/GodlessLiu")}>
                            <MdiGithub className="mr-2 h-4 w-4" />
                            <span>Github</span>
                        </CommandItem>
                        <CommandItem onSelect={() => go('https://aifengliu.top')}>
                            <MdiWebCancel className="mr-2 h-4 w-4" />
                            <span>Personal Website</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
