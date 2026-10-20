import Image from "next/image"

export default function HomePage() {
  return (
    <section className="px-19 bg-[#f9f9f9]">
      {/* parte 1 - hero */}
      <div className="flex flex-col">

        {/* poster principal */}
        <div className="rounded-3xl mx-auto mt-10 bg-linear-to-bl from-[#431407] to-black p-10 text-white grid grid-cols-2">
          {/* poster - esquerda */}
          <div className="flex flex-col gap-3">
            <span className="text-[13px] w-67 px-0.5 py-1 bg-[#b6a77a]/15 border-2 border-[#FDE68A40] rounded-full text-[#FDE68A] flex items-center justify-center gap-1.5">
              🔥
              Eleito o Melhor Smash Burger de 2026
            </span>
            <h1 className="font-display text-[44px] font-bold">Sabor defumado na brasa, crosta perfeita <span className="text-[#FBBF24]">a cada mordida.</span></h1>
            <p className="font-light text-sm">Blend 100% Angus moído no dia, pão brioche selado na manteiga de garrafa e cafés especiais torrados artesanalmente na nossa casa.</p>


            {/* btns */}
            <div className="flex gap-7">
              <button className="cursor-pointer bg-linear-to-r from-[#EA580C] to-[#D97706] p-2.5 rounded-[10px]">
                Explorar cardápio
              </button>

              <button className="cursor-pointer p-2.5 rounded-[10px] bg-gray-400/15 border border-white/20">
                Ver mais pedidos
              </button>
            </div>

            <div className="h-0.5 w-full rounded-full bg-gray-900 my-5"></div>

            {/* avaliação */}
            <div className="flex gap-5 items-center">
              <p>4.9 <span className="text-sm text-gray-400">(1840 + visualizações)</span></p>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-500"></span>
              <p>100% Artesanal <span className="text-sm text-gray-400">sem conservantes</span></p>
            </div>
          </div>

          {/* poster - direita */}
          <div className="relative mx-auto aspect-5/4 w-full max-w-150 self-center">
            {/* a imagem fica num wrapper interno para o card poder "pendurar" para fora */}
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/hamburguer_hero.png"
                alt="Brasa & Grão"
                fill
                /* o PNG tem borda transparente: o scale recorta essa borda
                   para a foto encostar nas bordas do card */
                className="scale-[1.235] object-cover object-[50%_27%]"
                sizes="(max-width: 1280px) 40vw, 600px"
              />
            </div>

            {/* card sobreposto */}
            <div className="absolute -bottom-5 -left-6 flex w-max max-w-full items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <span className="shrink-0 rounded-lg bg-[#FFEDD5] px-3 py-2 text-[15px] font-bold text-[#EA580C]">
                R$ 38,90
              </span>
              <div className="min-w-0 pr-2">
                <h3 className="truncate text-[15px] font-bold text-[#431407]">Duplo Brasa Cheddar</h3>
                <p className="truncate text-[11px] text-[#6b6259]">2x Smash 90g + Bacon Caramelizado</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* parte 2 - grid sessions */}
      <div className="grid grid-cols-3 gap-6 py-15">

        {/* grid 1 */}
        <div className="flex min-h-26 w-full items-center gap-4 rounded-2xl border border-[#E7E0D6] bg-white px-5 shadow-[0_6px_16px_rgba(31,26,23,0.10)]">

          {/* ícone */}
          <i className="bi bi-brilliance flex shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] px-2.5 py-2.5 text-[22px] text-[#EA580C]" />

          {/* texto */}
          <div className="flex min-w-0 flex-col gap-1.5">
            <h3 className="text-[15px] font-bold">Blend 100% Angus Fresco</h3>
            <span className="text-[13px] font-light">
              Carne selecionada e moída diariamente na nossa cozinha.
            </span>
          </div>
        </div>

        {/* grid 2 */}
        <div className="flex min-h-26 w-full items-center gap-4 rounded-2xl border border-[#E7E0D6] bg-white px-5 shadow-[0_6px_16px_rgba(31,26,23,0.10)]">

          {/* ícone */}
          <i className="bi bi-cup-hot flex shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] px-2.5 py-2.5 text-[22px] text-[#EA580C]" />

          {/* texto */}
          <div className="flex min-w-0 flex-col gap-1.5">
            <h3 className="text-[15px] font-bold">Torrefação Própria</h3>
            <span className="text-[13px] font-light">
              Grãos especiais do Cerrado Mineiro e sobremesas autorais.
            </span>
          </div>
        </div>

        {/* grid 3 */}
        <div className="flex min-h-26 w-full items-center h-32 gap-4 rounded-2xl border border-[#E7E0D6] bg-white px-5 shadow-[0_6px_16px_rgba(31,26,23,0.10)]">

          {/* ícone */}
          <i className="bi bi-clock flex shrink-0 items-center justify-center rounded-xl bg-[#FFF7ED] px-2.5 py-2.5 text-[22px] text-[#EA580C]" />

          {/* texto */}
          <div className="flex min-w-0 flex-col gap-1.5">
            <h3 className="text-[15px] font-bold">Entrega Quente em 30 min</h3>
            <span className="text-[13px] font-light">
              Embalagem térmica selada para manter a crocância.
            </span>
          </div>
        </div>

      </div>


      {/* aba de favoritos */}
      <span className="text-[13px] w-40 px-0.5 py-1 bg-[#FFF7ED]/15 border-2 border-[#FFEDD5] rounded-full text-[#C2410C] flex items-center justify-center gap-1.5 font-bold">
        Favoritos da galera
      </span>


      {/* Titulo mais pedidos */}
      <div className="flex justify-between w-full">
        <h1 className="font-display text-[40px] font-bold">Os Mais Pedidos da Semana</h1>
        <button className="w-55 bg-white px-3 rounded-xl border border-[#E7E0D6] font-bold cursor-pointer">
          Ver todos os 16 pratos
        </button>
      </div>


      {/* Grid lanches */}
      <div className="grid grid-cols-3">

        {/* Item 1 - Grid */}
        <div className="flex flex-col bg-white rounded-xl overflow-hidden">

          {/* Imagem do lanche */}
          <Image
            src="/duplo_brasa_bacon.png"
            alt="Brasa & Grão"
            width={1000}
            height={1}
            className="w-full h-auto object-cover"
          />

          {/* Dados lanche */}
          <div className="flex flex-col py-7 px-5">
            <h1 className="font-bold text-[23px]">Duplo Brasa & Bacon</h1>
            <p className="mt-2 text-[17px]">Dois smash burgers de 90g na brasa, queijo
              cheddar inglês derretido, fatias de bacony
              crocante e molho defumado da casa no brioche.</p>

            <div className="h-px w-full bg-black rounded-full my-5"></div>


            {/* parte de baixo do item */}
            <div className="flex justify-between">
              {/* Preço lanche */}
              <div className="flex flex-col">
                <span className="text-[#78716C] font-bold">INDIVIDUAL</span>
                <span className="text-[27px] text-[#EA580C] font-bold">R$38,90</span>
              </div>

              {/* btn pedir lanche */}
              <button className="text-white bg-black rounded-xl px-10 py-1 cursor-pointer font-bold text-[16px]">
                Pedir Agora
              </button>
            </div>



          </div>
        </div>


      </div>


    </section>
  )
}