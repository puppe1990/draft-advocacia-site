import React, { useState } from "react";
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, FileText, CheckCircle, Smartphone } from "lucide-react";
import { Booking, LawyerConfig } from "../types";
import { COLOR_STYLING } from "../data";

interface BookingFormProps {
  config: LawyerConfig;
  onAddBooking: (booking: Booking) => void;
}

export default function BookingForm({ config, onAddBooking }: BookingFormProps) {
  const styling = COLOR_STYLING[config.primaryColorPreset];

  // Forms states
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [specialtyId, setSpecialtyId] = useState(config.specialties[0]?.id || "");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [notes, setNotes] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);
  const [latestBooking, setLatestBooking] = useState<Booking | null>(null);

  // Mask function for Brazilian Phone: (99) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) {
      value = value.slice(0, 11);
    }
    
    // Apply masks
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    setClientPhone(value);
  };

  // Get next 7 business list days starting tomorrow to make choosing simple and interactive
  const getNextDays = () => {
    const days = [];
    const today = new Date(); // Using browser dates, starts tomorrow of current date
    let counted = 0;
    let addDays = 1;

    while (counted < 6) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + addDays);
      const dayOfWeek = nextDate.getDay();

      // Skip Sunday (0) and Saturday (6) for lawyer default business hours
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        const value = nextDate.toISOString().split("T")[0];
        const label = nextDate.toLocaleDateString("pt-BR", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
        days.push({ value, label });
        counted++;
      }
      addDays++;
    }
    return days;
  };

  const timeSlots = ["09:00", "10:30", "13:30", "15:00", "16:30"];
  const daysList = getNextDays();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName || !clientPhone || !bookingDate || !bookingTime || !specialtyId) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const newBooking: Booking = {
      id: Math.random().toString(36).substring(2, 9),
      clientName,
      clientPhone,
      clientEmail: clientEmail || "Não informado",
      specialtyId,
      date: bookingDate,
      time: bookingTime,
      notes,
      status: "Pendente",
      createdAt: new Date().toISOString(),
    };

    onAddBooking(newBooking);
    setLatestBooking(newBooking);
    setIsSuccess(true);
  };

  const handleResetForm = () => {
    setClientName("");
    setClientPhone("");
    setClientEmail("");
    setBookingDate("");
    setBookingTime("");
    setNotes("");
    setIsSuccess(false);
    setLatestBooking(null);
  };

  const getSelectedSpecialtyTitle = () => {
    return config.specialties.find((s) => s.id === specialtyId)?.title || "Consulta Geral";
  };

  // WhatsApp formatted template representing the appointment request
  const handleWhatsAppShare = () => {
    if (!latestBooking) return;
    
    const formattedDate = new Date(latestBooking.date + "T00:00:00").toLocaleDateString(
      "pt-BR",
      { day: "numeric", month: "long", year: "numeric" }
    );

    const textMsg = `*🚨 NOVO AGENDAMENTO DE CONSULTA*\n\n` +
      `👤 *Nome:* ${latestBooking.clientName}\n` +
      `📞 *Celular:* ${latestBooking.clientPhone}\n` +
      `📧 *E-mail:* ${latestBooking.clientEmail}\n` +
      `💼 *Área:* ${getSelectedSpecialtyTitle()}\n` +
      `📅 *Data:* ${formattedDate}\n` +
      `⏰ *Horário:* ${latestBooking.time}\n` +
      `📝 *Relato:* ${latestBooking.notes || "Nenhum detalhe adicional"}\n\n` +
      `Por favor, confirmar ou responder para dar prosseguimento ao atendimento.`;

    const encodedText = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="agendamento" className="py-20 bg-[#F5F2ED] border-t border-b border-stone-200/70 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${styling.textPrimary} bg-white py-1.5 px-4 rounded-full shadow-xs border border-stone-200`}>
            AGENDADOR INTELIGENTE
          </span>
          <h2 className="mt-4 font-serif font-bold text-3xl text-stone-900 tracking-tight">
            Reserve Sua Consulta Online
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-650">
            Diga-nos brevemente o seu problema jurídico. Escolha abaixo o melhor dia e horário disponível para iniciarmos a sua análise de caso.
          </p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl shadow-xl border border-stone-200 overflow-hidden relative">
          
          {/* Form success banner screen */}
          {isSuccess && latestBooking ? (
            <div className="p-8 sm:p-12 text-center" id="booking-success-screen">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700 mb-6 border-4 border-emerald-50">
                <CheckCircle className="h-10 w-10" />
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
                Solicitação Recebida com Sucesso!
              </h3>
              
              <p className="mt-3 text-stone-600 max-w-md mx-auto text-sm sm:text-base">
                Obrigado {latestBooking.clientName}. Nós pré-reservamos seu horário para o dia{" "}
                <strong className="text-stone-900">
                  {new Date(latestBooking.date + "T00:00:00").toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                  })}
                </strong>{" "}
                às <strong className="text-stone-900">{latestBooking.time}</strong>.
              </p>

              {/* Action summary cards */}
              <div className="my-8 max-w-md mx-auto p-5 rounded-xl border border-stone-200 bg-[#FAF6F0] text-left text-sm space-y-2">
                <div className="flex border-b border-stone-200/60 pb-2">
                  <span className="font-semibold text-stone-500 w-24">Especialidade:</span>
                  <span className="text-stone-900 font-medium">{getSelectedSpecialtyTitle()}</span>
                </div>
                <div className="flex border-b border-stone-200/60 pb-2">
                  <span className="font-semibold text-stone-500 w-24">Contato:</span>
                  <span className="text-stone-900 font-medium">{latestBooking.clientPhone}</span>
                </div>
                <div className="flex">
                  <span className="font-semibold text-stone-500 w-24">Status:</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                    Aguardando Contato
                  </span>
                </div>
              </div>

              {/* Conversion Trigger: Send straight to lawyer's WhatsApp */}
              <div className="max-w-md mx-auto space-y-3">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-bold bg-[#25d366] hover:bg-[#20ba56] text-white shadow-md shadow-emerald-500/10 cursor-pointer transition-all"
                  id="booking-whatsapp-confirm"
                >
                  <Smartphone className="h-5 w-5 animate-pulse" />
                  <span>Confirmar pelo WhatsApp do Advogado</span>
                </button>

                <p className="text-xs text-stone-400">
                  *Ao clicar acima, o WhatsApp abre enviando os dados digitados ao escritório para acelerar o processo de autorização.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="text-xs sm:text-sm font-medium text-stone-500 hover:text-stone-700 underline cursor-pointer"
                  >
                    Agendar para outra pessoa / Corrigir dados
                  </button>
                </div>
              </div>

            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6" id="legal-booking-form">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Specialty pick */}
                <div>
                  <label className="block text-xs font-bold font-mono tracking-wider text-stone-700 uppercase mb-2 flex items-center gap-1.5">
                    Caso necessita de qual especialidade? *
                  </label>
                  <div className="relative">
                    <select
                      value={specialtyId}
                      onChange={(e) => setSpecialtyId(e.target.value)}
                      className="w-full pl-3 pr-10 py-3 bg-white border border-stone-250 rounded-lg text-sm text-stone-850 font-medium tracking-tight outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-800 transition-all appearance-none cursor-pointer"
                      required
                    >
                      {config.specialties.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                      <option value="geral">Consulta Geral / Assessoria sob demanda</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-stone-550">
                      <Clock className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Date select widget */}
                <div>
                  <label className="block text-xs font-bold font-mono tracking-wider text-stone-700 uppercase mb-2 flex items-center gap-1.5">
                    Escolha a data da consulta *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {daysList.map((day) => {
                      const isSelected = bookingDate === day.value;
                      return (
                        <button
                          key={day.value}
                          type="button"
                          onClick={() => setBookingDate(day.value)}
                          className={`py-2 px-1 text-center rounded-lg border transition-all text-xs font-semibold cursor-pointer outline-none ${
                            isSelected
                              ? `${styling.accent} border-transparent shadow-xs`
                              : "border-stone-200 hover:border-stone-350 bg-white text-stone-700"
                          }`}
                        >
                          <span className="block text-[10px] uppercase opacity-75 font-mono mb-0.5">
                            {day.label.split(" ")[0]}
                          </span>
                          <span className="block text-sm leading-tight">
                            {day.label.match(/\d+/) ? day.label.match(/\d+/)?.[0] : day.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  {/* Backup input date in case tomorrow is preferred */}
                  <div className="mt-2 text-right">
                    <input
                      type="date"
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      className="text-xs text-stone-500 bg-transparent border-none underline outline-none focus:text-stone-800 cursor-pointer"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                </div>

              </div>

              {/* Time pick widget */}
              <div>
                <label className="block text-xs font-bold font-mono tracking-wider text-stone-700 uppercase mb-2">
                  Escolha um horário vago disponível *
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time) => {
                    const isSelected = bookingTime === time;
                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setBookingTime(time)}
                        className={`py-2 px-4 rounded-lg border text-sm font-semibold transition-all cursor-pointer outline-none ${
                          isSelected
                            ? `${styling.accent} border-transparent shadow-xs`
                            : "border-stone-200 hover:border-stone-350 bg-white text-stone-700"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="border-t border-stone-200/80 pt-6 space-y-4">
                <h4 className="text-xs font-bold font-mono text-stone-400 tracking-widest uppercase">
                  Informações de Contato
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Client Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Seu Nome Completo *"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-950/10 focus:border-stone-800 transition-all font-medium"
                      required
                    />
                  </div>

                  {/* Client Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Celular (WhatsApp) *"
                      value={clientPhone}
                      onChange={handlePhoneChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-950/10 focus:border-stone-800 transition-all font-mono font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {/* Client Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-stone-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      type="email"
                      placeholder="E-mail de Contato (Opcional)"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-950/10 focus:border-stone-800 transition-all"
                    />
                  </div>

                  {/* Notes / Legal problem details */}
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none text-stone-400">
                      <FileText className="h-4 w-4" />
                    </div>
                    <textarea
                      placeholder="Resuma brevemente o seu caso (ex: divórcio litigioso com partilha de bens, revisão de aposentadoria, etc) *"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-stone-300 rounded-lg text-sm text-stone-850 outline-none focus:ring-2 focus:ring-stone-950/10 focus:border-stone-800 transition-all h-24 resize-none font-medium"
                      required
                    ></textarea>
                  </div>
                </div>

              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl text-base font-bold shadow-lg shadow-stone-900/10 transition-all cursor-pointer ${styling.accent}`}
                  id="submit-booking-action"
                >
                  Confirmar e Solicitar Horário
                </button>
                <p className="text-center text-[10px] text-stone-500 mt-3 font-medium">
                  🔒 Seus dados estão protegidos sob sigilo profissional baseado no Estatuto da OAB e LGPD.
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
