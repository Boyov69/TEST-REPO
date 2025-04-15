import React from 'react';
import { useQuery } from 'react-query';
import { AppointmentWidget } from '../components/modules/appointments/AppointmentWidget';
import { CallsWidget } from '../components/modules/calls/CallsWidget';
import { PatientsWidget } from '../components/modules/patients/PatientsWidget';
import { TriageWidget } from '../components/modules/triage/TriageWidget';
import { StatsWidget } from '../components/modules/stats/StatsWidget';
import { PageTitle } from '../components/common/PageTitle';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { LoadingSpinner } from '../components/common/LoadingSpinner';
import { useDashboardData } from '../hooks/useDashboardData';
import { useAuth } from '../hooks/useAuth';
import { DashboardLayout } from '../components/layout/DashboardLayout';

const DashboardPage = () => {
  const { user } = useAuth();
  const { getTodayStats, getAppointments, getCalls, getPatients, getTriageQueue } = useDashboardData();

  // Haal dashboard gegevens op
  const { data: stats, isLoading: statsLoading } = useQuery(
    ['dashboard-stats'], 
    getTodayStats
  );

  const { data: appointments, isLoading: appointmentsLoading } = useQuery(
    ['today-appointments'], 
    () => getAppointments({ limit: 5 })
  );

  const { data: calls, isLoading: callsLoading } = useQuery(
    ['recent-calls'], 
    () => getCalls({ limit: 5 })
  );

  const { data: patients, isLoading: patientsLoading } = useQuery(
    ['recent-patients'], 
    () => getPatients({ limit: 5 })
  );

  const { data: triageQueue, isLoading: triageLoading } = useQuery(
    ['triage-queue'], 
    getTriageQueue
  );

  const isLoading = statsLoading || appointmentsLoading || callsLoading || patientsLoading || triageLoading;

  return (
    <DashboardLayout>
      <PageTitle className="flex items-center">
        Welkom, {user?.name || 'Gebruiker'}
        <span className="text-base font-normal text-gray-500 ml-4">
          {new Date().toLocaleDateString('nl-NL', { weekday: 'long', day: 'numeric', month: 'long' })}
        </span>
      </PageTitle>

      {isLoading ? (
        <div className="flex justify-center items-center h-[400px]">
          <LoadingSpinner size={60} />
        </div>
      ) : (
        <div className="flex flex-col gap-6 w-full mt-6">
          <div className="w-full">
            <ErrorBoundary>
              <StatsWidget data={stats!} />
            </ErrorBoundary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ErrorBoundary>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
                <AppointmentWidget appointments={appointments || []} />
              </div>
            </ErrorBoundary>

            <ErrorBoundary>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
                <CallsWidget calls={calls || []} />
              </div>
            </ErrorBoundary>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ErrorBoundary>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
                <PatientsWidget patients={patients || []} />
              </div>
            </ErrorBoundary>

            <ErrorBoundary>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[400px]">
                <TriageWidget queue={triageQueue || []} />
              </div>
            </ErrorBoundary>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

export default DashboardPage;
