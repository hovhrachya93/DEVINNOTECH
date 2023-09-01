import React from 'react';
import { ErrorProps } from './ErrorDisplay.type';
import './ErrorDisplay.style.scss';

const ErrorDisplay: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="errorDisplay">
      {error && 'message' in error && (
        <div className="errorDisplay__section">
          <p className="errorDisplay__label">Error Message</p>
          <p className="errorDisplay__content">{error.message}</p>
        </div>
      )}
      {error && 'status' in error && (
        <div className="errorDisplay__section">
          <p className="errorDisplay__label">Error Code</p>
          <p className="errorDisplay__content">{error.status}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorDisplay;
