import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Atkinson_Hyperlegible_Next } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  variable: "--font-atkinson",
})

export const metadata = {
  title: {
    default: "Radar Parlamentar",
    template: "%s | Radar Parlamentar",
  },
  description: "Acompanhe gastos, discursos, votações e emendas de todos os deputados federais. Dados oficiais da Câmara dos Deputados.",
  keywords: ["deputados federais", "transparência parlamentar", "gastos parlamentares", "CEAP", "câmara dos deputados", "fiscal político"],
  authors: [{ name: "Radar Parlamentar" }],
  metadataBase: new URL("https://radarparlamentar.com"),
  openGraph: {
    title: "Radar Parlamentar",
    description: "Fiscalize seus representantes na Câmara dos Deputados.",
    url: "https://radarparlamentar.com",
    siteName: "Radar Parlamentar",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`h-full antialiased`}
    >
      <body className={`${atkinson.variable} min-h-full flex flex-col`}>{children}</body>
      <Analytics />
    </html>
  );
}
