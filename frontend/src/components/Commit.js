import React from 'react';
import linkIcon from '../assets/external-link.svg';

import './Commit.css';

const Commit = ({ message, url, author }) => {
  const { name, email, date } = author;

  return (
    <div className="commit">
      <div className="commit-header">
        <h3>{message}</h3>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={linkIcon} alt="external-link" className="link-icon" />
        </a>
      </div>
      <div className="commit-metadata">
        {name && email && (
          <p>
            Author: {name} {'<'}
            {email}
            {'>'}
          </p>
        )}
        {date && <p>Date: {new Date(date).toLocaleString()}</p>}
      </div>
    </div>
  );
};

export default Commit;
