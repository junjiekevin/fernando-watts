import React, { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "Fernando Watts | Bass";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

    useEffect(() => {
        // Update Title
        document.title = fullTitle;

        // Update Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || "Official website of Fernando Watts, professional Classical Singer (Bass).");
        }

        // Update Keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = "keywords";
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', keywords || "Fernando Watts, Bass, Opera, Classical Singer, Bass-Baritone, Recordings, Performance");

        // Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', fullTitle);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', description);

    }, [fullTitle, description, keywords]);

    return null; // Component doesn't render anything visible
};

export default SEO;
