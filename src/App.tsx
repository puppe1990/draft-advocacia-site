/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { 
  Award, 
  Clock, 
  Scale, 
  ShieldCheck, 
  Briefcase, 
  Phone, 
  ArrowUp, 
  Info,
  Calendar,
  Sparkles
} from "lucide-react";
import { LawyerConfig, Booking } from "./types";
import { PRESET_LAWYERS, COLOR_STYLING } from "./data";

// Subcomponents
import Header from "./components/Header";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import SellerPanel from "./components/SellerPanel";

export default function App() {
  // State for layout customization (default to Rebeca, which has warm noble gold styling)
  const [config, setConfig] = useState<LawyerConfig>(PRESET_LAWYERS.rebeca);
  
  // State for persistent bookings (simulated cloud server DB using localStorage)
  const [bookings, setBookings] = useState<Booking[]>([]);

  // State to show back-to-top floating button on lower scrolls
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // State to force show notification on the persistent WhatsApp bubble after 4 seconds
  const [showWaNotification, setShowWaNotification] = useState(false);

  // References to scroll targets
  const specialtiesRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  // Load bookings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lawyer_site_bookings");
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (err) {
        console.error("Erro ao carregar agendamentos", err);
      }
    }

    // Trigger WhatsApp floating alert sound or bounce after delay
    const timer = setTimeout(() => {
      setShowWaNotification(true);
    }, 4000);

    // Monitor page scroll coordinates
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUpdateConfig = (newConfig: LawyerConfig) => {
    setConfig(newConfig);
  };

  const handleAddBooking = (newBooking: Booking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem("lawyer_site_bookings", JSON.stringify(updated));
  };

  const handleUpdateBookingStatus = (id: string, status: Booking["status"]) => {
    const updated = bookings.map((b) => (b.id === id ? { ...b, status } : b));
    setBookings(updated);
    localStorage.setItem("lawyer_site_bookings", JSON.stringify(updated));
  };

  const handleClearBookings = () => {
    if (window.confirm("Deseja realmente limpar todos os registros de agendamentos fictícios?")) {
      setBookings([]);
      localStorage.removeItem("lawyer_site_bookings");
    }
  };

  // Scroll executors
  const scrollToSpecialties = () => {
    const el = document.getElementById("especialidades");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBooking = () => {
    const el = document.getElementById("agendamento");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFAQ = () => {
    const el = document.getElementById("faq");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBlog = () => {
    const el = document.getElementById("blog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStickyWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Olá ${config.name}, visitei o site e gostaria de esclarecer uma dúvida jurídica urgente.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${textMsg}`, "_blank");
  };

  const styling = COLOR_STYLING[config.primaryColorPreset];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans selection:bg-[#FAF6F0] text-stone-900">
      
      {/* 1. SELLER'S COMPANION FLIGHT DECK (O Painel do Revendedor) */}
      <SellerPanel
        currentConfig={config}
        onUpdateConfig={handleUpdateConfig}
        bookings={bookings}
        onUpdateBookingStatus={handleUpdateBookingStatus}
        onClearBookings={handleClearBookings}
      />

      {/* 2. HEADER */}
      <Header
        config={config}
        onNavigateToBooking={scrollToBooking}
        onNavigateToSpecialties={scrollToSpecialties}
        onNavigateToFAQ={scrollToFAQ}
        onNavigateToBlog={scrollToBlog}
        onOpenReseller={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* 3. HERO SHOWCASE */}
      <Hero
        config={config}
        onNavigateToBooking={scrollToBooking}
      />

      {/* 4. VALUE PROPOSITION DIFFERENTIALS */}
      <section id="valores" className="py-20 bg-[#F5F2ED] border-b border-stone-250">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-white py-1.5 px-4 rounded-full border border-stone-200`}>
              VALORES FUNDAMENTAIS
            </span>
            <h2 className="mt-4 font-sans font-bold text-3xl text-slate-900 tracking-tight">
              Por que escolher o nosso escritório?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Assentamos nossa governança em pilares robustos para promover decisões seguras e resguardar o patrimônio moral e financeiro de nossos constituintes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Diff 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start hover:shadow-md transition-shadow">
              <div className={`p-4 rounded-xl ${styling.tagBg} mb-5`}>
                <Scale className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 font-sans">
                Rigor Técnico e Acadêmico
              </h4>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed font-normal">
                Análises aprofundadas com base em jurisprudência consolidada nos Tribunais Superiores. Defesas estruturadas sem improvisos que garantem previsibilidade jurídica para a sua causa.
              </p>
            </div>

            {/* Diff 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start hover:shadow-md transition-shadow">
              <div className={`p-4 rounded-xl ${styling.tagBg} mb-5`}>
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 font-sans">
                Retorno Ágil e Transparente
              </h4>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed font-normal">
                Relatórios mensais detalhados sobre o andamento e movimentação do seu processo. Atendimento imediato para urgências em canais digitais sem burocracia ou intermediários.
              </p>
            </div>

            {/* Diff 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col items-start hover:shadow-md transition-shadow">
              <div className={`p-4 rounded-xl ${styling.tagBg} mb-5`}>
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 font-sans">
                Sigilo Absoluto e Confiança
              </h4>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed font-normal">
                Tratamento primoroso das suas dados em ambiente protegido. Respeito integral à Lei Geral de Proteção de Dados (LGPD) e confidencialidade irrevogável do início das consultas pedagógicas.
              </p>
            </div>

          </div>

          {/* Consultation Fee visual CTA */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3 bg-slate-100 rounded-lg shrink-0">
                <Award className="h-6 w-6 text-slate-700" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm sm:text-base">Profissional Conectado com Sua Segurança</p>
                <p className="text-xs text-slate-500">Valor de honorários sob estimativa clara antes do início de qualquer ação contenciosa.</p>
              </div>
            </div>
            <div className="text-right whitespace-nowrap">
              <span className="text-xs text-slate-500 font-mono block">CONSULTA INICIAL</span>
              <span className={`text-xl font-bold font-mono tracking-tight ${styling.textPrimary}`}>{config.consultationFee}</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. PORTFOLIO & HISTORIC BIO (SOBRE O ESCRITÓRIO) */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual background pattern column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-md transform hover:-rotate-1 transition-transform relative">
                <div className={`absolute inset-0 bg-gradient-to-t ${styling.primary} opacity-10 mix-blend-multiply z-10`}></div>
                <img
                  src={config.aboutImage}
                  alt="Escritório Advocacia Premium"
                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 transition-all duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating detail badge representing cumulative success */}
              <div className="absolute -bottom-5 -right-5 bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-lg hidden sm:block text-left">
                <span className="text-2xl font-black text-[#efdfc8] block font-mono">100%</span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block mt-0.5">Dedicado ao Compliance</span>
              </div>
            </div>

            {/* Content text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-slate-100 py-1.5 px-4 rounded-full`}>
                SOBRE O ESCRITÓRIO
              </span>
              
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Defesa Jurídica Comprometida com Resultados de Excelência
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                {config.aboutText}
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                Através de uma infraestrutura moderna, focamos em um atendimento híbrido altamente eficiente: fazemos reuniões presenciais na nossa sede física ou videoconferências criptografadas para clientes que preferem a comodidade de não se deslocar.
              </p>

              {/* Badges checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">✓</div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Inscrição de OAB Validade Ativa</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">✓</div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Formulação Consensual Extrajudicial</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">✓</div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Amparo à LGPD e Sigilo Profissional</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold font-mono">✓</div>
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">Atendimento Nacional 100% On-line</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. PRACTICE AREAS DYNAMIC SHEETS */}
      <Specialties config={config} />

      {/* 6.5 INTERACTIVE FAQ ACCORDION SECTION */}
      <FAQ config={config} />

      {/* 6.8 DYNAMIC CONTENT AUTHORITATIVE BLOG SECTION */}
      <Blog config={config} />

      {/* 7. SECURE INTERACTIVE BOOKING CALENDAR */}
      <BookingForm config={config} onAddBooking={handleAddBooking} />

      {/* 8. DETAILED COMPLIANT LEGAL FOOTER */}
      <Footer
        config={config}
        onNavigateToBooking={scrollToBooking}
        onNavigateToSpecialties={scrollToSpecialties}
        onNavigateToFAQ={scrollToFAQ}
        onNavigateToBlog={scrollToBlog}
      />

      {/* =======================================================
          9. PERSISTENT FLOATING COMMUNICATOR & NAVIGATION TRIGGERS
          ======================================================= */}
          
      {/* Scroll to Top floating arrow */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-black hover:bg-neutral-800 text-white shadow-xl transition-all border border-neutral-750 cursor-pointer hidden sm:block"
          id="back-to-top-button"
          title="Subir ao Topo da Página"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* WhatsApp Floating Interactive bubble with tooltip notification */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showWaNotification && (
          <div className="mb-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xl max-w-xs text-xs text-left text-slate-800 relative animate-bounce flex items-center gap-2 border-l-4 border-l-emerald-500">
            <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
            <div>
              <p className="font-bold text-slate-900 leading-tight">Dúvidas Jurídicas?</p>
              <p className="text-slate-400 text-[10px] mt-0.5">Fale com {config.name.split(" ")[1] || "advogado"} agora!</p>
            </div>
            <button
              onClick={() => setShowWaNotification(false)}
              className="text-slate-400 hover:text-slate-700 font-bold ml-2 outline-none font-mono text-[10px]"
            >
              ✕
            </button>
          </div>
        )}

        <button
          onClick={handleStickyWhatsApp}
          className="p-4 rounded-full bg-[#25d366] hover:bg-[#20ba56] text-white shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer relative flex items-center justify-center shadow-emerald-500/30"
          id="global-floating-whatsapp"
          title="Falar imediatamente com o escritório pelo WhatsApp"
        >
          <Phone className="h-6 w-6 text-white animate-pulse" />
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[7px] text-white font-bold">1</span>
        </button>
      </div>

    </div>
  );
}
