
type GrupoHabilidade = {
  titulo: string
  icone: string
  descricao: string
  tecnologias: string[]
}

const grupos: GrupoHabilidade[] = [
  {
    titulo: "Linguagens e Desenvolvimento",
    icone: "⌘",
    descricao:
      "Linguagens e ferramentas utilizadas no desenvolvimento de aplicações e automações.",
    tecnologias: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
      "FastAPI",
      "React",
      "HTML",
      "CSS",
    ],
  },
  {
    titulo: "Cloud e Infraestrutura",
    icone: "☁",
    descricao:
      "Conhecimentos em serviços de nuvem e provisionamento de infraestrutura.",
    tecnologias: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "Lambda",
      "Terraform",
      "Linux",
    ],
  },
  {
    titulo: "DevOps e Automação",
    icone: "⚙",
    descricao:
      "Ferramentas para integração contínua, entrega de aplicações e automação de processos.",
    tecnologias: [
      "Docker",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Helm",
      "Argo CD",
      "PyAutoGUI",
    ],
  },
  {
    titulo: "Observabilidade",
    icone: "◉",
    descricao:
      "Tecnologias para monitoramento, análise de métricas, logs e rastreamento de aplicações.",
    tecnologias: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "OpenTelemetry",
    ],
  },
  {
    titulo: "Banco de Dados e APIs",
    icone: "▤",
    descricao:
      "Ferramentas e conceitos aplicados à persistência de dados e comunicação entre sistemas.",
    tecnologias: [
      "PostgreSQL",
      "SQLite",
      "REST APIs",
      "PostgREST",
      "JSON",
    ],
  },
  {
    titulo: "Organização e Colaboração",
    icone: "✧",
    descricao:
      "Metodologias ágeis, práticas e ferramentas utilizadas para organizar entregas, documentar projetos e colaborar em equipe.",
    tecnologias: [
      "Metodologias Ágeis",
      "Scrum",
      "Trello",
      "Documentação Técnica",
      "Trabalho em Equipe",
      "GitHub Projects",
    ],
  },
]

function Habilidades() {
  return (
    <section
      id="habilidades"
      className="relative isolate w-full scroll-mt-16 overflow-hidden bg-[#080B18] px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      {/* Iluminação cósmica */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
            ✦ Meu universo tecnológico
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Habilidades e{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Tecnologias
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Tecnologias que utilizo em projetos, atividades práticas
            e estudos, construindo uma base cada vez mais sólida
            em desenvolvimento de software e infraestrutura.
          </p>
        </div>

        {/* Cartões de habilidades */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {grupos.map((grupo) => (
            <article
              key={grupo.titulo}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-500/[0.06] hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]"
            >
              {/* Ícone */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-3xl text-violet-300">
                {grupo.icone}
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-white">
                {grupo.titulo}
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {grupo.descricao}
              </p>

              {/* Tecnologias */}
              <div className="mt-7 flex flex-wrap gap-2">
                {grupo.tecnologias.map((tecnologia) => (
                  <span
                    key={tecnologia}
                    className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200 transition-colors duration-300 group-hover:border-violet-400/30"
                  >
                    {tecnologia}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Mensagem final */}
        <p className="mx-auto mt-14 max-w-2xl text-center text-sm leading-7 text-slate-500">
          Meu aprendizado é contínuo. Cada projeto é uma oportunidade
          de explorar novas tecnologias e aprimorar minhas habilidades.
        </p>
      </div>
    </section>
  )
}

export default Habilidades
