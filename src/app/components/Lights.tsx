import { useHelper } from "@react-three/drei";
import React, { useRef } from "react";
import { DirectionalLight, DirectionalLightHelper } from "three";

export const Lights: React.FC<{ isTesting: boolean }> = ({ isTesting }) => {
  const lightRef = useRef<DirectionalLight>();

  if (isTesting === true) {
    useHelper(lightRef, DirectionalLightHelper, 5, "red");
  }

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={lightRef}
        intensity={3}
        position={[0, 60, 80]}
        castShadow
        shadow-mapSize-height={1000}
        shadow-mapSize-widht={1000}
        shadow-camera-left={-80}
        shadow-camera-right={80}
        shadow-camera-top={80}
        shadow-camera-bottom={-80}
      />
      {/* <hemisphereLight args={["#c257ff", "#fff23b", 10]} /> */}
      <hemisphereLight args={["#7cdbe6", "#5e9c49", 0.7]} />
    </>
  );
};
