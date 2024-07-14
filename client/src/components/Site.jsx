import React, { useEffect, useState } from 'react';
import { Center, Float, Plane, Text, Text3D } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Site = ({ infoObj }) => {
  const img1 = useLoader(THREE.TextureLoader, infoObj.p1_img);
  const img2 = useLoader(THREE.TextureLoader, infoObj.p2_img);
  const img3 = useLoader(THREE.TextureLoader, infoObj.p3_img);

  const [p1Hover, setP1Hover] = useState(false);
  const [p2Hover, setP2Hover] = useState(false);
  const [p3Hover, setP3Hover] = useState(false);

  return (
    <>
      {/* NAME */}
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.2}
        floatingRange={[0.1, 0.2]}
      >
        <Center position={[0, 2.5, 0]}>
          <Text3D
            font={'./fonts/optimer_bold.typeface.json'}
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
              color={'cyan'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>

        <Center center position={[0, 1.7, 0]}>
          <Text3D
            font={'./fonts/Zeyada_Regular.json'}
            size={0.3}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={1}
          >
            {infoObj.tagline}
            <meshStandardMaterial
              color={'orange'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>
      </Float>

      {/* PROJECT 1 */}
      <Float>
        <Plane
          args={p1Hover ? [4.2, 3.2] : [4, 3]}
          position={[-5, 0, 0]}
          onPointerEnter={() => setP1Hover(true)}
          onPointerLeave={() => setP1Hover(false)}
        >
          <meshBasicMaterial attach='material' map={img1} />
          <Center top right position-y={1.25} position-z={0.1}>
            <Text color={'orange'} scale={[0.5, 0.5, 0.5]}>
              {infoObj.p1_title}
            </Text>
          </Center>
          <Center bottom right position-y={-0.75} position-z={0.1}>
            <Text color={'orange'} scale={[0.15, 0.15, 0.15]}>
              {infoObj.p1_description}
            </Text>
          </Center>
        </Plane>
      </Float>

      {/* PROJECT 2 */}
      <Float>
        <Plane
          args={p2Hover ? [4.2, 3.2] : [4, 3]}
          position={[0, 0, 0]}
          onPointerEnter={() => setP2Hover(true)}
          onPointerLeave={() => setP2Hover(false)}
        >
          <meshBasicMaterial attach='material' map={img2} />
          <Center top right position-y={1.25} position-z={0.1}>
            <Text color={'orange'} scale={[0.5, 0.5, 0.5]}>
              {infoObj.p2_title}
            </Text>
          </Center>
          <Center bottom right position-y={-0.75} position-z={0.1}>
            <Text color={'orange'} scale={[0.15, 0.15, 0.15]}>
              {infoObj.p2_description}
            </Text>
          </Center>
        </Plane>
      </Float>

      {/* PROJECT 3 */}
      <Float>
        <Plane
          args={p3Hover ? [4.2, 3.2] : [4, 3]}
          position={[5, 0, 0]}
          onPointerEnter={() => setP3Hover(true)}
          onPointerLeave={() => setP3Hover(false)}
        >
          <meshBasicMaterial attach='material' map={img3} />
          <Center top right position-y={1.25} position-z={0.1}>
            <Text color={'orange'} scale={[0.5, 0.5, 0.5]}>
              {infoObj.p3_title}
            </Text>
          </Center>
          <Center bottom right position-y={-0.75} position-z={0.1}>
            <Text color={'orange'} scale={[0.15, 0.15, 0.15]}>
              {infoObj.p3_description}
            </Text>
          </Center>
        </Plane>
      </Float>

      {/* CONTACT */}
      <Float
        speed={2}
        rotationIntensity={0.3}
        floatIntensity={0.2}
        floatingRange={[0.1, 0.2]}
      >
        <Center position={[-5, -2.5, 0]}>
          <Text3D
            font={'./fonts/optimer_bold.typeface.json'}
            size={0.2}
            height={0.01}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.001}
            bevelOffset={0}
            bevelSegments={5}
          >
            {infoObj.github}
            <meshStandardMaterial
              color={'cyan'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>

        <Center position={[0, -2.5, 0]}>
          <Text3D
            font={'./fonts/optimer_bold.typeface.json'}
            size={0.2}
            height={0.01}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.001}
            bevelOffset={0}
            bevelSegments={5}
          >
            {infoObj.linkedin}
            <meshStandardMaterial
              color={'cyan'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>

        <Center position={[5, -2.5, 0]}>
          <Text3D
            font={'./fonts/optimer_bold.typeface.json'}
            size={0.2}
            height={0.01}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.005}
            bevelSize={0.001}
            bevelOffset={0}
            bevelSegments={5}
          >
            {infoObj.twitter}
            <meshStandardMaterial
              color={'cyan'}
              roughness={0.2}
              metalness={0.7}
            />
          </Text3D>
        </Center>
      </Float>
    </>
  );
};

export default Site;
