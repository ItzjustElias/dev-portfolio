// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Select the root element where the React app will be rendered
const container = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(container);

// Render the App component within the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
