
import { useState } from "react"

const links = [
  { nome: "Início", destino: "#inicio" },
  { nome: "Sobre", destino: "#sobre" },
  { nome: "Projetos", destino: "#projetos" },
  { nome: "Experiência", destino: "#experiencia" },
  { nome: "Contato", destino: "#contato" },
]

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header
      className="notranslate absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080B18]/70 backdrop-blur-xl"
      translate="no"
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="text-xl text-violet-400">
            ✦
          </span>

          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
            Gracekely.dev
          </span>
        </a>

        {/* Links desktop */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.destino}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-violet-300"
            >
              {link.nome}
            </a>
          ))}
        </div>

        {/* Botão mobile */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/15 text-violet-200 transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
        >
          <span className="text-2xl leading-none">
            {menuAberto ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      {menuAberto && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-[#080B18]/95 px-5 py-4 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.nome}
                href={link.destino}
                onClick={() => setMenuAberto(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-violet-500/10 hover:text-violet-300"
              >
                {link.nome}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
