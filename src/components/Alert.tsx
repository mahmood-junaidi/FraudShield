import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AlertProps {
  message: string;
  risk: string;
  category: string;
  onClose: () => void;
  onAcknowledge: () => void;
}

export const Alert: React.FC<AlertProps> = ({ message, risk, category, onClose, onAcknowledge }) => {
  // Convert newlines in message to JSX line breaks
  const formattedMessage = message.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line}
      {i < message.split('\n').length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={`
      fixed bottom-4 right-4 max-w-md rounded-lg shadow-lg 
      ${risk === 'high' ? 'bg-red-100 border-red-500' : 'bg-yellow-100 border-yellow-500'}
      border-2
    `}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className={`
            flex-shrink-0 h-6 w-6 mt-1
            ${risk === 'high' ? 'text-red-500' : 'text-yellow-500'}
          `} />
          <div className="flex-1">
            <h3 className={`
              font-bold text-lg mb-1
              ${risk === 'high' ? 'text-red-700' : 'text-yellow-700'}
            `}>
              {category}
            </h3>
            <p className="text-gray-700 whitespace-pre-line">{formattedMessage}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 p-3 flex justify-end bg-white bg-opacity-50 rounded-b-lg">
        <button
          onClick={() => {
            onAcknowledge();
            onClose();
          }}
          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline"
        >
          I understand the risk - Don't show again
        </button>
      </div>
    </div>
  );
};
