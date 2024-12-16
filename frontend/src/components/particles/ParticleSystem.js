import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
const PARTICLE_COUNT = 2500;
const HELIX_RADIUS = 10;
const HELIX_HEIGHT = 165;
const FLOWER_RADIUS = 12;
const ParticleSystem = ({ progress }) => {
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current)
            return;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        containerRef.current.appendChild(renderer.domElement);
        camera.position.z = 80;
        const createPetalOutlinePoint = (petalIndex, progress) => {
            const petalCount = 5;
            const baseAngle = (petalIndex / petalCount) * Math.PI * 2;
            const petalWidth = 0.3;
            const sideOffset = Math.random() < 0.5
                ? petalWidth * Math.sin(progress * Math.PI)
                : -petalWidth * Math.sin(progress * Math.PI);
            const angle = baseAngle + sideOffset;
            const radius = FLOWER_RADIUS * progress;
            return [
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
            ];
        };
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const colors = new Float32Array(PARTICLE_COUNT * 3);
        const helixPositions = new Float32Array(PARTICLE_COUNT * 3);
        const flowerPositions = new Float32Array(PARTICLE_COUNT * 3);
        const scatterPositions = new Float32Array(PARTICLE_COUNT * 3);
        const baseHues = new Float32Array(PARTICLE_COUNT);
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            // DNA helix layout
            const t = (i / PARTICLE_COUNT) * Math.PI * 24;
            const strand = i % 2;
            const helixX = Math.cos(t + (strand * Math.PI)) * HELIX_RADIUS;
            const baseY = (t / (Math.PI * 2)) * HELIX_HEIGHT - HELIX_HEIGHT / 2;
            const helixZ = Math.sin(t + (strand * Math.PI)) * HELIX_RADIUS;
            const rotationAngle = Math.PI / 6;
            helixPositions[i3] = helixX * Math.cos(rotationAngle) - baseY * Math.sin(rotationAngle);
            helixPositions[i3 + 1] = helixX * Math.sin(rotationAngle) + baseY * Math.cos(rotationAngle);
            helixPositions[i3 + 2] = helixZ;
            // Flower positions
            const petalIndex = Math.floor(Math.random() * 5);
            const progressInPetal = Math.random();
            const [flowerX, flowerY, flowerZ] = createPetalOutlinePoint(petalIndex, progressInPetal);
            flowerPositions[i3] = flowerX;
            flowerPositions[i3 + 1] = flowerY;
            flowerPositions[i3 + 2] = flowerZ;
            // Scatter positions
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 50 + Math.random() * 100;
            scatterPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
            scatterPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            scatterPositions[i3 + 2] = r * Math.cos(phi);
            positions[i3] = helixPositions[i3];
            positions[i3 + 1] = helixPositions[i3 + 1];
            positions[i3 + 2] = helixPositions[i3 + 2];
            baseHues[i] = 0.35 + Math.random() * 0.05;
            const color = new THREE.Color();
            color.setHSL(baseHues[i], 0.7 + Math.random() * 0.3, 0.5 + Math.random() * 0.3);
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const material = new THREE.ShaderMaterial({
            vertexShader: `
                attribute vec3 color;
                varying vec3 vColor;
                void main() {
                    vColor = color;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_Position = projectionMatrix * mvPosition;
                    gl_PointSize = 4.5 * (300.0 / -mvPosition.z);
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                void main() {
                    float r = length(gl_PointCoord - vec2(0.5));
                    if (r > 0.5) discard;
                    float intensity = pow(1.0 - (r * 2.0), 1.5);
                    gl_FragColor = vec4(vColor, 1.0) * intensity;
                }
            `,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
        });
        const particles = new THREE.Points(geometry, material);
        scene.add(particles);
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.005;
            const dnaToFlowerEnd = 0.4;
            const scatterStart = 0.7;
            const scatterEnd = 0.95;
            const positions = geometry.attributes.position.array;
            const colors = geometry.attributes.color.array;
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const i3 = i * 3;
                if (progress <= dnaToFlowerEnd) {
                    // First move to center point, then form flower
                    const rawProgress = progress / dnaToFlowerEnd;
                    const centeringPhase = Math.min(1, rawProgress * 2);
                    const flowerFormingPhase = Math.max(0, (rawProgress * 2) - 1);
                    if (centeringPhase < 1) {
                        positions[i3] = helixPositions[i3] * (1 - centeringPhase);
                        positions[i3 + 1] = helixPositions[i3 + 1] * (1 - centeringPhase);
                        positions[i3 + 2] = helixPositions[i3 + 2] * (1 - centeringPhase);
                    }
                    else {
                        positions[i3] = flowerPositions[i3] * flowerFormingPhase;
                        positions[i3 + 1] = flowerPositions[i3 + 1] * flowerFormingPhase;
                        positions[i3 + 2] = flowerPositions[i3 + 2] * flowerFormingPhase;
                    }
                }
                else if (progress >= scatterStart && progress <= scatterEnd) {
                    const transProgress = (progress - scatterStart) / (scatterEnd - scatterStart);
                    positions[i3] = flowerPositions[i3] * (1 - transProgress) + scatterPositions[i3] * transProgress;
                    positions[i3 + 1] = flowerPositions[i3 + 1] * (1 - transProgress) + scatterPositions[i3 + 1] * transProgress;
                    positions[i3 + 2] = flowerPositions[i3 + 2] * (1 - transProgress) + scatterPositions[i3 + 2] * transProgress;
                }
                else if (progress > scatterEnd) {
                    positions[i3] = scatterPositions[i3];
                    positions[i3 + 1] = scatterPositions[i3 + 1];
                    positions[i3 + 2] = scatterPositions[i3 + 2];
                }
                else {
                    positions[i3] = flowerPositions[i3];
                    positions[i3 + 1] = flowerPositions[i3 + 1];
                    positions[i3 + 2] = flowerPositions[i3 + 2];
                }
                // Color shimmer effect
                const shimmerOffset = Math.sin(time * 2 + i * 0.1) * 0.02;
                const color = new THREE.Color();
                color.setHSL(baseHues[i] + shimmerOffset, 0.7 + Math.sin(time * 3 + i * 0.05) * 0.1, 0.5 + Math.sin(time * 4 + i * 0.15) * 0.1);
                colors[i3] = color.r;
                colors[i3 + 1] = color.g;
                colors[i3 + 2] = color.b;
            }
            geometry.attributes.position.needsUpdate = true;
            geometry.attributes.color.needsUpdate = true;
            if (progress < dnaToFlowerEnd) {
                const rotationProgress = 1 - (progress / dnaToFlowerEnd);
                particles.rotation.y = time * 0.2 * rotationProgress;
            }
            else if (progress < scatterStart) {
                particles.rotation.y = 0;
            }
            if (progress < scatterStart) {
                const cameraProgress = 1 - (progress / scatterStart);
                camera.position.x = Math.sin(time * 0.2) * 8 * cameraProgress;
                camera.position.z = 80 + Math.cos(time * 0.2) * 8 * cameraProgress;
            }
            camera.lookAt(0, 0, 0);
            renderer.render(scene, camera);
        };
        animate();
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [progress]);
    return _jsx("div", { ref: containerRef });
};
export default ParticleSystem;
