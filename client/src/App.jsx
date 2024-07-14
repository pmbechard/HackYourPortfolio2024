import React, { useEffect, useState } from 'react';
import './App.css';
import Site from './components/Site';
import Form from './components/Form';
import { Html, Sky, Stars, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [infoObj, setInfoObj] = useState(null);

  const { width, height } = useThree((state) => state.viewport);

  useEffect(() => {
    const fetchInfo = async () => {
      setIsLoading(true);
      try {
        const data = await fetch('http://localhost:4000/api/info');
        const json = await data.json();
        console.log(json); // FIXME: Erase
        if (json.error) setInfoObj(null);
        else setInfoObj(json);
      } catch (e) {
        setInfoObj(null);
      }
      setIsLoading(false);
    };
    fetchInfo();
  }, []);

  return (
    <>
      {/* LIGHT/DARK MODE */}
      <Text
        color={isLightMode ? 'black' : 'white'}
        position-x={width / 2 - 0.7}
        position-y={height / 2 - 0.3}
        fontSize={0.3}
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ? 'Dark' : 'Light'}
      </Text>

      {isLightMode ? (
        <Sky />
      ) : (
        <>
          <color attach={'background'} args={[0x010101]} />
          <Stars />
        </>
      )}

      {/* PAGE DISPLAY */}

      {infoObj ? (
        <Site />
      ) : (
        <Html wrapperClass='input-form'>
          <Form />
        </Html>
      )}
    </>
  );
}

export default App;
