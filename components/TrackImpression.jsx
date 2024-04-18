import * as React from 'react';
import { useInView } from 'react-intersection-observer';

const TrackImpression = () => {
    const { ref } = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0',
        onChange: (inView) => {
            if (inView) {
                // Fire a tracking event to your tracking our-services of choice.
                dataLayer.push('G-ZV4ZGQY9CM'); // Here's a GTM dataLayer push
            }
        },
    });

    return (
        <div ref={ref}>
        </div>
    );
};

export default TrackImpression;