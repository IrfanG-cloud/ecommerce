
import Footer from './components/Footer'
import Header from './components/Header'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'



export const metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body >
        <Header />
        <main></main>
        {children}
        <Footer />
        </body>
    </html>
    </ClerkProvider>
  )
}
