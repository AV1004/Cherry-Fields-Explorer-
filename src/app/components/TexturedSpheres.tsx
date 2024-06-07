// const TexturedSpheres = () => {
//   const map = useTexture("./Textures/metal_plate_diff_4k.png");
//   const displacementMap = useTexture("./Textures/metal_plate_disp_4k.png");
//   const normalMap = useTexture("./Textures/metal_plate_nor_gl_4k.png");
//   const roughnessMap = useTexture("./Textures/metal_plate_rough_4k.png");

//   return (
//     <>
//       {/* <mesh scale={[0.5, 0.5, 0.5]} position={[-1, 0, 0]}>
//         <sphereGeometry />
//         <meshStandardMaterial map={map} />
//       </mesh> */}
//       {/* <TransformControls> */}
//       <mesh scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} castShadow>
//         <sphereGeometry />
//         <meshStandardMaterial
//           map={map}
//           normalMap={normalMap}
//           roughnessMap={roughnessMap}
//         />
//       </mesh>
//       {/* </TransformControls> */}
//       {/* <mesh scale={[0.5, 0.5, 0.5]} position={[1, 0, 0]}>
//         <sphereGeometry args={[1, 200, 200]} />
//         <meshStandardMaterial
//           map={map}
//           normalMap={normalMap}
//           roughnessMap={roughnessMap}
//           displacementMap={displacementMap}
//           displacementScale={0.05}
//         />
//       </mesh> */}
//     </>
//   );
// };
