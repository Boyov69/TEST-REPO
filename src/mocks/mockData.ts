import { 
  Appointment, 
  Call, 
  Patient, 
  TriageItem, 
  DashboardStats 
} from '../types/dashboard';

// Mock data for development and testing

// Dashboard Stats
export const mockDashboardStats: DashboardStats = {
  appointments: {
    total: 15,
    completed: 6,
    pending: 8,
    cancelled: 1
  },
  calls: {
    total: 23,
    answered: 19,
    missed: 4,
    avgDuration: 185 // 3:05 minutes
  },
  patients: {
    total: 1248,
    new: 3
  },
  triage: {
    pending: 7,
    urgent: 1,
    high: 2,
    medium: 3,
    low: 1
  }
};

// Appointments
export const mockAppointments: Appointment[] = [
  {
    id: 'apt-001',
    patientId: 'pat-001',
    patientName: 'Anne Jansen',
    doctorId: 'doc-001',
    doctorName: 'J. de Vries',
    date: '2023-06-15',
    startTime: '09:30',
    endTime: '09:45',
    type: 'check-up',
    reason: 'Jaarlijkse controle',
    status: 'scheduled',
    createdAt: '2023-06-01T10:23:45Z',
    updatedAt: '2023-06-01T10:23:45Z'
  },
  {
    id: 'apt-002',
    patientId: 'pat-002',
    patientName: 'Pieter de Vries',
    doctorId: 'doc-001',
    doctorName: 'J. de Vries',
    date: '2023-06-15',
    startTime: '10:15',
    endTime: '10:30',
    type: 'consultation',
    reason: 'Pijnklachten onderrug',
    status: 'confirmed',
    createdAt: '2023-06-02T14:12:33Z',
    updatedAt: '2023-06-02T14:12:33Z'
  },
  {
    id: 'apt-003',
    patientId: 'pat-003',
    patientName: 'Maria Özturk',
    doctorId: 'doc-002',
    doctorName: 'P. Bakker',
    date: '2023-06-15',
    startTime: '11:00',
    endTime: '11:15',
    type: 'follow-up',
    reason: 'Receptverlenging',
    status: 'scheduled',
    createdAt: '2023-06-03T09:45:12Z',
    updatedAt: '2023-06-03T09:45:12Z'
  },
  {
    id: 'apt-004',
    patientId: 'pat-004',
    patientName: 'Johan Smit',
    doctorId: 'doc-001',
    doctorName: 'J. de Vries',
    date: '2023-06-15',
    startTime: '13:30',
    endTime: '13:45',
    type: 'consultation',
    reason: 'Hoofdpijn en duizeligheid',
    status: 'scheduled',
    createdAt: '2023-06-04T11:32:01Z',
    updatedAt: '2023-06-04T11:32:01Z'
  },
  {
    id: 'apt-005',
    patientId: 'pat-005',
    patientName: 'Sophie van Dijk',
    doctorId: 'doc-002',
    doctorName: 'P. Bakker',
    date: '2023-06-15',
    startTime: '14:45',
    endTime: '15:00',
    type: 'emergency',
    reason: 'Acute buikpijn',
    status: 'scheduled',
    priority: 'high',
    createdAt: '2023-06-05T08:17:55Z',
    updatedAt: '2023-06-05T08:17:55Z'
  }
];

// Calls
export const mockCalls: Call[] = [
  {
    id: 'call-001',
    patientId: 'pat-001',
    patientName: 'Jan Bakker',
    phoneNumber: '+31612345678',
    direction: 'incoming',
    status: 'answered',
    startTime: '2023-06-15T09:15:00Z',
    endTime: '2023-06-15T09:18:23Z',
    duration: 203,
    transcriptionAvailable: true,
    aiSummary: 'Patiënt belt voor het maken van een afspraak voor een jaarlijkse controle.',
    createdAt: '2023-06-15T09:15:00Z',
    updatedAt: '2023-06-15T09:18:23Z'
  },
  {
    id: 'call-002',
    patientId: 'pat-005',
    patientName: 'Sophie van Dijk',
    phoneNumber: '+31698765432',
    direction: 'incoming',
    status: 'answered',
    startTime: '2023-06-15T08:42:11Z',
    endTime: '2023-06-15T08:47:35Z',
    duration: 324,
    transcriptionAvailable: true,
    aiSummary: 'Patiënt belt met klachten over acute buikpijn. Geadviseerd om vandaag nog langs te komen.',
    createdAt: '2023-06-15T08:42:11Z',
    updatedAt: '2023-06-15T08:47:35Z'
  },
  {
    id: 'call-003',
    phoneNumber: '+31611223344',
    direction: 'incoming',
    status: 'missed',
    startTime: '2023-06-15T07:55:22Z',
    transcriptionAvailable: false,
    createdAt: '2023-06-15T07:55:22Z',
    updatedAt: '2023-06-15T07:55:22Z'
  },
  {
    id: 'call-004',
    patientId: 'pat-003',
    patientName: 'Maria Özturk',
    phoneNumber: '+31633445566',
    direction: 'outgoing',
    status: 'answered',
    startTime: '2023-06-14T16:30:00Z',
    endTime: '2023-06-14T16:32:45Z',
    duration: 165,
    transcriptionAvailable: true,
    aiSummary: 'Uitgaand gesprek om patiënt te herinneren aan afspraak van morgen.',
    createdAt: '2023-06-14T16:30:00Z',
    updatedAt: '2023-06-14T16:32:45Z'
  },
  {
    id: 'call-005',
    patientId: 'pat-002',
    patientName: 'Pieter de Vries',
    phoneNumber: '+31644556677',
    direction: 'incoming',
    status: 'voicemail',
    startTime: '2023-06-14T15:12:33Z',
    endTime: '2023-06-14T15:13:45Z',
    duration: 72,
    transcriptionAvailable: true,
    aiSummary: 'Patiënt vraagt of hij zijn afspraak kan verzetten naar een later tijdstip.',
    createdAt: '2023-06-14T15:12:33Z',
    updatedAt: '2023-06-14T15:13:45Z'
  }
];

// Patients
export const mockPatients: Patient[] = [
  {
    id: 'pat-001',
    name: 'Anne Jansen',
    dateOfBirth: '1985-04-12',
    gender: 'female',
    email: 'anne.jansen@example.com',
    phoneNumber: '+31612345678',
    address: {
      street: 'Hoofdstraat',
      houseNumber: '23',
      postalCode: '1234 AB',
      city: 'Amsterdam',
      country: 'Nederland'
    },
    insuranceProvider: 'CZ',
    insuranceNumber: '12345678',
    bsn: '123456789',
    medicalHistorySummary: 'Hypertensie, Astma',
    allergies: ['Penicilline', 'Noten'],
    medications: [
      {
        name: 'Ventolin',
        dosage: '100mcg',
        frequency: '2x daags',
        startDate: '2020-01-15',
        active: true
      }
    ],
    lastVisit: '2023-01-10',
    nextAppointment: '2023-06-15',
    createdAt: '2018-05-23T14:56:29Z',
    updatedAt: '2023-01-10T10:45:12Z'
  },
  {
    id: 'pat-002',
    name: 'Pieter de Vries',
    dateOfBirth: '1972-09-28',
    gender: 'male',
    email: 'pieter.devries@example.com',
    phoneNumber: '+31644556677',
    address: {
      street: 'Kerkstraat',
      houseNumber: '45',
      postalCode: '5678 CD',
      city: 'Utrecht',
      country: 'Nederland'
    },
    insuranceProvider: 'VGZ',
    insuranceNumber: '87654321',
    bsn: '987654321',
    medicalHistorySummary: 'Diabetes type 2, Rugklachten',
    allergies: [],
    medications: [
      {
        name: 'Metformine',
        dosage: '500mg',
        frequency: '3x daags',
        startDate: '2019-03-22',
        active: true
      },
      {
        name: 'Diclofenac',
        dosage: '50mg',
        frequency: 'zo nodig',
        startDate: '2022-11-05',
        active: true
      }
    ],
    lastVisit: '2023-02-15',
    nextAppointment: '2023-06-15',
    createdAt: '2015-11-12T09:23:45Z',
    updatedAt: '2023-02-15T14:30:22Z'
  },
  {
    id: 'pat-003',
    name: 'Maria Özturk',
    dateOfBirth: '1990-12-03',
    gender: 'female',
    email: 'maria.ozturk@example.com',
    phoneNumber: '+31633445566',
    address: {
      street: 'Willemstraat',
      houseNumber: '12',
      postalCode: '9012 EF',
      city: 'Rotterdam',
      country: 'Nederland'
    },
    insuranceProvider: 'Menzis',
    insuranceNumber: '23456789',
    bsn: '234567890',
    medicalHistorySummary: 'Migraine, Hypothyreoïdie',
    allergies: ['Sulfonamiden'],
    medications: [
      {
        name: 'Levothyroxine',
        dosage: '75mcg',
        frequency: '1x daags',
        startDate: '2021-05-18',
        active: true
      }
    ],
    lastVisit: '2023-03-22',
    nextAppointment: '2023-06-15',
    createdAt: '2019-02-28T11:34:56Z',
    updatedAt: '2023-03-22T09:12:34Z'
  },
  {
    id: 'pat-004',
    name: 'Johan Smit',
    dateOfBirth: '1965-07-15',
    gender: 'male',
    email: 'johan.smit@example.com',
    phoneNumber: '+31655667788',
    address: {
      street: 'Dorpsstraat',
      houseNumber: '78',
      postalCode: '3456 GH',
      city: 'Groningen',
      country: 'Nederland'
    },
    insuranceProvider: 'DSW',
    insuranceNumber: '34567890',
    bsn: '345678901',
    medicalHistorySummary: 'COPD, Hypertensie',
    allergies: [],
    medications: [
      {
        name: 'Salbutamol',
        dosage: '100mcg',
        frequency: '4x daags',
        startDate: '2018-09-10',
        active: true
      },
      {
        name: 'Lisinopril',
        dosage: '10mg',
        frequency: '1x daags',
        startDate: '2020-11-23',
        active: true
      }
    ],
    lastVisit: '2023-04-05',
    nextAppointment: '2023-06-15',
    createdAt: '2014-06-17T15:45:23Z',
    updatedAt: '2023-04-05T11:23:45Z'
  },
  {
    id: 'pat-005',
    name: 'Sophie van Dijk',
    dateOfBirth: '1995-02-20',
    gender: 'female',
    email: 'sophie.vandijk@example.com',
    phoneNumber: '+31698765432',
    address: {
      street: 'Schoolstraat',
      houseNumber: '34',
      postalCode: '7890 IJ',
      city: 'Eindhoven',
      country: 'Nederland'
    },
    insuranceProvider: 'Zilveren Kruis',
    insuranceNumber: '45678901',
    bsn: '456789012',
    medicalHistorySummary: 'Allergie, Eczeem',
    allergies: ['Huisstofmijt', 'Pollen', 'Kiwi'],
    medications: [
      {
        name: 'Cetirizine',
        dosage: '10mg',
        frequency: '1x daags',
        startDate: '2022-03-15',
        active: true
      },
      {
        name: 'Hydrocortison crème',
        dosage: '1%',
        frequency: '2x daags',
        startDate: '2022-03-15',
        active: true
      }
    ],
    lastVisit: '2023-05-12',
    nextAppointment: '2023-06-15',
    createdAt: '2020-01-05T10:12:34Z',
    updatedAt: '2023-05-12T13:45:56Z'
  }
];

// Triage Queue
export const mockTriageQueue: TriageItem[] = [
  {
    id: 'triage-001',
    patientId: 'pat-005',
    patientName: 'Sophie van Dijk',
    reason: 'Acute buikpijn',
    symptoms: ['Buikpijn', 'Misselijkheid', 'Koorts'],
    priority: 'high',
    aiAssessment: 'Mogelijke appendicitis. Advies: spoedconsult huisarts.',
    status: 'pending',
    createdAt: '2023-06-15T08:45:00Z',
    updatedAt: '2023-06-15T08:45:00Z'
  },
  {
    id: 'triage-002',
    patientId: 'pat-003',
    patientName: 'Maria Özturk',
    reason: 'Hoofdpijn en duizeligheid',
    symptoms: ['Hoofdpijn', 'Duizeligheid', 'Vermoeidheid'],
    priority: 'medium',
    aiAssessment: 'Mogelijke migraine. Advies: consult huisarts binnen 24 uur.',
    status: 'pending',
    createdAt: '2023-06-15T09:10:00Z',
    updatedAt: '2023-06-15T09:10:00Z'
  },
  {
    id: 'triage-003',
    patientName: 'Lars Janssen',
    reason: 'Keelpijn en hoesten',
    symptoms: ['Keelpijn', 'Hoesten', 'Verkoudheid'],
    priority: 'low',
    aiAssessment: 'Waarschijnlijk virale infectie. Advies: rust, veel drinken, paracetamol.',
    status: 'pending',
    createdAt: '2023-06-15T09:30:00Z',
    updatedAt: '2023-06-15T09:30:00Z'
  },
  {
    id: 'triage-004',
    patientId: 'pat-004',
    patientName: 'Johan Smit',
    reason: 'Pijn op de borst',
    symptoms: ['Pijn op de borst', 'Kortademigheid', 'Zweten'],
    priority: 'urgent',
    aiAssessment: 'Mogelijke cardiale oorzaak. Advies: direct 112 bellen.',
    status: 'in-progress',
    assignedTo: 'Dr. J. de Vries',
    createdAt: '2023-06-15T09:45:00Z',
    updatedAt: '2023-06-15T09:47:00Z'
  },
  {
    id: 'triage-005',
    patientName: 'Emma Visser',
    reason: 'Huiduitslag',
    symptoms: ['Huiduitslag', 'Jeuk'],
    priority: 'medium',
    aiAssessment: 'Mogelijke allergische reactie. Advies: consult huisarts binnen 24 uur.',
    status: 'pending',
    createdAt: '2023-06-15T10:00:00Z',
    updatedAt: '2023-06-15T10:00:00Z'
  },
  {
    id: 'triage-006',
    patientName: 'Thomas Bakker',
    reason: 'Rugpijn',
    symptoms: ['Rugpijn', 'Stijfheid'],
    priority: 'medium',
    aiAssessment: 'Waarschijnlijk musculoskeletale oorzaak. Advies: pijnstilling, warmte, consult huisarts bij aanhoudende klachten.',
    status: 'pending',
    createdAt: '2023-06-15T10:15:00Z',
    updatedAt: '2023-06-15T10:15:00Z'
  },
  {
    id: 'triage-007',
    patientId: 'pat-002',
    patientName: 'Pieter de Vries',
    reason: 'Verhoogde bloedsuiker',
    symptoms: ['Dorst', 'Frequent urineren', 'Vermoeidheid'],
    priority: 'medium',
    aiAssessment: 'Ontregelde diabetes. Advies: consult huisarts vandaag.',
    status: 'pending',
    createdAt: '2023-06-15T10:30:00Z',
    updatedAt: '2023-06-15T10:30:00Z'
  }
];

// Mock API response handlers
export const mockApiResponses = {
  getDashboardStats: () => {
    return Promise.resolve({ data: mockDashboardStats });
  },
  
  getAppointments: (params: any = {}) => {
    let data = [...mockAppointments];
    
    if (params.limit) {
      data = data.slice(0, params.limit);
    }
    
    return Promise.resolve({ data });
  },
  
  getCalls: (params: any = {}) => {
    let data = [...mockCalls];
    
    if (params.limit) {
      data = data.slice(0, params.limit);
    }
    
    return Promise.resolve({ data });
  },
  
  getPatients: (params: any = {}) => {
    let data = [...mockPatients];
    
    if (params.limit) {
      data = data.slice(0, params.limit);
    }
    
    return Promise.resolve({ data });
  },
  
  getTriageQueue: () => {
    return Promise.resolve({ data: mockTriageQueue });
  }
};
