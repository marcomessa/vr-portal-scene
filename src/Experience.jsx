import * as THREE from "three";
import {
  Sparkles,
  Center,
  OrbitControls,
  useGLTF,
  useTexture,
  shaderMaterial,
} from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import portalVertexShader from "./shaders/portal/vertex.glsl";
import portalFragmentShader from "./shaders/portal/fragment.glsl";
import VrExperience from "./VrExperience.jsx";
import { useXR } from "@react-three/xr";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color("white"),
    uColorEnd: new THREE.Color("black"),
  },
  portalVertexShader,
  portalFragmentShader,
);

extend({ PortalMaterial });

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  const portalMaterial = useRef();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });

  return (
    <>
      <color attach="background" args={["#030202"]} />

      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          position={nodes.poleLightA.position}
          geometry={nodes.poleLightA.geometry}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          position={nodes.poleLightB.position}
          geometry={nodes.poleLightB.geometry}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>

        <mesh
          position={nodes.portalLight.position}
          rotation={nodes.portalLight.rotation}
          geometry={nodes.portalLight.geometry}
        >
          <portalMaterial ref={portalMaterial} />
        </mesh>

        <Sparkles
          size={6}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.2}
          count={40}
        />
      </Center>
    </>
  );
}
