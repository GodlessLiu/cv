import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const keyWords = [/vue\d*/, 'axios', 'element-plus', 'ElementPlus', 'github', 'git', 'chrome', 'node', 'typescript', 'Javascript', /es\d/, 'webpack', 'vite', 'webAssemply', 'webContainer', 'linux', 'AntDesign']

const urlRegex = /(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?/

export function formateText(str: string) {
  let r: string;
  // 格式化url
  r = str.replace(urlRegex, (match) => {
    return `<a href=${match} target='_black'>${match}</a>`
  })
  // 高亮关键字
  for (const i of keyWords) {
    r = r.replace(new RegExp(i, 'ig'), (match, _, str) => {
      if (str.match(urlRegex)) return match
      return `<span class='font-bold'>${match}</span>`
    })
  }
  return r
}