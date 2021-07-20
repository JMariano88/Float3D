import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useGLTF, OrbitControls, Loader } from '@react-three/drei'


import Hud from './Hud'

function Model(props) {
  const group = useRef()
  useFrame(() => (group.current.rotation.y -= 0.002))
  const { nodes, materials } = useGLTF('/worldss5.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Puzzling_Rocky_Paths.geometry}
        material={materials['Default OBJ']}
        position={[-3.32, -4.81, 0.82]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={56.37}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[-3.32, -4.81, 0.82]}
        scale={38.07}
      />
    </group>
  )
}
 


export default function App() {
  return (
    <>
    
    <Canvas
    camera={{ position: [-15, 5, 0] }}>
      
      <pointLight position={[0, 1, -50]} intensity={2} />
      <ambientLight intensity={0.2} />
      
      <Suspense fallback={null}>
      
        <Model />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 4}  />
      
    </Canvas>
    <Loader />
    <Hud/>

    
    
    </>
    
  )
}
