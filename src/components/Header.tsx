import React from "react";
import { Scale, Phone, Shield } from "lucide-react";
import { LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface HeaderProps {
  config: LawyerConfig;
  onNavigateToBooking: () => void;
  onNavigateToSpecialties: () => void;
  onOpenReseller: () => void;
  onNavigateToFAQ: () => void;
  onNavigateToBlog: () => void;
}

export default function Header({
  config,
  onNavigateToBooking,
  onNavigateToSpecialties,
  onOpenReseller,
  onNavigateToFAQ,
  onNavigateToBlog,
}: HeaderProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(config.whatsappMessagePreset);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Office Name */}
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-lg bg-gradient-to-br ${styling.primary} text-white shadow-xs`}>
              <Scale className="h-6 w-6" id="header-logo-icon" />
            </div>
            <div>
              <span className="font-sans font-bold text-lg text-stone-900 tracking-tight block">
                {config.officeName}
              </span>
              <span className={`text-[10px] font-mono tracking-wider uppercase ${styling.textPrimary} font-medium block`}>
                {config.oabNumber}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={onNavigateToSpecialties}
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors cursor-pointer"
              id="nav-link-specialties"
            >
              Áreas de Atuação
            </button>
            <a
              href="#sobre"
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors"
              id="nav-link-about"
            >
              Sobre o Escritório
            </a>
            <a
              href="#valores"
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors"
              id="nav-link-values"
            >
              Diferenciais
            </a>
            <button
              onClick={onNavigateToFAQ}
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors cursor-pointer"
              id="nav-link-faq"
            >
              Dúvidas Frequentes
            </button>
            <button
              onClick={onNavigateToBlog}
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors cursor-pointer text-stone-700 font-semibold"
              id="nav-link-blog"
            >
              Blog e Artigos
            </button>
            <button
              onClick={onNavigateToBooking}
              className="text-sm font-medium text-stone-650 hover:text-stone-900 transition-colors cursor-pointer"
              id="nav-link-booking"
            >
              Agendar Consulta
            </button>
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            {/* Reseller Quick Highlight Ribbon for user seller */}
            <button
              onClick={onOpenReseller}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-all cursor-pointer animate-pulse"
              id="reseller-badge-header"
              title="Clique para customizar este site antes de vender para o seu cliente advogado!"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block"></span>
              Painel de Customização
            </button>

            {/* Main Contact CTA */}
            <button
              onClick={handleWhatsAppDirect}
              className={`flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-sm ${styling.accent}`}
              id="header-cta-whatsapp"
            >
              <Phone className="h-4 w-4" />
              <span>Plantão WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
