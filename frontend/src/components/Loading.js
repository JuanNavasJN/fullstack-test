import React from 'react';
import loader from '../assets/loader.svg';

import './Loading.css';

const Loading = () => {
  return (
    <div className="loader-container">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loading;
