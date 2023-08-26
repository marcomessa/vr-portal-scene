import * as THREE from "three";
import { Controllers, Hands, XR } from "@react-three/xr";
import { useThree } from "@react-three/fiber";
import { useState } from "react";

export default function VrExperience({ children }) {
  const { gl } = useThree();
  const [baseReferenceSpace, setBaseReferenceSpace] = useState(null);

  const onSessionStart = () => {
    const referenceSpace = gl.xr.getReferenceSpace();
    setBaseReferenceSpace(referenceSpace);

    const offsetPosition = { x: 0, y: 2, z: 0, w: 1 };
    const offsetRotation = new THREE.Quaternion();
    const transform = new XRRigidTransform(offsetPosition, offsetRotation);
    const teleportSpaceOffset =
      referenceSpace.getOffsetReferenceSpace(transform);

    gl.xr.setReferenceSpace(teleportSpaceOffset);
  };

  const onSessionEnd = () => {
    gl.xr.setReferenceSpace(baseReferenceSpace);
    // setBaseReferenceSpace(null);
  };

  return (
    <XR onSessionStart={onSessionStart} onSessionEnd={onSessionEnd}>
      <Controllers />
      <Hands />
      {children}
    </XR>
  );
}
