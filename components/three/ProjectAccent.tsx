'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Lightweight rotating wireframe cube used as a subtle hover accent on project cards */
export default function ProjectAccent() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.4
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.6
    }
  })

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#2563eb"
        wireframe
        transparent
        opacity={0.5}
      />
    </mesh>
  )
}
