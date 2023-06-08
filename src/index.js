import React from 'react';
import ReactDOM from 'react-dom/client';
import { Component } from 'react';
import { App } from 'components/App';
import { CounterEl } from './components/counter/counter.jsx';
import { Counter } from './components/counter/counter.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterEl />
  </React.StrictMode>
);
