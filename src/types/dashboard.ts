export interface DashboardStats {
  appointments: {
    total: number;
    completed: number;
    pending: number;
    cancelled: number;
  };
  calls: {
    total: number;
    answered: number;
    missed: number;
    avgDuration: number; // in seconds
  };
  patients: {
    total: number;
    new: number; // new today
  };
  triage: {
    pending: number;
    urgent: number;
    high: number;
    medium: number;
    low: number;
  };
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string; // ISO date string
  startTime: string; // HH:MM format
  endTime: string; // HH:MM format
  type: 'consultation' | 'check-up' | 'follow-up' | 'emergency' | 'other';
  reason: string;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled' | 'no-show';
  notes?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

export interface Call {
  id: string;
  patientId?: string;
  patientName?: string;
  phoneNumber: string;
  direction: 'incoming' | 'outgoing';
  status: 'answered' | 'missed' | 'voicemail' | 'busy';
  startTime: string; // ISO date string
  endTime?: string; // ISO date string
  duration?: number; // in seconds
  recordingUrl?: string;
  transcriptionAvailable: boolean;
  aiSummary?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string; // YYYY-MM-DD
  gender: 'male' | 'female' | 'other' | 'not-specified';
  email?: string;
  phoneNumber?: string;
  address?: {
    street?: string;
    houseNumber?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  };
  insuranceProvider?: string;
  insuranceNumber?: string;
  bsn?: string; // Dutch social security number
  medicalHistorySummary?: string;
  allergies?: string[];
  medications?: MedicationInfo[];
  lastVisit?: string; // ISO date string
  nextAppointment?: string; // ISO date string
  createdAt: string;
  updatedAt: string;
}

export interface MedicationInfo {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  active: boolean;
}

export interface TriageItem {
  id: string;
  patientId?: string;
  patientName: string;
  reason: string;
  symptoms: string[];
  priority: 'low' | 'medium' | 'high' | 'urgent';
  aiAssessment?: string;
  status: 'pending' | 'in-progress' | 'completed' | 'referred';
  assignedTo?: string;
  createdAt: string;
  updatedAt: string;
}
