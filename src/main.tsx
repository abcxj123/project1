import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Sample from './components/Sample';
import { CounterProvider } from './contexts/counter-context.tsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <CounterProvider>
        <App />
      </CounterProvider>
    </HashRouter>
    <Sample />
  </React.StrictMode>
);
