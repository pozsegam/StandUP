import './popup.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

const RowElement = () => {
  return (
    <div className='row-container'>
      <h1>Time left</h1>
      <h1>21:24</h1>
    </div>
  );
};

const breakTime = (
  <div className='container'>
    <img src='icon.png' alt='' />
    <RowElement />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);

root.render(breakTime);
