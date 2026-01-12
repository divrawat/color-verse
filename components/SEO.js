import Head from 'next/head';

export default function SEO({ title, description, ogImage, ogType = 'website', canonicalUrl }) {
    const siteName = 'ColorVerse';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const siteDescription = description || 'Professional CSS tools for developers: Gradient Generator, Color Shades, and curated Gradient Backgrounds.';
    const domain = 'https://colorverse.com'; // Replace with actual domain when deployed

    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />

            {/* Canonical URL */}
            {canonicalUrl && <link rel="canonical" href={`${domain}${canonicalUrl}`} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={domain + (canonicalUrl || '')} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={ogImage || `${domain}/og-image.png`} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={domain + (canonicalUrl || '')} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={ogImage || `${domain}/og-image.png`} />

            {/* Favicon */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
