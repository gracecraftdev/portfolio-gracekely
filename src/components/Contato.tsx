
import { useRef, useState, type FormEvent } from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

const FORM_ENDPOINT = "https://formspree.io/f/mdegaqbz"

const WHATSAPP_URL =
  "https://wa.me/5531984530353?text=" +
  encodeURIComponent(
    "Olá, Gracekely! Conheci seu portfólio e gostaria de conversar com você."
  )

const LINKEDIN_URL =
  "https://www.linkedin.com/in/gracekely-alves-de-melo"

const GITHUB_URL = "https://github.com/gracecraftdev"

type StatusEnvio = "idle" | "enviando" | "sucesso" | "erro"

function Contato() {
  const [status, setStatus] = useState<StatusEnvio>("idle")
  const [mensagemErro, setMensagemErro] = useState("")
  const enviandoRef = useRef(false)

  const { executeRecaptcha } = useGoogleReCaptcha()

  async function enviarMensagem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (enviandoRef.current) {
      return
    }

    const formulario = event.currentTarget

    if (!executeRecaptcha) {
      setStatus("erro")
      setMensagemErro(
        "A verificação de segurança ainda não está disponível. Aguarde alguns segundos e tente novamente."
      )
      return
    }

    enviandoRef.current = true
    setStatus("enviando")
    setMensagemErro("")

    try {
      // Gera um token novo para cada tentativa de envio.
      const token = await executeRecaptcha("contato_submit")

      if (!token) {
        throw new Error(
          "Não foi possível concluir a verificação de segurança."
        )
      }

      const dados = new FormData(formulario)

      // O Formspree utiliza este campo para validar o reCAPTCHA.
      dados.set("g-recaptcha-response", token)

      const resposta = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: dados,
        headers: {
          Accept: "application/json",
        },
      })

      if (!resposta.ok) {
        throw new Error(
          "O serviço de contato não aceitou o envio da mensagem."
        )
      }

      formulario.reset()
      setStatus("sucesso")
    } catch (erro) {
      console.error("Erro ao enviar formulário:", erro)

      setMensagemErro(
        "Não foi possível enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp ou LinkedIn."
      )
      setStatus("erro")
    } finally {
      enviandoRef.current = false
    }
  }

  return (
    <section
      id="contato"
      className="relative isolate w-full scroll-mt-16 overflow-hidden bg-[#080B18] px-6 py-24 text-white sm:px-10 lg:py-32"
    >
      {/* Iluminação cósmica */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho */}
        <div className="mb-14 text-center">
          <span className="mb-5 inline-block rounded-full border border-violet-400/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-200">
            ✦ Vamos nos conectar?
          </span>

          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Entre em{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Contato
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Estou aberta a novas oportunidades, conexões profissionais
            e trocas de conhecimento. Seja para conversar sobre
            projetos, compartilhar experiências ou explorar
            oportunidades, será um prazer conhecer você!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formulário */}
          <div className="rounded-3xl border border-violet-400/20 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-9">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white">
                Envie uma mensagem ✨
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Preencha os campos abaixo e sua mensagem será
                encaminhada diretamente para meu e-mail.
              </p>
            </div>

            <form onSubmit={enviarMensagem} className="space-y-5">
              {/* Nome */}
              <div>
                <label
                  htmlFor="contato-nome"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Seu nome
                </label>

                <input
                  id="contato-nome"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Como posso te chamar?"
                  className="w-full rounded-xl border border-white/10 bg-[#080B18]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="contato-email"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Seu e-mail
                </label>

                <input
                  id="contato-email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  placeholder="seuemail@exemplo.com"
                  className="w-full rounded-xl border border-white/10 bg-[#080B18]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="contato-mensagem"
                  className="mb-2 block text-sm font-medium text-slate-200"
                >
                  Sua mensagem
                </label>

                <textarea
                  id="contato-mensagem"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={5}
                  placeholder="Conte um pouco sobre o que gostaria de conversar..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-[#080B18]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400"
                />
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                disabled={status === "enviando"}
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-semibold text-white transition hover:from-violet-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "enviando"
                  ? "Enviando mensagem..."
                  : "Enviar mensagem ✦"}
              </button>

              {/* Feedback */}
              {status === "sucesso" && (
                <p
                  role="status"
                  className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3 text-sm text-emerald-300"
                >
                  Mensagem enviada com sucesso! Obrigada pelo contato. 💜
                </p>
              )}

              {status === "erro" && (
                <p
                  role="alert"
                  className="rounded-xl border border-rose-400/20 bg-rose-500/10 p-3 text-sm text-rose-300"
                >
                  {mensagemErro}
                </p>
              )}
            </form>
          </div>

          {/* Canais de contato */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-[#11162A] to-cyan-500/[0.06] p-7 sm:p-9">
              <span className="text-sm font-medium text-violet-300">
                ✦ Networking
              </span>

              <h3 className="mt-3 text-2xl font-bold">
                Vamos nos conectar no LinkedIn?
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Gosto de acompanhar projetos, conhecer diferentes
                trajetórias e trocar ideias sobre tecnologia.
                Vamos ampliar nossa rede e compartilhar experiências!
              </p>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
              >
                Conecte-se comigo no LinkedIn ↗
              </a>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
              <h3 className="text-xl font-bold">
                Outras formas de contato
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Prefere conversar diretamente ou conhecer meus projetos?
                Escolha o canal que for melhor para você.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-emerald-400/40 hover:bg-emerald-500/10"
                >
                  WhatsApp ↗
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-violet-500/10"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <p className="text-sm leading-7 text-slate-400">
                Obrigada por visitar meu universo! ✨
                <span className="mt-1 block text-violet-300">
                  Cada conexão pode ser o começo de uma nova história.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato
