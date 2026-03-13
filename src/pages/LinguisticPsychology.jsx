import React, { useState, useEffect } from 'react';
import ImageSequenceCanvas from '../components/ImageSequenceCanvas';

const LinguisticPsychology = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const totalFrames = 82; // All 82 frames

    useEffect(() => {
        let isMounted = true;

        const preloadImages = async () => {
            const promises = [];
            for (let i = 0; i < totalFrames; i++) {
                promises.push(new Promise((resolve, reject) => {
                    const img = new Image();
                    const paddedIndex = String(i).padStart(3, '0');
                    // Ensure the directory path matches the public directory structure
                    img.src = `/Linguisitic_Psch_Images/Analyst_debugging_brain_for_fluency_delpmaspu__${paddedIndex}.png`;
                    img.onload = resolve;
                    img.onerror = () => {
                        console.warn(`Failed to preload ${img.src}`);
                        resolve(); // Resolve even on error so Promise.all completes
                    };
                }));
            }

            // Fallback: If preloading takes too long, we show it anyway.
            const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 2000));

            await Promise.race([Promise.all(promises), timeoutPromise]);

            if (isMounted) {
                setImagesLoaded(true);
            }
        };

        preloadImages();

        return () => {
            isMounted = false;
        };
    }, [totalFrames]);

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black text-white"
            data-purpose="linguistic-psychology-section"
        >
            {/* Background Image Sequence - positioned absolutely with z-0 */}
            <div className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <ImageSequenceCanvas
                    dirPath="/Linguisitic_Psch_Images"
                    prefix="Analyst_debugging_brain_for_fluency_delpmaspu__"
                    totalFrames={totalFrames}
                    fps={12}
                    extension=".png"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            </div>

            {/* Fallback to show first frame if array is empty/failed to load in ImageSequenceCanvas */}
            {!imagesLoaded && (
                <img
                    src="/Linguisitic_Psch_Images/Analyst_debugging_brain_for_fluency_delpmaspu__000.png"
                    alt="Analyst debugging"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}
        </section>
    );
};

export default LinguisticPsychology;
