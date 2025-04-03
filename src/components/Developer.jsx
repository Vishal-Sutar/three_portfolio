import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/human/model3.glb');
  const { animations: idleAnimation } = useFBX('/models/human/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/human/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/human/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/human/victory.fbx');

  // Rename the animation
  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  const allAnimations = [
    ...idleAnimation,
    ...saluteAnimation,
    ...clappingAnimation,
    ...victoryAnimation
  ];

  
  // Use useAnimations (plural) which can handle both GLTF and FBX animations
  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      
      return () => {
        if (actions[animationName]) {
          actions[animationName].fadeOut(0.5);
        }
      }
    }
  }, [animationName, actions])
  return (
    <group {...props} dispose={null} ref={group}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes.avaturn_body.geometry}
            material={materials.avaturn_body_material}
            skeleton={nodes.avaturn_body.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes.avaturn_hair_0.geometry}
            material={materials.avaturn_hair_0_material}
            skeleton={nodes.avaturn_hair_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={nodes.avaturn_hair_1.geometry}
            material={materials.avaturn_hair_1_material}
            skeleton={nodes.avaturn_hair_1.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes.avaturn_shoes_0.geometry}
            material={materials.avaturn_shoes_0_material}
            skeleton={nodes.avaturn_shoes_0.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes.avaturn_look_0.geometry}
            material={materials.avaturn_look_0_material}
            skeleton={nodes.avaturn_look_0.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/human/model3.glb')
export default Developer;
