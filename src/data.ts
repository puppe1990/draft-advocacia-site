import { LawyerConfig, Specialty } from "./types";

export const DEFAULT_SPECIALTIES_FAMILY: Specialty[] = [
  {
    id: "familia",
    title: "Direito de Família e Sucessões",
    shortDescription: "Inventários, divórcios consensuais ou litigiosos, guarda de menores, partilha de bens e pensão alimentícia.",
    fullDescription: "Atuação humanizada, ágil e altamente confidencial para solucionar questões complexas no âmbito familiar. Buscamos sempre a mediação amigável antes da via contenciosa judicial.",
    icon: "HeartHandshake",
    typicalCases: ["Regulação e Execução de Pensão", "Divórcio Rápido em Cartório", "Planejamento Sucessório e Testamentos", "Guarda Compartilhada de Filhos"]
  },
  {
    id: "civil",
    title: "Direito Civil e Contratos",
    shortDescription: "Análise e elaboração de contratos, indenizações, cobranças, direito imobiliário e assessoria em negócios.",
    fullDescription: "Garantimos segurança jurídica absoluta em todos os seus acordos de compra, venda, aluguel, prestações de serviço ou disputas contratuais.",
    icon: "FileText",
    typicalCases: ["Rescisão de Contrato Imobiliário", "Ações de Despejo e Possessórias", "Indenizações por Danos Morais", "Revisão Judicial de Contratos e Juros"]
  },
  {
    id: "trabalho",
    title: "Direito do Trabalho",
    shortDescription: "Defesa dos direitos do trabalhador ou assessoria jurídica preventiva para empresas (CCT/CLT).",
    fullDescription: "Resolução especializada de conflitos trabalhistas, como horas extras não pagas, assédio moral, rescisões abusivas, limbo previdenciário e estabilidade de gestante.",
    icon: "Briefcase",
    typicalCases: ["Cálculo de Verbas Rescisórias", "Ações de Reconhecimento de Vínculo", "Danos Morais por Acidente de Trabalho", "Defesa Trabalhista Empresarial"]
  },
  {
    id: "previdenciario",
    title: "Direito Previdenciário (INSS)",
    shortDescription: "Concessão de aposentadorias por tempo, idade, invalidez, além de auxílios e BPC/LOAS.",
    fullDescription: "Planejamento previdenciário minucioso para garantir que você receba o benefício mais vantajoso no menor tempo possível, corrigindo erros comuns cometidos pelo INSS.",
    icon: "Award",
    typicalCases: ["Aposentadoria Especial ou por Idade", "Auxílio-Doença Negado pelo INSS", "Amparo Social BPC / LOAS", "Planejamento e Cálculo de Contribuição"]
  }
];

export const PRESET_LAWYERS: Record<string, LawyerConfig> = {
  rebeca: {
    name: "Dra. Rebeca Andrade",
    title: "Especialista em Direito de Família e Previdenciário",
    officeName: "Andrade Advocacia Humanizada",
    whatsappNumber: "5511999998888",
    whatsappMessagePreset: "Olá Dra. Rebeca, visitei o seu site e gostaria de agendar uma consulta para tratar sobre uma questão de direito familiar.",
    aboutText: "Com mais de 10 anos de experiência, dedico minha carreira a acolher e resolver conflitos familiares com total sensibilidade e agilidade jurídica. Minha missão é proteger o seu patrimônio e restabelecer a harmonia da sua família em momentos de transição de forma rápida, segura e prioritariamente amigável.",
    aboutImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP, Sala 402",
    email: "contato@rebecaandrade.adv.br",
    oabNumber: "OAB/SP 123.456",
    consultationFee: "R$ 350,00",
    primaryColorPreset: "gold",
    specialties: DEFAULT_SPECIALTIES_FAMILY
  },
  lucas: {
    name: "Dr. Lucas Puppe",
    title: "Especialista em Direito Digital, Corporativo e Societário",
    officeName: "Puppe & Advogados Associados",
    whatsappNumber: "5511988887777",
    whatsappMessagePreset: "Olá Dr. Lucas, vi seu site e gostaria de agendar uma consultoria empresarial / assessoria de startups.",
    aboutText: "Professor, palestrante e advogado especialista na intersecção entre tecnologia, negócios e direito. Auxilio empresas de base tecnológica, startups e corporações tradicionais a se adequarem à LGPD, desenharem acordos de acionistas blindados e estruturarem contratos comerciais de alta performance internacional.",
    aboutImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600",
    address: "Faria Lima, 2500 - Itaim Bibi, São Paulo - SP, Bloco B",
    email: "lucas@puppeassociados.adv.br",
    oabNumber: "OAB/SP 234.567",
    consultationFee: "Sob Consulta (PJ)",
    primaryColorPreset: "navy",
    specialties: [
      {
        id: "corporativo",
        title: "Direito Societário e Startups",
        shortDescription: "Contrato de Vesting, Acordo de Sócios (MOU), constituição de holdings e proteção patrimonial de fundadores.",
        fullDescription: "Prevenimos disputas judiciais graves estruturando as regras de entrada e saída de investidores, distribuição de lucros, governança corporativa e blindagem de patrimônio.",
        icon: "ShieldAlert",
        typicalCases: ["Estruturação de S/A e LMTD", "Acordo de Acionistas e Investimento Anjo", "Fusões e Aquisições (M&A)", "Vesting e Stock Options"]
      },
      {
        id: "digital",
        title: "Direito Digital e LGPD",
        shortDescription: "Adequação completa à LGPD, termos de uso para plataformas, e disputas relativas a golpes virtuais ou calúnia online.",
        fullDescription: "Garantimos a conformidade legal dos seus produtos de software, aplicativos e sites com as principais leis de proteção de dados brasileiras e internacionais.",
        icon: "Scale",
        typicalCases: ["Termos de Uso e Política de Privacidade", "Defesa contra Sanções da ANPD", "Ação por Roubo de Perfil de Social Media", "Contratos de Computação em Nuvem"]
      }
    ]
  },
  carlos: {
    name: "Dr. Carlos Eduardo Silva",
    title: "Especialista em Defesa Penal e Direito Público",
    officeName: "Silva & Silva Advogados Associados",
    whatsappNumber: "5521977776666",
    whatsappMessagePreset: "Olá Dr. Carlos, preciso de suporte ou assessoria imediata em caráter de urgência defensiva ou penal.",
    aboutText: "Formado pela UFRJ, ex-defensor público e criminalista combativo. Com ampla atuação em tribunais superiores (STJ e STF), atendo em caráter emergencial 24 horas por dia para garantir a plenitude da de defesa constitucional dos meus constituintes.",
    aboutImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600",
    address: "Av. Rio Branco, 156 - Centro, Rio de Janeiro - RJ",
    email: "urgencias@silvasilva.adv.br",
    oabNumber: "OAB/RJ 345.678",
    consultationFee: "R$ 600,00",
    primaryColorPreset: "charcoal",
    specialties: [
      {
        id: "criminal",
        title: "Direito Penal Geral e do Colarinho Branco",
        shortDescription: "Acompanhamento em delegacia 24h, defesa em inquéritos policiais, habeas corpus e crimes contra o sistema financeiro.",
        fullDescription: "Agimos desde o momento preparatório com dedicação absoluta, combatendo prisões arbitrárias, negociando acordos justos e defendendo o réu no júri ou tribunais superiores.",
        icon: "ShieldQuestion",
        typicalCases: ["Habeas Corpus de Urgência", "Acompanhamento de Oitiva Policial", "Leniência e Acordo de Não Persecução Penal (ANPP)", "Defesa no Tribunal do Júri"]
      }
    ]
  }
};

export const COLOR_STYLING = {
  gold: {
    primary: "from-[#F5E6D3] to-[#8C6D41]",
    primarySolid: "#8C6D41",
    textPrimary: "text-[#8C6D41]",
    bgLight: "bg-[#FAF6F0]",
    divider: "border-stone-200",
    accent: "bg-[#8C6D41] hover:bg-[#725732] text-white focus:ring-[#8C6D41]/50",
    accentLight: "bg-[#FAF6F0] border border-stone-200 text-[#8C6D41] hover:bg-[#F3ECE0]",
    tagBg: "bg-amber-100/50 text-[#8C6D41]",
    heroText: "text-stone-900",
  },
  navy: {
    primary: "from-[#E8EFE9] to-[#3A4D39]",
    primarySolid: "#3A4D39",
    textPrimary: "text-[#3A4D39]",
    bgLight: "bg-[#F5F2ED]",
    divider: "border-stone-200/80",
    accent: "bg-[#3A4D39] hover:bg-[#2d3a2c] text-white focus:ring-[#3A4D39]/50",
    accentLight: "bg-[#F5F2ED] border border-stone-200 text-[#3A4D39] hover:bg-[#e9e4dc]",
    tagBg: "bg-emerald-100/60 text-[#3A4D39]",
    heroText: "text-stone-900",
  },
  charcoal: {
    primary: "from-stone-400 to-stone-800",
    primarySolid: "#292524",
    textPrimary: "text-stone-800",
    bgLight: "bg-[#FBFBFA]",
    divider: "border-stone-200",
    accent: "bg-stone-800 hover:bg-stone-900 text-white focus:ring-stone-500/50",
    accentLight: "bg-[#F5F5F4] border border-stone-200 text-stone-850 hover:bg-stone-200",
    tagBg: "bg-stone-100 text-stone-800",
    heroText: "text-stone-950",
  }
};

export const RESELLER_PITCHES = [
  {
    title: "1. Alta Conversão do WhatsApp",
    description: "Cada especialidade jurídica gera um link dinâmico diferente com mensagens personalizadas enviadas ao celular do advogado, permitindo triar o cliente imediatamente."
  },
  {
    title: "2. Agendamento Sem Atrito",
    description: "O cliente escolhe o dia, hora e detalha o caso. Diminui em até 65% as faltas em consultas, pois envia o resumo pronto para ser copiado no WhatsApp."
  },
  {
    title: "3. Design Nobre e Institucional",
    description: "Advocacia exige credibilidade. Esta identidade usa tons sóbrios (Preto, Dourado e Azul Real) para transmitir altíssima autoridade e justificar honorários valorizados."
  },
  {
    title: "4. Zero Custo de Servidor",
    description: "Este site pode ser hospedado de forma estática gratuita no Netlify, Vercel ou Firebase Hosting, gerando lucro de 100% no desenvolvimento e cobrando apenas mensalidade de manutenção básica."
  }
];

export const RESELLER_TUTORIAL_STEPS = [
  {
    step: "1",
    title: "Mude os Prontuários",
    description: "Use o menu flutuante acima para alterar o nome, OAB, cores e dados do advogado de acordo com quem você está abordando."
  },
  {
    step: "2",
    title: "Apresente pelo Google Ads",
    description: "Mostre ao advogado como o agendador dele receberá interessados refinados, exibindo a aba 'Consultas Recebidas' na simulação."
  },
  {
    step: "3",
    title: "Feche a Venda de R$ 2.000",
    description: "Explique que você entrega o site pronto em 48 horas, conecta o WhatsApp real dele e configura o domínio próprio dele (.com.br)."
  }
];
