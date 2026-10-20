import type { Metadata } from "next"
import "./globals.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import Link from "next/link"
import Image from "next/image"
import { Fraunces, Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

// fonte display (títulos e logo) — variável, com o eixo óptico (opsz)
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
})

// fonte da marca — não existe no catálogo do next/font, então vem do Google via <link>
const isometraUrl =
  "https://fonts.googleapis.com/css2?family=Isometra&display=swap"

export const metadata: Metadata = {
  title: "Brasa & Grão",
  description: "A melhor hamburgueria da região",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={isometraUrl} />
      </head>
      <body>
        <div>
          <header className="w-full h-25 px-15">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex justify-center">
                <Link href="/">
                  <Image
                    className="mt-3.5"
                    src="/logo_hamburguer.png"
                    alt="Brasa & Grão"
                    width={70}
                    height={70}
                    priority
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <h1 className="font-display text-[23px]">Brasa & Grão</h1>
                  <p className="text-[10px]">SMASH BURGER % SPECIALTY COFFE</p>
                </div>
              </div>


              <nav className="inline-flex items-center gap-2 rounded-full border border-[#e8e1d5] bg-[#f7f2e9] p-2">
                <Link
                  href="/"
                  className="rounded-full bg-white px-4 py-2 text-[#e8590c] shadow-[0_2px_6px_rgba(31,26,23,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(31,26,23,0.14)] active:translate-y-0"
                >
                  Início
                </Link>

                <Link
                  href="/cardapio"
                  className="rounded-full px-4 py-2 text-[#51483f] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-[#e8590c] hover:shadow-[0_6px_16px_rgba(31,26,23,0.12)] active:translate-y-0"
                >
                  Cardápio Completo
                </Link>
              </nav>


              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="text-[#166534] font-semibold">Aberto • 25-35 min</span>
                </div>

                <div className="flex justify-center items-center gap-2 border-2 border-gray-300 px-4 py-1.5 rounded-[10px]">
                  <span className="h-2 w-2 rounded-full bg-red-600"></span>
                  <span className="">Painel Gestor</span>
                </div>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="flex flex-col w-full h-50 px-15 py-2 bg-black text-white">
            {/* parte superior do footer */}
            <div className="flex justify-between items-center">
              {/* logo com texto */}
              <div className="flex">
                <Link href="/">
                  <Image
                    className="mt-3.5"
                    src="/logo_hamburguer.png"
                    alt="Brasa & Grão"
                    width={70}
                    height={70}
                    priority
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <h1 className="font-display text-[23px]">Brasa & Grão</h1>
                  <p className="text-[10px]">RUA DOS PINHEIROS, 480 - SÃO PAULO</p>
                </div>
              </div>
              {/* links */}
              <div>
                <nav className="flex gap-10">
                  <Link
                    href="/">
                    Início
                  </Link>

                  <Link
                    href="/cardapio">
                    Cardápio Completo
                  </Link>

                  <Link
                    href="/cardapio">
                    <p>Área do Gestor (Admin)</p>
                  </Link>
                </nav>
              </div>
            </div>

            {/* HR */}
            <div className="w-full h-0.5 rounded-full bg-gray-900"></div>

            {/* parte de baixo do footer */}
            <div className="flex justify-between items-center h-full">
              <p className="text-[13px]">© 2026 Brasa & Grão Artesanal. Layout didático para aula de Next.js (Rotas & Layouts).</p>
              <p className="text-[13px]">Terça a Domingo • 18h às 23h30</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
