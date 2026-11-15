
const tecnologias = [
  "Python",
  "FastAPI",
  "Java",
  "AWS",
  "Docker",
  "Kubernetes",
  "Git & GitHub",
  "CI/CD",
]

function SobreMim() {
  return (
    <section
      id="sobre"
      className="relative isolate w-full overflow-hidden bg-[#080B18] px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      {/* Iluminação cósmica */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
            ✦ Conheça minha trajetória
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Sobre{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              mim
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Uma trajetória construída com curiosidade, aprendizado
            e vontade de transformar ideias em soluções.
          </p>
        </div>

        {/* Conteúdo principal */}
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Minha história */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-9">
            <h3 className="mb-6 text-2xl font-bold text-violet-200">
              Minha trajetória
            </h3>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                Minha trajetória profissional começou na área
                administrativa, onde desenvolvi experiência com
                organização, processos e resolução de problemas.
              </p>

              <p>
                Com o tempo, decidi direcionar minha carreira para
                tecnologia. Hoje, sou formada em Processos Gerenciais
                e estou cursando Análise e Desenvolvimento de Sistemas.
              </p>

              <p>
                Durante minha jornada na Compass UOL, tive a
                oportunidade de trabalhar com ferramentas de Cloud,
                automação, containers e práticas de desenvolvimento
                em equipe.
              </p>

              <p>
                Atualmente, continuo desenvolvendo projetos próprios,
                explorando principalmente Python, desenvolvimento de
                software e soluções que conectam diferentes tecnologias.
              </p>
            </div>
          </div>

          {/* Tecnologias e interesses */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-transparent p-7 sm:p-9">
              <div className="mb-5 text-3xl">✦</div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                O que me move
              </h3>

              <p className="text-base leading-8 text-slate-300">
                Gosto de entender como as coisas funcionam,
                experimentar novas ferramentas e transformar o
                aprendizado em projetos reais. Para mim, desenvolver
                também significa investigar, testar e encontrar
                caminhos para resolver problemas.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <h3 className="mb-6 text-xl font-bold text-white">
                Tecnologias que fazem parte da minha jornada
              </h3>

              <div className="flex flex-wrap gap-3">
                {tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition-colors duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMim
