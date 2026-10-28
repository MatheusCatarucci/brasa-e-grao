import Image from "next/image"

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

      {/* Nav de Linha smash */}
      <div className="flex gap-2 my-10">
        <button className="bg-[#EA580C] px-4 py-3 rounded-full text-white font-bold text-[14px]">🍔 Todos os itens (10)</button>
        <button className="px-4 py-3 rounded-full text-[14px] border border-[#E7E0D6] cursor-pointer">🔥Smash Burgers (4)</button>
        <button className="px-4 py-3 rounded-full text-[14px] border border-[#E7E0D6] cursor-pointer">🍟Porções & Entradas (3)</button>
        <button className="px-4 py-3 rounded-full text-[14px] border border-[#E7E0D6] cursor-pointer">☕Cafés & Shakes(3)</button>
      </div>

      {/* Título smash */}
      <div>
        <h1 className="font-display text-[29.5px] font-bold">Linha Smash & Brasa</h1>
        <span className="text-[#57534E]">Feitos com blend 100% Angus certificado e pão de fermentação natural.</span>
      </div>


      {/* Lanches smash */}
      <div className="grid grid-cols-3">
        {/* Lanche 1*/}
        <div className="flex flex-col border border-[#E7E0D6] w-100 rounded-xl">
          <div className="relative">
            <Image
              src="/american_smash.png"
              alt="Brasa & Grão"
              width={430}
              height={1}
              className="w-107.5 h-auto rounded-t-xl"
            />

            <span className="absolute top-3 left-3 font-semibold rounded-full bg-[#EA580C] text-white px-2.5 py-1.5 text-[16px]">
              CAMPEÃO
            </span>

            <span className="absolute bottom-3 right-5 font-bold bg-white px-2.5 py-1.5 rounded-full">
              <i className="bi bi-star-fill"></i> 4.9
            </span>
          </div>

          <div className="px-10 my-10">
            <h2 className="flex flex-col font-bold text-[20px]">Clássico American Smash</h2>
            <p className="text-[#57534E]">2x smash 90g, duplo american cheese artesanal,
              picles agridoce, cebola roxa picada, mostarda
              dijon e ketchup da casa.</p>
          </div>

          <div className="flex justify-between px-10 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[#78716C] text-[16px] font-semibold">180G DE CARNE</span>
              <span className="font-bold text-[#EA580C] text-[30px]">R$ 34,90</span>
            </div>

            <button className="cursor-pointer bg-black text-white font-semibold h-10 px-4 py-1 rounded-xl">
              <i className="bi bi-plus-lg"></i> Adicionar
            </button>
          </div>
        </div>


        {/* Lanche 2*/}
        <div className="flex flex-col border border-[#E7E0D6] w-100 rounded-xl">
          <div className="relative">
            <Image
              src="/american_smash.png"
              alt="Brasa & Grão"
              width={430}
              height={1}
              className="w-107.5 h-auto rounded-t-xl"
            />

            <span className="absolute top-3 left-3 font-semibold rounded-full bg-[#EA580C] text-white px-2.5 py-1.5 text-[16px]">
              CAMPEÃO
            </span>

            <span className="absolute bottom-3 right-5 font-bold bg-white px-2.5 py-1.5 rounded-full">
              <i className="bi bi-star-fill"></i> 4.9
            </span>
          </div>

          <div className="px-10 my-10">
            <h2 className="flex flex-col font-bold text-[20px]">Clássico American Smash</h2>
            <p className="text-[#57534E]">2x smash 90g, duplo american cheese artesanal,
              picles agridoce, cebola roxa picada, mostarda
              dijon e ketchup da casa.</p>
          </div>

          <div className="flex justify-between px-10 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[#78716C] text-[16px] font-semibold">180G DE CARNE</span>
              <span className="font-bold text-[#EA580C] text-[30px]">R$ 34,90</span>
            </div>

            <button className="cursor-pointer bg-black text-white font-semibold h-10 px-4 py-1 rounded-xl">
              <i className="bi bi-plus-lg"></i> Adicionar
            </button>
          </div>
        </div>


        {/* Lanche 3*/}
        <div className="flex flex-col border border-[#E7E0D6] w-100">
          <div className="relative">
            <Image
              src="/american_smash.png"
              alt="Brasa & Grão"
              width={430}
              height={1}
              className="w-107.5 h-auto rounded-t-xl"
            />

            <span className="absolute top-3 left-3 font-semibold rounded-full bg-[#EA580C] text-white px-2.5 py-1.5 text-[16px]">
              CAMPEÃO
            </span>

            <span className="absolute bottom-3 right-5 font-bold bg-white px-2.5 py-1.5 rounded-full">
              <i className="bi bi-star-fill"></i> 4.9
            </span>
          </div>

          <div className="px-10 my-10">
            <h2 className="flex flex-col font-bold text-[20px]">Clássico American Smash</h2>
            <p className="text-[#57534E]">2x smash 90g, duplo american cheese artesanal,
              picles agridoce, cebola roxa picada, mostarda
              dijon e ketchup da casa.</p>
          </div>

          <div className="flex justify-between px-10 items-center">
            <div className="flex flex-col items-center">
              <span className="text-[#78716C] text-[16px] font-semibold">180G DE CARNE</span>
              <span className="font-bold text-[#EA580C] text-[30px]">R$ 34,90</span>
            </div>

            <button className="cursor-pointer bg-black text-white font-semibold h-10 px-4 py-1 rounded-xl">
              <i className="bi bi-plus-lg"></i> Adicionar
            </button>
          </div>
        </div>
      </div>


    </section>
  )
}