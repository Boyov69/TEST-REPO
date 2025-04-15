import React from 'react';
import { TriageItem } from '../../../types/dashboard';
import { AlertTriangle, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TriageWidgetProps {
  queue: TriageItem[];
}

export const TriageWidget: React.FC<TriageWidgetProps> = ({ queue }) => {
  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Format time from ISO string to readable format
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  };

  // Calculate waiting time in minutes
  const calculateWaitingTime = (createdAt: string) => {
    const created = new Date(createdAt);
    const now = new Date();
    const diffMs = now.getTime() - created.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 60) {
      return `${diffMins} min`;
    } else {
      const hours = Math.floor(diffMins / 60);
      const mins = diffMins % 60;
      return `${hours}u ${mins}m`;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Triage Wachtrij</h3>
          <Link to="/triage" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Volledige wachtrij
          </Link>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {queue.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <AlertTriangle size={40} className="text-gray-400 mb-2" />
            <p className="text-gray-500">Geen patiënten in de wachtrij</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {queue.map((item) => (
              <li key={item.id} className="hover:bg-gray-50">
                <Link to={`/triage/${item.id}`} className="block">
                  <div className="px-6 py-4">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${getPriorityColor(item.priority)}`}>
                            {item.priority}
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {item.patientName}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 ml-6 line-clamp-1">{item.reason}</p>
                      </div>
                      <div className="flex flex-col items-end text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock size={12} className="mr-1" />
                          <span>Wachttijd: {calculateWaitingTime(item.createdAt)}</span>
                        </div>
                        <div className="mt-1">
                          {item.assignedTo ? (
                            <div className="flex items-center">
                              <User size={12} className="mr-1" />
                              <span>{item.assignedTo}</span>
                            </div>
                          ) : (
                            <span className="text-yellow-600">Niet toegewezen</span>
                          )}
                        </div>
                      </div>
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
