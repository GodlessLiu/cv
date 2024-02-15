import { ResumeData } from "@/types";

const DataZh: ResumeData = {
    name: '刘爱丰',
    status: '24届应届生',
    contactInfo: {
        phone: '15390335923',
        email: '2788370451@qq.com',
        home: '四川成都',
    },
    age: 22,
    Intention: '前端开发工程师',
    info: [
        {
            title: '教育经历',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: '四川农业大学 (211 双一流)',
                    titleMid: '计算机科学与技术（本科）',
                    timeline: '2020/9 – 2024/6',
                    lists: [
                        "Github 地址: https://github.com/GodlessLiu",
                        "个人博客网站: https://aifengliu.top/",
                        "小班团支书",
                        "CET4",
                        "校级软件开发工作室前端 leader,具有多次项目开发经验"
                    ]
                }
            ]
        },
        {
            title: '项目经验',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: '赋能中心企业网站',
                    titleMid: '(前端技术负责人)',
                    lists: [
                        "项目简介: 该项目主要包含门户网站和项目接单平台两部分，项目接单平台主要功能是完成不同企业在该平台上发布的需求",
                        "所用技术: Vue3 + Element-plus + Axios + Typescript ",
                        "负责部分：项目基础结构的搭建，以及代码规范的设定，以及 git 工作流的设置。门户网站首页，需求发布功能，项目评分功能，需求评论功能"
                    ]
                }
            ]
        },
        {
            title: '实习经历',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: 'FIT2CLOUD 飞致云',
                    timeline: '2023/7 – 2023/10',
                    lists: [
                        "参与项目: Halo开源项目后台开发     项目Github地址: https://github.com/halo-dev/halo",
                        "产品简介: Halo 强大易用的开源建站工具。Halo后台包括内容管理、外观管理、系统管理、插件管理四部分",
                        "负责部分: 完成导师指定的相关主题的开发,以及后台console端的bug修复"
                    ]
                },
                {
                    type: "listWithTitle",
                    titleLeft: '拓尔思 TRS',
                    timeline: '2023/11 – 2024/3',
                    lists: [
                        "参与项目: 通用权限系统",
                        "产品简介: 通用权限系统是一个基于角色的权限管理系统,主要功能是对其他平台的权限进行统一管理",
                        "负责部分: 修改系统bug,以及完成组长下发的需求,修改项目测试环境部署方式"
                    ]
                }
            ]
        },
        {
            title: '专业技能',
            data: [
                {
                    type: 'listWithoutTitle',
                    lists: [
                        "熟练使用 Javascript 进行编程,对异步编程有较为深入的理解,熟练掌握 ES5 / ES6 + 语法",
                        "熟练使用 Axios 进行网络请求发送,并且深入 Axios 源码",
                        "熟练使用 Vue2 / Vue3 进行项目开发",
                        "熟练使用 Webpack / vite 对项目进行打包,开发过vite插件",
                        "熟练使用 Vue 常用UI库,如 AntDesign、ElementPlus 等，并且使用过 Formkit 和 Tiptap 进行表单开发和富文本编辑器开发",
                        "能使用 Node 进行后台项目和工具开发",
                        "了解chrome浏览器插件基本工作原理,并开发过浏览器插件",
                        "能使用 Git 进行协同开发,以及了解 Github 工作流",
                        "了解webAssemply工作原理,使用过webContainer技术",
                        "能使用 Linux 基本命令"
                    ]
                }
            ]
        },
        {
            title: '自我评价',
            data: [
                {
                    type: 'text',
                    lists:
                        [
                            "在工作上，对待工作认真负责，善于沟通，并且能全身心的投入工作，能为团队带来新思路和解决方案。在学习中，具备强大的学习能力，喜欢学习新知识，并对新知识进行总结，将学习的新知识用于实践。最后，我相信我能胜任该职位，期待有机会加入公司，为公司创造价值。"
                        ]
                }
            ]
        }
    ]
} as const;

const DataEn: ResumeData = {
    name: 'Hilary Liu',
    status: '',
    contactInfo: {
        phone: '15390335923',
        email: '2788370451@qq.com',
        home: 'Chengdu,Sichuan,China',
    },
    age: 22,
    Intention: 'Front End Developer',
    info: [
        {
            title: 'Education',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: 'Sichuan Agricultural University',
                    titleMid: '(Computer Science and Technology)',
                    timeline: '2020/9  – 2024/6 ',
                    lists: [
                        "Personal Github address: https://github.com/GodlessLiu",
                        "Personal blog website: https://aifengliu.top/",
                        "class Youth League Branch Secretary",
                        "CET4",
                        "Front end leader of school level software development studio with multiple project development experiences"
                    ]
                }
            ]
        },
        {
            title: 'Project Experience',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: '赋能中心企业网站',
                    titleMid: '(前端技术负责人)',
                    lists: [
                        "项目简介: 该项目主要包含门户网站和项目接单平台两部分，项目接单平台主要功能是完成不同企业在该平台上发布的需求",
                        "所用技术: Vue3 + Element-plus + Axios + Typescript ",
                        "负责部分：项目基础结构的搭建，以及代码规范的设定，以及 git 工作流的设置。门户网站首页，需求发布功能，项目评分功能，需求评论功能"
                    ]
                }
            ]
        },
        {
            title: 'Internship Experience',
            data: [
                {
                    type: "listWithTitle",
                    titleLeft: 'FIT2CLOUD 飞致云',
                    timeline: '2023 年 7 月 – 2023 年 10 月',
                    lists: [
                        "参与项目: Halo开源项目后台开发     项目Github地址：https://github.com/halo-dev/halo",
                        "产品简介: Halo 强大易用的开源建站工具。Halo后台包括内容管理、外观管理、系统管理、插件管理四部分",
                        "负责部分：完成导师指定的相关主题的开发，以及后台console端的Bug修复"
                    ]
                }
            ]
        },
        {
            title: 'Personal Skills',
            data: [
                {
                    type: 'listWithoutTitle',
                    lists: [
                        "熟练使用 Javascript 进行编程，对异步编程有较为深入的理解，熟练掌握 ES5 / ES6 + 语法",
                        "熟练使用 Axios 进行网络请求发送，并且深入 Axios 源码",
                        "熟练使用 Vue2 / Vue3 进行项目开发",
                        "熟练使用 Webpack / vite 对项目进行打包，开发过vite插件",
                        "熟练使用 Vue 常用UI库，如 AntDesign、ElementPlus 等，并且使用过 Formkit 和 Tiptap 进行表单开发和富文本编辑器开发",
                        "能使用 Node 进行后台项目和工具开发",
                        "了解chrome浏览器插件基本工作原理，并开发过浏览器插件",
                        "能使用 Git 进行协同开发，以及了解 Github 工作流 ",
                        "了解webAssemply工作原理，使用过webContainer技术",
                        "能使用 Linux 基本命令"
                    ]
                }
            ]
        },
        {
            title: 'Self-evaluation',
            data: [
                {
                    type: 'text',
                    lists:
                        [
                            "In terms of work, I take work seriously and responsibly, am good at communication, and can fully devote myself to work, bringing new ideas and solutions to the team. In learning, possess strong learning abilities, enjoy learning new knowledge, summarize new knowledge, and apply it to practice. Finally, I believe I am competent for this position and look forward to the opportunity to join the company and create value for it."
                        ]
                }
            ]
        }
    ]
} as const;

const data = {
    zh: DataZh,
    en: DataEn
} as const;



export default data