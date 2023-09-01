import React from 'react';
import { ErrorProps } from './ErrorDisplay.type';
import './ErrorDisplay.style.scss';

const ErrorDisplay: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="errorDisplay">
      <div className="errorDisplay__section">
        <p className="errorDisplay__label">Error Message</p>
        <p className="errorDisplay__content">{error}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;
