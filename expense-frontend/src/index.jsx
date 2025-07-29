import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Modern React 18+ rendering
const root = createRoot(document.getElementById('root'));
root.render(<App />);
