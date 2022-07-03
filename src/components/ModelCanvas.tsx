import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from 'lib/model/model';

const ModelCanvas = () => {
  return (
    <div className="h-96 w-96">
      <Canvas camera={{ position: [0, 0, 10], fov: 15 }}>
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={1.0} />
        <Model position={[0.025, -0.9, 0]} />
        <OrbitControls enableZoom={false} autoRotate={true} />
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
