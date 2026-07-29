import React, { useRef, useEffect, useMemo } from 'react';
import { useGLTF, useVideoTexture, Center } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const DemoPhone = (props) => {
  const group = useRef();
  const { scene } = useGLTF('/models/phone.glb');

  const txt = useVideoTexture(
    props.texture ? props.texture : '/textures/project/BharatFPOConnect.mp4'
  );

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
      txt.repeat.set(1, 1);
      txt.offset.set(0, 0);
      txt.center.set(0, 0);
      txt.rotation = 0;
      txt.needsUpdate = true;
    }
  }, [txt]);

  const clonedScene = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.traverse((child) => {
      if (child.isMesh) {
        if (child.name === 'Object_7' || child.material?.name === 'Material.007') {
          child.material = new THREE.MeshBasicMaterial({
            map: txt,
            toneMapped: false,
          });
        }
      }
    });
    return cloned;
  }, [scene, txt]);

  useGSAP(() => {
    if (group.current) {
      gsap.from(group.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <Center>
        <group rotation={[0, 0, 0]}>
          <primitive object={clonedScene} />
        </group>
      </Center>
    </group>
  );
};

useGLTF.preload('/models/phone.glb');

export default DemoPhone;
