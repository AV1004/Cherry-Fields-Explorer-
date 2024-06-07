"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky, Stats } from "@react-three/drei";
import { Lights } from "./components/Lights";
import { Ground } from "./components/Ground";
import Trees from "./components/Trees";
import Player from "./components/Player";

export default function Home() {
  const testing = false;
  return (
    <div className="w-full h-screen ">
      <Canvas shadows camera={{ position: [0, 1, 4] }}>
        <Sky sunPosition={[0, 60, 80]} />
        {testing ? <Stats /> : null}
        {testing ? <axesHelper visible={testing} args={[2]} /> : null}
        {testing ? <gridHelper visible={testing} args={[10, 10]} /> : null}
        <OrbitControls />
        <Lights isTesting={testing} />
        <Trees boundary={150} counter={100} />
        <Ground />
        <Player />
      </Canvas>
    </div>
  );
}
