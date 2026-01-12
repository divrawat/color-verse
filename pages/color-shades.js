import { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { motion } from 'framer-motion';
import { Search, X, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

const COLOR_GROUPS = [
    { name: 'Blue', hex: '#3b82f6', slug: 'blue', description: 'Deep, calm, and professional shades of blue.' },
    { name: 'Green', hex: '#10b981', slug: 'green', description: 'Fresh, natural, and vibrant shades of green.' },
    { name: 'Red', hex: '#ef4444', slug: 'red', description: 'Bold, energetic, and powerful shades of red.' },
    { name: 'Yellow', hex: '#f59e0b', slug: 'yellow', description: 'Bright, cheerful, and sunny shades of yellow.' },
    { name: 'Purple', hex: '#8b5cf6', slug: 'purple', description: 'Royal, creative, and mysterious shades of purple.' },
    { name: 'Pink', hex: '#ec4899', slug: 'pink', description: 'Soft, playful, and energetic shades of pink.' },
    { name: 'Indigo', hex: '#6366f1', slug: 'indigo', description: 'Smart, sophisticated, and deep shades of indigo.' },
    { name: 'Teal', hex: '#14b8a6', slug: 'teal', description: 'Modern, balanced, and unique shades of teal.' },
    { name: 'Orange', hex: '#f97316', slug: 'orange', description: 'Warm, vibrant, and friendly shades of orange.' },
];

export default function ColorShadesLanding() {
    const [searchInput, setSearchInput] = useState('');
    const [baseColor, setBaseColor] = useState('');
    const [shades, setShades] = useState([]);
    const [tints, setTints] = useState([]);
    const [copiedColor, setCopiedColor] = useState(null);

    useEffect(() => {
        if (searchInput && chroma.valid(searchInput)) {
            setBaseColor(searchInput);
        } else {
            setBaseColor('');
        }
    }, [searchInput]);

    useEffect(() => {
        try {
            if (baseColor && chroma.valid(baseColor)) {
                const newTints = chroma.scale(['#ffffff', baseColor]).mode('lch').colors(11).slice(1, 10).reverse();
                const newShades = chroma.scale([baseColor, '#000000']).mode('lch').colors(11).slice(1, 10);
                setTints(newTints);
                setShades(newShades);
            }
        } catch (e) {
            console.error(e);
        }
    }, [baseColor]);

    const handleCopy = (color) => {
        navigator.clipboard.writeText(color);
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 1500);
    };

    return (
        <>
            <SEO
                title="Color Shades & Tints Directory"
                description="Browse professional color shades by category or search any custom color. Perfect for finding the right primary and secondary variants for your design."
                canonicalUrl="/color-shades"
            />
            <SchemaOrg
                type="ItemList"
                data={{
                    "name": "Color Shades Directory",
                    "description": "A directory of shades and tints for various colors.",
                    "numberOfItems": COLOR_GROUPS.length,
                    "itemListElement": COLOR_GROUPS.map((g, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "url": `https://colorverse.com/shades-of-${g.slug}`,
                        "name": `Shades of ${g.name}`
                    }))
                }}
            />

            <div className="max-w-6xl mx-auto space-y-16">
                <header className="text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">Color Shades Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore curated shades of popular colors or search for any custom hex code to generate your own variants.</p>

                    <div className="relative max-w-md mx-auto group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <div
                                className="w-6 h-6 rounded-full border border-gray-200 shadow-sm"
                                style={{ backgroundColor: chroma.valid(searchInput) ? searchInput : '#fff' }}
                            />
                        </div>
                        <input
                            aria-label="Hex color input"
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            className="w-full pl-14 pr-12 py-4 text-lg font-mono bg-white border-2 border-gray-100 rounded-full shadow-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-gray-900 placeholder-gray-400 group-hover:shadow-xl"
                            placeholder="Search custom hex (e.g. #3b82f6)"
                            maxLength={7}
                        />
                        {searchInput && (
                            <button onClick={() => setSearchInput('')} className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600">
                                <X size={20} />
                            </button>
                        )}
                        {!searchInput && (
                            <div className="absolute inset-y-0 right-4 flex items-center">
                                <Search size={20} className="text-gray-400" />
                            </div>
                        )}
                    </div>
                </header>

                {baseColor ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-12 bg-white p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-50 pb-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-3xl shadow-lg ring-4 ring-white" style={{ backgroundColor: baseColor }} />
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">Custom Result</h2>
                                    <span className="font-mono text-xl text-blue-600 font-bold">{baseColor.toUpperCase()}</span>
                                </div>
                            </div>
                            <button onClick={() => setSearchInput('')} className="text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest px-6 py-2 bg-gray-50 rounded-full">Clear Search</button>
                        </div>

                        <div className="grid gap-12">
                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">Tints <span className="text-sm font-normal text-gray-400">(Light)</span></h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-4">
                                    {tints.map((color, index) => (
                                        <ColorCard key={`tint-${index}`} color={color} onClick={() => handleCopy(color)} copied={copiedColor === color} />
                                    ))}
                                </div>
                            </section>
                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">Shades <span className="text-sm font-normal text-gray-400">(Dark)</span></h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-4">
                                    {shades.map((color, index) => (
                                        <ColorCard key={`shade-${index}`} color={color} onClick={() => handleCopy(color)} copied={copiedColor === color} />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </motion.div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COLOR_GROUPS.map((group) => (
                            <Link key={group.slug} href={`/shades-of-${group.slug}`} className="group">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="relative z-10 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl shadow-inner flex items-center justify-center text-white" style={{ backgroundColor: group.hex }}>
                                                <Layers size={24} />
                                            </div>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{group.hex}</span>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">Shades of {group.name}</h2>
                                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{group.description}</p>
                                        </div>
                                        <div className="pt-4 flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all">
                                            View Shades <ArrowRight size={16} />
                                        </div>
                                    </div>
                                    {/* Decorative background blob */}
                                    <div className="absolute top-0 right-0 w-32 h-32 blur-[40px] opacity-10 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: group.hex }} />
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

function ColorCard({ color, onClick, copied, large }) {
    const isLight = chroma(color).luminance() > 0.5;
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative group rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col items-center justify-center ${large ? 'h-32 text-xl' : 'h-24 text-sm'}`}
            style={{ backgroundColor: color }}
        >
            <div className={`absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                <span className="font-mono font-bold tracking-wide uppercase">{copied ? 'Copied!' : color}</span>
            </div>
            {!copied && (
                <span className={`font-mono text-xs ${isLight ? 'text-gray-900/40' : 'text-white/40'} group-hover:opacity-0`}>{color}</span>
            )}
        </motion.button>
    );
}
