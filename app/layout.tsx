import "./globals.scss";
// import Navbar from "@/app/components/Navbar/Navbar";

import { Cairo_Play } from 'next/font/google'
 
const fontGoogle = Cairo_Play({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontGoogle.className}>
       {/* <header>
          <Navbar />
       </header> */}
        <main>{children}</main>
      </body>
    </html>
  )
}