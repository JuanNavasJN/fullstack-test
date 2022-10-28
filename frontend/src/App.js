import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Loading from './components/Loading';
import Commit from './components/Commit';

import './App.css';

export const URL_BASE = process.env.REACT_APP_BASE_API_URL;

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(`${URL_BASE}/commits`).then(res => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      {data ? (
        <>
          <Header
            repositoryName={data.repositoryName}
            repositoryUrl={data.repositoryUrl}
          />

          <main className="commits">
            {data.commits.map(com => (
              <Commit key={com.sha} {...com} />
            ))}
          </main>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default App;
