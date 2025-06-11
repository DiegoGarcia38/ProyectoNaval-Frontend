// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Proyecto Naval',
  description: 'Información de embarcaciones navales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
