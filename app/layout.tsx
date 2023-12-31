
import type {Metadata} from 'next'
import '@/app/assets/globals.css'
import Header from "@/app/components/ui/header/header";
import ReduxProvider from "@/app/store/provider";
import YandexMetrika from "@/app/yandexMetrika";
import Head from "next/head";
export const metadata: Metadata = {
  title: 'Новогодний переполох',
  description: 'Новогодняя викторина 2024 от IDC',
  openGraph: {
    title: 'Новогодний переполох',
    description: 'Новогодняя викторина 2024 от IDC',
    locale:'ru',
    images:        {
      url: 'https://idc.md/storage/app/media/images/1415/victory.jpg',
      alt: 'Новогодний переполох',
    },
  },
  icons:'/favicon.png',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="ru">
      <body className={'relative'}>
      <YandexMetrika/>
        <ReduxProvider>
          <Header/>
          <main className="flex min-h-screen flex-col  items-center justify-between">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
