import Footer from '@/components/Footer'
import './globals.css'
import Navbar from '@/components/Navbar'
import Analytics from '@vercel/analytics/react'

export const metadata = {
  title: 'Konrad Bledowski',
  description: 'Konrads Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> <Navbar />{children}<Footer /><Analytics /> </body>
    </html>
  )
}
