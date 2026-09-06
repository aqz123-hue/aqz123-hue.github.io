import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'中秋出走三日｜慈溪出发 · 兰溪与宁海',description:'两大一小，三天两晚。兰溪早茶古村与宁海亲子海湾，两页可分享的自驾行程手册。'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
