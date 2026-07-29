
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { workExperiences } from "../constants";
import { OrbitControls, ContactShadows, Sparkles } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  const [animationName, setAnimationName] = useState('idle');
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-500">
        <h3 className="head-text">My Work Experience</h3>
        <div className="work-container">
            <div className="work-canvas">
                <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
                    <ambientLight intensity={1.8}/>
                    <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2.5}/>
                    <directionalLight position={[10, 10, 10]} intensity={1.8}/>
                    
                    {/* Developer Studio Key & Fill Backlights */}
                    <pointLight position={[-5, 5, -3]} intensity={2.5} color="#3b82f6" />
                    <pointLight position={[5, 5, -3]} intensity={2} color="#8b5cf6" />

                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
                    <Suspense fallback={<CanvasLoader/>}>
                      {/* Floating Developer Tech Particles */}
                      <Sparkles count={60} scale={[8, 8, 8]} size={3} speed={0.4} color="#60a5fa" />
                      
                      {/* Developer Holographic Pedestal Platform */}
                      <group position={[0, -3.01, 0]}>
                        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
                          <ringGeometry args={[1.5, 1.65, 64]} />
                          <meshBasicMaterial color="#3b82f6" opacity={0.9} transparent />
                        </mesh>
                        <mesh position={[0, -0.05, 0]}>
                          <cylinderGeometry args={[1.65, 1.75, 0.1, 64]} />
                          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
                        </mesh>
                      </group>

                      <Developer position-y={-3} scale={3} animationName={animationName}/>
                      <ContactShadows position={[0, -3, 0]} opacity={0.8} scale={6} blur={1.2} far={4} />
                    </Suspense>
                </Canvas>
            </div>
            
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                  {workExperiences.map(({id, name, pos, icon, duration, title, animation})=>(
                    <div key={id} className="work-content_container group" onClick={()=>{
                      setAnimationName(animation.toLowerCase())
                    }} 
                    onPointerOver={()=>{
                      setAnimationName(animation.toLowerCase())
                    }}
                    onPointerOut={()=>{
                      setAnimationName("idle")
                    }}>
                        <div className="flex flex-col h-full justify-start
                              items-center py-2">
                                <div className="work-content_logo">
                                    <img src={icon} alt="logo" className="w-full h-full" />
                                </div>
                                <div className="work-content_nar"/>
                        </div>

                        <div className="sm:p-5 px-2.5 py-5">
                          <p className="font-bold text-white-800">{name}</p>
                          <p className="text-sm mb-5">{pos} -- {duration}</p>
                          <p className="group-hover:text-white transition ease-in-out
                              duration-500">{title}</p>

                        </div>
                      
                    </div>
                  ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};



export default Experience;
