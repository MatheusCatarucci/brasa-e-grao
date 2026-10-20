import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import Image from "next/image"

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
    <html lang="pt-BR">
      <body>
        <div>
          <header className="w-full h-25 px-15">
            <div className="flex items-center justify-between w-full h-full">
              <div className="flex justify-center bg-red-500">
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

              <nav className="inline-flex rounded-full border border-[#e8e1d5] bg-[#f7f2e9] px-6 py-5 gap-10 items-center">
                <Link href="/" className="bg-white rounded-full px-4 py-2 text-[#e8590c]">Início</Link>
                <Link href="/cardapio" className="hover:text-[#e8590c]">Cardápio Completo</Link>
              </nav>

              <div className="bg-red-500 w-80">
                <div>
                  <span>Aberto • 25-35 min</span>
                </div>

                <div>
                  <span><p>Painel Gestor</p></span>
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
