import { useCallback } from 'react';
import { 
  Appointment, 
  Call, 
  Patient, 
  TriageItem, 
  DashboardStats 
} from '../types/dashboard';
import { 
  appointmentService,
  callService,
  patientService,
  triageService,
  dashboardService
} from '../services/api';

type GetDataParams = {
  limit?: number;
  offset?: number;
  date?: string;
  status?: string;
  search?: string;
};

export const useDashboardData = () => {
  // Ophalen van dagelijkse statistieken
  const getTodayStats = useCallback(async (): Promise<DashboardStats> => {
    const response = await dashboardService.getTodayStats();
    return response.data;
  }, []);

  // Ophalen van afspraken
  const getAppointments = useCallback(async (params: GetDataParams = {}): Promise<Appointment[]> => {
    const response = await appointmentService.getAll(params);
    return response.data;
  }, []);

  // Ophalen van telefoongesprekken
  const getCalls = useCallback(async (params: GetDataParams = {}): Promise<Call[]> => {
    const response = await callService.getAll(params);
    return response.data;
  }, []);

  // Ophalen van patiëntgegevens
  const getPatients = useCallback(async (params: GetDataParams = {}): Promise<Patient[]> => {
    const response = await patientService.getAll(params);
    return response.data;
  }, []);

  // Ophalen van triage wachtrij
  const getTriageQueue = useCallback(async (): Promise<TriageItem[]> => {
    const response = await triageService.getQueue();
    return response.data;
  }, []);

  // Ophalen van details van één afspraak
  const getAppointmentById = useCallback(async (id: string): Promise<Appointment> => {
    const response = await appointmentService.getById(id);
    return response.data;
  }, []);

  // Ophalen van details van één telefoongesprek
  const getCallById = useCallback(async (id: string): Promise<Call> => {
    const response = await callService.getById(id);
    return response.data;
  }, []);

  // Ophalen van details van één patiënt
  const getPatientById = useCallback(async (id: string): Promise<Patient> => {
    const response = await patientService.getById(id);
    return response.data;
  }, []);

  return {
    getTodayStats,
    getAppointments,
    getCalls,
    getPatients,
    getTriageQueue,
    getAppointmentById,
    getCallById,
    getPatientById
  };
};
