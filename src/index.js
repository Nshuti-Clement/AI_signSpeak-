import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18+
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
