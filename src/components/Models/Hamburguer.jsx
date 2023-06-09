/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";

export const Hamburger = (props) => {
  const { nodes, materials } = useGLTF("./hamburger-draco.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3, 0]}
      />
      <mesh
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.8, 0]}
      />
      <mesh
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.8, 0]}
      />
    </group>
  );
}

useGLTF.preload("./hamburger-draco.glb");

export default Hamburger