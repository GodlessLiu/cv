import { PropsWithChildren, FC, useState, useEffect, useContext } from 'react';
import data from '@/data/resume';
import { I18nHandeleData, LanguageContextType } from "@/types";
import { createContext } from 'react';

const initialState: LanguageContextType = { local: 'zh', staticData: null, setLanguage: () => null }
const LanguageProvider = createContext<LanguageContextType>(initialState)


export const LanguageHandle: FC<PropsWithChildren> = ({ children }) => {
    const initLocal = localStorage.getItem('local') as keyof I18nHandeleData
    const [local, setLocal] = useState<keyof I18nHandeleData>(initLocal || 'zh')
    const [staticData, setData] = useState(data[local])

    useEffect(() => {
        localStorage.setItem('local', local)
        setData(data[local])
    }, [local])

    const value = {
        local,
        staticData,
        setLanguage: setLocal
    }
    return (
        <LanguageProvider.Provider value={value}>
            {children}
        </LanguageProvider.Provider>
    )
}


export const useI18n = () => {
    const context = useContext(LanguageProvider)
    if (context === undefined)
        throw new Error("useI18n must be used within a LanguageContext")

    return context
}