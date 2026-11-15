
type Experiencia = {
  empresa: string
  cargo: string
  periodo: string
  descricao: string
  atividades: string[]
  tecnologias?: string[]
  destaque?: boolean
}

const experiencias: Experiencia[] = [
  {
    empresa: "Compass UOL",
    cargo: "Estágio em Tecnologia — AWS AI FDE CloudOps Journey",
    periodo: "Agosto de 2026 — Outubro de 2026",
    descricao:
      "Estágio com foco em CloudOps, automação, infraestrutura e desenvolvimento de soluções tecnológicas. Durante o programa, participei de atividades práticas e projetos em equipe, aplicando conhecimentos em computação em nuvem, integração contínua e orquestração de contêineres.",
    atividades: [
      "Desenvolvimento e integração de pipelines CI/CD utilizando GitHub Actions.",
      "Containerização de aplicações com Docker e orquestração com Kubernetes.",
      "Aplicação de conceitos de infraestrutura como código com Terraform e serviços AWS.",
      "Participação no desenvolvimento do Lumi Links, projeto criado em equipe durante um hackathon.",
      "Colaboração em atividades técnicas, documentação e organização das entregas do time.",
    ],
    tecnologias: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "GitOps",
    ],
    destaque: true,
  },
  {
    empresa: "Academia Saúde & Corpo Fitness",
    cargo: "Recepção e apoio à coordenação",
    periodo: "2025 — 2026",
    descricao:
      "Atuação no atendimento ao público e no suporte às atividades administrativas e operacionais da academia.",
    atividades: [
      "Atendimento e orientação aos clientes.",
      "Organização de rotinas administrativas.",
      "Apoio à coordenação e às demandas operacionais.",
    ],
  },
  {
    empresa: "ICISMEP — IDDS/INTS",
    cargo: "Assistente Técnico Administrativo II",
    periodo: "Julho de 2022 — Maio de 2024",
    descricao:
      "Experiência em processos administrativos, acompanhamento de contratos, custos e atividades relacionadas a licitações.",
    atividades: [
      "Acompanhamento de contratos e processos administrativos.",
      "Apoio ao controle de custos e organização de informações.",
      "Utilização de sistemas administrativos e de gestão documental.",
    ],
  },
]

function Experiencias() {
  return (
    <section
      id="experiencias"
      className="relative isolate w-full overflow-hidden bg-[#080B18] px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      {/* Iluminação cósmica */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
            ✦ Minha trajetória
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Experiências{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Profissionais
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Experiências que contribuíram para minha formação
            profissional, desde a área administrativa até minha
            trajetória no desenvolvimento de soluções tecnológicas.
          </p>
        </div>

        {/* Linha do tempo */}
        <div className="relative">
          <div className="absolute bottom-0 left-3 top-0 w-px bg-gradient-to-b from-violet-500 via-fuchsia-500/50 to-cyan-500/20 sm:left-5" />

          <div className="space-y-10">
            {experiencias.map((experiencia) => (
              <div
                key={experiencia.empresa}
                className="relative pl-10 sm:pl-16"
              >
                {/* Marcador da linha do tempo */}
                <div className="absolute left-0 top-9 flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/60 bg-[#080B18] sm:left-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
                </div>

                {/* Cartão da experiência */}
                <article
                  className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${
                    experiencia.destaque
                      ? "border-violet-400/30 bg-gradient-to-br from-violet-500/[0.12] via-[#11162A] to-cyan-500/[0.06]"
                      : "border-white/10 bg-white/[0.03]"
                  } hover:border-violet-400/50 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]`}
                >
                  {/* Identificação do estágio */}
                  {experiencia.destaque && (
                    <span className="mb-5 inline-flex rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">
                      ✦ Estágio em tecnologia
                    </span>
                  )}

                  {/* Período */}
                  <p className="mb-3 text-sm font-medium text-cyan-300">
                    {experiencia.periodo}
                  </p>

                  {/* Empresa */}
                  <h3 className="text-2xl font-bold text-white">
                    {experiencia.empresa}
                  </h3>

                  {/* Cargo */}
                  <p className="mt-2 font-medium text-violet-300">
                    {experiencia.cargo}
                  </p>

                  {/* Descrição */}
                  <p className="mt-5 leading-8 text-slate-300">
                    {experiencia.descricao}
                  </p>

                  {/* Atividades */}
                  <ul className="mt-6 space-y-3">
                    {experiencia.atividades.map((atividade) => (
                      <li
                        key={atividade}
                        className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400"
                        />

                        <span>{atividade}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tecnologias utilizadas */}
                  {experiencia.tecnologias && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {experiencia.tecnologias.map((tecnologia) => (
                        <span
                          key={tecnologia}
                          className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200"
                        >
                          {tecnologia}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              </div>
            ))}
          </div>
        </div>

        {/* Mensagem final */}
        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-7 text-slate-500">
          Cada experiência contribuiu para desenvolver habilidades
          que hoje aplico na construção da minha carreira em tecnologia.
        </p>
      </div>
    </section>
  )
}

export default Experiencias
