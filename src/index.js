import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NameForm from "./App";
import EmailForm from "./emailForm";
import NumberForm from "./numberForm";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NameForm />
      <EmailForm />
      <NumberForm />
  </React.StrictMode>
);

