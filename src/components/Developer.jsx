// import React, { useEffect, useRef } from 'react'
// import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

// const Developer = ({ animationName = 'idle', ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF('/models/human/vishal.glb');
//   const { animations: idleAnimation } = useFBX('/models/human/idle.fbx');
//   const { animations: saluteAnimation } = useFBX('/models/human/salute.fbx');
//   const { animations: clappingAnimation } = useFBX('/models/human/clapping.fbx');
//   const { animations: victoryAnimation } = useFBX('/models/human/victory.fbx');

//   // Rename the animation
//   idleAnimation[0].name = 'idle';
//   saluteAnimation[0].name = 'salute';
//   clappingAnimation[0].name = 'clapping';
//   victoryAnimation[0].name = 'victory';

//   const allAnimations = [
//     ...idleAnimation,
//     ...saluteAnimation,
//     ...clappingAnimation,
//     ...victoryAnimation
//   ];


//   // Use useAnimations (plural) which can handle both GLTF and FBX animations
//   const { actions } = useAnimations(allAnimations, group);

//   useEffect(() => {
//     if (actions && actions[animationName]) {
//       actions[animationName].reset().fadeIn(0.5).play();

//       return () => {
//         if (actions[animationName]) {
//           actions[animationName].fadeOut(0.5);
//         }
//       }
//     }
//   }, [animationName, actions])
//   return (
//     <group {...props} dispose={null} ref={group}>
//       <group name="Scene">
//         <group name="Armature">
//           <primitive object={nodes.Hips} />
//           <skinnedMesh
//             name="avaturn_body"
//             geometry={nodes.avaturn_body.geometry}
//             material={materials.avaturn_body_material}
//             skeleton={nodes.avaturn_body.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_hair_0"
//             geometry={nodes.avaturn_hair_0.geometry}
//             material={materials.avaturn_hair_0_material}
//             skeleton={nodes.avaturn_hair_0.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_hair_1"
//             geometry={nodes.avaturn_hair_1.geometry}
//             material={materials.avaturn_hair_1_material}
//             skeleton={nodes.avaturn_hair_1.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_shoes_0"
//             geometry={nodes.avaturn_shoes_0.geometry}
//             material={materials.avaturn_shoes_0_material}
//             skeleton={nodes.avaturn_shoes_0.skeleton}
//           />
//           <skinnedMesh
//             name="avaturn_look_0"
//             geometry={nodes.avaturn_look_0.geometry}
//             material={materials.avaturn_look_0_material}
//             skeleton={nodes.avaturn_look_0.skeleton}
//           />
//         </group>
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/models/human/model3.glb')
// export default Developer;
import React, { useEffect, useRef, useMemo } from 'react'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/models/human/developer_vishal.glb');

  // Load FBX animations - these are causing the CanvasLoader update
  const { animations: idleAnimation } = useFBX('/models/human/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/human/salute.fbx');
  const { animations: clappingAnimation } = useFBX('/models/human/clapping.fbx');
  const { animations: victoryAnimation } = useFBX('/models/human/victory.fbx');
    const { animations: danceAnimation } = useFBX('/models/human/HipHopDancing.fbx');


  // Process and filter animations with useMemo - prevents re-processing on every render
  const allAnimations = useMemo(() => {
    // Check if animations are loaded
    if (!idleAnimation[0] || !saluteAnimation[0] || !clappingAnimation[0] || !victoryAnimation[0] || !danceAnimation[0]) {
      return [];
    }

    // Helper function to filter out missing bone tracks
    const filterAnimation = (animation, name) => {
      if (!animation) return null;

      // Clone the animation to avoid mutating the original
      const clonedAnimation = animation.clone();
      clonedAnimation.name = name;

      // Filter out problematic tracks
      clonedAnimation.tracks = clonedAnimation.tracks.filter(track => {
        const trackName = track.name;
        return !trackName.includes('_End') &&
          !trackName.includes('Eye') &&
          !trackName.includes('Thumb4') &&
          !trackName.includes('Index4') &&
          !trackName.includes('Middle4') &&
          !trackName.includes('Ring4') &&
          !trackName.includes('Pinky4') &&
          !trackName.includes('Toe_End');
      });

      return clonedAnimation;
    };

    // Process all animations
    const processedAnimations = [
      filterAnimation(idleAnimation[0], 'idle'),
      filterAnimation(saluteAnimation[0], 'salute'),
      filterAnimation(clappingAnimation[0], 'clapping'),
      filterAnimation(victoryAnimation[0], 'victory'),
      filterAnimation(danceAnimation[0], 'hiphopdancing'),
      filterAnimation(danceAnimation[0], 'HipHopDancing')
    ].filter(Boolean); // Remove any null values

    return processedAnimations;
  }, [idleAnimation, saluteAnimation, clappingAnimation, victoryAnimation, danceAnimation]);

  // Use animations
  const { actions } = useAnimations(allAnimations, group);

  // Play animation in useEffect - after render completes
  useEffect(() => {
    const key = actions[animationName] ? animationName : actions[animationName?.toLowerCase()] ? animationName.toLowerCase() : null;

    if (actions && key && actions[key]) {
      actions[key].reset().fadeIn(0.5).play();

      return () => {
        if (actions[key]) {
          actions[key].fadeOut(0.5);
        }
      };
    }
  }, [animationName, actions]);

  // Don't render until animations are loaded
  if (allAnimations.length === 0) {
    return null;
  }

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
            name="avaturn_glasses_0"
            geometry={nodes.avaturn_glasses_0?.geometry}
            material={materials.avaturn_glasses_0_material || nodes.avaturn_glasses_0?.material}
            skeleton={nodes.avaturn_glasses_0?.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1"
            geometry={nodes.avaturn_glasses_1?.geometry}
            material={materials.avaturn_glasses_1_material || nodes.avaturn_glasses_1?.material}
            skeleton={nodes.avaturn_glasses_1?.skeleton}
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


useGLTF.preload('/models/human/developer_vishal.glb');
useFBX.preload('/models/human/idle.fbx');
useFBX.preload('/models/human/salute.fbx');
useFBX.preload('/models/human/clapping.fbx');
useFBX.preload('/models/human/victory.fbx');
useFBX.preload('/models/human/HipHopDancing.fbx');


export default Developer;
