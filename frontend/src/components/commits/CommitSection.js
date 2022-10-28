import React from 'react';
import CommitList from './CommitList';
import Header from '../Header';
import Loading from '../Loading';

const CommitSection = ({ commitsData }) => {
  return (
    <section>
      {commitsData ? (
        <>
          <Header
            repositoryName={commitsData.repositoryName}
            repositoryUrl={commitsData.repositoryUrl}
          />

          <CommitList commits={commitsData.commits} />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default CommitSection;
