import React from "react";
import { Phone, Calendar, ShieldCheck, Clock, Medal } from "lucide-react";
import { LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface HeroProps {
  config: LawyerConfig;
  onNavigateToBooking: () => void;
}

export default function Hero({ config, onNavigateToBooking }: HeroProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Olá, gostaria de falar com a equipe de assessoria do(a) ${config.name} sobre orientação jurídica.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden bg-[#FDFCFB] py-16 lg:py-24 border-b border-stone-200/80">
      {/* Background Decorative Mesh Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-100/30 blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-stone-200/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e5e0_1px,transparent_1px),linear-gradient(to_bottom,#e8e5e0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text metadata */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Social Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F2ED] border border-stone-200 text-xs text-stone-700 w-fit mb-6 shadow-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
              <span className="font-semibold tracking-wide">Suporte Jurídico Imediato e Sigiloso</span>
            </div>

            <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6.5xl text-stone-900 tracking-tight leading-tight">
              Defesa sólida para os seus{" "}
              <span className={`bg-gradient-to-r ${styling.primary} bg-clip-text text-transparent px-1 inline-block`}>
                Direitos e Interesses
              </span>
            </h1>

            <p className="mt-6 text-lg text-stone-650 max-w-xl font-normal leading-relaxed">
              Atendimento jurídico especializado, exclusivo e consultivo liderado por{" "}
              <strong className="text-stone-900 font-semibold">{config.name}</strong>. Focado em gerar resoluções rápidas e seguras, tanto na esfera consensual quanto na judicial.
            </p>

            {/* Value Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-stone-200/65 max-w-lg">
              <div className="flex items-center gap-2">
                <Clock className={`h-5 w-5 ${styling.textPrimary} shrink-0`} />
                <span className="text-xs font-semibold text-stone-700">Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <Medal className={`h-5 w-5 ${styling.textPrimary} shrink-0`} />
                <span className="text-xs font-semibold text-stone-700">OAB Ativo</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className={`h-5 w-5 ${styling.textPrimary} shrink-0`} />
                <span className="text-xs font-semibold text-stone-700">100% Seguro</span>
              </div>
            </div>

            {/* Landing page triggers */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onNavigateToBooking}
                className={`flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-stone-900/10 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 ${styling.accent}`}
                id="hero-booking-trigger"
              >
                <Calendar className="h-5 w-5" />
                <span>Agendar Consulta Online</span>
              </button>

              <button
                onClick={handleWhatsAppChat}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-[#FAF6F0] hover:bg-stone-100 border border-stone-300 text-stone-800 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 shadow-xs"
                id="hero-whatsapp-trigger"
              >
                <Phone className="h-5 w-5 text-emerald-700 animate-bounce" />
                <span>Conversar por WhatsApp</span>
              </button>
            </div>

            <p className="mt-3 text-xs text-stone-500 italic">
              *Seu contato de WhatsApp será direcionado imediatamente para a equipe do(a) {config.name}.
            </p>
          </div>

          {/* Hero Visual Block */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Geometric backing border representing security / law decor */}
              <div className="absolute inset-0 border-2 border-stone-300 translate-x-4 translate-y-4 rounded-2xl z-0 pointer-events-none"></div>

              {/* Real profile image styled with matching color aura */}
              <div className="relative z-10 bg-[#FAF6F0] p-3 rounded-2xl shadow-xl border border-stone-200 overflow-hidden group">
                <img
                  src={config.aboutImage}
                  alt={config.name}
                  className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl grayscale-10 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Micro branding label in floating container */}
                <div className="absolute bottom-6 left-6 right-6 bg-stone-900/95 backdrop-blur-xs p-4 rounded-xl border border-white/10 text-white shadow-lg">
                  <p className="font-bold text-base leading-none mb-1">{config.name}</p>
                  <p className="text-xs text-stone-300 leading-tight mb-2">{config.title}</p>
                  <p className="text-[10px] font-mono tracking-widest text-[#FAF6F0] uppercase">
                    Inscrição {config.oabNumber}
                  </p>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="absolute -top-3 -right-3 z-25 bg-[#FDFCFB] py-2.5 px-4 rounded-lg shadow-md border border-stone-150 flex items-center gap-2">
                <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 animate-ping"></div>
                <div className="h-3.5 w-3.5 rounded-full bg-emerald-500 absolute top-2.5 left-4"></div>
                <span className="text-xs font-bold text-stone-850">Advocacia Ativa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
