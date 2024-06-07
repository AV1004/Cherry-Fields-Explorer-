import { useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export default function CameraOrbitControls() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const controlls = new OrbitControls(camera, gl.domElement);

    return () => {
      controlls.dispose();
    };
  }, [camera, gl]);

  return null;
}
