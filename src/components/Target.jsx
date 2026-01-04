
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Target = (props) => {
  const targetRef = useRef();
  
  // Temporarily using a placeholder - replace with local model later
  // To use real model: download it and place in /public/models/target.glb
  // Then uncomment the line below and comment out the placeholder
  
  // const { scene } = useGLTF('/models/target.glb');

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  // Placeholder - shows a simple animated box
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#ff6b6b" metalness={0.5} roughness={0.5} />
    </mesh>
  );

  // When you have the model locally, use this instead:
  // return (
  //   <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
  //     <primitive object={scene} />
  //   </mesh>
  // );
};

export default Target;

// Preload when you have local model
// useGLTF.preload('/models/target.glb');
