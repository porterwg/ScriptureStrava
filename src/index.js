import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainLayout from './components/MainLayout'; // Correct import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout /> {/* Corrected component name */}
  </React.StrictMode>
);

// Optional: Remove if not using performance logging
reportWebVitals();

