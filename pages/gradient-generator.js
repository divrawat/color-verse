import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, RefreshCw, Plus, Trash, Check } from 'lucide-react';
import chroma from 'chroma-js';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function GradientGenerator() {
    const [colors, setColors] = useState([
        { id: 1, value: '#ec4899', stop: 0 },
        { id: 2, value: '#8b5cf6', stop: 100 }
    ]);
    const [degree, setDegree] = useState(135);
    const [type, setType] = useState('linear'); // linear or radial
    const [copied, setCopied] = useState(false);

    const gradientString = type === 'linear'
        ? `linear-gradient(${degree}deg, ${colors.map(c => `${c.value} ${c.stop}%`).join(', ')})`
        : `radial-gradient(circle, ${colors.map(c => `${c.value} ${c.stop}%`).join(', ')})`;

    const handleCopy = () => {
        navigator.clipboard.writeText(`background: ${gradientString};`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const addColor = () => {
        if (colors.length >= 5) return;
        const newColor = chroma.random().hex();
        setColors([...colors, { id: Date.now(), value: newColor, stop: 50 }].sort((a, b) => a.stop - b.stop));
    };

    const removeColor = (id) => {
        if (colors.length <= 2) return;
        setColors(colors.filter(c => c.id !== id));
    };

    const updateColor = (id, field, val) => {
        setColors(colors.map(c => c.id === id ? { ...c, [field]: val } : c));
    };

    const generateRandom = () => {
        const color1 = chroma.random().hex();
        const color2 = chroma.random().hex();
        setDegree(Math.floor(Math.random() * 360));
        setColors([
            { id: 1, value: color1, stop: 0 },
            { id: 2, value: color2, stop: 100 }
        ]);
    };

    return (
        <>
            <SEO
                title="CSS Gradient Generator"
                description="Create beautiful CSS linear and radial gradients visually. Add multiple color stops, adjust angles, and copy the CSS code instantly for your web projects."
                canonicalUrl="/gradient-generator"
            />
            <SchemaOrg
                type="HowTo"
                data={{
                    "name": "How to create a CSS Gradient",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "text": "Choose your gradient type: Linear or Radial."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Add or remove color stops as needed."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Adjust the color values and stop positions."
                        },
                        {
                            "@type": "HowToStep",
                            "text": "Copy the generated CSS code to your project."
                        }
                    ]
                }}
            />

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Preview Section */}
                <section className="w-full lg:w-1/2">
                    <motion.div
                        layout
                        className="min-h-[400px] lg:h-[600px] rounded-3xl shadow-2xl relative overflow-hidden flex items-center justify-center p-8 group border border-gray-100"
                        style={{ background: gradientString }}
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

                        <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                            <code className="text-sm text-gray-600 break-all block">
                                background: {gradientString};
                            </code>
                            <button
                                onClick={handleCopy}
                                className="mt-4 w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors"
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                {copied ? 'Copied!' : 'Copy CSS'}
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Controls Section */}
                <section className="w-full lg:w-1/2 space-y-8 p-1">
                    <div className="flex items-center justify-between">
                        <h1 className="text-4xl font-extrabold text-gray-900">Gradient Generator</h1>
                        <button
                            aria-label="Generate random gradient"
                            onClick={generateRandom}
                            className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:rotate-180 transition-all duration-500 shadow-sm"
                        >
                            <RefreshCw size={20} />
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-6">

                        {/* Type & Angle */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Type & Direction</h2>
                            <div className="flex gap-4">
                                <select
                                    aria-label="Select gradient type"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="px-4 py-2 border border-gray-200 rounded-xl bg-gray-50 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-pink-500"
                                >
                                    <option value="linear">Linear</option>
                                    <option value="radial">Radial</option>
                                </select>

                                {type === 'linear' && (
                                    <div className="flex-1 flex items-center gap-4 bg-gray-50 px-4 rounded-xl border border-gray-200">
                                        <span className="text-sm font-mono text-gray-500">{degree}°</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="360"
                                            value={degree}
                                            aria-label="Gradient angle"
                                            onChange={(e) => setDegree(Number(e.target.value))}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Presets / Color Count */}
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider text-center">Quick Presets</h2>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setColors([
                                        { id: 1, value: '#ec4899', stop: 0 },
                                        { id: 2, value: '#8b5cf6', stop: 100 }
                                    ])}
                                    className={`flex-1 py-2 rounded-xl border text-sm font-bold transition-all ${colors.length === 2 ? 'bg-pink-50 border-pink-200 text-pink-600 shadow-sm' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'}`}
                                >
                                    2 Colors
                                </button>
                                <button
                                    onClick={() => setColors([
                                        { id: 1, value: '#ec4899', stop: 0 },
                                        { id: 2, value: '#8b5cf6', stop: 50 },
                                        { id: 3, value: '#3b82f6', stop: 100 }
                                    ])}
                                    className={`flex-1 py-2 rounded-xl border text-sm font-bold transition-all ${colors.length === 3 ? 'bg-indigo-50 border-indigo-200 text-indigo-600 shadow-sm' : 'bg-white border-gray-100 text-gray-500 hover:bg-gray-50'}`}
                                >
                                    3 Colors
                                </button>
                                <button
                                    onClick={addColor}
                                    disabled={colors.length >= 5}
                                    className="flex-1 py-2 rounded-xl border border-gray-100 bg-white text-gray-500 text-sm font-bold hover:bg-gray-50 disabled:opacity-30 flex items-center justify-center gap-1"
                                >
                                    <Plus size={14} /> Custom
                                </button>
                            </div>
                        </div>

                        {/* Colors */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider">Color Stops</h2>
                            </div>

                            <div className="space-y-3">
                                {colors.map((color, index) => (
                                    <motion.div
                                        layout
                                        key={color.id}
                                        className="flex items-center gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-200"
                                    >
                                        <div className="relative">
                                            <input
                                                type="color"
                                                value={color.value}
                                                aria-label={`Color stop ${index + 1} value`}
                                                onChange={(e) => updateColor(color.id, 'value', e.target.value)}
                                                className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border-0 p-0 shadow-sm"
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={color.stop}
                                                aria-label={`Color stop ${index + 1} position`}
                                                onChange={(e) => updateColor(color.id, 'stop', Number(e.target.value))}
                                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
                                            />
                                        </div>

                                        <span className="font-mono text-xs w-10 text-center text-gray-500">{color.stop}%</span>

                                        <button
                                            aria-label="Remove color stop"
                                            onClick={() => removeColor(color.id)}
                                            disabled={colors.length <= 2}
                                            className="p-2 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:hover:text-gray-400 transition-colors"
                                        >
                                            <Trash size={16} />
                                        </button>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100">
                            <button
                                onClick={handleCopy}
                                className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                {copied ? <Check size={18} /> : <Copy size={18} />}
                                {copied ? 'Copied to Clipboard!' : 'Copy CSS Code'}
                            </button>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}
