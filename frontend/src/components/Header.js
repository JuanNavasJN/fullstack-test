import React from 'react';
import githubLogo from '../assets/github.svg';

import './Header.css';

const Header = ({ repositoryUrl, repositoryName }) => {
  return (
    <header className="header">
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="repo-link"
      >
        <img src={githubLogo} alt="github-logo" />
        {repositoryName}
      </a>
    </header>
  );
};

export default Header;
