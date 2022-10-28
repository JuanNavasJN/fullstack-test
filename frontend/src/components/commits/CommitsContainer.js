import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommitSection from './CommitSection';

const URL_BASE = process.env.REACT_APP_BASE_API_URL;

const CommitsContainer = () => {
  const [commitsData, setCommitsData] = useState();

  useEffect(() => {
    axios.get(`${URL_BASE}/commits`).then(commitsResponse => {
      setCommitsData(commitsResponse.data);
    });
  }, []);

  return <CommitSection commitsData={commitsData} />;
};

export default CommitsContainer;
