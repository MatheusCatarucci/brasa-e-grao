import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Brasa & Grão",
  description: "A mehlor hamburguería da região",
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="site-wrapper">
          {/* CABEÇALHO COMPARTILHADO */}
          <header className="site-header flex items-center justify-between">
            <div className="container site-header-inner">
              <Link href="/" className="brand-logo">
                <span>Brasa & Grão</span>
              </Link>

              <nav className="site-nav">
                <Link href="/" className="site-nav-link">Início</Link>
                <Link href="/cardapio" className="site-nav-link">Cardápio Completo</Link>
              </nav>

              <div className="header-actions">
                <span className="badge badge-success">Aberto • 25-35 min</span>
              </div>
            </div>
          </header>

          {/* CONTEÚDO DINÂMICO DE CADA PÁGINA (page.tsx) */}
          <main className="site-main">
            {children}
          </main>

          {/* RODAPÉ COMPARTILHADO */}
          <footer className="site-footer">
            <div className="container">
              <p>© 2026 Brasa & Grão Artesanal. Terça a Domingo • 18h às 23h30</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}