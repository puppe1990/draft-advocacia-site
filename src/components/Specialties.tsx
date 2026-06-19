import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Specialty, LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface SpecialtiesProps {
  config: LawyerConfig;
}

// Map strings to Lucide components safely
const IconRenderer = ({ name, className }: { name: string; className: string }) => {
  // Safe lookup with dynamic fallback
  const IconComponent = (Icons as any)[name] || Icons.Scale;
  return <IconComponent className={className} />;
};

export default function Specialties({ config }: SpecialtiesProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(
    config.specialties[0] || null
  );

  const handleConsultSpecialty = (specialty: Specialty) => {
    const text = encodeURIComponent(
      `Olá ${config.name}, vi seu site corporativo e gostaria de solicitar uma consulta especializada em *${specialty.title}* para tratar de uma questão jurídica.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="especialidades" className="py-20 bg-[#FDFCFB] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-[#F5F2ED] py-1.5 px-4 rounded-full`}>
            ÁREAS DE EXCELÊNCIA
          </span>
          <h2 className="mt-4 font-serif font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Nossas Especialidades Jurídicas
          </h2>
          <p className="mt-4 text-base text-stone-600">
            Prestamos assessoria de alto nível técnico e estratégico em diversos ramos da ciência jurídica. Selecione uma especialidade para ver os principais focos de atuação.
          </p>
        </div>

        {/* Layout Grid: Specialties list on left or right, details beside, or complete cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* List of Specialties (left 5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold font-mono text-stone-400 tracking-widest uppercase mb-2">
              Selecione uma especialidade
            </h3>
            {config.specialties.map((specialty) => {
              const isSelected = selectedSpecialty?.id === specialty.id;
              return (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 cursor-pointer outline-none ${
                    isSelected
                      ? `border-stone-850 shadow-xs translate-x-1 ${styling.bgLight}`
                      : "border-stone-200 hover:border-stone-300 hover:bg-[#FAF6F0] bg-white"
                  }`}
                  id={`specialty-button-${specialty.id}`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      isSelected
                        ? `bg-stone-900 text-white`
                        : `${styling.tagBg}`
                    }`}
                  >
                    <IconRenderer name={specialty.icon} className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-sans font-bold text-stone-900 block truncate text-base">
                      {specialty.title}
                    </span>
                    <span className="text-xs text-stone-500 block truncate mt-0.5">
                      {specialty.shortDescription}
                    </span>
                  </div>
                  <Icons.ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isSelected ? `${styling.textPrimary} translate-x-1` : "text-stone-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Specialty Interactive Details display (right 7 columns) */}
          <div className="lg:col-span-7">
            {selectedSpecialty ? (
              <div 
                className="bg-[#FAF6F0]/60 rounded-2xl border border-stone-200 p-8 shadow-xs relative overflow-hidden"
                id="specialty-details-panel"
              >
                {/* Visual Accent Layer */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${styling.primary}`}></div>

                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-xl ${styling.tagBg} shrink-0`}>
                    <IconRenderer name={selectedSpecialty.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <span className={`text-xs font-mono font-bold uppercase tracking-wider ${styling.textPrimary}`}>
                      Setor de Atuação
                    </span>
                    <h4 className="font-serif font-bold text-2xl text-stone-900 mt-1">
                      {selectedSpecialty.title}
                    </h4>
                  </div>
                </div>

                <div className="mt-6 border-t border-stone-200 pt-6">
                  <h5 className="text-sm font-semibold text-stone-905 uppercase tracking-wide">
                    Como atuamos nesta área:
                  </h5>
                  <p className="mt-2 text-stone-600 text-sm sm:text-base leading-relaxed">
                    {selectedSpecialty.fullDescription}
                  </p>
                </div>

                {/* Typical cases solved */}
                <div className="mt-8">
                  <h5 className="text-xs font-bold font-mono text-stone-900 tracking-wider uppercase mb-3 flex items-center gap-1.5">
                    <Icons.CheckCircle className={`h-4 w-4 ${styling.textPrimary}`} />
                    Casos Comuns e Demandas Cobertas
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedSpecialty.typicalCases.map((useCase, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-white/90 p-3 rounded-lg border border-stone-200/50"
                      >
                        <Icons.Check className="h-4 w-4 text-emerald-700 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-stone-700 leading-tight">
                          {useCase}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion Trigger Footer */}
                <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-stone-500 font-semibold">Restou alguma dúvida sobre o seu caso?</p>
                    <p className="text-xs text-stone-400">Clique para enviar uma mensagem encriptada de análise.</p>
                  </div>
                  <button
                    onClick={() => handleConsultSpecialty(selectedSpecialty)}
                    className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold shadow-xs transition-colors cursor-pointer ${styling.accent}`}
                  >
                    <Icons.Phone className="h-4 w-4 animate-bounce" />
                    <span>Perguntar s/ {selectedSpecialty.id === "previdenciario" ? "INSS" : selectedSpecialty.title.split(" ")[2] || "esta área"}</span>
                  </button>
                </div>

              </div>
            ) : (
              <div className="border-2 border-dashed border-stone-200 rounded-2xl p-12 text-center text-stone-400">
                <Icons.Scale className="h-10 w-10 mx-auto opacity-40 mb-3" />
                <p>Selecione uma especialidade ao lado para conferir detalhes da nossa cobertura de atuação.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
