import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Code, Sparkles, Zap, CheckCircle, Hash, Droplet, Sun } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function RGBHexHSLGuide() {
    return (
        <>
            <SEO
                title="Understanding RGB, HEX, and HSL Color Codes - Complete Guide"
                description="Master RGB, HEX, and HSL color codes with this comprehensive guide. Learn how each color system works, when to use them, and how to convert between formats."
                canonicalUrl="/blog/understanding-rgb-hex-hsl-color-codes"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "Understanding RGB, HEX, and HSL Color Codes",
                    "description": "A comprehensive guide to understanding RGB, HEX, and HSL color codes, their differences, use cases, and conversion methods.",
                    "author": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "url": "https://colorverse.online/about"
                    },
                    "datePublished": "2026-02-14",
                    "dateModified": "2026-02-14",
                    "publisher": {
                        "@type": "Organization",
                        "name": "ColorVerse",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://colorverse.online/logo.png"
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": "https://colorverse.online/blog/understanding-rgb-hex-hsl-color-codes"
                    }
                }}
            />

            <div className="max-w-4xl mx-auto space-y-12">
                <nav className="flex items-center gap-4">
                    <Link href="/blog" className="p-2 hover:bg-white rounded-xl transition-colors text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100 inline-flex items-center gap-2 font-bold text-sm">
                        <ArrowLeft size={18} /> Back to Blog
                    </Link>
                </nav>

                <header className="space-y-6 text-center pb-8 border-b border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 text-sm font-bold text-blue-600"
                    >
                        <Code size={16} />
                        <span>Technical Guide</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        Understanding RGB, HEX, and HSL Color Codes
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Master the three most popular color code systems used in web design and development.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 text-sm text-gray-500"
                    >
                        <span>By <Link href="/about" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline">Divyanshu Rawat</Link></span>
                        <span>•</span>
                        <span>February 14, 2026</span>
                        <span>•</span>
                        <span>12 min read</span>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-3 gap-4"
                >
                    <ColorSystemCard
                        icon={<Hash size={32} />}
                        title="HEX"
                        color="#667eea"
                        example="#667eea"
                    />
                    <ColorSystemCard
                        icon={<Droplet size={32} />}
                        title="RGB"
                        color="rgb(102, 126, 234)"
                        example="rgb(102, 126, 234)"
                    />
                    <ColorSystemCard
                        icon={<Sun size={32} />}
                        title="HSL"
                        color="hsl(229, 76%, 66%)"
                        example="hsl(229, 76%, 66%)"
                    />
                </motion.div>

                <article className="prose prose-lg max-w-none space-y-12">

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                            Introduction to Color Codes
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                In the digital world, colors aren't just visual elements—they're precisely defined using mathematical values. Whether you're a web developer, graphic designer, or digital artist, understanding how to work with color codes is essential for creating consistent, beautiful designs.
                            </p>
                            <p>
                                The three most common color code systems are <strong>RGB (Red, Green, Blue)</strong>, <strong>HEX (Hexadecimal)</strong>, and <strong>HSL (Hue, Saturation, Lightness)</strong>. Each system has its own strengths, use cases, and ways of representing colors.
                            </p>
                            <p>
                                In this comprehensive guide, we'll dive deep into each color system, explore their differences, learn when to use each one, and discover how to convert between them. By the end, you'll be confident working with any color code format.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
                            RGB Color System
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">What is RGB?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                RGB stands for Red, Green, and Blue—the three primary colors of light. This color model is based on how our screens display colors by combining different intensities of these three colored lights. It's an <strong>additive color model</strong>, meaning colors are created by adding light together.
                            </p>

                            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-[2.5rem] p-10 border border-red-100 space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">How RGB Works</h4>
                                <p className="text-gray-700 text-lg">
                                    Each color channel (Red, Green, Blue) has a value ranging from <strong>0 to 255</strong>, giving you 256 possible values per channel. This creates over 16.7 million possible color combinations (256 × 256 × 256).
                                </p>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                        <span><strong>0</strong> means no light (darkest)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                        <span><strong>255</strong> means maximum light (brightest)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                        <span><strong>rgb(0, 0, 0)</strong> = Black (no light)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-red-500 shrink-0 mt-1" size={20} />
                                        <span><strong>rgb(255, 255, 255)</strong> = White (all light)</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900">RGB Syntax</h4>
                            <CodeBlock
                                title="RGB Color Syntax"
                                code={`/* Basic RGB */
color: rgb(255, 0, 0);        /* Pure Red */
color: rgb(0, 255, 0);        /* Pure Green */
color: rgb(0, 0, 255);        /* Pure Blue */

/* RGB with Alpha (transparency) */
color: rgba(255, 0, 0, 0.5);  /* 50% transparent red */
color: rgba(0, 0, 0, 0.8);    /* 80% opaque black */

/* Mixed Colors */
color: rgb(102, 126, 234);    /* Purple-blue */
color: rgb(255, 99, 71);      /* Tomato red */
color: rgb(46, 204, 113);     /* Emerald green */`}
                            />

                            <h4 className="text-xl font-bold text-gray-900">RGB Color Examples</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <ColorExample color="rgb(255, 0, 0)" label="rgb(255, 0, 0)" name="Pure Red" />
                                <ColorExample color="rgb(0, 255, 0)" label="rgb(0, 255, 0)" name="Pure Green" />
                                <ColorExample color="rgb(0, 0, 255)" label="rgb(0, 0, 255)" name="Pure Blue" />
                                <ColorExample color="rgb(255, 255, 0)" label="rgb(255, 255, 0)" name="Yellow" />
                                <ColorExample color="rgb(255, 0, 255)" label="rgb(255, 0, 255)" name="Magenta" />
                                <ColorExample color="rgb(0, 255, 255)" label="rgb(0, 255, 255)" name="Cyan" />
                                <ColorExample color="rgb(128, 128, 128)" label="rgb(128, 128, 128)" name="Gray" />
                                <ColorExample color="rgb(255, 165, 0)" label="rgb(255, 165, 0)" name="Orange" />
                            </div>

                            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Zap className="text-blue-500" size={24} />
                                    When to Use RGB
                                </h4>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <span>When you need transparency (using rgba)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <span>Working with JavaScript color manipulation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <span>When values are generated programmatically</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                                        <span>More intuitive for understanding color mixing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                            HEX Color System
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">What is HEX?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                HEX (hexadecimal) is the most popular color format in web design. It's actually just another way of writing RGB values, but using base-16 (hexadecimal) numbers instead of base-10 (decimal). HEX codes always start with a hash symbol (#) followed by six characters.
                            </p>

                            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-[2.5rem] p-10 border border-purple-100 space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">How HEX Works</h4>
                                <p className="text-gray-700 text-lg">
                                    A HEX code is divided into three pairs of characters, each representing Red, Green, and Blue values:
                                </p>
                                <div className="bg-white rounded-xl p-6 font-mono text-2xl font-bold text-center">
                                    <span className="text-red-500">#RR</span>
                                    <span className="text-green-500">GG</span>
                                    <span className="text-blue-500">BB</span>
                                </div>
                                <p className="text-gray-700 text-lg">
                                    Each pair uses hexadecimal digits (0-9, A-F) where:
                                </p>
                                <ul className="space-y-2 text-gray-700 text-lg">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span><strong>00</strong> = 0 in decimal (minimum)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span><strong>FF</strong> = 255 in decimal (maximum)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span><strong>#000000</strong> = Black</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span><strong>#FFFFFF</strong> = White</span>
                                    </li>
                                </ul>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900">HEX Syntax</h4>
                            <CodeBlock
                                title="HEX Color Syntax"
                                code={`/* 6-digit HEX (standard) */
color: #FF0000;    /* Red */
color: #00FF00;    /* Green */
color: #0000FF;    /* Blue */

/* 3-digit HEX (shorthand) */
color: #F00;       /* Same as #FF0000 */
color: #0F0;       /* Same as #00FF00 */
color: #00F;       /* Same as #0000FF */

/* 8-digit HEX (with alpha) */
color: #FF000080;  /* 50% transparent red */
color: #00000099;  /* 60% opaque black */

/* Common colors */
color: #667eea;    /* Purple-blue */
color: #FF6347;    /* Tomato */
color: #2ECC71;    /* Emerald */`}
                            />

                            <h4 className="text-xl font-bold text-gray-900">HEX Color Examples</h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <ColorExample color="#FF0000" label="#FF0000" name="Red" />
                                <ColorExample color="#00FF00" label="#00FF00" name="Green" />
                                <ColorExample color="#0000FF" label="#0000FF" name="Blue" />
                                <ColorExample color="#FFFF00" label="#FFFF00" name="Yellow" />
                                <ColorExample color="#FF00FF" label="#FF00FF" name="Magenta" />
                                <ColorExample color="#00FFFF" label="#00FFFF" name="Cyan" />
                                <ColorExample color="#808080" label="#808080" name="Gray" />
                                <ColorExample color="#FFA500" label="#FFA500" name="Orange" />
                            </div>

                            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Zap className="text-purple-500" size={24} />
                                    When to Use HEX
                                </h4>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span>Most common in CSS and web design</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span>Shorter and cleaner than RGB</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span>Easy to copy and share</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-purple-500 shrink-0 mt-1" size={20} />
                                        <span>Widely supported across all browsers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
                            HSL Color System
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">What is HSL?</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                HSL stands for <strong>Hue, Saturation, and Lightness</strong>. Unlike RGB and HEX which describe colors by mixing light, HSL describes colors in a way that's more intuitive to how humans perceive color. It's particularly useful for creating color variations and maintaining color harmony.
                            </p>

                            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-[2.5rem] p-10 border border-orange-100 space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">How HSL Works</h4>
                                <div className="space-y-4 text-gray-700 text-lg">
                                    <div className="bg-white rounded-xl p-6 space-y-3">
                                        <h5 className="font-bold text-gray-900 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500" />
                                            Hue (0-360°)
                                        </h5>
                                        <p>The color type on the color wheel. 0° is red, 120° is green, 240° is blue, and 360° wraps back to red.</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 space-y-3">
                                        <h5 className="font-bold text-gray-900 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-gray-300 to-red-500" />
                                            Saturation (0-100%)
                                        </h5>
                                        <p>The intensity or purity of the color. 0% is grayscale, 100% is the most vivid version.</p>
                                    </div>

                                    <div className="bg-white rounded-xl p-6 space-y-3">
                                        <h5 className="font-bold text-gray-900 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-black via-red-500 to-white" />
                                            Lightness (0-100%)
                                        </h5>
                                        <p>How light or dark the color is. 0% is black, 50% is the pure color, 100% is white.</p>
                                    </div>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-gray-900">HSL Syntax</h4>
                            <CodeBlock
                                title="HSL Color Syntax"
                                code={`/* Basic HSL */
color: hsl(0, 100%, 50%);      /* Pure Red */
color: hsl(120, 100%, 50%);    /* Pure Green */
color: hsl(240, 100%, 50%);    /* Pure Blue */

/* HSL with Alpha (transparency) */
color: hsla(0, 100%, 50%, 0.5);    /* 50% transparent red */
color: hsla(240, 100%, 50%, 0.8);  /* 80% opaque blue */

/* Variations of the same hue */
color: hsl(229, 76%, 66%);     /* Base color */
color: hsl(229, 76%, 80%);     /* Lighter version */
color: hsl(229, 76%, 40%);     /* Darker version */
color: hsl(229, 40%, 66%);     /* Less saturated */

/* Creating color schemes */
color: hsl(200, 70%, 50%);     /* Base blue */
color: hsl(230, 70%, 50%);     /* Analogous color */
color: hsl(20, 70%, 50%);      /* Complementary color */`}
                            />

                            <h4 className="text-xl font-bold text-gray-900">HSL Color Examples</h4>
                            <div className="space-y-6">
                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3">Same Hue, Different Lightness</h5>
                                    <div className="grid grid-cols-5 gap-2">
                                        <ColorExample color="hsl(229, 76%, 20%)" label="20%" name="Very Dark" />
                                        <ColorExample color="hsl(229, 76%, 40%)" label="40%" name="Dark" />
                                        <ColorExample color="hsl(229, 76%, 60%)" label="60%" name="Medium" />
                                        <ColorExample color="hsl(229, 76%, 80%)" label="80%" name="Light" />
                                        <ColorExample color="hsl(229, 76%, 95%)" label="95%" name="Very Light" />
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3">Same Hue, Different Saturation</h5>
                                    <div className="grid grid-cols-5 gap-2">
                                        <ColorExample color="hsl(229, 0%, 50%)" label="0%" name="Gray" />
                                        <ColorExample color="hsl(229, 25%, 50%)" label="25%" name="Muted" />
                                        <ColorExample color="hsl(229, 50%, 50%)" label="50%" name="Medium" />
                                        <ColorExample color="hsl(229, 75%, 50%)" label="75%" name="Vibrant" />
                                        <ColorExample color="hsl(229, 100%, 50%)" label="100%" name="Pure" />
                                    </div>
                                </div>

                                <div>
                                    <h5 className="font-bold text-gray-900 mb-3">Color Wheel (Different Hues)</h5>
                                    <div className="grid grid-cols-6 gap-2">
                                        <ColorExample color="hsl(0, 70%, 50%)" label="0°" name="Red" />
                                        <ColorExample color="hsl(60, 70%, 50%)" label="60°" name="Yellow" />
                                        <ColorExample color="hsl(120, 70%, 50%)" label="120°" name="Green" />
                                        <ColorExample color="hsl(180, 70%, 50%)" label="180°" name="Cyan" />
                                        <ColorExample color="hsl(240, 70%, 50%)" label="240°" name="Blue" />
                                        <ColorExample color="hsl(300, 70%, 50%)" label="300°" name="Magenta" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
                                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Zap className="text-orange-500" size={24} />
                                    When to Use HSL
                                </h4>
                                <ul className="space-y-3 text-gray-700 text-lg">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <span>Creating color variations (lighter, darker, muted)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <span>Building cohesive color schemes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <span>Animating color transitions smoothly</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <span>More intuitive for designers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="text-orange-500 shrink-0 mt-1" size={20} />
                                        <span>Creating accessible color combinations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            Converting Between Color Formats
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Understanding how to convert between RGB, HEX, and HSL is crucial for flexibility in your workflow. Here's how each conversion works:
                        </p>

                        <div className="space-y-6">
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">RGB to HEX</h3>
                                <p className="text-gray-700 text-lg">
                                    Convert each RGB value (0-255) to hexadecimal (00-FF) and combine them.
                                </p>
                                <CodeBlock
                                    title="RGB to HEX Conversion"
                                    code={`// JavaScript conversion
function rgbToHex(r, g, b) {
  return "#" + [r, g, b]
    .map(x => x.toString(16).padStart(2, '0'))
    .join('');
}

// Example
rgbToHex(102, 126, 234);  // Returns: "#667eea"
rgbToHex(255, 99, 71);    // Returns: "#ff6347"`}
                                />
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">HEX to RGB</h3>
                                <p className="text-gray-700 text-lg">
                                    Split the HEX code into pairs and convert each from hexadecimal to decimal.
                                </p>
                                <CodeBlock
                                    title="HEX to RGB Conversion"
                                    code={`// JavaScript conversion
function hexToRgb(hex) {
  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Example
hexToRgb("#667eea");  // Returns: {r: 102, g: 126, b: 234}
hexToRgb("#ff6347");  // Returns: {r: 255, g: 99, b: 71}`}
                                />
                            </div>

                            <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">RGB to HSL</h3>
                                <p className="text-gray-700 text-lg">
                                    This conversion is more complex, involving mathematical formulas to calculate hue, saturation, and lightness.
                                </p>
                                <CodeBlock
                                    title="RGB to HSL Conversion"
                                    code={`// JavaScript conversion
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

// Example
rgbToHsl(102, 126, 234);  // Returns: {h: 229, s: 76, l: 66}`}
                                />
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2.5rem] p-10 border border-indigo-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Palette className="text-indigo-500" size={32} />
                            Comparison Table
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-indigo-200">
                                        <th className="p-4 font-bold text-gray-900">Feature</th>
                                        <th className="p-4 font-bold text-gray-900">RGB</th>
                                        <th className="p-4 font-bold text-gray-900">HEX</th>
                                        <th className="p-4 font-bold text-gray-900">HSL</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Format</td>
                                        <td className="p-4">rgb(r, g, b)</td>
                                        <td className="p-4">#RRGGBB</td>
                                        <td className="p-4">hsl(h, s%, l%)</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Readability</td>
                                        <td className="p-4">Medium</td>
                                        <td className="p-4">Low</td>
                                        <td className="p-4">High</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Transparency</td>
                                        <td className="p-4">✅ rgba()</td>
                                        <td className="p-4">✅ 8-digit</td>
                                        <td className="p-4">✅ hsla()</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Best For</td>
                                        <td className="p-4">JavaScript, transparency</td>
                                        <td className="p-4">CSS, sharing</td>
                                        <td className="p-4">Color schemes, variations</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Browser Support</td>
                                        <td className="p-4">Excellent</td>
                                        <td className="p-4">Excellent</td>
                                        <td className="p-4">Excellent</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Learning Curve</td>
                                        <td className="p-4">Easy</td>
                                        <td className="p-4">Easy</td>
                                        <td className="p-4">Medium</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
                            Best Practices
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <BestPracticeCard
                                title="Use HEX for Static Colors"
                                description="HEX codes are perfect for brand colors, static UI elements, and colors that won't change."
                                icon="✨"
                            />
                            <BestPracticeCard
                                title="Use RGB for Transparency"
                                description="When you need alpha transparency, rgba() is the most straightforward choice."
                                icon="🎨"
                            />
                            <BestPracticeCard
                                title="Use HSL for Color Systems"
                                description="HSL makes it easy to create consistent color variations and maintain harmony."
                                icon="🎯"
                            />
                            <BestPracticeCard
                                title="Be Consistent"
                                description="Pick one format for your project and stick with it for better maintainability."
                                icon="📐"
                            />
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                            Conclusion
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Understanding RGB, HEX, and HSL color codes is fundamental to modern web design and development. Each format has its strengths and ideal use cases:
                            </p>
                            <ul className="space-y-2 ml-6 list-disc">
                                <li><strong>RGB</strong> is great for JavaScript manipulation and transparency</li>
                                <li><strong>HEX</strong> is the most popular for CSS and easy sharing</li>
                                <li><strong>HSL</strong> is best for creating color systems and variations</li>
                            </ul>
                            <p>
                                The key is knowing when to use each format and being comfortable converting between them. With practice, you'll develop an intuition for which color system best fits your needs in any given situation.
                            </p>
                            <p>
                                Ready to experiment with colors? Try our <Link href="/gradient-generator" className="text-purple-600 font-bold hover:underline">Gradient Generator</Link> or explore our <Link href="/color-shades" className="text-purple-600 font-bold hover:underline">Color Shades Tool</Link> to see these color systems in action!
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Start Creating with Colors!</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Use our free tools to experiment with RGB, HEX, and HSL colors in your designs.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/gradient-generator" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                Try Gradient Generator
                            </Link>
                            <Link href="/color-shades" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all">
                                Explore Color Shades
                            </Link>
                        </div>
                    </section>

                </article>
            </div>
        </>
    );
}

function ColorSystemCard({ icon, title, color, example }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 space-y-4"
        >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 text-gray-600">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <div className="h-20 rounded-xl" style={{ backgroundColor: color }} />
            <p className="font-mono text-sm text-gray-600 break-all">{example}</p>
        </motion.div>
    );
}

function ColorExample({ color, label, name }) {
    return (
        <div className="space-y-2">
            <div
                className="h-24 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                style={{ backgroundColor: color }}
            />
            <div className="space-y-1">
                <p className="font-mono text-xs text-gray-600 break-all">{label}</p>
                <p className="text-xs font-semibold text-gray-900">{name}</p>
            </div>
        </div>
    );
}

function CodeBlock({ title, code }) {
    return (
        <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-3 bg-gray-800 border-b border-gray-700">
                <p className="text-sm font-bold text-gray-300">{title}</p>
            </div>
            <pre className="p-6 overflow-x-auto">
                <code className="text-sm text-gray-300 font-mono leading-relaxed">
                    {code}
                </code>
            </pre>
        </div>
    );
}

function BestPracticeCard({ title, description, icon }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all space-y-3">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}
