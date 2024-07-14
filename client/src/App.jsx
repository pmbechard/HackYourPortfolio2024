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
      setIsLoading(true);
      try {
        const data = await fetch('http://localhost:4000/api/info');
        const json = await data.json();
        if (json.error) setInfoObj(null);
        else setInfoObj(json);
      } catch (e) {
        setInfoObj(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInfo();
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
        &#x263C;
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
