import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './router/DarkModeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter basename="/medical-blog">
        <App />
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>
);

reportWebVitals();
