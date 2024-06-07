// import { useHelper } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import React, { useRef } from "react";
// import { BoxHelper, Mesh } from "three";

// const AnimatedBox: React.FC<{ isTesting: boolean }> = ({ isTesting }) => {
//   const meshRef = useRef<Mesh>(null);

//   if (isTesting) {
//     useHelper(meshRef, BoxHelper, "blue");
//   }

//   useFrame(() => {
//     // console.log("hi")
//     if (meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//     }
//   });

//   return (
//     <mesh ref={meshRef} scale={[0.5, 0.5, 0.5]}>
//       <boxGeometry />
//       <meshStandardMaterial />
//     </mesh>
//   );
// };

// export default AnimatedBox;
