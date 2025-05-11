import './globals.css'

export const metadata = {
  title: 'AI Consulting - Modern Business Solutions',
  description: 'Transform your business with cutting-edge AI solutions tailored to your needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 