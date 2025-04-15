import React from 'react';
import { Appointment } from '../../../types/dashboard';
import { Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AppointmentWidgetProps {
  appointments: Appointment[];
}

export const AppointmentWidget: React.FC<AppointmentWidgetProps> = ({ appointments }) => {
  // Format time from HH:MM to readable format
  const formatTime = (time: string) => {
    return time;
  };

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'no-show':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Afspraken Vandaag</h3>
          <Link to="/appointments" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Alle afspraken
          </Link>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {appointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Calendar size={40} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Geen afspraken voor vandaag</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <li key={appointment.id} className="hover:bg-gray-50">
                <Link to={`/appointments/${appointment.id}`} className="block">
                  <div className="px-6 py-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center">
                        <Clock size={16} className="text-gray-400 mr-2" />
                        <span className="text-sm font-medium text-gray-900">
                          {formatTime(appointment.startTime)} - {appointment.patientName}
                        </span>
                      </div>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 ml-6">{appointment.reason}</p>
                    <div className="mt-2 flex items-center text-xs text-gray-500 ml-6">
                      <User size={14} className="mr-1" />
                      <span>Dr. {appointment.doctorName}</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
