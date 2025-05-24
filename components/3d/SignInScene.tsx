"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Float, Stars, OrbitControls } from "@react-three/drei"

function FloatingCube() {
  return (
    <Float
      speed={1.5} 
      rotationIntensity={2} 
      floatIntensity={2}
    >
      <mesh>
        <torusKnotGeometry args={[0.4, 0.1, 128, 16]} />
        <meshPhongMaterial
          color="#8b5cf6"
          emissive="#d946ef"
          emissiveIntensity={0.5}
          shininess={100}
        />
      </mesh>
    </Float>
  )
}

export default function SignInScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <OrbitControls enableZoom={false} enablePan={false} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <FloatingCube />
      </Suspense>
      <Stars
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  )
}