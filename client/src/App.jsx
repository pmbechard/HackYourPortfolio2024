import React, { useEffect, useState } from 'react';
import './App.css';
import Site from './components/Site';
import Form from './components/Form';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoObj, setInfoObj] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('http://localhost:4000/api/info');
        const json = await data.json();
        console.log(json); // TODO: Erase
        if (json.error) setInfoObj(null);
        else setInfoObj(json);
      } catch (e) {
        setInfoObj(null);
      }
      setIsLoading(false);
    };
    fetchInfo();
  }, []);

  return <>{infoObj ? <Site /> : <Form />}</>;
}

export default App;
