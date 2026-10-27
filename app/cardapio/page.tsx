export default function CardapioPage() {
  return (
    <section className="min-h-screen bg-[#faf7f2] px-19 py-25">

      {/* Hero */}
      <div className="rounded-3xl border border-[#FFEDD5] bg-linear-to-br from-[#FFF7ED] to-[#FFEDD5] p-10">

        <span className="inline-block rounded-full border border-[#FFEDD5] bg-[#FFF7ED] px-3 py-1 text-[12px] font-bold text-[#C2410C]">
          Cardápio Artesanal • Edição de Outono
        </span>

        <div className="mt-8 grid grid-cols-2 items-end gap-10">

          {/* Esquerda */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-[29.5px] font-bold text-[#1C1917]">
              Escolha sua experiência na brasa
            </h1>
            <p className="max-w-xl text-[13.5px] leading-relaxed text-[#57534E]">
              Todos os hambúrgueres acompanham maionese defumada da casa. Adicione
              batata rústica e bebida artesanal por +R$ 16,00.
            </p>
          </div>

          {/* Direita */}
          <div className="flex flex-col items-end gap-1 text-right py-10">
            <p className="text-[12px] font-bold uppercase tracking-wide text-[#C2410C]">
              Combo do dia
            </p>
            <h2 className="font-display text-[29.5px] font-bold text-[#1C1917]">
              Smash + Fritas + Café Gelado
            </h2>
            <p className="text-[13px] font-bold text-[#EA580C]">
              De R$ 62,00 por R$ 49,90
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}