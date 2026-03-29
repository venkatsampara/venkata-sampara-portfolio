'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

/** Animated wireframe icosahedron with orbiting rings — hero signature visual */
export default function HeroScene() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const ring1Ref = useRef<THREE.Mesh>(null!)
  const ring2Ref = useRef<THREE.Mesh>(null!)
  const particlesRef = useRef<THREE.Points>(null!)

  // Generate deterministic floating particles
  const particlePositions = useMemo(() => {
    const count = 80
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 2 + Math.random() * 1.5
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15
      meshRef.current.rotation.y = t * 0.2
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3
      ring1Ref.current.rotation.z = t * 0.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.25
      ring2Ref.current.rotation.z = -t * 0.15
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.05
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group>
        {/* Core wireframe icosahedron */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#2563eb"
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Inner glow sphere */}
        <mesh>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.15}
            emissive="#3b82f6"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Orbiting ring 1 */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[1.8, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#2563eb"
            transparent
            opacity={0.5}
          />
        </mesh>

        {/* Orbiting ring 2 */}
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.2, 0.01, 16, 100]} />
          <meshStandardMaterial
            color="#1e40af"
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Floating particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlePositions.length / 3}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.03}
            color="#2563eb"
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  )
}
