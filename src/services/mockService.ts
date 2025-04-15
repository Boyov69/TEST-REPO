import { mockApiResponses } from '../mocks/mockData';

// This service intercepts API calls and returns mock data for development
export const setupMockServices = () => {
  // Override the real API services with mock implementations
  const originalDashboardService = require('./api').dashboardService;
  const originalAppointmentService = require('./api').appointmentService;
  const originalCallService = require('./api').callService;
  const originalPatientService = require('./api').patientService;
  const originalTriageService = require('./api').triageService;
  const originalAuthService = require('./api').authService;

  // Mock auth service
  originalAuthService.getCurrentUser = () => {
    return Promise.resolve({
      data: {
        id: 'user-001',
        name: 'Dr. J. de Vries',
        email: 'j.devries@example.com',
        role: 'doctor',
        avatar: null,
        createdAt: '2020-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        lastLogin: '2023-06-15T08:00:00Z'
      }
    });
  };

  originalAuthService.login = (credentials: any) => {
    return Promise.resolve({
      data: {
        user: {
          id: 'user-001',
          name: 'Dr. J. de Vries',
          email: credentials.email,
          role: 'doctor',
          avatar: null,
          createdAt: '2020-01-01T00:00:00Z',
          updatedAt: '2023-01-01T00:00:00Z',
          lastLogin: '2023-06-15T08:00:00Z'
        },
        token: 'mock-token',
        refreshToken: 'mock-refresh-token',
        expiresIn: 3600
      }
    });
  };

  originalAuthService.loginWithGoogle = () => {
    return originalAuthService.login({ email: 'j.devries@example.com' });
  };

  originalAuthService.loginWithGithub = () => {
    return originalAuthService.login({ email: 'j.devries@example.com' });
  };

  originalAuthService.loginWithApple = () => {
    return originalAuthService.login({ email: 'j.devries@example.com' });
  };

  originalAuthService.logout = () => {
    return Promise.resolve({ data: { success: true } });
  };

  // Mock data services
  originalDashboardService.getTodayStats = mockApiResponses.getDashboardStats;
  originalAppointmentService.getAll = mockApiResponses.getAppointments;
  originalCallService.getAll = mockApiResponses.getCalls;
  originalPatientService.getAll = mockApiResponses.getPatients;
  originalTriageService.getQueue = mockApiResponses.getTriageQueue;

  console.log('Mock services initialized');
};
