import React from "react";
import { Scale, MapPin, Mail, Phone, Clock, ShieldCheck, HeartHandshake } from "lucide-react";
import { LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface FooterProps {
  config: LawyerConfig;
  onNavigateToBooking: () => void;
  onNavigateToSpecialties: () => void;
  onNavigateToFAQ?: () => void;
  onNavigateToBlog?: () => void;
}

export default function Footer({ config, onNavigateToBooking, onNavigateToSpecialties, onNavigateToFAQ, onNavigateToBlog }: FooterProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(
      `Olá, visitei o site do(a) ${config.name} e gostaria de solicitar apoio jurídico geral.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <footer className="bg-stone-900 text-stone-100 pt-16 pb-12 border-t border-stone-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand block */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded bg-[#FAF6F0] text-stone-950`}>
                <Scale className="h-5 w-5" />
              </div>
              <div>
                <span className="font-serif font-bold text-base tracking-tight text-white block">
                  {config.officeName}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAF6F0] font-semibold">
                  {config.oabNumber}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-stone-400 leading-relaxed font-normal">
              Advocacia consultiva e contenciosa focada em máxima presteza, confidencialidade absoluta e soluções inteligentes para pessoas físicas e jurídicas.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[#FAF6F0] text-xs">
              <ShieldCheck className="h-4 w-4" />
              <span>Inscrição Homologada na OAB</span>
            </div>
          </div>

          {/* Practice areas map */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-wider text-stone-300 uppercase mb-4">
              Nossas Áreas
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              {config.specialties.slice(0, 4).map((specialty) => (
                <li key={specialty.id}>
                  <button
                    onClick={onNavigateToSpecialties}
                    className="hover:text-[#FAF6F0] transition-colors hover:underline text-left cursor-pointer"
                  >
                    {specialty.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onNavigateToSpecialties}
                  className="hover:text-[#FAF6F0] transition-colors hover:underline text-left font-semibold text-stone-300 cursor-pointer"
                >
                  Ver todas as especialidades →
                </button>
              </li>
            </ul>
          </div>

          {/* Quick links & Hours */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-wider text-stone-300 uppercase mb-4">
              Atendimento e Canais
            </h4>
            <div className="space-y-4 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-[#FAF6F0] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-200">Segunda a Sexta</p>
                  <p className="text-stone-400 text-[11px] mt-0.5">Das 09:00 às 18:00 (Exceto Feriados)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <HeartHandshake className="h-4 w-4 text-[#FAF6F0] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-stone-200">Agendamento Online</p>
                  <p className="text-stone-400 text-[11px] mt-0.5">Disponível 24h por dia, 7 dias por semana</p>
                </div>
              </div>
              
              <button
                onClick={onNavigateToBooking}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FAF6F0] hover:underline cursor-pointer"
              >
                Agende um horário online agora →
              </button>

              {onNavigateToFAQ && (
                <button
                  onClick={onNavigateToFAQ}
                  className="block text-xs font-bold text-[#FAF6F0] hover:underline cursor-pointer text-left"
                >
                  Dúvidas Frequentes (FAQ) →
                </button>
              )}

              {onNavigateToBlog && (
                <button
                  onClick={onNavigateToBlog}
                  className="block text-xs font-bold text-[#FAF6F0] hover:underline cursor-pointer text-left"
                >
                  Blog e Artigos Jurídicos →
                </button>
              )}
            </div>
          </div>

          {/* Physical Address Context */}
          <div>
            <h4 className="text-xs font-bold font-mono tracking-wider text-stone-300 uppercase mb-4">
              Sede do Escritório
            </h4>
            <div className="space-y-3.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#FAF6F0] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{config.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#FAF6F0] shrink-0" />
                <a href={`mailto:${config.email}`} className="hover:underline hover:text-white">
                  {config.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#FAF6F0] shrink-0" />
                <button onClick={handleWhatsAppHelp} className="hover:underline hover:text-white cursor-pointer font-bold">
                  +{config.whatsappNumber.slice(0, 2)} ({config.whatsappNumber.slice(2, 4)}) {config.whatsappNumber.slice(4, 9)}-{config.whatsappNumber.slice(9)}
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimers regarding OAB regulations */}
        <div className="mt-12 pt-8 text-[11px] text-stone-550 space-y-4 font-normal text-justify sm:text-left leading-relaxed">
          <p>
            <strong>AVISO LEGAL E ÉTICO (OAB):</strong> Este website foi desenvolvido em estrita conformidade com o Código de Ética e Disciplina da Ordem dos Advogados do Brasil (Provimento 205/2021). As informações aqui publicadas têm caráter meramente informativo e educacional, não constituindo publicidade ativa para captação ilegal de clientela, nem consultoria jurídica formalizada ou promessa de sucesso de causa judicial.
          </p>
          <p>
            <strong>LGPD E PRIVACIDADE:</strong> Quaisquer dados fornecidos através deste canal de agendamento online são armazenados de forma estritamente confidencial e utilizados única e exclusivamente para a triagem e agendamento de consultas jurídicas no âmbito deste escritório comercial, em atendimento à Lei Geral de Proteção de Dados (Lei 13.709/18).
          </p>
          <p className="text-center pt-4 text-xs text-stone-500 border-t border-stone-800">
            © {new Date().getFullYear()} {config.officeName}. Todos os direitos reservados. Desenvolvido para Alta Conversão.
          </p>
        </div>

      </div>
    </footer>
  );
}
