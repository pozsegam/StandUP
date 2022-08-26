import './popup.css';

import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const RowElement = () => {
  const THIRTY_MIN = 1800;
  const [timer, setTimer] = useState(THIRTY_MIN);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    setTimer((prev) => prev - 1);
  };
  return (
    <div className='row-container'>
      <h1 className='row-title'>Time left</h1>
      <h1 className='row-value'>{timer}</h1>
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

const App = (
  <div className='container'>
    <img src='icon.png' alt='' />
    <RowElement />
    <Button />
  </div>
);

const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);

root.render(App);
