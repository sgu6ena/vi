
import type {Metadata} from 'next'
import './globals.css'
import Header from "@/app/components/ui/header/header";

export const metadata: Metadata = {
  title: 'Новогодний переполох',
  description: 'Новогодняя викторина 2023 от IDC',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;900&family=Lobster&display=swap"
            rel="stylesheet"/>

    </head>
    <body className={'relative'}>
    <Header/>
    <main className="flex min-h-screen flex-col  items-center justify-between">{children}
    </main>

    </body>

    </html>
  )
}
