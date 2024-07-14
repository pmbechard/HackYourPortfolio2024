import React, { useEffect } from 'react';
import { Center, Float, Sphere, Text3D } from '@react-three/drei';

const Site = ({ infoObj }) => {
  return (
    <>
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.2}
        floatingRange={[0.1, 0.2]}
      >
        <Center position={[0, 3, 0]}>
          <Text3D
            font={'./fonts/Zeyada_Regular.json'}
            size={1}
            height={0.15}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {infoObj.name}
            <meshStandardMaterial
              color={'purple'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>
      </Float>
      <Sphere />
    </>
  );
};

export default Site;
