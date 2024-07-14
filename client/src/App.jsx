import React, { useEffect, useState } from 'react';
import { Html, Sky, Stars, Text } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import './App.css';

import Site from './components/Site';
import Form from './components/Form';

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [infoObj, setInfoObj] = useState(null);

  const { width, height } = useThree((state) => state.viewport);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const data = await fetch('http://localhost:4000/api/info');
        const json = await data.json();
        console.log(json); // FIXME: Erase
        if (json.error) setInfoObj(null);
        else setInfoObj(json);
      } catch (e) {
        setInfoObj(null);
      }
    };
    setIsLoading(true);
    fetchInfo();
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* LIGHT/DARK MODE */}
      <Text
        color={isLightMode ? 'black' : 'white'}
        position-x={width / 2 - 0.3}
        position-y={height / 2 - 0.2}
        fontSize={0.2}
        onClick={() => setIsLightMode(!isLightMode)}
      >
        {isLightMode ? 'dark' : 'light'}
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

      {!isLoading &&
        (infoObj ? (
          <Site infoObj={infoObj} />
        ) : (
          <Html wrapperClass='input-form'>
            <Form />
          </Html>
        ))}

      <ambientLight />
      <directionalLight position={[4, 6, 7]} />
      <hemisphereLight args={['orange', 'purple', 3]} />
    </>
  );
}

export default App;
