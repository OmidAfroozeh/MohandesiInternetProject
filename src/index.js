import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import Form from './Form';
import Links from './Links';
import DataBase from './data';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Links />} />
        <Route path="form" element={    <Form
      firstname="Omid"
      lastname="Afroozeh"
      gender="Male"
      weight="105kg"
      condition="Nothing"
    />} />
          <Route path="data" element={<DataBase />} />
      </Routes>
    </BrowserRouter>

  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
