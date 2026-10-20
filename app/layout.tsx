import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})

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
    <html lang="pt-BR" className={openSans.variable}>
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
                  <h1 className="text-[23px]">Brasa & Grão</h1>
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

          <footer>
            <div>
              <p>
                © 2026 Brasa & Grão Artesanal. Terça a Domingo •
                18h às 23h30
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
