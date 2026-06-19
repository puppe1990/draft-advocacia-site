import React, { useState } from "react";
import { ChevronDown, HelpCircle, Search, Sparkles } from "lucide-react";
import { LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface FAQProps {
  config: LawyerConfig;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "digital-presence",
    category: "Atendimento",
    question: "Como funciona o atendimento on-line? Preciso ir presencialmente ao escritório?",
    answer: "Nosso atendimento é híbrido, moderno e sem atritos. Realizamos reuniões 100% on-line via videoconferência segura (como Zoom, Google Meet ou Teams) ou, caso prefira e necessite de suporte presencial, teremos prazer em recebê-lo em nossa sede física. Toda a documentação e envio de mídias/provas podem ser feitos de forma digital segura via WhatsApp, e-mail ou portal eletrônico."
  },
  {
    id: "document-list",
    category: "Documentação",
    question: "Quais documentos são necessários para a primeira consulta e início dos trabalhos?",
    answer: "Para a triagem e início da análise consultiva, solicitamos documentos pessoais básicos (RG, CPF ou Carteira de Motorista) e um comprovante de residência atualizado. Conforme o ramo jurídico do seu caso, documentos específicos serão fundamentais (ex: certidões de nascimento/casamento para família, carteira de trabalho e holerites para trabalhista, contratos ou comprovantes de depósitos para civil)."
  },
  {
    id: "fees-pricing",
    category: "Honorários",
    question: "Qual o valor cobrado pela consulta inicial e como são calculados os honorários?",
    answer: "Nossos honorários advocatícios e taxas de consulta técnica são estritamente regidos pela tabela oficial de honorários da Ordem dos Advogados do Brasil (OAB) de cada estado, garantindo uma contratação ética e simétrica. Antes do início de qualquer medida litigiosa ou administrativa, fornecemos uma proposta de assessoria consolidada e detalhada, eliminando qualquer surpresa ou taxa invisível."
  },
  {
    id: "geographic-span",
    category: "Atuação",
    question: "O escritório atende demandas em outras cidades ou estados brasileiros?",
    answer: "Sim, atuamos sob cobertura nacional ampla. Graças à digitalização do Poder Judiciário brasileiro e unificação dos sistemas de processos eletrônicos (como PJe, e-Proc, Projudi e Esaj), realizamos peticionamentos eletrônicos, sustentações orais virtuais e despachos com magistrados em todas as comarcas e tribunais do país."
  },
  {
    id: "data-privacy",
    category: "Sigilo",
    question: "Como o escritório garante a segurança dos meus relatos e arquivos (LGPD)?",
    answer: "A proteção e a confidencialidade absoluta das suas informações corporativas ou familiares são premissas invioláveis em nosso escritório. Em estrita conformidade com o Artigo 7º do Código de Ética e Disciplina da OAB e com as diretrizes de privacidade impostas pela LGPD (Lei Geral de Proteção de Dados - Lei 13.709/18), todos os dados compartilhados são salvos em nuvem privada criptografada com controle restrito de acesso."
  },
  {
    id: "status-reports",
    category: "Andamento",
    question: "Como serei avisado sobre as atualizações, andamentos e andamento do meu processo?",
    answer: "Prezamos por uma advocacia transparente e interativa. Disponibilizamos atualizações mensais preventivas sobre as novidades do seu processo enviadas diretamente para o seu WhatsApp ou e-mail de contato de maneira simplificada, livre de jargões técnicos complexos (juridiquês). Além disso, nossa central de suporte direto permanece disponível durante todo o horário comercial."
  }
];

export default function FAQ({ config }: FAQProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];
  const [openId, setOpenId] = useState<string | null>("digital-presence");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = ["Todas", ...Array.from(new Set(FAQ_ITEMS.map((item) => item.category)))];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Todas" || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-t border-stone-200/50 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-stone-100 py-1.5 px-4 rounded-full inline-flex items-center gap-1.5`}>
            <HelpCircle className="h-3.5 w-3.5" />
            DÚVIDAS FREQUENTES
          </span>
          <h2 className="mt-4 font-serif font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Esclareça Suas Dúvidas Jurídicas
          </h2>
          <p className="mt-4 text-base text-stone-600">
            Confira as principais perguntas sobre atendimento on-line, tramitação processual, contratos e segurança jurídica.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search */}
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
                <Search className="h-4.5 w-4.5" />
              </div>
              <input
                type="text"
                placeholder="Busque por termos ou dúvidas (ex: consulta, presencial, contrato...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all font-medium placeholder-stone-400"
                id="faq-search-input"
              />
            </div>
            
            {/* Quick clean query tag */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-stone-500 hover:text-stone-850 underline whitespace-nowrap cursor-pointer shrink-0 font-medium"
              >
                Limpar Busca
              </button>
            )}
          </div>

          {/* Category Badges */}
          <div className="flex flex-wrap gap-2 items-center justify-start sm:justify-center">
            {categories.map((cat) => {
              const works = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide transition-all cursor-pointer ${
                    works
                      ? `${styling.accent} shadow-xs`
                      : "bg-stone-50 border border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-100"
                  }`}
                  id={`faq-cat-${cat.toLowerCase()}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Accordion items */}
        {filteredItems.length > 0 ? (
          <div className="space-y-4" id="faq-accordion-container">
            {filteredItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-stone-800 bg-white shadow-md shadow-stone-100/50"
                      : "border-stone-200/80 bg-white hover:border-stone-300"
                  }`}
                  id={`faq-accordion-item-${item.id}`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer outline-none select-none transition-colors"
                  >
                    <div className="flex items-center gap-3.5 pr-4">
                      <span className={`text-[10px] uppercase font-bold tracking-wider font-mono shrink-0 px-2.5 py-0.5 rounded ${styling.tagBg}`}>
                        {item.category}
                      </span>
                      <span className="font-sans font-bold text-stone-900 leading-snug text-sm sm:text-base">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-stone-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? "transform rotate-180 text-stone-850" : ""
                      }`}
                    />
                  </button>

                  {/* Panel Content */}
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 border-t border-stone-100" : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="p-5 bg-stone-50/50 text-stone-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-stone-200 rounded-2xl bg-stone-50/30">
            <HelpCircle className="h-10 w-10 mx-auto text-stone-400 opacity-60 mb-3" />
            <p className="text-sm font-semibold text-stone-500">Nenhum resultado encontrado para a sua busca.</p>
            <p className="text-xs text-stone-400 mt-1">Experimente buscar por outros termos ou selecione outra categoria.</p>
          </div>
        )}

        {/* Small Trust Disclaimer */}
        <div className="mt-12 p-5 rounded-2xl border border-stone-200 bg-[#FAF6F0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg ${styling.tagBg} text-stone-900 shrink-0`}>
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-stone-900 leading-tight">Ainda possui dúvidas específicas sobre a sua situação?</p>
              <p className="text-[10px] text-stone-500 mt-0.5">Clique no botão ao lado para agendar uma consulta formal em minutos.</p>
            </div>
          </div>
          <a
            href="#agendamento"
            className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide shadow-xs transition-all text-center inline-block cursor-pointer ${styling.accent}`}
            id="faq-booking-cta"
          >
            Agendar Consulta Online
          </a>
        </div>

      </div>
    </section>
  );
}
