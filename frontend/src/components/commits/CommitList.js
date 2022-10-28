import React from 'react';
import Commit from './Commit';

import './CommitList.css';

const CommitList = ({ commits }) => {
  return (
    <main className="commit-list">
      {commits.map(commit => (
        <Commit key={commit.sha} {...commit} />
      ))}
    </main>
  );
};

export default CommitList;
