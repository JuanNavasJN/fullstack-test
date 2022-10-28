import React from 'react';
import githubLogo from '../assets/github.svg';
import { URL_BASE } from '../App';
import linkIcon from '../assets/external-link.svg';

import './Header.css';

const Header = ({ repositoryUrl, repositoryName }) => {
  return (
    <header className="header">
      <a
        href={repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className="repo link"
      >
        <img src={githubLogo} alt="github-logo" />
        {repositoryName}
      </a>
      <a
        href={`${URL_BASE}/docs`}
        className="api-docs link"
        target="_blank"
        rel="noreferrer"
      >
        API Docs
        <img src={linkIcon} alt="external-link" className="link-icon" />
      </a>
    </header>
  );
};

export default Header;
