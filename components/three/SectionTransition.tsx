'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/** Subtle floating dots used as a section-transition accent */
export default function SectionTransition() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }).map((_, i) => {
        const angle = (i / 30) * Math.PI * 2
        const r = 2.5 + Math.sin(i * 0.7) * 0.5
        return (
          <mesh key={i} position={[r * Math.cos(angle), Math.sin(i * 0.5) * 0.3, r * Math.sin(angle)]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial color="#2563eb" transparent opacity={0.4} />
          </mesh>
        )
      })}
    </group>
  )
}
