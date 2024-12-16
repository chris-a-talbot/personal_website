import { useState, useEffect } from 'react';
export const useMousePosition = ({ smooth = true, smoothingFactor = 0.1 } = {}) => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        normX: 0,
        normY: 0,
        velocity: 0
    });
    useEffect(() => {
        let previousX = 0;
        let previousY = 0;
        let previousTime = performance.now();
        let animationFrame;
        const handleMouseMove = (event) => {
            // Calculate normalized coordinates (-1 to 1)
            const normX = (event.clientX / window.innerWidth) * 2 - 1;
            const normY = (event.clientY / window.innerHeight) * 2 - 1;
            // Calculate velocity
            const currentTime = performance.now();
            const timeDelta = currentTime - previousTime;
            const distanceX = event.clientX - previousX;
            const distanceY = event.clientY - previousY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
            const velocity = distance / timeDelta;
            // Update previous values
            previousX = event.clientX;
            previousY = event.clientY;
            previousTime = currentTime;
            const newPosition = {
                x: event.clientX,
                y: event.clientY,
                normX,
                normY,
                velocity
            };
            if (!smooth) {
                setPosition(newPosition);
                return;
            }
            // Smooth transition to new position
            const animatePosition = () => {
                setPosition(currentPosition => {
                    const nextPosition = {
                        x: currentPosition.x + (newPosition.x - currentPosition.x) * smoothingFactor,
                        y: currentPosition.y + (newPosition.y - currentPosition.y) * smoothingFactor,
                        normX: currentPosition.normX + (newPosition.normX - currentPosition.normX) * smoothingFactor,
                        normY: currentPosition.normY + (newPosition.normY - currentPosition.normY) * smoothingFactor,
                        velocity: newPosition.velocity
                    };
                    // Continue animation if not close enough
                    if (Math.abs(newPosition.x - currentPosition.x) > 0.01 ||
                        Math.abs(newPosition.y - currentPosition.y) > 0.01) {
                        animationFrame = requestAnimationFrame(animatePosition);
                    }
                    return nextPosition;
                });
            };
            cancelAnimationFrame(animationFrame);
            animationFrame = requestAnimationFrame(animatePosition);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [smooth, smoothingFactor]);
    return position;
};
