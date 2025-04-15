import React from 'react';
import { Call } from '../../../types/dashboard';
import { Phone, User, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallsWidgetProps {
  calls: Call[];
}

export const CallsWidget: React.FC<CallsWidgetProps> = ({ calls }) => {
  // Format time from ISO string to readable format
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  };

  // Format duration in seconds to minutes:seconds
  const formatDuration = (seconds?: number) => {
    if (!seconds) return 'n/a';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recente Telefoongesprekken</h3>
          <Link to="/calls" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Alle gesprekken
          </Link>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {calls.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <Phone size={40} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Geen recente telefoongesprekken</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {calls.map((call) => (
              <li key={call.id} className="hover:bg-gray-50">
                <Link to={`/calls/${call.id}`} className="block">
                  <div className="px-6 py-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className={`mr-2 ${call.direction === 'incoming' ? 'text-green-500' : 'text-blue-500'}`}>
                            <Phone size={16} className={`transform ${call.direction === 'incoming' ? 'rotate-45' : 'rotate-135'}`} />
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {call.patientName || call.phoneNumber}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center text-xs text-gray-500 ml-6">
                          <span className="capitalize">{call.direction}</span>
                          <span className="mx-1">-</span>
                          <Clock size={12} className="mr-1" />
                          <span>{formatTime(call.startTime)}</span>
                          {call.duration && (
                            <>
                              <span className="mx-1">-</span>
                              <span>{formatDuration(call.duration)}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        call.status === 'answered' 
                          ? 'bg-green-100 text-green-800' 
                          : call.status === 'missed' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {call.status}
                      </div>
                    </div>
                    {call.aiSummary && (
                      <p className="mt-2 text-sm text-gray-600 ml-6 line-clamp-2">{call.aiSummary}</p>
                    )}
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
