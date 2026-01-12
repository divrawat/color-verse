import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

const PRESETS = [
    { name: 'Sunset Vibes', colors: 'from-orange-400 via-pink-500 to-purple-600', css: 'linear-gradient(to right, #fb923c, #ec4899, #9333ea)' },
    { name: 'Ocean Depths', colors: 'from-blue-400 via-cyan-500 to-teal-400', css: 'linear-gradient(to right, #60a5fa, #06b6d4, #2dd4bf)' },
    { name: 'Lush Garden', colors: 'from-green-300 via-emerald-500 to-teal-600', css: 'linear-gradient(to right, #86efac, #10b981, #0d9488)' },
    { name: 'Midnight Neon', colors: 'from-indigo-900 via-purple-900 to-pink-900', css: 'linear-gradient(to right, #312e81, #581c87, #831843)' },
    { name: 'Golden Hour', colors: 'from-yellow-200 via-orange-300 to-red-400', css: 'linear-gradient(to right, #fef08a, #fdba74, #f87171)' },
    { name: 'Morning Sky', colors: 'from-blue-100 via-blue-300 to-indigo-400', css: 'linear-gradient(to right, #dbeafe, #93c5fd, #818cf8)' },
    { name: 'Berry Blast', colors: 'from-rose-400 via-fuchsia-500 to-indigo-600', css: 'linear-gradient(to right, #fb7185, #d946ef, #4f46e5)' },
    { name: 'Space Dust', colors: 'from-slate-900 via-purple-900 to-slate-900', css: 'linear-gradient(to right, #0f172a, #581c87, #0f172a)' },
    { name: 'Cherry Blossom', colors: 'from-red-200 via-pink-300 to-rose-400', css: 'linear-gradient(to right, #fecaca, #f9a8d4, #fb7185)' },
    { name: 'Hyper Blue', colors: 'from-blue-700 via-blue-800 to-gray-900', css: 'linear-gradient(to right, #1d4ed8, #1e40af, #111827)' },
    { name: 'Purple Rain', colors: 'from-purple-500 via-indigo-500 to-blue-600', css: 'linear-gradient(to right, #a855f7, #6366f1, #2563eb)' },
    { name: 'Tropical Paradise', colors: 'from-cyan-400 via-emerald-400 to-yellow-300', css: 'linear-gradient(to right, #22d3ee, #34d399, #fde047)' },
    { name: 'Lavender Dream', colors: 'from-indigo-200 via-purple-200 to-pink-200', css: 'linear-gradient(to right, #e0e7ff, #f3e8ff, #fce7f3)' },
    { name: 'Deep Forest', colors: 'from-green-900 via-emerald-900 to-teal-900', css: 'linear-gradient(to right, #064e3b, #065f46, #134e4a)' },
    { name: 'Burning Sand', colors: 'from-orange-500 via-red-500 to-rose-600', css: 'linear-gradient(to right, #f97316, #ef4444, #e11d48)' },
    { name: 'Electric Violet', colors: 'from-violet-600 via-fuchsia-600 to-pink-600', css: 'linear-gradient(to right, #7c3aed, #c026d3, #db2777)' },
    { name: 'Soft Moonlight', colors: 'from-slate-50 via-slate-200 to-slate-300', css: 'linear-gradient(to right, #f8fafc, #e2e8f0, #cbd5e1)' },
    { name: 'Crimson Tide', colors: 'from-red-600 via-red-700 to-red-800', css: 'linear-gradient(to right, #dc2626, #b91c1c, #991b1b)' },
    { name: 'Peachy Keen', colors: 'from-orange-200 via-rose-300 to-pink-400', css: 'linear-gradient(to right, #fed7aa, #fda4af, #f472b6)' },
    { name: 'Aurora Borealis', colors: 'from-teal-400 via-emerald-500 to-blue-600', css: 'linear-gradient(to right, #2dd4bf, #10b981, #2563eb)' },
    { name: 'Deep Sea Flush', colors: 'from-indigo-800 via-blue-900 to-slate-900', css: 'linear-gradient(to right, #3730a3, #1e3a8a, #0f172a)' },
    { name: 'Mango Tango', colors: 'from-yellow-400 via-orange-500 to-red-500', css: 'linear-gradient(to right, #fbbf24, #f97316, #ef4444)' },
    { name: 'Cool Breeze', colors: 'from-cyan-100 via-sky-200 to-blue-300', css: 'linear-gradient(to right, #cffafe, #bae6fd, #93c5fd)' },
    { name: 'Plum Perfect', colors: 'from-fuchsia-700 via-purple-800 to-indigo-950', css: 'linear-gradient(to right, #a21caf, #6b21a8, #1e1b4b)' },
    { name: 'Spring Bud', colors: 'from-yellow-100 via-lime-200 to-green-400', css: 'linear-gradient(to right, #fef9c3, #d9f99d, #4ade80)' },
    { name: 'Titanium', colors: 'from-gray-300 via-slate-400 to-gray-600', css: 'linear-gradient(to right, #d1d5db, #94a3b8, #4b5563)' },
    { name: 'Autumn Gold', colors: 'from-amber-500 via-orange-600 to-yellow-800', css: 'linear-gradient(to right, #f59e0b, #ea580c, #854d0e)' },
];

export default function GradientBackgrounds() {
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleCopy = (css, index) => {
        navigator.clipboard.writeText(`background: ${css};`);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <>
            <SEO
                title="Curated Gradient Backgrounds Gallery"
                description="Explore a hand-picked collection of stunning CSS gradient backgrounds. Perfect for hero sections, cards, and app backgrounds. Copy the CSS with one click."
                canonicalUrl="/gradient-backgrounds"
            />
            <SchemaOrg
                type="ItemList"
                data={{
                    "numberOfItems": PRESETS.length,
                    "itemListElement": PRESETS.map((p, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "name": p.name
                    }))
                }}
            />

            <div className="space-y-12">
                <header className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Gradient Backgrounds</h1>
                    <p className="text-xl text-gray-600">A curated collection of beautiful, production-ready gradients for modern web design.</p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Gradient collection">
                    {PRESETS.map((preset, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500"
                        >
                            <div
                                className={`h-48 w-full bg-gradient-to-r ${preset.colors} relative flex items-center justify-center cursor-pointer`}
                                onClick={() => handleCopy(preset.css, index)}
                            >
                                <button
                                    aria-label={`Copy CSS for ${preset.name}`}
                                    className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full font-bold text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 shadow-xl"
                                >
                                    {copiedIndex === index ? 'Copied!' : 'Copy CSS'}
                                </button>
                            </div>
                            <div className="p-6 flex items-center justify-between">
                                <div>
                                    <h2 className="font-bold text-gray-900">{preset.name}</h2>
                                    <code className="text-sm text-gray-500 break-all line-clamp-1 max-w-[150px]">{preset.css}</code>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        aria-label="Copy CSS code"
                                        onClick={() => handleCopy(preset.css, index)}
                                        className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        {copiedIndex === index ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </section>

                <section className="bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

                    <h2 className="text-3xl font-bold mb-4 relative z-10">Need a unique gradient?</h2>
                    <p className="text-gray-400 mb-8 relative z-10">Use our interactive generator to craft your own custom color transition.</p>
                    <motion.a
                        href="/gradient-generator"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-10 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl relative z-10 hover:bg-gray-50 transition-colors"
                    >
                        Go to Generator
                    </motion.a>
                </section>
            </div>
        </>
    );
}
