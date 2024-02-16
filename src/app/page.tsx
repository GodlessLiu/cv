import { TypographyH1, TypographyH3, TypographyH4 } from "@/components/typography";
import { useI18n } from "@/components/provider/language-provider";
import { LanguageUi } from "@/components/languageUi";
import { ThemeSwitch } from "@/components/themUi";
import RenderInfo from "@/components/renderInfo";
import { CommandMenu } from "@/components/command-menu";

export default function App() {
    const { staticData, local } = useI18n();
    return (
        <div className="app min-h-screen text-gray-700 dark:text-gray-200 bg-white dark:bg-black">
            <div className="menu fixed  opacity-90 top-0 p-2 flex flex-row justify-end w-full">
                <LanguageUi className=" mr-2" />
                <ThemeSwitch />
            </div>
            <main className="mx-auto max-w-4xl md:p-16 p-2 pt-10" id="main">
                <div>
                    <TypographyH1 className="mb-1">{staticData!.name + ' ' + staticData!.status}</TypographyH1>
                    <TypographyH4 className="mb-1">{staticData!.contactInfo.phone} | {staticData!.contactInfo.email} | {staticData!.contactInfo.home}</TypographyH4>
                    <TypographyH3>
                        <span className='mr-8'>
                            {local === 'zh' ? "年龄:" : "Age:"}{staticData!.age}
                        </span>
                        <span>
                            {local === 'zh' ? "求职意向:" : "Intention:"}{staticData!.Intention}
                        </span>
                    </TypographyH3>
                </div>
                {
                    staticData!.info.map((item) => {
                        return (
                            <RenderInfo key={item.title} info={item} />
                        )
                    })
                }
            </main>
            <CommandMenu />
        </div>
    )
}