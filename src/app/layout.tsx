import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'مركز التعليم المستمر - جامعة النهرين',
  description: 'دورات تدريبية متخصصة للطلاب',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
