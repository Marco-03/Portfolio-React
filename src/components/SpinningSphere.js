import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const SpinningSphere = () => {
    const instanceRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const importAllImages = (requestContext) =>
            requestContext.keys().map((key) => {
                const fileName = key.replace('./', '');
                const altText = key.split('.')[0];
                return `<img src="/skills_pics/${fileName}" alt="${altText}" class="w-12 h-12 rounded-full"/>`;
            });

        const myTags = importAllImages(require.context('/public/skills_pics', false, /\.(png|jpe?g|svg)$/));

        const options = {
            radius: 250,
            maxSpeed: 'fast',
            initSpeed: 'medium',
            direction: 135,
            keep: false,
            useHTML: true,
        };

        instanceRef.current = TagCloud(containerRef.current, myTags, options);

        return () => {
            if (instanceRef.current) {
                instanceRef.current.destroy();
            }
        };
    }, []);

    const handleMouseDown = () => {
        if (instanceRef.current) {
            instanceRef.current.pause();
        }
    };

    const handleMouseUp = () => {
        if (instanceRef.current) {
            instanceRef.current.resume();
        }
    };

    return (
        <div className="relative w-full flex justify-center items-start pt-[100px]" data-aos="zoom-in">
            <div
                ref={containerRef}
                className="relative w-[500px] perspective-[1200px] tagcloud-container cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            ></div>
        </div>
    );
};

export default SpinningSphere;
