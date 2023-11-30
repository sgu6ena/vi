
import type {Metadata} from 'next'
import '@/app/assets/globals.css'
import Header from "@/app/components/ui/header/header";
import ReduxProvider from "@/app/store/provider";

export const metadata: Metadata = {
  title: 'Новогодний переполох',
  description: 'Новогодняя викторина 2024 от IDC',
  openGraph: {
    title: 'Новогодний переполох',
    description: 'Новогодняя викторина 2024 от IDC',
    locale:'ru',
    images:        {
      url: 'https://idc.md/storage/app/media/images/victory.png',
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
        <ReduxProvider>
          <Header/>
          <main className="flex min-h-screen flex-col  items-center justify-between">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  )
}
