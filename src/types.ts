export interface Specialty {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  typicalCases: string[];
}

export interface LawyerConfig {
  name: string;
  title: string; // e.g. "Advogado Especialista em Direito Penal"
  officeName: string;
  whatsappNumber: string;
  whatsappMessagePreset: string; // default message back to lawyer
  aboutText: string;
  aboutImage: string; // seed value for picsum or SVG preset
  address: string;
  email: string;
  oabNumber: string;
  consultationFee: string; // e.g. "Sob Consulta" or dynamic value
  primaryColorPreset: "navy" | "gold" | "charcoal";
  specialties: Specialty[];
}

export interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  specialtyId: string;
  date: string;
  time: string;
  notes?: string;
  status: "Pendente" | "Confirmado" | "Cancelado";
  createdAt: string;
}

export interface SalesPitchItem {
  title: string;
  description: string;
}
