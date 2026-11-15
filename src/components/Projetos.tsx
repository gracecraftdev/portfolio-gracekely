
import proximoCapituloImg from "../assets/proximo-capitulo.png"
import lumiLinksImg from "../assets/lumi-links.png"

type Projeto = {
  titulo: string
  categoria: string
  descricao: string
  tecnologias: string[]
  destaque: string
  imagem?: string
  simbolo?: string
  repositorio?: string
}

const projetos: Projeto[] = [
  {
    titulo: "Próximo Capítulo",
    categoria: "Desenvolvimento Full Stack",
    descricao:
      "Aplicativo para organizar livros, acompanhar leituras e sortear a próxima história. Um projeto pessoal que reúne desenvolvimento de interfaces, APIs e gerenciamento de dados.",
    tecnologias: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "SQLite",
    ],
    destaque: "from-amber-600/20 via-orange-500/10 to-violet-600/15",
    imagem: proximoCapituloImg,
    repositorio:
      "https://github.com/gracecraftdev/proximo-capitulo",
  },
  {
    titulo: "Lumi Links",
    categoria: "Cloud • DevOps • Desenvolvimento",
    descricao:
      "Encurtador de links desenvolvido em equipe durante um hackathon. O projeto combina uma experiência visual criativa com Kubernetes, automação de entregas, GitOps e observabilidade.",
    tecnologias: [
      "Java",
      "Spring Boot",
      "Kubernetes",
      "GitHub Actions",
      "ArgoCD",
      "Grafana",
    ],
    destaque: "from-cyan-600/20 via-violet-600/15 to-fuchsia-500/20",
    imagem: lumiLinksImg,
  },
  {
    titulo: "EduConnect",
    categoria: "Java • Orientação a Objetos",
    descricao:
      "Sistema de gestão educacional desenvolvido para aplicar conceitos de programação orientada a objetos, incluindo cadastro de alunos, professores, turmas, avaliações e autenticação.",
    tecnologias: [
      "Java",
      "POO",
      "Herança",
      "Polimorfismo",
      "Encapsulamento",
    ],
    destaque: "from-indigo-600/30 via-violet-600/10 to-blue-500/20",
    simbolo: "🎓",
  },
]

function Projetos() {
  return (
    <section
      id="projetos"
      className="relative isolate w-full overflow-hidden bg-[#080B18] px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      {/* Brilhos cósmicos */}
      <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
            ✦ Ideias que ganharam vida
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Meus{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              projetos
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Projetos que representam meu aprendizado,
            minha criatividade e minha evolução no
            desenvolvimento de software.
          </p>
        </div>

        {/* Grade de projetos */}
        <div className="grid gap-7 md:grid-cols-2">
          {projetos.map((projeto, index) => {
            const destaque = index === 0

            return (
              <article
                key={projeto.titulo}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)] ${
                  destaque ? "md:col-span-2 lg:grid lg:grid-cols-2" : ""
                }`}
              >
                {/* Imagem ou ilustração */}
                <div
                  className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${projeto.destaque} ${
                    destaque
                      ? "min-h-72 p-5 sm:min-h-96 sm:p-8 lg:min-h-full"
                      : "h-64"
                  }`}
                >
                  {projeto.imagem ? (
                    <img
                      src={projeto.imagem}
                      alt={`Imagem do projeto ${projeto.titulo}`}
                      loading="lazy"
                      className={`relative z-10 transition-transform duration-500 group-hover:scale-[1.03] ${
                        destaque
                          ? "h-full max-h-[440px] w-full object-contain"
                          : "h-full w-full object-cover"
                      }`}
                    />
                  ) : (
                    <>
                      <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                      <div className="absolute h-56 w-56 rounded-full border border-white/5" />
                      <div className="absolute h-72 w-72 rounded-full border border-white/5" />

                      <span
                        aria-hidden="true"
                        className="relative z-10 text-7xl drop-shadow-[0_0_30px_rgba(167,139,250,0.4)] transition-transform duration-500 group-hover:scale-110"
                      >
                        {projeto.simbolo}
                      </span>
                    </>
                  )}
                </div>

                {/* Conteúdo */}
                <div
                  className={`p-7 sm:p-9 ${
                    destaque ? "flex flex-col justify-center" : ""
                  }`}
                >
                  <p className="mb-3 text-sm font-medium text-violet-300">
                    {projeto.categoria}
                  </p>

                  <h3 className="mb-4 text-2xl font-bold text-white">
                    {projeto.titulo}
                  </h3>

                  <p className="mb-6 text-base leading-8 text-slate-300">
                    {projeto.descricao}
                  </p>

                  {/* Tecnologias */}
                  <div className="mb-7 flex flex-wrap gap-2">
                    {projeto.tecnologias.map((tecnologia) => (
                      <span
                        key={tecnologia}
                        className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200"
                      >
                        {tecnologia}
                      </span>
                    ))}
                  </div>

                  {/* Link do repositório */}
                  {projeto.repositorio ? (
                    <a
                      href={projeto.repositorio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start font-semibold text-violet-300 transition-colors hover:text-cyan-300"
                    >
                      Ver no GitHub
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">
                      Repositório a adicionar
                    </span>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projetos
