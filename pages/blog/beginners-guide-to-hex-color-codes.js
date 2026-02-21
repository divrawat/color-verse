import { motion } from 'framer-motion';
import { ArrowLeft, Box, Binary, Zap, History, Lightbulb, Monitor, ShieldCheck, ChevronRight, Info, Terminal, Cpu, Palette, Eye, ShieldAlert, Wifi, ZapOff, Sparkles, Activity } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function QuantumHexGuide() {
    return (
        <>
            <SEO
                title="The Quantum Guide to HEX Color Codes: From Electron Volts to Pixel Perfect"
                description="The ultimate investigation into digital color. Explore sub-pixel rendering, security fingerprinting via color, and the hardware logic of HEX codes."
                canonicalUrl="/blog/beginners-guide-to-hex-color-codes"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "The Quantum Guide to HEX Color Codes: From Electron Volts to Pixel Perfect",
                    "description": "An exhaustive technological resource explaining hexadecimal color codes through the lens of computer architecture, hardware physics, and cryptographic security.",
                    "author": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "url": "https://colorverse.online/about"
                    },
                    "datePublished": "2026-02-21",
                    "dateModified": "2026-02-21",
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
                        "@id": "https://colorverse.online/blog/beginners-guide-to-hex-color-codes"
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
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-100 text-sm font-black text-orange-600 tracking-widest uppercase"
                    >
                        <Cpu size={16} />
                        <span>Quantum Logic Edition</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-gray-900 leading-tight tracking-tighter"
                    >
                        The Quantum Guide to <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-amber-600">
                            HEX Color Codes
                        </span>
                        <div className="text-2xl md:text-3xl mt-4 font-bold text-gray-400 tracking-normal">
                            From Electron Volts to Pixel Perfect
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-medium"
                    >
                        HEX isn't just a label. It's a bridge between high-level design and the physical voltage pulses of your display hardware.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 text-sm text-gray-400 font-black"
                    >
                        <span>Divyanshu Rawat</span>
                        <span className="w-2 h-2 bg-orange-200 rounded-full" />
                        <span>February 21, 2026</span>
                        <span className="w-2 h-2 bg-orange-200 rounded-full" />
                        <span className="text-orange-600 uppercase">55 min read</span>
                    </motion.div>
                </header>

                <article className="prose prose-xl max-w-none space-y-32">
                    {/* Section 01: Hardware Interpretation (Original, but improved) */}
                    <section className="space-y-12">
                        <div className="flex items-center gap-4 text-orange-600 font-black uppercase tracking-[0.2em] text-sm">
                            <Cpu size={20} />
                            <span>Section 01 // Transistor Logic</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            The Boolean Algebra <br />
                            <span className="text-gray-400">of Digital Light</span>
                        </h2>
                        <div className="text-xl text-gray-700 leading-relaxed space-y-8">
                            <p>
                                When you write <code>#FF5733</code>, you are initiating a cascade of boolean operations through the OS graphics driver. In hexadecimal, "FF" translates to the binary string <code>11111111</code>. At the hardware level, this means <strong>Maximum Pulse Width Modulation (PWM)</strong> duty cycle for the red sub-pixel.
                            </p>
                            <div className="bg-orange-950 p-10 rounded-[3rem] text-orange-100 font-mono text-sm relative overflow-hidden">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <div className="text-[10px] uppercase font-black opacity-30">High-Level HEX</div>
                                        <code className="text-2xl text-orange-400">#FF</code>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="text-[10px] uppercase font-black opacity-30">Transistor State</div>
                                        <code className="text-2xl text-emerald-400">1111 1111</code>
                                    </div>
                                </div>
                            </div>
                            <p>
                                Each bit represents a doubling of light intensity (roughly, ignoring gamma correction). The transistors on your screen toggle millions of times per second to simulate the intermediate shades between "On" and "Off."
                            </p>
                        </div>
                    </section>

                    {/* Section 02: Color Space Manifolds (NEW) */}
                    <section className="space-y-12 bg-white p-16 rounded-[4rem] border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-orange-100/50 blur-[100px] rounded-full" />
                        <div className="flex items-center gap-4 text-orange-600 font-black uppercase tracking-[0.2em] text-sm relative z-10">
                            <Box size={20} />
                            <span>Section 02 // Mathematical Manifolds</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none relative z-10">
                            The 16.7 Million <br />
                            <span className="text-gray-400 font-italic">Color Manifold</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-16 relative z-10">
                            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
                                <p>
                                    Visualizing HEX requires thinking in three dimensions. The HEX system is a <strong>Color Cube</strong> with R, G, and B as the X, Y, and Z axes. Every valid HEX code is a specific coordinate within this 256x256x256 Euclidean space.
                                </p>
                                <p>
                                    At the exact center of this cube `(#808080)` sits perfect gray. At the vertices, you find the primaries and secondaries. The most profound realization for a designer is that the "distance" between two HEX codes in this space does not always equal the "distance" perceived by the human eye.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200 flex items-center justify-center">
                                <div className="space-y-4 text-center">
                                    <div className="w-32 h-32 bg-gray-900 rounded-2xl shadow-2xl relative mx-auto overflow-hidden">
                                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-red-500 via-green-500 to-blue-500 opacity-50" />
                                    </div>
                                    <p className="text-[10px] font-black uppercase text-gray-400">Euclidean RGB Space Model</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 03: Sub-pixel Rendering (Original, but improved) */}
                    <section className="space-y-12">
                        <div className="flex items-center gap-4 text-red-600 font-black uppercase tracking-[0.2em] text-sm">
                            <Eye size={20} />
                            <span>Section 03 // Perception Thresholds</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            Just Noticeable <br />
                            <span className="text-gray-400">Difference (JND)</span>
                        </h2>
                        <div className="text-xl text-gray-700 leading-relaxed space-y-8">
                            <p>
                                Is <code>#FAFAFA</code> actually different from <code>#FBFBFB</code>? Under controlled laboratory conditions, the human eye has a Delta-E threshold of roughly 1.0. This means that a single HEX unit shift is often <strong>Sub-perceptual</strong>.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="p-8 bg-zinc-50 rounded-3xl space-y-4 border border-zinc-100">
                                    <div className="h-10 w-full bg-[#FAFAFA] rounded-lg border border-zinc-200" />
                                    <h5 className="font-black text-xs">#FAFAFA</h5>
                                    <p className="text-[10px] text-zinc-400">Theoretical White A</p>
                                </div>
                                <div className="p-8 bg-zinc-50 rounded-3xl space-y-4 border border-zinc-100">
                                    <div className="h-10 w-full bg-[#FBFBFB] rounded-lg border border-zinc-200" />
                                    <h5 className="font-black text-xs">#FBFBFB</h5>
                                    <p className="text-[10px] text-zinc-400">Theoretical White B</p>
                                </div>
                                <div className="p-8 bg-black rounded-3xl space-y-4 flex flex-col justify-center items-center text-white">
                                    <Wifi className="text-orange-500 animate-pulse" size={24} />
                                    <p className="text-[10px] font-black uppercase">JND Detected: NO</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 04: Legacy Hardware (NEW) */}
                    <section className="bg-orange-950 p-24 rounded-[4rem] text-white overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-4 text-orange-400 font-black uppercase tracking-[0.2em] text-sm">
                                <History size={20} />
                                <span>Section 04 // Hardware Legacy</span>
                            </div>
                            <h2 className="text-7xl font-black leading-none tracking-tighter">
                                The 8-bit <br />
                                Bottleneck.
                            </h2>
                            <div className="grid md:grid-cols-2 gap-16 items-start">
                                <div className="prose prose-invert prose-xl">
                                    <p>
                                        In the early 1990s, computer memory was expensive. A 24-bit color system (allowing for full HEX codes) required 3MB of Video RAM for a 1024x768 display—an impossible luxury.
                                    </p>
                                    <p>
                                        Systems like Sega Genesis or early PCs used <strong>Indexed Color</strong>. Instead of storing the full HEX per pixel, they stored a pointer to a 256-color palette. Our modern "Web Safe" HEX codes are a direct descendant of these severe hardware constraints.
                                    </p>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="aspect-square bg-orange-600/20 border border-orange-500/20 rounded-lg flex items-center justify-center font-mono text-[8px]">
                                            IDX_{i.toString(16).toUpperCase()}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 05: Digital Forensics (NEW) */}
                    <section className="space-y-16">
                        <div className="flex items-center gap-4 text-emerald-600 font-black uppercase tracking-[0.2em] text-sm">
                            <ShieldCheck size={20} />
                            <span>Section 05 // Forensic Analysis</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            Digital HEX <br />
                            <span className="text-gray-400 font-italic">Forensics</span>
                        </h2>
                        <div className="text-xl text-gray-700 leading-relaxed space-y-8">
                            <p>
                                Professionals can reverse-engineer the quality of an image solely by looking at its unique HEX distribution. A high-quality PNG will contain a <strong>Gaussian Distribution</strong> of color codes. A JPEG-compressed image, however, will show "cluster points"—artificial HEX values generated by the Discrete Cosine Transform algorithm.
                            </p>
                            <div className="p-12 bg-gray-900 rounded-[3rem] space-y-8 shadow-2xl skew-x-1 transition-transform hover:skew-x-0 cursor-crosshair">
                                <div className="flex items-center justify-between text-cyan-400">
                                    <span className="font-mono text-xs">SCANNING BITSTREAM...</span>
                                    <Activity size={16} />
                                </div>
                                <div className="flex items-end gap-1 h-32 overflow-hidden">
                                    {[...Array(50)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="bg-emerald-500/40 w-full"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                                <p className="text-[10px] text-gray-500 font-mono italic">
                                    Forensic Pattern: Detected compression artifacts at #E2E2E2 frequency.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 06: Security & Fingerprinting (Original, but improved) */}
                    <section className="bg-red-950 p-20 rounded-[4rem] text-white relative">
                        <div className="absolute top-0 right-0 p-8">
                            <ShieldAlert className="text-red-500/30 skew-y-12" size={120} />
                        </div>
                        <div className="relative z-10 space-y-10">
                            <div className="inline-flex gap-3 items-center px-4 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-[10px] font-black uppercase tracking-widest">Privacy Warning</div>
                            <h2 className="text-5xl font-black leading-tight">HEX Fingerprinting & <br /> Cryptographic Identity</h2>
                            <p className="text-xl text-red-100/60 leading-relaxed max-w-4xl">
                                Your browser's rendering engine anti-aliases HEX codes differently depending on your GPU's floating-point precision. By rendering a complex HEX pattern and hashing the result, a website can create a <strong>Hardware Identifier</strong> that remains constant even if you clear your cookies.
                            </p>
                        </div>
                    </section>

                    {/* Final Footer */}
                    <footer className="bg-gradient-to-tr from-orange-950 via-red-950 to-amber-950 rounded-[4rem] p-32 text-center space-y-12 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(249,115,22,0.3)]">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10" />
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Terminal className="mx-auto text-orange-400" size={100} />
                        </motion.div>
                        <h3 className="text-7xl font-black text-white relative z-10 leading-none tracking-tighter">
                            Understand <br />
                            the Machine.
                        </h3>
                        <p className="text-2xl text-orange-100/40 max-w-3xl mx-auto relative z-10 font-bold leading-relaxed">
                            The articles stop being about design; they start being about the physics of reality. Master the HEX, master the machine.
                        </p>
                        <div className="flex flex-col md:flex-row gap-10 justify-center relative z-10 pt-12">
                            <Link
                                href="/tools/color-picker"
                                className="px-16 py-8 bg-white text-orange-950 rounded-[2.5rem] text-xl font-black transition-all transform hover:scale-110 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] shadow-2xl flex items-center gap-4 justify-center"
                            >
                                <Palette size={24} /> Launch HEX Engine
                            </Link>
                            <Link
                                href="/blog"
                                className="px-16 py-8 bg-orange-600 text-white rounded-[2.5rem] text-xl font-black transition-all transform hover:scale-110 shadow-2xl hover:bg-orange-500 lg:px-20"
                            >
                                Explore Other Theory
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </>
    );
}
