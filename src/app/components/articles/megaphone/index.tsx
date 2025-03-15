// @ts-nocheck
/* tslint:disable */
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion-3d";
import { useTransform } from "framer-motion";
import * as THREE from "three";
import { useMotionValue } from "framer-motion";
import { useGLTF, Float } from "@react-three/drei";

function Megaphone() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouse = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouse);
    return () => window.removeEventListener("mousemove", manageMouse);
  }, []);

  const Model = useGLTF("./assets/gltf/megaphone/megaphone.glb");
  const geometry = (Model.nodes.megaphone as THREE.Mesh).geometry;

  const multiplier = 0.2;

  const { rotation } = Model.nodes.megaphone;
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    roughness: 1,
    metalness: 0,
    side: THREE.DoubleSide,
  });
  const a = multiplier / 2;
  const rotationX = useTransform(
    mouse.x,
    [0, 1],
    [rotation.x - a, rotation.x + a]
  );
  const rotationY = useTransform(
    mouse.y,
    [0, 1],
    [rotation.y - a, rotation.y + a]
  );

  return (
    <Float>
      // @ts-ignore
      <motion.mesh
        castShadow={false}
        receiveShadow={false}
        geometry={geometry}
        material={material}
        scale={0.05}
        position={[-0, 6, 10]}
        rotation-y={rotationX}
        rotation-x={rotationY}
        transition={{ type: "spring", stiffness: 75, damping: 100, mass: 3 }}
      />
    </Float>
  );
}

export const MegaPhone = () => (
  <Canvas
    className={styles.megaphone}
    eventPrefix="client"
    camera={{ position: [50, 6, -50], fov: 20 }}
  >

    <ambientLight intensity={2} />
    <directionalLight
      position={[0, 0, 5]}
      intensity={10}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <directionalLight
      position={[0, 0, -5]}
      intensity={10}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <spotLight
      position={[0, 0, 5]}
      intensity={10}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={100}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />

    <Megaphone></Megaphone>
  </Canvas>
);
