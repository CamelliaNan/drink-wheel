import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "喝什么，转一下｜茶饮咖啡随机转盘",
  description: "解决选择困难症的双转盘，从主流茶饮与咖啡品牌中随机选出今天的一杯。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
