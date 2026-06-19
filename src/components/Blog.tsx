import React, { useState } from "react";
import { BookOpen, Calendar, Clock, Search, ArrowRight, X, Phone, ShieldCheck, Share2 } from "lucide-react";
import { LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface BlogProps {
  config: LawyerConfig;
}

interface BlogPost {
  id: string;
  category: string;
  title: string;
  summary: string;
  publishedAt: string;
  readTime: string;
  imageUrl: string;
  author: string;
  content: React.ReactNode;
}

export default function Blog({ config }: BlogProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  // Dynamic articles filled with realistic legal insights (in alignment with OAB informational standards)
  const BLOG_POSTS: BlogPost[] = [
    {
      id: "cartorio-divorcio",
      category: "Direito de Família",
      title: "Divórcio Consensual em Cartório: Como funciona e quais os requisitos?",
      summary: "Saiba como encerrar um ciclo familiar de forma pacífica, rápida e econômica, sem precisar passar pelo estresse de um litígio judicial de longos anos.",
      publishedAt: "12 Mai, 2026",
      readTime: "4 min",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=605",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            O divórcio administrativo estipulado em cartório de notas (por escritura pública) é um dos avanços mais significativos na simplificação do Direito de Família no Brasil. Ele permite que um ciclo conjugal se encerre sem a lentidão costumeira dos processos forenses tradicionais.
          </p>
          
          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Quais são os Requisitos Obrigatórios?</h4>
          <p className="text-stone-750">
            Para que o divórcio seja lavrado diretamente em cartório de notas, os cônjuges devem satisfazer três requisitos fundamentais:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li><strong>Consensualidade:</strong> Ambos devem estar em pleno acordo sobre o encerramento do matrimônio e a exata partilha de bens.</li>
            <li><strong>Ausência de Filhos Menores ou Incapazes:</strong> Caso o casal possua filhos menores ou dependentes de curatela, o divórcio necessariamente demandará intervenção do Ministério Público e, portanto, tramitará via judicial (embora ainda possa ser consensual). *Exceção aplicável caso as questões de guarda e pensão já tenham sido previamente homologadas em juízo.</li>
            <li><strong>Presença de Advogado:</strong> A lei exige que a minuta seja assinada por um advogado comum ou um para cada integrante. Ele garantirá o amparo de direitos e a segurança técnica do ato formal.</li>
          </ul>

          <div className="p-4 bg-stone-100 rounded-lg border-l-4 border-stone-800 my-6">
            <p className="text-xs text-stone-700 font-semibold italic">
              "A rapidez e a privacidade são as maiores bandeiras do divórcio em cartório. É possível resolvê-lo em poucos dias ou horas, poupando desgaste mental das partes."
            </p>
          </div>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Partilha de Bens e Pensão</h4>
          <p className="text-stone-750">
            Durante a lavratura da escritura, o casal também resolve as questões patrimoniais (incluindo transferência de automóveis, imóveis e divisões de cotas societárias), bem como estipula se haverá ou não pensão alimentícia temporária entre si e a destinação dos nomes de solteiro.
          </p>
        </div>
      )
    },
    {
      id: "holding-patrimonial",
      category: "Planejamento Sucessório",
      title: "Planejamento Sucessório Familiar: Como a holding evita brigas e heranças caras",
      summary: "Entenda como a estruturação societária familiar pode otimizar a distribuição patrimonial futura, reduzir impostos drásticos e proteger sua família do temido inventário.",
      publishedAt: "28 Abr, 2026",
      readTime: "6 min",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            O processo de inventário judicial ou extrajudicial no Brasil é historicamente moroso, burocrático e gerador de elevados custos fiscais. Somando-se o ITCMD (Imposto sobre Transmissão Causa Mortis), custas de cartório, honorários advocatícios compulsórios e despesas de avaliação, a perda patrimonial pode atingir de 15% a 20% do valor total dos bens.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">O que é a Holding Familiar?</h4>
          <p className="text-stone-750">
            Uma holding familiar é uma empresa (normalmente uma sociedade de responsabilidade limitada ou por ações) criada não com objetivo comercial tradicional, mas para atuar como proprietária e administradora dos bens de uma ou mais pessoas naturais (imóveis, cotas, investimentos e veículos).
          </p>
          <p className="text-stone-750">
            Com a centralização do patrimônio sob o CNPJ da holding, os herdeiros tornam-se acionistas ou cotistas. A transição sucessória é estipulada em vida sob cláusulas reversíveis de usufruto, impenhorabilidade e incomunicabilidade.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Vantagens Cruciais</h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li><strong>Economia Tributária:</strong> Menor incidência tributária em eventuais receitas de aluguel e ganhos de capital em futuras vendas imobiliárias.</li>
            <li><strong>Proteção de Patrimônio:</strong> Blindagem lícita do patrimônio familiar contra flutuações e riscos de futuras atividades comerciais exercidas pelos herdeiros.</li>
            <li><strong>Celeridade Total:</strong> Em caso de falecimento do patriarca ou matriarca, a empresa continua ativa e a gestão é transmitida em minutos automática, sem a necessidade de paralisar o patrimônio no inventário.</li>
          </ul>
        </div>
      )
    },
    {
      id: "lgpd-adequacao",
      category: "Direito Digital",
      title: "Startups e LGPD: O checklist essencial para não sofrer multas jurídicas",
      summary: "Vazamento de dados ou termos de uso desatualizados podem enterrar de vez a credibilidade de um novo negócio tecnológico. Conheça as obrigações para startups.",
      publishedAt: "08 Fev, 2026",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            Muitos fundadores de empresas tech e startups costumam encarar a adequação da LGPD (Lei Geral de Proteção de Dados - Lei 13.709/18) como pendência ou luxo corporativo exclusivo de grandes corporações bancárias ou e-commerce famosos. Trata-se de um perigosíssimo equívoco técnico.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">As Sanções e os Riscos Reais</h4>
          <p className="text-stone-750">
            A Agência Nacional de Proteção de Dados (ANPD) vem intensificando suas auditorias ativas. Contudo, para uma startup em rodada de atração de capital (Venture Capital), o maior perigo reside no processo de Due Diligence jurídica: investidores de risco desistem imediatamente de aportes vultosos em ferramentas tecnológicas que não possuam conformidade com privacidade.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Checklist Prático de Conformidade</h4>
          <ul className="list-decimal pl-5 space-y-2 text-stone-700">
            <li><strong>Mapeamento de Dados (Data Mapping):</strong> Identificar quais dados você capta (cookies, e-mail, celular, CPF, prontuários de saúde), onde armazena e se realmente possui amparo legítimo (bases legais) para utilizá-los.</li>
            <li><strong>Termos de Uso e Políticas Claras:</strong> Elabore termos adaptáveis customizados que evitem cópias genéricas da concorrência (cada software é único e lida com dados de forma única).</li>
            <li><strong>Canal de Atendimento de Direitos do Usuário:</strong> Prover um local fácil de contato para que o internauta solicite ou apague suas informações pessoais registradas.</li>
            <li><strong>Treinamento de Equipe Interna:</strong> Blindar procedimentos internos para evitar falhas humanas básicas que facilitem engenharia social nociva de criminosos digitais.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intimacao-policial",
      category: "Defesa Penal",
      title: "Fui intimado pela Polícia Civil ou Federal. Quais as medidas e meus direitos?",
      summary: "Receber uma intimação policial gera grande angústia. Entenda o que diz a lei e por que você nunca deve prestar declarações sem consultoria prévia.",
      publishedAt: "19 Jan, 2026",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            A entrega de uma notificação ou intimação da polícia para comparecer na delegacia (seja para depor como testemunha ou prestar esclarecimentos como investigado) desperta reações emocionais adversas e um sentimento natural de pânico. Compreender seus direitos resguardados pela Constituição Federal é a sua maior ferramenta defensiva.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">O Direito de Permanecer em Silêncio</h4>
          <p className="text-stone-750">
            A principal premissa penal brasileira deriva do Direito Constitucional de não produzir provas contra si mesmo (princípio do <i>nemo tenetur se detegere</i>). O investigado possui o direito ético, assegurado pela Súmula Vinculante 14 do STF, de obter cópia integral dos autos do inquérito de forma prévia para ciência exata do que é acusado antes de proferir qualquer palavra.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Recomendações Práticas Imediatas</h4>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li><strong>Mantenha a Calma:</strong> Uma intimação policial não significa prisão iminente. É um ato formal de esclarecimento de fatos.</li>
            <li><strong>Não Compareça Sozinho:</strong> Prestar depoimento preliminar sem o assessoramento e presença ativa de um advogado especialista criminalista de sua confiança pode resultar no indiciamento indevido decorrente de ambiguidades provocadas sob pressão.</li>
            <li><strong>Não Fale 'Informalmente':</strong> Qualquer conversa tida nas dependências policiais antes de formalizar em termo escrito pode ser anexada em relatórios. Exija suas garantias e suporte técnico imediato.</li>
          </ul>
        </div>
      )
    },
    {
      id: "vida-toda-inss",
      category: "Previdência / INSS",
      title: "Revisão da Vida Toda do INSS: O panorama atual pós decisões judiciais",
      summary: "Saiba de forma simplificada o andamento jurídico desta tese que pode elevar de valor muitas aposentadorias concedidas nos últimos dez anos.",
      publishedAt: "04 Mar, 2026",
      readTime: "4 min",
      imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=601",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            A tese da "Revisão da Vida Toda" representa um dos embates jurídicos mais discutidos da história previdenciária nacional, envolvendo o Superior Tribunal de Justiça (STJ), Supremo Tribunal Federal (STF) e milhões de pensionistas brasileiros. Ela consiste na inclusão de salários anteriores a julho de 1994 (Moedas antes do Plano Real) no cálculo do benefício de aposentadoria.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Quem Teoricamente se Beneficia Desse Recálculo?</h4>
          <p className="text-stone-750">
            Esta tese previdenciária é altamente vantajosa especificamente para segurados que:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li>Se aposentaram entre 29 de novembro de 1999 e 12 de novembro de 2019 (antes da Reforma da Previdência).</li>
            <li>Iniciaram seus recebimentos de benefício há menos de 10 anos (respeito ao prazo decadencial de revisão).</li>
            <li>Possuíam as maiores contribuições à previdência na década de 1980 e início de 1990 — salários estes que foram desconsiderados na fórmula de cálculo normal do INSS pós-94.</li>
          </ul>

          <div className="p-4 bg-amber-50 rounded-lg border-l-4 border-[#8C6D41] my-6">
            <p className="text-xs text-[#8C6D41] font-semibold">
              *Nota Técnica Importante: Devido às recentes mutações jurisprudenciais do STF, o cálculo de viabilidade econômica e de riscos judiciais deve ser processado e atestado matematicamente de forma individualizada antes de ingressar com qualquer processo em juizado especial.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "contratos-imobiliarios",
      category: "Direito Civil",
      title: "Contratos de Aluguel e Compra: Erros clássicos em transações imobiliárias",
      summary: "Ignorar cláusulas de reajuste abusivo, garantias locatícias inadequadas ou certidões do vendedor pode resultar na perda irreversível de economias de uma vida toda.",
      publishedAt: "22 Fev, 2026",
      readTime: "5 min",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600",
      author: config.name,
      content: (
        <div className="space-y-4">
          <p className="text-stone-750 font-normal">
            A aquisição da casa própria ou a assinatura de locações comerciais de longa escala são transações carregadas de altas expectativas e volumes financeiros elevados. Infelizmente, a euforia e a pressa mercantil costumam incentivar a assinatura de contratos genéricos, extraídos da internet, que não cobrem os eventos imprevistos mais comuns.
          </p>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">Os 3 Principais Erros em Transações Imobiliárias</h4>
          <ul className="list-decimal pl-5 space-y-2 text-stone-700">
            <li><strong>Deixar de Analisar a Certidão de Ônus Reais:</strong> Comprar um imóvel confiando apenas na palavra do vendedor é extremamente perigoso. O bem pode estar alienado judicialmente devido a dívidas fiscais ou trabalhistas anteriores que podem anular a compra futuramente (fraude à execução).</li>
            <li><strong>Cláusulas de Multa Arbitrária e Rescisão Desequilibradas:</strong> Contratos de aluguel residencial ou comercial devem prever com precisão as condições de saída antecipada de forma proporcional, conforme determina a Lei do Inquilinato (Nº 8.245/91).</li>
            <li><strong>Responsabilidades Por Reformas (Benfeitorias):</strong> A ausência de descrição minuciosa sobre quem deve arcar com vazamentos de canos mestres, cupins ou defeitos ocultos estruturais gera desavenças milionárias na entrega das chaves.</li>
          </ul>

          <h4 className="font-serif font-black text-stone-900 text-lg mt-6">A Importância da Devida Análise Jurídica</h4>
          <p className="text-stone-750">
            Investir em uma consultoria jurídica preventiva antes de depositar sinais imobiliários de compra economiza litígios desgastantes de dezenas de milhares de reais e previne a frustração de desapropriações inesperadas.
          </p>
        </div>
      )
    }
  ];

  const categories = ["Todos", ...Array.from(new Set(BLOG_POSTS.map((post) => post.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const selectedPost = BLOG_POSTS.find((p) => p.id === selectedPostId);

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch((err) => console.log(err));
    } else {
      navigator.clipboard.writeText(`${post.title} - Leia no site do escritório ${config.officeName}: ${window.location.href}`);
      alert("Link de compartilhamento copiado para a área de transferência!");
    }
  };

  const handleWhatsAppConsult = (postTitle: string) => {
    const textMsg = `Olá Dr(a). ${config.name}, li o artigo sobre "${postTitle}" publicado no seu blog e gostaria de realizar uma consulta para analisar um caso semelhante.`;
    const cleanedNum = config.whatsappNumber.replace(/\D/g, "");
    window.open(`https://wa.me/${cleanedNum}?text=${encodeURIComponent(textMsg)}`, "_blank");
  };

  return (
    <section id="blog" className="py-20 bg-[#FAF6F0]/65 border-t border-stone-200/50 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-white py-1.5 px-4 rounded-full inline-flex items-center gap-1.5 border border-stone-200`}>
            <BookOpen className="h-3.5 w-3.5" />
            INFORMAÇÃO JURÍDICA E AUTORIDADE
          </span>
          <h2 className="mt-4 font-serif font-black text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Artigos e Análises Jurisprudenciais
          </h2>
          <p className="mt-4 text-base text-stone-650 leading-relaxed font-normal">
            Leituras essenciais preparadas pela equipe de <strong>{config.name}</strong>, detalhando procedimentos legais de forma descomplicada para apoiar decisões preventivas diárias.
          </p>
        </div>

        {/* Filter and Search controls */}
        <div className="mb-10 max-w-4xl mx-auto space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
              <Search className="h-4.5 w-4.5" />
            </div>
            <input
              type="text"
              placeholder="Digite termos para pesquisar no acervo de artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all font-medium placeholder-stone-400 shadow-sm"
              id="blog-search-query-ip"
            />
          </div>

          {/* Categories bar */}
          <div className="flex flex-wrap gap-2 items-center justify-start sm:justify-center">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide transition-all cursor-pointer ${
                    isSelected
                      ? `${styling.accent} shadow-xs`
                      : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50"
                  }`}
                  id={`blog-tab-${cat.replace(/\s+/g, "").toLowerCase()}`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Post List */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPostId(post.id)}
                className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-lg hover:border-stone-300 transition-all duration-300 cursor-pointer flex flex-col group h-full"
                id={`blog-article-card-${post.id}`}
              >
                {/* Thumbnail image and status badge */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] sm:text-xs font-bold font-mono tracking-wider bg-white/95 rounded-md px-2.5 py-1 text-stone-900 border border-stone-100 shadow-xs uppercase`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body metadata */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[11px] font-mono font-bold text-stone-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.publishedAt}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif font-black text-stone-900 text-lg group-hover:text-stone-955 leading-snug tracking-tight">
                      {post.title}
                    </h3>

                    <p className="text-stone-600 line-clamp-3 text-xs sm:text-sm leading-relaxed font-normal">
                      {post.summary}
                    </p>
                  </div>

                  {/* Footer call to details */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-stone-400 italic">
                      Por: Dr(a). {post.author.split(" ")[1]}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold ${styling.textPrimary} group-hover:translate-x-1.5 transition-transform duration-300`}>
                      Ler Artigo Completo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 border border-dashed border-stone-200 rounded-2xl bg-white max-w-2xl mx-auto">
            <BookOpen className="h-10 w-10 mx-auto text-stone-400 opacity-60 mb-3" />
            <h4 className="text-sm font-semibold text-stone-650">Nenhum artigo jurídico localizado para a busca.</h4>
            <p className="text-xs text-stone-400 mt-1">Gostaria de ver outros temas? Oferecemos assessoria completa em diversos ramos civis e digitais.</p>
            <button
              onClick={() => {
                setActiveCategory("Todos");
                setSearchQuery("");
              }}
              className={`mt-4 px-4 py-2 rounded-lg text-xs font-bold cursor-pointer ${styling.accent}`}
            >
              Reexibir Todos os Artigos
            </button>
          </div>
        )}

        {/* Read Post Interactive Modal/Drawer */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true" id="blog-content-modal">
            {/* Overlay backdrop */}
            <div
              className="fixed inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setSelectedPostId(null)}
            ></div>

            {/* Modal Body Container */}
            <div className="flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
              <div
                className="relative bg-[#FDFCFB] rounded-3xl overflow-hidden max-w-3xl w-full border border-stone-250 shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header elements */}
                <div className="absolute top-5 right-5 z-20">
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="p-1 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white transition-colors cursor-pointer border border-white/10"
                    aria-label="Minimizar leitura"
                    id="blog-modal-close-button"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Banner inside article */}
                <div className="relative h-56 sm:h-64 bg-stone-200 flex-shrink-0">
                  <img
                    src={selectedPost.imageUrl}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-stone-900/10 z-0"></div>
                  
                  {/* Article core specs overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <span className="text-[10px] font-mono tracking-wider border border-white/30 bg-white/10 backdrop-blur-xs rounded px-2.5 py-0.5 text-[#F5E6D3] uppercase font-bold">
                      {selectedPost.category}
                    </span>
                    <h3 className="mt-2 text-lg sm:text-2xl font-serif font-black text-white leading-tight drop-shadow-sm">
                      {selectedPost.title}
                    </h3>
                  </div>
                </div>

                {/* Scrollable text details */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-stone-850">
                  {/* Meta credentials row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200/80 text-xs text-stone-500 font-mono">
                    <div className="flex items-center gap-3">
                      <span className="font-sans font-bold text-stone-900">Dr(a). {selectedPost.author}</span>
                      <span className="h-4 w-[1px] bg-stone-300"></span>
                      <span>{selectedPost.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {selectedPost.readTime} de leitura
                      </span>
                      <button
                        onClick={(e) => handleShare(selectedPost, e)}
                        className="p-1 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                        title="Compartilhar Link"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="prose prose-stone max-w-none text-left leading-relaxed text-sm sm:text-base">
                    {selectedPost.content}
                  </div>

                  {/* Conversion / Disclaimer in Footer box */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF6F0] border border-stone-200 mt-8 space-y-4">
                    <div className="flex items-start gap-4">
                      <ShieldCheck className={`h-6 w-6 text-emerald-700 shrink-0 mt-0.5`} />
                      <div className="text-left">
                        <h4 className="text-sm font-bold text-stone-900 font-serif">Esta análise assemelha-se a um problema enfrentado por você?</h4>
                        <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                          O esclarecimento acima possui teor puramente informativo sob moldes da OAB. Entre em contato rápido e imediato com o escritório privado do(a) <strong>{config.name}</strong> para agendar seu parecer customizado.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        onClick={() => handleWhatsAppConsult(selectedPost.title)}
                        className={`flexItemsCenter flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs cursor-pointer w-full sm:w-auto`}
                      >
                        <Phone className="h-4 w-4" />
                        <span>Esclarecer Dúvida via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => {
                          setSelectedPostId(null);
                          const el = document.getElementById("agendamento");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border border-stone-300 text-stone-700 bg-white hover:bg-stone-50 transition-colors text-center cursor-pointer w-full sm:w-auto`}
                      >
                        Agendar Horário na Agenda
                      </button>
                    </div>
                  </div>
                </div>

                {/* Footer simple sticky close action */}
                <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end flex-shrink-0">
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="px-5 py-2 rounded-xl bg-stone-850 hover:bg-stone-900 text-white text-xs font-bold transition-all cursor-pointer"
                  >
                    Fechar Artigo
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
