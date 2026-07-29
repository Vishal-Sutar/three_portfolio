
import { useGSAP } from '@gsap/react';
import { Float, useTexture } from '@react-three/drei';
import gsap from 'gsap';
import { useRef } from 'react';

const Target = (props) => {
  const targetRef = useRef();
  const texture = useTexture('textures/rings.png');

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.rotation, {
        y: `+=${Math.PI * 2}`,
        duration: 5,
        repeat: -1,
        ease: 'none',
      });
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0.5}>
      <group {...props} ref={targetRef} rotation={[0.3, 0.3, 0]} scale={1.1}>
        {/* Outer Ring with Matcap Texture */}
        <mesh>
          <torusGeometry args={[1.5, 0.15, 16, 100]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>

        {/* Middle Disc Layer */}
        <mesh position={[0, 0, 0.02]}>
          <cylinderGeometry args={[1.2, 1.2, 0.08, 32]} />
          <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Inner Glowing Cyan Ring */}
        <mesh position={[0, 0, 0.07]}>
          <torusGeometry args={[0.75, 0.1, 16, 100]} />
          <meshStandardMaterial color="#00f0ff" emissive="#00f0ff" emissiveIntensity={0.6} />
        </mesh>

        {/* Center Red Bullseye */}
        <mesh position={[0, 0, 0.12]}>
          <cylinderGeometry args={[0.35, 0.35, 0.1, 32]} />
          <meshStandardMaterial color="#ff2e63" emissive="#ff2e63" emissiveIntensity={0.7} />
        </mesh>

        {/* Metallic Stand & Base */}
        <mesh position={[0, -1.2, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 1.2, 16]} />
          <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, -1.8, 0]}>
          <cylinderGeometry args={[0.4, 0.5, 0.1, 16]} />
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
};

useTexture.preload('textures/rings.png');

export default Target;
