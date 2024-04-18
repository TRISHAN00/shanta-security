import React, { useEffect } from 'react';

const GoogleAnalyticsScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZV4ZGQY9CM';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-ZV4ZGQY9CM');
        };
    }, []);

    return null; // No need to render anything
};

export default GoogleAnalyticsScript;
