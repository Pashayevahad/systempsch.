import React, { useState, useEffect } from 'react';
import ImageSequenceCanvas from '../components/ImageSequenceCanvas';

const BusinessPsychology = () => {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const preloadImages = async () => {
            const promises = [];
            for (let i = 0; i < 8; i++) {
                promises.push(new Promise((resolve) => {
                    const img = new Image();
                    const paddedIndex = String(i).padStart(3, '0');
                    img.src = `/Business_Psych_images/business_psych_${paddedIndex}.png`;
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if one fails
                }));
            }
            await Promise.all(promises);
            if (isMounted) {
                setImagesLoaded(true);
            }
        };

        preloadImages();

        return () => { isMounted = false; };
    }, []);

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-transparent text-white"
            data-purpose="business-psychology-section"
        >
            {/* Background Image Sequence - Only render when fully loaded to prevent black flash */}
            {imagesLoaded && (
                <ImageSequenceCanvas
                    dirPath="/Business_Psych_images"
                    prefix="business_psych_"
                    totalFrames={8}
                    fps={0.8}
                    extension=".png"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}
        </section>
    );
};

export default BusinessPsychology;
