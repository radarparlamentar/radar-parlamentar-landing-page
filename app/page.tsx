"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

const ACCENTS = ["#FFF0B6", "#B9E0FD", "#CDFCD0", "#FFA3CC", "#CDC8FE", "#FFB485"];
const LGPD_ACCENTS = ["#B9E0FD", "#CDFCD0", "#FFF0B6", "#FFA3CC", "#CDC8FE", "#FFB485"];

const FEATURES = [
  { icon: "💸", title: "Gastos do Gabinete", desc: "Acompanhe a CEAP de cada deputado com detalhamento por categoria e fornecedor.", tag: "Portal da Câmara" },
  { icon: "🎤", title: "Discursos no Plenário", desc: "Acesse pronunciamentos feitos no plenário, com busca por palavras-chave e linha do tempo.", tag: "API Câmara" },
  { icon: "📋", title: "Proposições e Votações", desc: "Veja os projetos propostos e como cada deputado votou nas principais matérias.", tag: "API Câmara" },
  { icon: "🏗️", title: "Emendas Parlamentares", desc: "Valores destinados e executados por parlamentar, UF e função orçamentária.", tag: "Portal Transparência" },
  { icon: "⭐", title: "Favoritos & Alertas", desc: "Siga deputados e receba notificações push sobre novos gastos, discursos e votações.", tag: "Em breve" },
  { icon: "📅", title: "Materiais educativos", desc: "Mapa de frequência com comparativo relativo aos pares e histórico de presenças.", tag: "API Câmara" },
];

const DATASOURCES = [
  { name: "API de Dados Abertos da Câmara", desc: "Fonte primária do app. Fornece dados de deputados, despesas (CEAP), discursos, proposições, votações e presenças em tempo quase-real.", url: "dadosabertos.camara.leg.br", badge: "open" },
  { name: "Portal da Transparência do Gov. Federal", desc: "Dados de execução orçamentária das emendas parlamentares individuais e de bancada, com granularidade por favorecido e ação.", url: "portaldatransparencia.gov.br", badge: "gov" },
  { name: "Supabase (armazenamento e cache)", desc: "Banco de dados PostgreSQL gerenciado que armazena snapshots periódicos coletados pelo pipeline Python, reduzindo chamadas à API.", url: "supabase.com", badge: "intern" },
];

const LGPD_CARDS = [
  { title: "Dados coletados", text: "Apenas e-mail (login social opcional), token de notificação push e lista de deputados favoritados. Nenhum dado sensível." },
  { title: "Dados públicos de terceiros", text: "Todas as informações sobre parlamentares vêm de fontes oficiais de acesso livre. São dados de interesse público sobre o exercício do mandato." },
  { title: "Sem venda de dados", text: "Os dados dos usuários jamais são vendidos, cedidos ou usados para fins publicitários. O app não exibe anúncios." },
  { title: "Direito de exclusão", text: "Solicite a exclusão completa da sua conta e dados a qualquer momento, direto no app ou por e-mail." },
  { title: "Retenção mínima", text: "Tokens de push removidos ao desativar notificações. Dados de conta excluídos em até 30 dias após solicitação." },
  { title: "Base legal", text: "Tratamento baseado no legítimo interesse e no interesse público na transparência do mandato (LGPD, art. 7º, II e IX)." },
];


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isTranslated, setIsTranslated] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          Radar<span style={{ fontWeight: 300 }}>Parlamentar</span>
        </a>
        <ul className="nav-links">
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#dados">Dados</a></li>
          <li><a href="#lgpd">Privacidade</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-dots" />
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-tag fade-up">
            <span className="hero-tag-dot" />
            Transparência parlamentar
          </div>
          <h1 className="fade-up delay-1">
            Fiscalize seus<br />
            <span className="accent-yellow">representantes</span><br />
            na <span className="accent-green">Câmara</span>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Gastos, discursos, votações, presença e emendas de todos os 513
            deputados federais — direto no seu celular, com dados oficiais.
          </p>
          <div className="hero-ctas fade-up delay-3">
            <a href="#download" className="btn btn-white">Baixar app</a>
            <a href="#funcionalidades" className="btn btn-white-outline">Ver funcionalidades</a>
          </div>
        </div>
      </section>

      <section className="translation-section" id="proposito">
        <div className="container">
          <div className="section-header">
            <h2 className="section-h2">Traduzimos a política para você.</h2>
            <p>Deixe a linguagem complicada de lado. Entenda exatamente o que está acontecendo no Congresso.</p>
          </div>

          <div className="translation-card">
            <div className="translation-toggle-wrap">
              <span className={`translation-label ${!isTranslated ? "active" : "inactive"}`} id="label-jargon">
                Politiquês
              </span>
              <label className="translation-switch">
                <input
                  type="checkbox"
                  role="switch"
                  aria-checked={isTranslated}
                  checked={isTranslated}
                  onChange={(e) => setIsTranslated(e.target.checked)}
                  id="translation-toggle"
                />
                <div className="translation-slider"></div>
              </label>
              <span className={`translation-label ${isTranslated ? "active" : "inactive"}`} id="label-translated">
                Português Claro
              </span>
            </div>

            <div className="translation-content">
              <div className={`translation-text jargon ${!isTranslated ? "active" : "inactive-up"}`} id="text-jargon">
                "Aprovado o requerimento de urgência para o PL 123/24."
              </div>
              <div className={`translation-text clear ${isTranslated ? "active" : "inactive-down"}`} id="text-translated">
                "O projeto sobre <span className="highlight-yellow">Saúde Pública</span> vai ser votado mais rápido."
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="features-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Funcionalidades</p>
            <h2 className="section-h2">O que você pode<br />acompanhar</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={i} className="feature-card">
                <div
                  className="feature-icon-wrap"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                >
                  {f.icon}
                </div>
                <div className="feature-title">{f.title}</div>
                <p className="feature-desc">{f.desc}</p>
                <span className="feature-tag">{f.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section id="dados" className="data-section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Fontes de dados</p>
            <h2 className="section-h2">De onde vêm<br />as informações</h2>
          </div>
          <table className="data-table">
            <tbody>
              {DATASOURCES.map((s, i) => (
                <tr key={i} className="data-row-tr">
                  <td className="data-num">{String(i + 1).padStart(2, "0")}</td>
                  <td>
                    <div className="data-name">{s.name}</div>
                    <p className="data-desc">{s.desc}</p>
                    <div className="data-url">{s.url}</div>
                  </td>
                  <td style={{ paddingLeft: "2rem", paddingTop: "2rem" }}>
                    <span className={`data-pill ${s.badge === "open" ? "pill-open" :
                      s.badge === "gov" ? "pill-gov" : "pill-intern"
                      }`}>
                      {s.badge === "open" ? "Dados abertos" :
                        s.badge === "gov" ? "Gov. Federal" : "Interno"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="data-callout">
            Todas as informações são coletadas automaticamente de fontes primárias diariamente.
            Erros ou divergências em relação aos portais oficiais podem ser reportados pelo app ou por
            <a href="mailto:contato@radarparlamentar.app" className="email-link">
              e-mail
            </a>
            .
          </div>
        </div>
      </section>

      {/* ── LGPD ── */}
      <section id="lgpd" className="lgpd-section">
        <div className="container">
          <p className="eyebrow">Privacidade & LGPD</p>
          <h2 className="section-h2">Seus dados,<br />sua privacidade</h2>
          <div className="lgpd-grid">
            {LGPD_CARDS.map((c, i) => (
              <div key={i} className="lgpd-card">
                <div
                  className="lgpd-accent-bar"
                  style={{ background: LGPD_ACCENTS[i % LGPD_ACCENTS.length] }}
                />
                <div className="lgpd-card-title">{c.title}</div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="lgpd-callout">
            Os dados sobre atuação parlamentar são de interesse público. O Radar Parlamentar
            apenas consolida e apresenta, de forma acessível, informações que o próprio Congresso
            publica obrigatoriamente por lei. Não fazemos julgamentos de valor sobre os parlamentares.
          </div>
        </div>
      </section>

      <section id="download" className="download-section">
        <div className="container">
          <h2>Comece a fiscalizar<br />agora mesmo</h2>
          <p>Gratuito, sem anúncios, sem rastreamento.<br />Disponível para iOS e Android.</p>
          <div className="store-btns">
            <a href="#" className="store-btn">
              <span className="store-icon">🍎</span>
              <span>
                <span className="store-btn-sub">Baixar na</span>
                App Store
              </span>
            </a>
            <a href="#" className="store-btn">
              <span className="store-icon">▶</span>
              <span>
                <span className="store-btn-sub">Disponível no</span>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Radar Parlamentar · Dados: Câmara dos Deputados
          </span>
          <ul className="footer-links">
            <li>
              <Link href="/privacidade" className="">
                Política de privacidade
              </Link>
            </li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:contato@radarparlamentar.app">Contato</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}
