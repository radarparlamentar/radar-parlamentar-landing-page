"use client";

import Link from "next/link";

export const metadata = {
  title: "Privacidade",
  description: "Política de privacidade e conformidade com a LGPD do Radar Parlamentar.",
}

export default function PrivacidadePage() {
  return (
    <div className="privacy-page">
      <main className="privacy-main">
        <div className="privacy-content">
 
          <Link href="/" className="privacy-back-link">
            ← Voltar ao início
          </Link>

          <header className="privacy-header">
            <div>
              <h1 className="privacy-title">Política de Privacidade</h1>
              <p className="privacy-updated">Última atualização: 15 de outubro de 2023</p>
            </div>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => window.print()}
            >
              Imprimir documento
            </button>
          </header>
 
          <article className="legal-prose">
 
            <p>O <strong>Radar Parlamentar</strong> valoriza a privacidade dos seus usuários e criou esta Política de Privacidade para demonstrar seu compromisso em proteger sua privacidade e seus dados pessoais, nos termos da Lei Geral de Proteção de Dados e demais leis sobre o tema.</p>
 
            <h2 id="introducao">1. Introdução</h2>
            <p>Esta política descreve como tratamos as informações pessoais quando você usa nossos serviços. Ao utilizar o Radar Parlamentar, você concorda com a coleta e uso de informações de acordo com esta política.</p>
            <p>Nosso objetivo é ser o mais transparente possível, usando linguagem clara, mas mantendo o rigor legal necessário para sua segurança.</p>
 
            <h2 id="coleta">2. Coleta de Dados</h2>
            <p>Coletamos apenas os dados estritamente necessários para o funcionamento da plataforma e para a geração de estatísticas anonimizadas sobre o engajamento cívico.</p>
 
            <h3>2.1 Dados fornecidos diretamente por você</h3>
            <ul>
              <li><strong>Endereço de e-mail:</strong> Utilizado para criação da conta, recuperação de senha e envio de notificações sobre deputados que você acompanha.</li>
              <li><strong>Senha:</strong> Armazenada de forma criptografada (hash). A equipe do Radar Parlamentar não tem acesso à sua senha em texto claro.</li>
              <li><strong>Token de notificação push:</strong> Utilizado exclusivamente para o envio de alertas sobre os deputados favoritados. Removido automaticamente ao desativar notificações.</li>
            </ul>
 
            <h3>2.2 Dados coletados automaticamente</h3>
            <p>Quando você acessa o Radar Parlamentar, podemos coletar informações padrão de log de internet e detalhes de padrões de comportamento, para melhorar a experiência de navegação e garantir a segurança do sistema. Nenhum dado de comportamento é vendido ou compartilhado com terceiros para fins publicitários.</p>
 
            <h3>2.3 Dados que <em>não</em> coletamos</h3>
            <p>O Radar Parlamentar não coleta dados de localização, informações de pagamento, dados sensíveis (origem racial, convicções políticas, saúde, biometria) nem integra redes de publicidade de terceiros.</p>
 
            <h2 id="compartilhamento">3. Compartilhamento de Dados</h2>
            <p>O Radar Parlamentar <strong>não vende, aluga ou compartilha</strong> seus dados pessoais com terceiros para fins comerciais ou de marketing.</p>
            <p>Podemos compartilhar informações nas seguintes situações excepcionais:</p>
            <ul>
              <li>Para cumprir uma obrigação legal, ordem judicial ou requisição de autoridade competente.</li>
              <li>Com prestadores de serviço (ex: provedores de hospedagem em nuvem) que atuam em nosso nome, sempre sob rigorosos contratos de confidencialidade e adequação à LGPD.</li>
            </ul>
 
            <h2 id="retencao">4. Retenção e Exclusão</h2>
            <p>Reteremos suas informações pessoais pelo tempo necessário para fornecer os serviços solicitados ou conforme exigido por lei.</p>
            <p>Você tem o direito de solicitar a exclusão de sua conta e dados associados a qualquer momento, diretamente no app ou pelo e-mail abaixo. Após a confirmação, os dados serão apagados de nossos bancos de dados ativos de forma permanente, ressalvadas apenas as retenções exigidas por lei.</p>
 
            <h2 id="seguranca">5. Segurança</h2>
            <p>Implementamos medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais contra acesso, alteração, divulgação ou destruição não autorizada, incluindo:</p>
            <ul>
              <li>Criptografia em trânsito (TLS) e em repouso.</li>
              <li>Controle de acesso baseado em funções (RBAC) nos sistemas internos.</li>
              <li>Monitoramento contínuo de segurança e auditoria de acessos.</li>
            </ul>
            <p>Lembre-se de que nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro.</p>
 
            <h2 id="contato">6. Contato</h2>
            <p>Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre nossas práticas de tratamento de dados, entre em contato com nosso Encarregado de Proteção de Dados (DPO):</p>
            <ul>
              <li><strong>E-mail:</strong> contato@radarparlamentar.com</li>
            </ul>
            <p>Responderemos em até 15 dias úteis, conforme prazo estabelecido pela LGPD.</p>
 
          </article>
 
          <div className="privacy-bottom-nav">
            <button className="btn btn-outline" onClick={() => window.print()}>
              Imprimir documento
            </button>
          </div>
 
        </div>
      </main>
    </div>
  );
}
