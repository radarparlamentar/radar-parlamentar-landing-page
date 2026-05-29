"use client"
import { useEffect, useState } from "react";

const ACCENTS = ["#FFF0B6", "#B9E0FD", "#CDFCD0", "#FFA3CC", "#CDC8FE", "#FFB485"];
const LGPD_ACCENTS = ["#B9E0FD", "#CDFCD0", "#FFF0B6", "#FFA3CC", "#CDC8FE", "#FFB485"];

const FEATURES = [
  { icon: "💸", title: "Gastos do Gabinete", desc: "Acompanhe a CEAP de cada deputado com detalhamento por categoria e fornecedor.", tag: "Portal da Câmara" },
  { icon: "🎤", title: "Discursos no Plenário", desc: "Acesse pronunciamentos feitos no plenário, com busca por palavras-chave e linha do tempo.", tag: "API Câmara" },
  { icon: "📋", title: "Proposições e Votações", desc: "Veja os projetos propostos e como cada deputado votou nas principais matérias.", tag: "API Câmara" },
  { icon: "📅", title: "Presença nas Sessões", desc: "Mapa de frequência com comparativo relativo aos pares e histórico de presenças.", tag: "API Câmara" },
  { icon: "🏗️", title: "Emendas Parlamentares", desc: "Valores destinados e executados por parlamentar, UF e função orçamentária.", tag: "Portal Transparência" },
  { icon: "⭐", title: "Favoritos & Alertas", desc: "Siga deputados e receba notificações push sobre novos gastos, discursos e votações.", tag: "Em breve" },
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

const TICKER_ITEMS = [
  "513 deputados federais", "Dados atualizados diariamente", "API Câmara",
  "Portal Transparência", "Código aberto", "Gratuito", "LGPD em conformidade", "Sem anúncios",
];

const STATS = [
  { n: "513", label: "Deputados monitorados", sub: "57ª Legislatura" },
  { n: "Diário", label: "Frequência de atualização", sub: "Via GitHub Actions" },
  { n: "100%", label: "Dados oficiais", sub: "Câmara + Portal Transparência" },
  { n: "0", label: "Anúncios", sub: "Sem rastreamento" },
];


export default function Home() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <a href="#" className="nav-logo">
          <span className="hero-tag-dot" />
          Radar<span style={{ fontWeight: 300 }}>Parlamentar</span>
        </a>
        <ul className="nav-links">
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#dados">Dados</a></li>
          <li><a href="#lgpd">Privacidade</a></li>
        </ul>
        <a href="#download" className="btn btn-dark btn-sm">Baixar app →</a>
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
            no <span className="accent-green">Congresso</span>
          </h1>
          <p className="hero-sub fade-up delay-2">
            Gastos, discursos, votações, presença e emendas de todos os 513
            deputados federais — direto no seu celular, com dados oficiais.
          </p>
          <div className="hero-ctas fade-up delay-3">
            <a href="#download" className="btn btn-white">Baixar gratuitamente →</a>
            <a href="#funcionalidades" className="btn btn-white-outline">Ver funcionalidades</a>
          </div>
          <div className="hero-chips">
            {["513 deputados", "Dados oficiais", "Gratuito", "Sem anúncios", "Open source", "LGPD"].map((c, i) => (
              <span key={i} className="hero-chip">{c}</span>
            ))}
          </div>
        </div>
      </section>
 
      <div className="stats-section">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-number">{s.n}</div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
 
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
                    <span className={`data-pill ${
                      s.badge === "open" ? "pill-open" :
                      s.badge === "gov"  ? "pill-gov" : "pill-intern"
                    }`}>
                      {s.badge === "open" ? "Dados abertos" :
                       s.badge === "gov"  ? "Gov. Federal"  : "Interno"}
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
 
      {/* ── SOBRE ── */}
      <section id="sobre" className="manifesto-section">
        <div className="container">
          <div className="manifesto">
            <p className="eyebrow" style={{ textAlign: "center" }}>Sobre o projeto</p>
            <h2 className="section-h2">Democracia precisa de<br />cidadãos informados</h2>
            <p>
              O Radar Parlamentar nasceu da crença de que acompanhar os representantes eleitos
              não deveria exigir horas de pesquisa em portais complexos.
            </p>
            <p>
              Construído com dados abertos oficiais e código aberto, o app é um projeto de
              civic tech independente — sem financiamento de partidos, empresas ou governos.
            </p>
            <p>
              Todas as informações são coletadas automaticamente de fontes primárias diariamente.
              Erros ou divergências em relação aos portais oficiais podem ser reportados.
            </p>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://github.com" className="btn btn-dark" target="_blank" rel="noopener noreferrer">
                Ver no GitHub →
              </a>
              <a href="mailto:contato@radarparlamentar.app" className="btn btn-outline">
                Contato
              </a>
            </div>
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
            <li><a href="#lgpd">Privacidade</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="mailto:contato@radarparlamentar.app">Contato</a></li>
          </ul>
        </div>
      </footer>
    </>
  );

}
