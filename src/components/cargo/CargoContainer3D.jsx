import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Item3D = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const CargoContainer3D = ({ containers }) => {
  return (
    <Canvas camera={{ position: [5, 5, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />

      {containers.map((container, index) => (
        <group key={container.id} position={[index * 4, 0, 0]}>
          <mesh position={[0, 1, 0]}>
            <boxGeometry args={[3, 2, 2]} />
            <meshStandardMaterial color="blue" wireframe />
          </mesh>

          {container.items.map((item, i) => (
            <Item3D
              key={item.id}
              position={[Math.random() * 2 - 1, 0.5, Math.random() * 1.5 - 0.75]}
              color="red"
            />
          ))}
        </group>
      ))}
    </Canvas>
  );
};

export default CargoContainer3D;
