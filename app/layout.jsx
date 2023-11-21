import { Wix_Madefor_Display } from 'next/font/google'
import './globals.scss'
import { Header } from "@/app/ui";

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '600', '500', '700']
})

export const metadata = {
  title: 'ODA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={wixMadeforDisplay.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}