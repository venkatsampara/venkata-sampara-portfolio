'use client'

import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { Suspense, type ReactNode } from 'react'

interface SceneCanvasProps {
  children: ReactNode
  className?: string
}

export default function SceneCanvas({ children, className }: SceneCanvasProps) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} />
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  )
}
