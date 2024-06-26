// @ts-nocheck
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { useInput } from "../hooks/useInput";
import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

let walkDirection = new THREE.Vector3();
let rotateAngle = new THREE.Vector3(0, 1, 0);
let rotateQuarternion = new THREE.Quaternion();
let cameraTarget = new THREE.Vector3();

const directionOffSet = ({ forward, backward, left, right }) => {
  var directionOffSet = 0; //w

  if (forward) {
    if (left) {
      directionOffSet = Math.PI / 4; //w + a
    } else if (right) {
      directionOffSet = -Math.PI / 4; //w + d
    }
  } else if (backward) {
    if (left) {
      directionOffSet = Math.PI / 4 + Math.PI / 2; //s + a
    } else if (right) {
      directionOffSet = -Math.PI / 4 - Math.PI / 2; //s + d
    } else {
      directionOffSet = Math.PI; //s
    }
  } else if (left) {
    directionOffSet = Math.PI / 2; //a
  } else if (right) {
    directionOffSet = -Math.PI / 2; // d
  }

  return directionOffSet;
};

const Player = () => {
  // Importing our custom hook
  const { forward, backward, left, right, jump, shift } = useInput();

  const model = useGLTF("./models/player.glb");
  // Use Apply Animations of models
  const { actions } = useAnimations(model.animations, model.scene);

  model.scene.scale.set(1, 1, 1);

  model.scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
    }
  });

  const currentAction = useRef("");

  const controlsRef = useRef<typeof OrbitControls>();

  const camera = useThree((state) => state.camera);

  const updateCameraTarget = (moveX: number, moveZ: number) => {
    //move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;

    //update camera target
    cameraTarget.x = model.scene.position.x;
    cameraTarget.y = model.scene.position.y + 2;
    cameraTarget.z = model.scene.position.z;
    if (controlsRef.current) controlsRef.current.target = cameraTarget;
  };

  useEffect(() => {
    // actions?.walking?.play();// console.log("forward:", forward);// console.log("backward:", backward);// console.log("left:", left);// console.log("right:", right);// console.log("jump:", jump);// console.log("shift:", shift); // console.log(model);

    let action = "";
    if (forward || backward || left || right) {
      action = "walking";
      if (shift) {
        action = "running";
      }
    } else if (jump) {
      action = "jumping";
    } else {
      action = "idle";
    }

    if (currentAction.current != action) {
      const nextActionToPlay = actions[action];
      const current = actions[currentAction.current];
      current?.fadeOut(0.2);
      nextActionToPlay?.reset().fadeIn(0.2).play();
      currentAction.current = action;
    }
  }, [forward, backward, left, right, jump, shift]);

  useFrame((state, delta) => {
    if (
      currentAction.current == "running" ||
      currentAction.current == "walking"
    ) {
      //calculate towards camera direction
      let angleYCameraDirection = Math.atan2(
        camera.position.x - model.scene.position.x,
        camera.position.z - model.scene.position.z
      );

      //   digonal movment angle offset
      let newDirectionOffset = directionOffSet({
        forward,
        backward,
        left,
        right,
      });

      //rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + newDirectionOffset
      );
      model.scene.quaternion.rotateTowards(rotateQuarternion, 0.2);

      //calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, newDirectionOffset);

      //run/walk velocity
      const velocity = currentAction.current == "running" ? 10 : 5;

      //move  model & camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      model.scene.position.x += moveX;
      model.scene.position.z += moveZ;
      updateCameraTarget(moveX, moveZ);
    }
  });

  return (
    <>
      <OrbitControls ref={controlsRef} />
      <primitive object={model.scene} />
    </>
  );
};

export default Player;
