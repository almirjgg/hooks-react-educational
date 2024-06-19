import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterCustomeHook } from './01-useState/CounterCustomeHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { HooksApp } from './HooksApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
);
