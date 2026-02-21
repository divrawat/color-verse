import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Sparkles, Zap, CheckCircle, Info, BookOpen, Layers, RefreshCw, Code, AlertCircle, Droplets } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function SmoothTransitionsMasterclass() {
    return (
        <>
            <SEO
                title="Mastering Butter-Smooth Color Transitions: A Comprehensive CSS Guide"
                description="Master the art of creating seamless, butter-smooth color transitions in CSS and digital design. Learn about OKLCH, LCH, and how to avoid the muddy middle."
                canonicalUrl="/blog/how-to-create-smooth-color-transitions"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "Mastering Butter-Smooth Color Transitions: A Comprehensive CSS Guide",
                    "description": "An advanced technical and artistic guide to achieving professional-grade color transitions. Explore OKLCH, easing gradients, and banding prevention.",
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
                        "@id": "https://colorverse.online/blog/how-to-create-smooth-color-transitions"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-sm font-bold text-blue-600"
                    >
                        <RefreshCw size={16} />
                        <span>Advanced Masterclass</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
                    >
                        Mastering Butter-Smooth <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Color Transitions
                        </span>
                        <div className="text-2xl md:text-3xl mt-4 font-bold text-gray-400 tracking-normal">
                            A Comprehensive CSS Guide
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Stop settling for muddy RGB blends. Learn how to use OKLCH, easing functions, and perceptual color theory to create world-class gradients.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 text-sm text-gray-500"
                    >
                        <span>By <Link href="/about" className="text-purple-600 hover:text-purple-700 font-semibold hover:underline">Divyanshu Rawat</Link></span>
                        <span>•</span>
                        <span>February 21, 2026</span>
                        <span>•</span>
                        <span>25 min read</span>
                    </motion.div>
                </header>

                <article className="prose prose-lg max-w-none space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                            The Science of Color Perception
                        </h2>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                Most developers treat color transitions as a simple mathematical average. If you're going from Blue (0, 0, 255) to Red (255, 0, 0), the computer thinks the midpoint should be a murky purple. But the human eye doesn't work in linear RGB.
                            </p>
                            <p>
                                <strong>Why RGB fails:</strong> Traditional RGB color space is "gamma-compressed," meaning it's designed for hardware, not humans. When colors are interpolated in sRGB, they often lose vibrancy in the middle—a phenomenon known as the <strong>"Muddy Middle."</strong> To fix this, we need to transition in a perceptually uniform color space.
                            </p>
                        </div>
                    </section>

                    <section className="bg-blue-900 text-white rounded-[3rem] p-12 space-y-8 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Droplets size={200} />
                        </div>
                        <h3 className="text-3xl font-bold flex items-center gap-3">
                            <Zap className="text-yellow-400" />
                            The New King: OKLCH
                        </h3>
                        <p className="text-indigo-100 text-lg">
                            OKLCH is the most modern and effective way to define colors in CSS today. Unlike HSL or RGB, it is designed to be <strong>perceptually uniform</strong>.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <h4 className="font-bold text-white text-xl mb-2">L (Lightness)</h4>
                                <p className="text-sm opacity-80">How bright the color looks. 50% in OKLCH actually looks like 50% gray to a human.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <h4 className="font-bold text-white text-xl mb-2">C (Chroma)</h4>
                                <p className="text-sm opacity-80">The intensity or saturation. High C means vibrant, low C means muted.</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <h4 className="font-bold text-white text-xl mb-2">H (Hue)</h4>
                                <p className="text-sm opacity-80">The angle on the color wheel. 0 is red, 120 is green, 240 is blue.</p>
                            </div>
                        </div>
                        <div className="bg-black/40 p-6 rounded-2xl font-mono text-sm text-cyan-300">
                            {`/* Modern CSS OKLCH Gradient */
.smooth-gradient {
  background: linear-gradient(in oklch to right, #2563eb, #ea580c);
}`}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <RefreshCw className="text-indigo-500" size={32} />
                            Defeating the "Muddy Middle"
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            When transitioning between complementary colors (like Blue and Orange), the shortest path goes right through the desaturated center of the color wheel. Here's how to fix it:
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 text-xl">The Wrong Path (Direct)</h4>
                                <div className="h-32 rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 border-2 border-gray-100 shadow-lg" />
                                <p className="text-sm text-gray-600">The center looks brown/gray because the hue shifts across the desaturated core.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="font-bold text-gray-900 text-xl">The Pro Path (Arc)</h4>
                                <div className="h-32 rounded-3xl" style={{ background: 'linear-gradient(to right, #2563eb, #a855f7, #ea580c)' }} />
                                <p className="text-sm text-gray-600">By adding a "vibrancy stop" (Purple), we force the transition around the edge of the gamut.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <Layers className="text-blue-500" size={32} />
                            Easing Gradients: Beyond Linear
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Most gradients progress at a constant speed (Linear). However, natural transitions—like a sunset—progress non-linearly. In CSS, we can mimic this using "easing" by placing multiple stops at strategically spaced intervals.
                        </p>
                        <div className="bg-gray-50 p-8 rounded-[3rem] border border-gray-100">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="p-4 font-bold text-gray-900">Easing Type</th>
                                            <th className="p-4 font-bold text-gray-900">Visual Effect</th>
                                            <th className="p-4 font-bold text-gray-900">Use Case</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-semibold">Linear</td>
                                            <td className="p-4">Constant, robotic</td>
                                            <td className="p-4">Small accents, UI buttons</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-4 font-semibold">Ease-In-Out</td>
                                            <td className="p-4">Soft start/end, fast middle</td>
                                            <td className="p-4">Hero sections, backgrounds</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold">Exponential</td>
                                            <td className="p-4">Dramatic shift at one end</td>
                                            <td className="p-4">Overlays for text legibility</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <AlertCircle className="text-red-500" size={32} />
                            The Banding Boss: Preventing Artifacts
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Banding occurs when there aren't enough color bits to represent a smooth blend, creating visible "stripes."
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">Why it happens:</h4>
                                <ul className="space-y-2 text-gray-600 list-disc ml-5">
                                    <li>Low-quality (8-bit) monitors</li>
                                    <li>Extreme contrast over small distances</li>
                                    <li>Compressed image formats (JPEG/WebP)</li>
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">The Solution:</h4>
                                <ul className="space-y-2 text-gray-600 list-disc ml-5 font-medium">
                                    <li>Add 1-2% grain/noise filter in CSS</li>
                                    <li>Use dithering in design tools</li>
                                    <li>Stretch the gradient over a larger area</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                    What is the "Interpolation Mode" in CSS?
                                    <ArrowLeft size={18} className="-rotate-90 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    It's a new feature in modern browsers (Safari 16.2+, Chrome 111+) that allows you to specify <code>in oklch</code> or <code>in lch</code> within your <code>linear-gradient</code>. This instructs the browser to calculate midpoints using these advanced color models instead of the default sRGB.
                                </p>
                            </details>
                            <details className="group bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                <summary className="font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                                    Does every monitor support OKLCH?
                                    <ArrowLeft size={18} className="-rotate-90 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    While the OKLCH model itself is just math and works in any modern browser, the *Display P3* colors it can unlock are only visible on newer "Wide Gamut" displays (like iPhones, MacBooks, and high-end creative monitors). For older monitors, OKLCH just picks the closest sRGB match.
                                </p>
                            </details>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[3rem] p-12 text-center text-white space-y-6 shadow-xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                        <h2 className="text-5xl font-bold relative z-10">Unleash Your Colors</h2>
                        <p className="text-2xl opacity-90 max-w-2xl mx-auto relative z-10">
                            Apply these advanced techniques using our professional-grade gradient tools.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap relative z-10">
                            <Link href="/gradient-generator" className="px-10 py-5 bg-white text-blue-600 rounded-full font-extrabold shadow-2xl hover:shadow-cyan-500/50 transition-all hover:-translate-y-1">
                                Open Gradient Master
                            </Link>
                            <Link href="/gradient-backgrounds" className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-extrabold hover:bg-white/20 transition-all">
                                See Pro Samples
                            </Link>
                        </div>
                    </section>
                </article>
            </div>
        </>
    );
}
