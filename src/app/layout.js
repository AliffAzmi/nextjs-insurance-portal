import { AuthProvider } from './providers/auth'
import { ReduxProvider } from './providers/redux'
import { Inter } from 'next/font/google'
import './globals.css'

export const metadata = {
  title: 'Insurance Portal',
  description: 'Generated by create next app'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <AuthProvider>
        <ReduxProvider>
          <body className={inter.className}>{children}</body>
        </ReduxProvider>
      </AuthProvider>
    </html>
  )
}