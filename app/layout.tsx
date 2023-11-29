
import type {Metadata} from 'next'
import '@/app/assets/globals.css'
import Header from "@/app/components/ui/header/header";
import ReduxProvider from "@/app/store/provider";
import Head from "next/head";
// import Head from "next/head";
// import { Inter, Lobster } from 'next/font/google';


// const inter = Inter({
//   subsets: ['cyrillic'],
//   display: 'swap',
//   variable: '--font-inter',
// });
//
// const lobster = Lobster({
//   subsets: ['cyrillic'],
//   weight:'400',
//   display: 'swap',
//   variable: '--font-lobster',
// });

export const metadata: Metadata = {
  title: 'Новогодний переполох',
  description: 'Новогодняя викторина 2024 от IDC',
  openGraph: {
    title: 'Новогодний переполох',
    description: 'Новогодняя викторина 2024 от IDC',
    locale:'ru',
    images:        {
      url: '/img.png',
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
      <Head>

      </Head>
    <body className={'relative'}>
      <ReduxProvider>
        <Header/>
        <main className="flex min-h-screen flex-col  items-center justify-between">{children}</main>
      </ReduxProvider>
    </body>
    </html>
  )
}
