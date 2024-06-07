// "use client";
// import { Canvas } from "@react-three/fiber";
// // import CameraOrbitControls from "./components/CameraOrbitControls";
// import { OrbitControls, Stats } from "@react-three/drei";
// import { Lights } from "./components/Lights";
// import { Ground } from "./components/Ground";

// export default function Home() {
//   const testing = true;
//   return (
//     <div className="w-full h-screen  bg-[lightgray]">
//       {/* <Canvas camera={{ fov: 150, near: 2, far: 10 }}> */}
//       {/* We can configure our camera like this fov default value is 75 */}
//       {/* <Canvas
//         orthographic
//         camera={{ left: -5, right: 5, top: 5, bottom: -5, zoom: 50 }}
//       > */}
//       {/* We can also use orthographic camera */}
//       {/* <Canvas shadows camera={{ position: [0, 10, 0] }}> */}
//       <Canvas shadows>
//         {testing ? <Stats /> : null}
//         {/* It is used to see live statistics of our web page */}
//         {testing ? <axesHelper visible={testing} args={[2]} /> : null}
//         {/* It is use to see axsis of geometries */}
//         {testing ? <gridHelper visible={testing} args={[10, 10]} /> : null}
//         {/* Use to see grids in canvas */}
//         <OrbitControls />
//         {/* <CameraOrbitControls />  */}
//         {/* SO this CameraOrbitCOntrols is custome component that makes the orbitcontrolls by using camera webGLRendered which is a bit hard but drei is library that makes thsi stuff easy!*/}
//         {/* <ambientLight intensity={0.1} /> */}
//         {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
//         {/* <mesh>
//           <boxGeometry args={[2, 2, 2]} />
//           <meshStandardMaterial />
//         </mesh> */}
//         {/* <AnimatedBox isTesting={testing} /> */}
//         {/* <mesh scale={[0.5, 0.5, 0.5]}> */}
//         {/* <boxGeometry /> */}
//         {/* There are many geometries in three js and you can use all of them in R3F */}
//         {/* <coneGeometry />
//           <meshStandardMaterial color={"blue"} wireframe /> */}
//         {/* </mesh> */}
//         {/* <Torus /> */}
//         {/* You can use shapes from drei directly */}
//         {/* <ambientLight intensity={1} /> */}
//         {/* <directionalLight position={[0, 5, 5]} /> */}
//         {/* Lights */}
//         <Lights />
//         {/* <TexturedSpheres /> */}
//         {/* <Tree /> */}
//         {/* You can import model and also use it or you can directly convert into jsx and then use it */}
//         <TreeModel />
//         <TreeModel position={[5, 0, 0]} />
//         <TreeModel position={[-5, 0, 0]} />
//         <Ground />
//       </Canvas>
//     </div>
//   );
// }
