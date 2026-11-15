
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"

import Navbar from "./components/Navbar"
import SobreMim from "./components/SobreMim"
import Projetos from "./components/Projetos"
import Experiencias from "./components/Experiencias"
import Habilidades from "./components/Habilidades"
import Contato from "./components/Contato"

const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || ""

function App() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={RECAPTCHA_SITE_KEY}
      language="pt-BR"
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <div className="min-h-screen bg-[#080B18] scroll-smooth text-white [&_section[id]]:scroll-mt-20">
        {/* Barra de navegação fixa */}
        <Navbar />

        {/* Apresentação principal */}
        <main
          id="inicio"
          className="relative isolate flex min-h-screen w-full items-center justify-center overflow-x-hidden bg-[#080B18] px-4 py-16 text-white"
        >
          {/* Brilhos cósmicos de fundo */}
          <div className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[120px]" />

          <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />

          <section className="relative z-10 mx-auto w-full min-w-0 max-w-none text-center [container-type:inline-size]">
            {/* Mensagem de boas-vindas */}
            <span className="mb-6 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
              ✦ Bem-vindo ao meu universo
            </span>

            {/* Nome e apresentação */}
            <h1
              className="mx-auto mb-6 w-full text-center font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: "clamp(1.5rem, 6.5cqw, 4.5rem)",
              }}
            >
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text pr-[4px] text-transparent">
                Gracekely
              </span>
            </h1>

            {/* Áreas de atuação */}
            <h2 className="mb-6 text-base font-semibold leading-relaxed text-slate-200 sm:text-lg md:text-2xl">
              Desenvolvimento de Software • Python • Cloud • IA
            </h2>

            {/* Descrição profissional */}
            <p className="mx-auto mb-10 max-w-2xl text-base leading-8 text-slate-400">
              Transformo curiosidade em código e desafios em soluções.
              Estou construindo minha trajetória na tecnologia por meio
              de projetos práticos, automação e aprendizado contínuo.
            </p>

            {/* Botões */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#projetos"
                className="rounded-full bg-violet-600 px-8 py-3 font-semibold transition duration-300 hover:bg-violet-500"
              >
                Explorar projetos
              </a>

              <a
                href="https://github.com/gracecraftdev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-8 py-3 font-semibold transition duration-300 hover:border-violet-400 hover:bg-white/5"
              >
                Meu GitHub ↗
              </a>
            </div>
          </section>
        </main>

        {/* Seção Sobre Mim */}
        <SobreMim />

        {/* Seção Projetos */}
        <Projetos />

        {/* Seção Experiências */}
        <Experiencias />

        {/* Seção Habilidades e Tecnologias */}
        <Habilidades />

        {/* Seção Contato */}
        <Contato />
      </div>
    </GoogleReCaptchaProvider>
  )
}

export default App
