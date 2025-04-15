import React from 'react';
import { Patient } from '../../../types/dashboard';
import { Users, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PatientsWidgetProps {
  patients: Patient[];
}

export const PatientsWidget: React.FC<PatientsWidgetProps> = ({ patients }) => {
  // Format date from YYYY-MM-DD to readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Calculate age from date of birth
  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recente Patiënten</h3>
          <Link to="/patients" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Alle patiënten
          </Link>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {patients.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Users size={40} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Geen recente patiënten</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {patients.map((patient) => (
              <li key={patient.id} className="hover:bg-gray-50">
                <Link to={`/patients/${patient.id}`} className="block">
                  <div className="px-6 py-4">
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500 font-medium">
                            {patient.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                          <div className="text-xs text-gray-500">
                            {calculateAge(patient.dateOfBirth)} jaar - {patient.gender === 'male' ? 'Man' : patient.gender === 'female' ? 'Vrouw' : 'Anders'}
                          </div>
                        </div>
                      </div>
                      {patient.nextAppointment && (
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          <span>{formatDate(patient.nextAppointment)}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 ml-14 flex space-x-4 text-xs text-gray-500">
                      {patient.phoneNumber && (
                        <div className="flex items-center">
                          <Phone size={14} className="mr-1" />
                          <span>{patient.phoneNumber}</span>
                        </div>
                      )}
                      {patient.lastVisit && (
                        <div>
                          <span className="text-gray-400">Laatste bezoek:</span> {formatDate(patient.lastVisit)}
                        </div>
                      )}
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
