"use client";
import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useTexture, Shadow } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { animated as aDom } from "@react-spring/web";

import styles from "./style.module.scss";

function Switch({ x, set }) {
  const { nodes, materials } = useGLTF("/assets/gltf/switch.glb");
  const texture = useTexture("/assets/gltf/cross.jpg");

  const [hovered, setHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const onClick = () => {
    console.log("Sphere clicked!");
    set((prev) => Number(!prev));
  };

  const onPointerOver = () => setHover(true);
  const onPointerOut = () => setHover(false);

  // Animate position and rotation based on spring value x
  const pZ = x.to([0, 1], [-1.2, 1.2]);
  const rX = x.to([0, 1], [0, Math.PI * 1.3]);
  const color = x.to([0, 1], ["#b0b0b0", "#fff"]);

  return (
    <group scale={[1.5, 1.5, 1.5]} dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        position={[1.5, 0, 2]}
        material={materials.track}
        geometry={nodes.Cube.geometry}
        material-color={color}
        material-roughness={.2}
        material-metalness={0.8}
      />
      <a.group position-y={0.85} position-z={pZ}>
        <a.mesh
          receiveShadow

          rotation-x={rX}
          onClick={onClick}
          position={[1.5, 0, 2]}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        >
          <sphereGeometry args={[0.8, 64, 64]}  />
          <a.meshStandardMaterial roughness={0.5} map={texture} />
        </a.mesh>
        <a.pointLight intensity={100} distance={0.4} color={color} />
        <Shadow

          renderOrder={-1000}
          position={[1.5, -1, 2]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.5}
        />
      </a.group>
    </group>
  );
}

export default function SwitchBall() {
  const [toggle, setToggle] = useState(0);
  const [spring, api] = useSpring(() => ({
    x: toggle,
    config: { mass: 5, tension: 2000, friction: 10, precision: 0.0001 },
  }));

  useEffect(() => {
    api.start({ x: toggle });
  }, [toggle, api]);

  const { x } = spring;
  const color = x.to([0, 1], ["#4f4f4f", "#fff"]);

  return (
    <aDom.div
      className={styles.container}
      style={{
        backgroundColor: x.to([0, 1], ["#000", "#153dbc"]),
        color: x.to([0, 1], ["#b0b0b0", "#fff"]),
      }}
    >
      <h1 className={styles.open} children="<switch>"/>
      <h1 className={styles.close} children="</things>" />
      <aDom.h1 className={styles.med}>{x.to((x) => (x).toFixed(2))}</aDom.h1>
      <Canvas
        orthographic
        shadows
        dpr={[1, 2]}
        camera={{ zoom: 90, position: [-10, 10, 10], fov: 0 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[0, 20, 10]} intensity={1} />
        <a.directionalLight position={[20, 40, -0]} distance={3} intensity={.5} color={color} />
        <a.pointLight position={[0, 0, 5]} distance={4} intensity={5} color={color} />
        <a.spotLight
          color={color}
          position={[0, 40, 20]}
          angle={.1}
          intensity={2}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.00001}
          castShadow
        />
        <Suspense fallback={null}>
          <Switch x={x} set={setToggle} />
        </Suspense>
        <mesh
          receiveShadow
          renderOrder={1000}
          position={[0, 2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[20, 10]} />
          <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
        </mesh>
      </Canvas>
    </aDom.div>
  );
}