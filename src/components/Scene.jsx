import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const FogController = () => {
    const fogRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (!fogRef.current) return;
            // Calculate scroll progress (0 to 1)
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            // Prevent division by zero if not scrollable
            if (maxScroll <= 0) return;

            const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);

            // Map progress (0 -> 1) to fog density (0.08 -> 0.005)
            // start = 0.08 (Storm), end = 0.005 (Clarity)
            const stormDensity = 0.08;
            const clarityDensity = 0.005;
            const currentDensity = stormDensity - progress * (stormDensity - clarityDensity);

            fogRef.current.density = currentDensity;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initialize
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <fogExp2 attach="fog" args={['#121212', 0.08]} ref={fogRef} />;
};

const BackgroundGeometricBox = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, -20]}>
            <boxGeometry args={[40, 40, 40]} />
            <meshStandardMaterial color="#FFD700" wireframe opacity={0.05} transparent side={THREE.DoubleSide} />
        </mesh>
    );
};

const SceneContent = () => {
    return (
        <>
            <FogController />

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#FFD700" />

            {/* Background Particles / Stars */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <BackgroundGeometricBox />

            {/* Floating abstract golden shapes to represent "The Ascent" */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-5, 2, -10]}>
                    <octahedronGeometry args={[1, 0]} />
                    <meshStandardMaterial color="#FFD700" wireframe opacity={0.3} transparent />
                </mesh>
            </Float>

            <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
                <mesh position={[6, -2, -15]}>
                    <icosahedronGeometry args={[1.5, 0]} />
                    <meshStandardMaterial color="#FFD700" wireframe opacity={0.2} transparent />
                </mesh>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={3}>
                <mesh position={[0, -5, -8]}>
                    <sphereGeometry args={[2, 16, 16]} />
                    <meshStandardMaterial color="#FFD700" wireframe opacity={0.1} transparent />
                </mesh>
            </Float>
        </>
    );
};

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <color attach="background" args={['#121212']} />
            <SceneContent />
        </Canvas>
    );
};

export default Scene;
