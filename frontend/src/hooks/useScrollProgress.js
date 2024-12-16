import { useState, useEffect } from 'react';
export const useScrollProgress = ({ threshold = 0, smooth = true, smoothingFactor = 0.1 } = {}) => {
    const [progress, setProgress] = useState(0);
    const [rawProgress, setRawProgress] = useState(0);
    useEffect(() => {
        const calculateProgress = () => {
            // Get total scrollable height
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Calculate current scroll progress
            const currentScroll = window.scrollY;
            const currentProgress = Math.max(0, Math.min(1, currentScroll / totalHeight));
            // Only update if we're past the threshold
            if (currentScroll > threshold) {
                setRawProgress(currentProgress);
            }
        };
        // Calculate initial progress
        calculateProgress();
        // Add scroll listener
        window.addEventListener('scroll', calculateProgress, { passive: true });
        return () => window.removeEventListener('scroll', calculateProgress);
    }, [threshold]);
    // Smooth the progress value
    useEffect(() => {
        if (!smooth) {
            setProgress(rawProgress);
            return;
        }
        // Animate progress
        let animationFrame;
        const animateProgress = () => {
            setProgress(prev => {
                const diff = rawProgress - prev;
                const newProgress = prev + diff * smoothingFactor;
                // Stop animation when we're close enough
                if (Math.abs(diff) < 0.001) {
                    return rawProgress;
                }
                animationFrame = requestAnimationFrame(animateProgress);
                return newProgress;
            });
        };
        animationFrame = requestAnimationFrame(animateProgress);
        return () => cancelAnimationFrame(animationFrame);
    }, [rawProgress, smooth, smoothingFactor]);
    return progress;
};
