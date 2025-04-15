import React from 'react';
import { DashboardStats } from '../../../types/dashboard';
import { Calendar, Phone, Users, AlertTriangle } from 'lucide-react';

interface StatsWidgetProps {
  data: DashboardStats;
}

export const StatsWidget: React.FC<StatsWidgetProps> = ({ data }) => {
  // Format seconds to minutes:seconds
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Overzicht Vandaag</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Appointments Stats */}
        <div className="bg-indigo-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
              <Calendar className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-indigo-800">Afspraken</h4>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-indigo-600">{data.appointments.total}</p>
                <p className="ml-2 text-sm text-indigo-400">vandaag</p>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="text-indigo-700 font-medium block">{data.appointments.completed}</span>
              <span className="text-indigo-500">Afgerond</span>
            </div>
            <div>
              <span className="text-indigo-700 font-medium block">{data.appointments.pending}</span>
              <span className="text-indigo-500">Gepland</span>
            </div>
            <div>
              <span className="text-indigo-700 font-medium block">{data.appointments.cancelled}</span>
              <span className="text-indigo-500">Geannuleerd</span>
            </div>
          </div>
        </div>

        {/* Calls Stats */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-blue-800">Telefoongesprekken</h4>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-blue-600">{data.calls.total}</p>
                <p className="ml-2 text-sm text-blue-400">vandaag</p>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <span className="text-blue-700 font-medium block">{data.calls.answered}</span>
              <span className="text-blue-500">Beantwoord</span>
            </div>
            <div>
              <span className="text-blue-700 font-medium block">{data.calls.missed}</span>
              <span className="text-blue-500">Gemist</span>
            </div>
            <div>
              <span className="text-blue-700 font-medium block">{formatDuration(data.calls.avgDuration)}</span>
              <span className="text-blue-500">Gem. duur</span>
            </div>
          </div>
        </div>

        {/* Patients Stats */}
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
              <Users className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-green-800">Patiënten</h4>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-green-600">{data.patients.total}</p>
                <p className="ml-2 text-sm text-green-400">totaal</p>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <div>
              <span className="text-green-700 font-medium block">{data.patients.new}</span>
              <span className="text-green-500">Nieuwe patiënten vandaag</span>
            </div>
          </div>
        </div>

        {/* Triage Stats */}
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-amber-100 rounded-md p-3">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-sm font-medium text-amber-800">Triage</h4>
              <div className="mt-1 flex items-baseline">
                <p className="text-2xl font-semibold text-amber-600">{data.triage.pending}</p>
                <p className="ml-2 text-sm text-amber-400">in wachtrij</p>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1 text-center text-xs">
            <div>
              <span className="text-red-700 font-medium block">{data.triage.urgent}</span>
              <span className="text-amber-500">Urgent</span>
            </div>
            <div>
              <span className="text-orange-700 font-medium block">{data.triage.high}</span>
              <span className="text-amber-500">Hoog</span>
            </div>
            <div>
              <span className="text-amber-700 font-medium block">{data.triage.medium}</span>
              <span className="text-amber-500">Middel</span>
            </div>
            <div>
              <span className="text-green-700 font-medium block">{data.triage.low}</span>
              <span className="text-amber-500">Laag</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
