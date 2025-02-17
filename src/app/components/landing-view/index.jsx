/* eslint-disable react-hooks/exhaustive-deps */

'use client';
import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './model';
import { Environment } from '@react-three/drei'
import { useMotionValue, useSpring } from "framer-motion"


export default function Index() {

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothMouse = {
    x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
  }

  const manageMouse = e => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth
    const y = clientY / innerHeight
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect( () => {
    window.addEventListener("mousemove", manageMouse)
    return () => window.removeEventListener("mousemove", manageMouse)
  }, [])

  return (
    <Canvas style={{background: "#153dbc"}} orthographic camera={{position: [0, 25, 500], zoom: 10}}>
        <Model mouse={smoothMouse}/>
        <Environment preset="sunset"/>
    </Canvas>
    
  )
}
