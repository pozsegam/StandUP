import './popup.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

const RowElement = () => {
  return (
    <div className='row-container'>
      <h1 className='row-title'>Time left</h1>
      <h1 className='row-value'>21:24</h1>
    </div>
  );
};

const Button = () => {
  return (
    <div className='button-container'>
      <h1 className='button-content'>Turn off</h1>
    </div>
  );
};

const breakTime = (
  <div className='container'>
    <img src='icon.png' alt='' />
    <RowElement />
    <Button />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);

root.render(breakTime);
