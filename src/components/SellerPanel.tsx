import React, { useState } from "react";
import {
  Settings,
  Sparkles,
  Sliders,
  Calendar,
  HelpCircle,
  Check,
  XCircle,
  Database,
  Trash2,
  DollarSign,
  TrendingUp,
  Award,
  BookOpen,
  UserCheck,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { LawyerConfig, Booking } from "../types";
import { PRESET_LAWYERS, RESELLER_PITCHES, RESELLER_TUTORIAL_STEPS } from "../data";

interface SellerPanelProps {
  currentConfig: LawyerConfig;
  onUpdateConfig: (newConfig: LawyerConfig) => void;
  bookings: Booking[];
  onUpdateBookingStatus: (id: string, status: Booking["status"]) => void;
  onClearBookings: () => void;
}

export default function SellerPanel({
  currentConfig,
  onUpdateConfig,
  bookings,
  onUpdateBookingStatus,
  onClearBookings,
}: SellerPanelProps) {
  const [isOpen, setIsOpen] = useState(true); // Default open to guide the developer!
  const [activeTab, setActiveTab] = useState<"preset" | "edit" | "bookings" | "pitch">("preset");

  // Form customizer state
  const [customName, setCustomName] = useState(currentConfig.name);
  const [customOffice, setCustomOffice] = useState(currentConfig.officeName);
  const [customOab, setCustomOab] = useState(currentConfig.oabNumber);
  const [customPhone, setCustomPhone] = useState(currentConfig.whatsappNumber);
  const [customFee, setCustomFee] = useState(currentConfig.consultationFee);
  const [customColor, setCustomColor] = useState(currentConfig.primaryColorPreset);
  const [customAddress, setCustomAddress] = useState(currentConfig.address);
  const [customEmail, setCustomEmail] = useState(currentConfig.email);
  const [customAbout, setCustomAbout] = useState(currentConfig.aboutText);

  const applyPreset = (key: keyof typeof PRESET_LAWYERS) => {
    const p = PRESET_LAWYERS[key];
    onUpdateConfig(p);
    
    // Update local inputs
    setCustomName(p.name);
    setCustomOffice(p.officeName);
    setCustomOab(p.oabNumber);
    setCustomPhone(p.whatsappNumber);
    setCustomFee(p.consultationFee);
    setCustomColor(p.primaryColorPreset);
    setCustomAddress(p.address);
    setCustomEmail(p.email);
    setCustomAbout(p.aboutText);
  };

  const handleSaveCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: LawyerConfig = {
      ...currentConfig,
      name: customName,
      officeName: customOffice,
      oabNumber: customOab,
      whatsappNumber: customPhone,
      consultationFee: customFee,
      primaryColorPreset: customColor,
      address: customAddress,
      email: customEmail,
      aboutText: customAbout,
    };
    onUpdateConfig(updated);
    alert("Conteúdo customizado aplicado com sucesso!");
  };

  return (
    <div className="bg-slate-900 text-white border-b-2 border-emerald-500 shadow-xl transition-all duration-300">
      
      {/* Panel bar toggler */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-emerald-600 rounded-lg text-white font-bold animate-pulse">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          <div>
            <h2 className="text-xs sm:text-sm font-black font-sans tracking-wide uppercase flex items-center gap-2">
              Painel de Demonstração & Vendas <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">ATIVA</span>
            </h2>
            <p className="text-[10px] sm:text-xs text-slate-400 leading-tight">
              Customize este site na hora para apresentar e vender para seu cliente advogado por <strong className="text-emerald-400">R$ 1.500 a R$ 3.000</strong>.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          id="reseller-panel-toggle"
        >
          <Settings className="h-4 w-4" />
          <span>{isOpen ? "Ocultar Painel" : "Mostrar Painel"}</span>
          {isOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Quick tab switchers */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-4">
            <button
              onClick={() => setActiveTab("preset")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "preset"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-850 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>1. Presets Rápidos de Nicho</span>
            </button>
            
            <button
              onClick={() => setActiveTab("edit")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "edit"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-850 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>2. Customizar Dados e Cor</span>
            </button>

            <button
              onClick={() => setActiveTab("bookings")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all relative ${
                activeTab === "bookings"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-850 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>3. Consultas Recebidas</span>
              {bookings.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white font-mono text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
                  {bookings.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("pitch")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === "pitch"
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-850 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span>Guia Comercial (Como Vender)</span>
            </button>
          </div>

          {/* TAB 1: PRESET LAWYERS */}
          {activeTab === "preset" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  🚀 <strong className="text-emerald-400">Dica Prática de Venda:</strong> Demonstre a flexibilidade do site mudando o ramo de atuação instantaneamente em 1 clique na frente do advogado. Veja como cada nicho altera o layout, as especialidades, as cores e as mensagens pré-definidas de WhatsApp!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                {/* Pres 1: Rebeca */}
                <div className="bg-slate-850/80 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1 rounded bg-[#b89047]/10 text-[#b89047] text-xs font-bold">PRESET LUXO</span>
                    <span className="text-[10px] text-slate-400">Direito de Família</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">Dra. Rebeca Andrade</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">Visual Dourado Nobre focado em acolhimento, divórcios, partilhas e inventários em cartório.</p>
                  <button
                    onClick={() => applyPreset("rebeca")}
                    className="w-full mt-4 py-2 rounded bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    Ativar Dra. Rebeca
                  </button>
                </div>

                {/* Pres 2: Lucas */}
                <div className="bg-slate-850/80 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold">PRESET TECH</span>
                    <span className="text-[10px] text-slate-400">Corporativo & Digital</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">Dr. Lucas Puppe</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">Estilo corporativo Azul Navy com foco em startups, LGPD, termos e marcas reguladas.</p>
                  <button
                    onClick={() => applyPreset("lucas")}
                    className="w-full mt-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    Ativar Dr. Lucas
                  </button>
                </div>

                {/* Pres 3: Carlos */}
                <div className="bg-slate-850/80 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition-all text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1 rounded bg-slate-400/10 text-slate-300 text-xs font-bold">PRESET SÓBRIO</span>
                    <span className="text-[10px] text-slate-400">Penal & Emergências</span>
                  </div>
                  <h4 className="font-bold text-sm text-white">Dr. Carlos Eduardo</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">Estilo cinza escuro de alta credibilidade focado em direito de defesa criminal e urgências.</p>
                  <button
                    onClick={() => applyPreset("carlos")}
                    className="w-full mt-4 py-2 rounded bg-slate-700 hover:bg-slate-650 text-white text-xs font-bold cursor-pointer transition-colors"
                  >
                    Ativar Dr. Carlos
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: EDIT CUSTOM PARAMETERS */}
          {activeTab === "edit" && (
            <form onSubmit={handleSaveCustom} className="space-y-4">
              <div className="bg-slate-950/40 p-4 rounded-xl mb-4 border border-slate-800">
                <span className="text-xs text-amber-400 font-bold">⚙️ Edição Livre em Tempo Real</span>
                <p className="text-[11px] text-slate-300 mt-1">Insira os dados do advogado real para quem você quer vender hoje. Salve para ver o site atualizar as copys, OAB, endereços e o número de WhatsApp principal.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                {/* Name */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Nome do Profissional</label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white font-medium"
                    required
                  />
                </div>

                {/* Office Name */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Nome do Escritório</label>
                  <input
                    type="text"
                    value={customOffice}
                    onChange={(e) => setCustomOffice(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white font-medium"
                    required
                  />
                </div>

                {/* OAB Registration Code */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Inscrição OAB</label>
                  <input
                    type="text"
                    value={customOab}
                    onChange={(e) => setCustomOab(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white font-medium"
                    required
                  />
                </div>

                {/* WhatsApp Phone */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">WhatsApp de Contato (DDI + DDD + Nº)</label>
                  <input
                    type="text"
                    placeholder="ex: 5511999999999"
                    value={customPhone}
                    onChange={(e) => setCustomPhone(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white font-mono"
                    required
                  />
                </div>

                {/* Consultation value slider/input */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Valor Médio de Consulta</label>
                  <input
                    type="text"
                    value={customFee}
                    onChange={(e) => setCustomFee(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white"
                  />
                </div>

                {/* Style preset choice */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Paleta Visual</label>
                  <select
                    value={customColor}
                    onChange={(e) => setCustomColor(e.target.value as any)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white font-semibold cursor-pointer"
                  >
                    <option value="gold">Warm Gold & Nobreza (Ouro)</option>
                    <option value="navy">Navy Corporate & Tech (Azul Escuro)</option>
                    <option value="charcoal">Classic Charcoal & Sóbrio (Preto)</option>
                  </select>
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Local / Endereço Físico</label>
                  <input
                    type="text"
                    value={customAddress}
                    onChange={(e) => setCustomAddress(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white"
                  />
                </div>

                {/* Email address */}
                <div>
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">E-mail Profissional</label>
                  <input
                    type="email"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white"
                  />
                </div>

                {/* Slogan details / Bio */}
                <div className="md:col-span-3">
                  <label className="block text-[10px] uppercase font-mono text-slate-400 font-bold mb-1">Minibiografia no Sobre</label>
                  <textarea
                    value={customAbout}
                    onChange={(e) => setCustomAbout(e.target.value)}
                    className="w-full p-2.5 rounded bg-slate-800 border border-slate-700 outline-none text-white h-16 resize-none"
                  ></textarea>
                </div>

              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer flex items-center gap-1.5 transition-colors"
                >
                  <Check className="h-4 w-4" />
                  <span>Salvar e Aplicar ao Site</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 3: BOOKINGS STATE VIEWER */}
          {activeTab === "bookings" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <p className="text-xs text-slate-300 font-semibold flex items-center gap-1.5">
                    <Database className="h-4 w-4 text-emerald-400" />
                    Banco de Dados de Agendamentos (Simulado em LocalState)
                  </p>
                  <p className="text-[10px] text-slate-500">Mostre ao advogado como ele gerenciará os leads recebidos e as consultas marcadas pelo site.</p>
                </div>
                {bookings.length > 0 && (
                  <button
                    onClick={onClearBookings}
                    className="text-[11px] font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span>Limpar Banco</span>
                  </button>
                )}
              </div>

              {bookings.length === 0 ? (
                <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
                  <Calendar className="h-8 w-8 mx-auto opacity-40 mb-2" />
                  <p className="text-xs">Nenhum agendamento foi registrado ainda.</p>
                  <p className="text-[10px] text-slate-600 mt-1">Preencha o formulário de agendamento online abaixo para ver a mágica acontecer!</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead>
                      <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-mono text-[10px] uppercase">
                        <th className="p-3">Cliente / Contato</th>
                        <th className="p-3">Área de Direito</th>
                        <th className="p-3">Data e Hora</th>
                        <th className="p-3">Caso Relatado</th>
                        <th className="p-3 text-center">Status</th>
                        <th className="p-3 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-slate-850/50">
                          <td className="p-3 font-semibold">
                            <span className="text-white block">{booking.clientName}</span>
                            <span className="text-slate-400 font-mono text-[11px] block mt-0.5">{booking.clientPhone}</span>
                            <span className="text-slate-500 text-[10px] block font-mono">{booking.clientEmail}</span>
                          </td>
                          <td className="p-3 font-medium text-[#efdfc8]">
                            {PRESET_LAWYERS[currentConfig.name.split(" ")[1]?.toLowerCase()]?.specialties.find((s) => s.id === booking.specialtyId)?.title || booking.specialtyId || "Geral"}
                          </td>
                          <td className="p-3">
                            <span className="block text-slate-200">
                              {new Date(booking.date + "T00:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "short" })}
                            </span>
                            <span className="text-slate-400 font-mono text-[11px] block">{booking.time} slots</span>
                          </td>
                          <td className="p-3 max-w-xs truncate text-slate-400 italic" title={booking.notes}>
                            {booking.notes || "Não detalhado"}
                          </td>
                          <td className="p-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                booking.status === "Confirmado"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : booking.status === "Cancelado"
                                  ? "bg-red-500/20 text-red-400 border border-red-500/30"
                                  : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="p-3 text-right space-x-1.5 whitespace-nowrap">
                            {booking.status !== "Confirmado" && (
                              <button
                                onClick={() => onUpdateBookingStatus(booking.id, "Confirmado")}
                                className="p-1.5 bg-emerald-700/80 hover:bg-emerald-600 rounded text-white cursor-pointer"
                                title="Confirmar Horário"
                              >
                                <Check className="h-3.5 w-3.5" />
                              </button>
                            )}
                            {booking.status !== "Cancelado" && (
                              <button
                                onClick={() => onUpdateBookingStatus(booking.id, "Cancelado")}
                                className="p-1.5 bg-red-950/80 hover:bg-red-900 rounded text-slate-200 cursor-pointer"
                                title="Cancelar Horário"
                              >
                                <XCircle className="h-3.5 w-3.5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: HOW TO SELL GUIDELINES */}
          {activeTab === "pitch" && (
            <div className="space-y-6 text-sm text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* sales argument bullet list */}
                <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-800 space-y-4">
                  <h4 className="font-bold text-base text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="h-5 w-5" />
                    Argumentos para Vender por +R$2.000
                  </h4>
                  <div className="space-y-4">
                    {RESELLER_PITCHES.map((pitch, index) => (
                      <div key={index} className="space-y-1">
                        <h5 className="font-semibold text-xs text-white uppercase tracking-wider">{pitch.title}</h5>
                        <p className="text-xs text-slate-400 leading-snug">{pitch.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* tutorial selling guide list */}
                <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-800 space-y-4">
                  <h4 className="font-bold text-base text-emerald-400 flex items-center gap-1.5">
                    <Award className="h-5 w-5" />
                    Passo a Passo da Apresentação
                  </h4>
                  <div className="space-y-4">
                    {RESELLER_TUTORIAL_STEPS.map((tut, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-emerald-400 font-mono shrink-0">
                          {tut.step}
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-white uppercase tracking-wide">{tut.title}</h5>
                          <p className="text-xs text-slate-400 leading-snug mt-1">{tut.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary tip card */}
                  <div className="mt-8 pt-4 border-t border-slate-800/80 text-xs text-slate-400 leading-relaxed font-normal">
                    📌 <strong>Sacada Comercial:</strong> Advogados vivem ocupados. Ofereça-lhes a opção de "Site como Serviço" onde você cobra <strong>R$ 150/mês</strong> sob pretexto de manter o agendador ativo, monitorar SEO e atualizar telefone do OAB deles caso mude!
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
