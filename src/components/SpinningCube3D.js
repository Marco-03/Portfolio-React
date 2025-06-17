import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styled from "styled-components";

const SpinningCube3D = () => {
    return (
        <StyledWrapper>
            <Canvas className="absolute top-0 left-0 w-full h-full z-50">
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh rotation={[45, 45, 45]}>
                    <boxGeometry args={[1.5, 1.5, 1.5]} />
                    {/* Gradient colors for wireframe */}
                    <meshStandardMaterial
                        color="#60efff"
                        emissive="#00ff87"
                        emissiveIntensity={0.5}
                        wireframe
                    />
                </mesh>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
            </Canvas>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    @media (max-width: 1720px) {
        display: none;
    }
`;

export default SpinningCube3D;
