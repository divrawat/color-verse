import { useState } from 'react';
import chroma from 'chroma-js';
import { motion } from 'framer-motion';
import { ArrowLeft, Copy, Check, Info } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function StaticColorPage({ colorData, tints, shades, slug }) {
    const [copiedColor, setCopiedColor] = useState(null);

    const handleCopy = (color) => {
        if (typeof navigator !== 'undefined') {
            navigator.clipboard.writeText(color);
            setCopiedColor(color);
            setTimeout(() => setCopiedColor(null), 1500);
        }
    };

    return (
        <>
            <SEO
                title={`Shades of ${colorData.name}`}
                description={`Explore a comprehensive collection of ${colorData.name} shades, tints, and variants. Copy hex codes for your design project.`}
                canonicalUrl={`/${slug}`}
            />

            <SchemaOrg
                type="ItemList"
                data={{
                    name: `Shades of ${colorData.name}`,
                    description: `Comprehensive collection of tints and shades for the color ${colorData.name}.`,
                    numberOfItems: tints.length + shades.length,
                    itemListElement: [...tints, ...shades].map((c, i) => ({
                        "@type": "ListItem",
                        position: i + 1,
                        name: c,
                    })),
                }}
            />

            <div className="space-y-12">
                <nav className="flex items-center gap-4">
                    <Link
                        href="/color-shades"
                        className="p-2 hover:bg-white rounded-xl transition-colors text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100 mb-4 inline-flex items-center gap-2 font-bold text-sm"
                    >
                        <ArrowLeft size={18} /> Back to Directory
                    </Link>
                </nav>

                <header className="flex flex-col md:flex-row gap-12 items-center md:items-start border-b border-gray-100 pb-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] shadow-2xl shrink-0"
                        style={{ backgroundColor: colorData.hex }}
                    />

                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
                                Shades of {colorData.name}
                            </h1>
                            <p className="font-mono text-2xl text-gray-400 font-bold uppercase">
                                {colorData.hex}
                            </p>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                            {colorData.description}
                        </p>
                    </div>
                </header>

                <section className="space-y-8 pt-12">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-gray-900 rounded-full" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Tints <span className="text-gray-400 font-medium">(Lighter)</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
                        {tints.map((color, index) => (
                            <ColorCard
                                key={`tint-${index}`}
                                color={color}
                                onClick={() => handleCopy(color)}
                                copied={copiedColor === color}
                            />
                        ))}
                    </div>
                </section>

                <section className="space-y-8 pt-16">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-8 bg-gray-900 rounded-full" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Shades <span className="text-gray-400 font-medium">(Darker)</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
                        {shades.map((color, index) => (
                            <ColorCard
                                key={`shade-${index}`}
                                color={color}
                                onClick={() => handleCopy(color)}
                                copied={copiedColor === color}
                            />
                        ))}
                    </div>
                </section>

                <div className="bg-blue-50/50 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8 border border-blue-100 mt-20">
                    <div className="w-16 h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                        <Info size={32} />
                    </div>

                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold text-blue-900">Did you know?</h3>
                        <p className="text-blue-800 leading-relaxed">
                            Color tints are created by adding white to a pure color,
                            while shades are created by adding black.
                            Using a consistent range of tints and shades helps create
                            a balanced and professional design system.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

function ColorCard({ color, onClick, copied }) {
    const isLight = chroma(color).luminance() > 0.5;

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full space-y-3 group"
        >
            <div
                className="w-full h-32 rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: color }}
            >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    {copied ? (
                        <Check size={24} className={isLight ? 'text-gray-900' : 'text-white'} />
                    ) : (
                        <Copy size={24} className={isLight ? 'text-gray-900/40' : 'text-white/40'} />
                    )}
                </div>
            </div>

            <div className="text-left space-y-1">
                <p className="font-mono text-[10px] font-bold text-gray-400 uppercase tracking-tighter group-hover:text-gray-900 transition-colors">
                    {color}
                </p>
                <p className="text-[10px] font-bold text-gray-300 uppercase">
                    {copied ? 'Copied' : 'Click to copy'}
                </p>
            </div>
        </motion.button>
    );
}
