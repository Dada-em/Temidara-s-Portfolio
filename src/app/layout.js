import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { DM_Serif_Display, DM_Sans } from 'next/font/google'

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
})
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata = {
  title: {
    default: "Ipintemidara Adebayo | Architecture & Design",
    template: "%s | Ipintemidara Adebayo",
  },
  description:
    "Architecture portfolio featuring BIM modelling, 3D visualisation, technical drafting, and site supervision. Based in Lagos, Nigeria.",
  openGraph: {
    title: "Ipintemidara Adebayo | Architecture & Design",
    description:
      "Architecture portfolio featuring BIM modelling, 3D visualisation, technical drafting, and site supervision.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ipintemidara Adebayo | Architecture & Design",
    description:
      "Architecture portfolio featuring BIM modelling, 3D visualisation, technical drafting, and site supervision.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
