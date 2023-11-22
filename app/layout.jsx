import './globals.scss';
import { Header, Footer } from "@/app/ui";
import { Wix_Madefor_Display } from 'next/font/google'

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
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
        <Footer />
      </body>
    </html>
  )
}