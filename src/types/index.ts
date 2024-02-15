export type I18nHandeleData = {
    zh: ResumeData,
    en: ResumeData
}

export type LanguageContextType = { local: keyof I18nHandeleData, staticData: ResumeData | null, setLanguage: (local: keyof I18nHandeleData) => void }

type ListWithoutTitle = {
    type: "listWithoutTitle";
    lists: string[];
}

type ListWithTitle = {
    type: "listWithTitle";
    titleLeft: string;
    titleMid?: string;
    timeline?: string;
    lists: string[];

}

type Text = {
    type: "text";
    lists: string[];

}


export type InfoType = {
    title: string;
    data: Array<ListWithTitle | ListWithoutTitle | Text>
}
export type ResumeData = {
    name: string;
    status: string;
    contactInfo: {
        phone: string;
        email: string;
        home: string;
    };
    age: number;
    Intention: string;
    info: InfoType[];
}