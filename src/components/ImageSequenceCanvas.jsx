import React, { useEffect, useRef, useState, useCallback } from 'react';

const ImageSequenceCanvas = ({
    dirPath,
    prefix,
    totalFrames = 80,
    fps = 24,
    extension = '.jpg',
    className = "absolute inset-0 w-full h-full object-cover z-0"
}) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const requestRef = useRef(null);
    const previousTimeRef = useRef(null);
    const currentFrameRef = useRef(0);
    const loopRunningRef = useRef(false);

    // Preload images
    useEffect(() => {
        let isMounted = true;
        const loadedImages = new Array(totalFrames);
        let loaded = 0;

        const loadImages = async () => {
            const promises = [];
            for (let i = 0; i < totalFrames; i++) {
                promises.push(new Promise((resolve) => {
                    const img = new Image();
                    const paddedIndex = String(i).padStart(3, '0');
                    img.src = `${dirPath}/${prefix}${paddedIndex}${extension}`;

                    img.onload = () => {
                        if (isMounted) {
                            loadedImages[i] = img;
                            loaded++;
                            setLoadedCount(loaded);
                            resolve();
                        }
                    };
                    img.onerror = () => {
                        console.warn(`Failed to load image: ${img.src}`);
                        resolve();
                    };
                }));
            }

            await Promise.all(promises);
            if (isMounted) {
                setImages(loadedImages);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, [dirPath, prefix, totalFrames, extension]);

    const drawFrame = useCallback((frameIndex) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[frameIndex];

        if (img) {
            const parent = canvas.parentElement;
            if (parent && (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight)) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }

            const cw = canvas.width;
            const ch = canvas.height;
            const iw = img.width;
            const ih = img.height;

            const scale = Math.max(cw / iw, ch / ih);
            const w = iw * scale;
            const h = ih * scale;
            const x = (cw - w) / 2;
            const y = (ch - h) / 2;

            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(img, x, y, w, h);
        }
    }, [images]);

    const animate = useCallback((time) => {
        if (!loopRunningRef.current) return;

        if (previousTimeRef.current == null) {
            previousTimeRef.current = time;
            drawFrame(currentFrameRef.current);
        } else {
            const deltaTime = time - previousTimeRef.current;
            const frameTime = 1000 / fps;

            if (deltaTime >= frameTime) {
                const framesToAdvance = Math.floor(deltaTime / frameTime);
                if (framesToAdvance > 0) {
                    currentFrameRef.current = (currentFrameRef.current + framesToAdvance) % totalFrames;
                    previousTimeRef.current = time - (deltaTime % frameTime);
                    drawFrame(currentFrameRef.current);
                }
            }
        }

        requestRef.current = requestAnimationFrame(animate);
    }, [drawFrame, fps, totalFrames]);

    useEffect(() => {
        if (loadedCount > 0 && !loopRunningRef.current) {
            loopRunningRef.current = true;
            requestRef.current = requestAnimationFrame(animate);
        }

        return () => {
            loopRunningRef.current = false;
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [loadedCount, animate]);

    useEffect(() => {
        if (images[0] && currentFrameRef.current === 0 && loadedCount === 1) {
            drawFrame(0);
        }
    }, [images, loadedCount, drawFrame]);

    return (
        <canvas
            ref={canvasRef}
            className={className}
        />
    );
};

export default ImageSequenceCanvas;
