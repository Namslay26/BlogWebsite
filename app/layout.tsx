import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Site',
  description: '30 days to love myself challenge documentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=" font-poppins">
      <Header></Header>
        {children}
      <Footer></Footer>
        </body>
    </html>
  )
}
