import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Sparkles, Zap, CheckCircle, Info, BookOpen, Layers, Lightbulb, Target } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function ColorHarmonyGuide() {
    return (
        <>
            <SEO
                title="What Is Color Harmony? A Simple Guide for Designers"
                description="Discover the principles of color harmony. Learn how to create balanced, aesthetically pleasing color palettes using color theory and the color wheel."
                canonicalUrl="/blog/what-is-color-harmony"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "What Is Color Harmony? A Simple Guide for Designers",
                    "description": "A comprehensive guide to color harmony, exploring the color wheel, harmony types, and practical design applications.",
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
                        "@id": "https://colorverse.online/blog/what-is-color-harmony"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 text-sm font-bold text-purple-600"
                    >
                        <Palette size={16} />
                        <span>Design Essentials</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        What Is Color Harmony? <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            A Simple Guide for Designers
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Learn the principles of creating balanced and aesthetically pleasing color combinations using time-tested color theory.
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
                        <span>15 min read</span>
                    </motion.div>
                </header>

                <article className="prose prose-lg max-w-none space-y-12">
                    <section className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            Introduction to Harmony
                        </h2>
                        <p>
                            Harmony is something that is pleasing to the eye. It engages the viewer and it creates an inner sense of order, a balance in the visual experience. When something is not harmonious, it's either boring or chaotic. At one extreme is a visual experience so bland that the viewer is not engaged. At the other extreme is a visual experience so overdone, so chaotic that the viewer can't stand to look at it.
                        </p>
                        <p>
                            <strong>Color harmony</strong> is the art of choosing colors that work well together. In design, harmony creates a professional look and feel that guides the user's eye and evokes the right emotions.
                        </p>
                        <div className="bg-purple-50 p-8 rounded-[2rem] border border-purple-100 flex gap-6 items-start">
                            <Lightbulb className="text-purple-600 shrink-0" size={32} />
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Key Takeaway</h4>
                                <p className="m-0">Harmony represents a logical structure for color. In its simplest form, it's about achieving "visual balance."</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
                            The Color Wheel: Your Ultimate Tool
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            To understand harmony, we first need to look at the <strong>Color Wheel</strong>. Created by Sir Isaac Newton in 1666, it's the fundamental tool for understanding the relationship between colors.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                <h4 className="font-bold text-gray-900 text-xl text-indigo-600">Primary Colors</h4>
                                <p className="text-sm text-gray-600">Red, Yellow, and Blue. These cannot be formed by mixing any other colors.</p>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-red-500" />
                                    <div className="w-8 h-8 rounded-full bg-yellow-400" />
                                    <div className="w-8 h-8 rounded-full bg-blue-600" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                <h4 className="font-bold text-gray-900 text-xl text-indigo-600">Secondary Colors</h4>
                                <p className="text-sm text-gray-600">Green, Orange, and Purple. Formed by mixing primary colors.</p>
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500" />
                                    <div className="w-8 h-8 rounded-full bg-orange-500" />
                                    <div className="w-8 h-8 rounded-full bg-purple-600" />
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                                <h4 className="font-bold text-gray-900 text-xl text-indigo-600">Tertiary Colors</h4>
                                <p className="text-sm text-gray-600">Yellow-orange, Red-orange, etc. Formed by mixing primary and secondary colors.</p>
                                <div className="flex gap-1 flex-wrap">
                                    <div className="w-6 h-6 rounded-full bg-orange-400" />
                                    <div className="w-6 h-6 rounded-full bg-pink-500" />
                                    <div className="w-6 h-6 rounded-full bg-teal-500" />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            Classic Harmony Formulas
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed">
                            There are several classic color schemas that are proven to be harmonious. Let's explore each one in detail.
                        </p>

                        <div className="space-y-12">
                            {/* Complementary */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">1. Complementary Color Scheme</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Colors that are opposite each other on the color wheel are considered to be complementary colors (example: red and green). The high contrast of complementary colors creates a vibrant look especially when used at full saturation.
                                </p>
                                <HarmonyExample
                                    gradient="linear-gradient(to right, #ef4444 50%, #22c55e 50%)"
                                    title="Red & Green"
                                    description="High contrast, high energy. Best for CTAs."
                                />
                            </div>

                            {/* Analogous */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">2. Analogous Color Scheme</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    Analogous color schemes use colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs.
                                </p>
                                <HarmonyExample
                                    gradient="linear-gradient(to right, #3b82f6, #06b6d4, #10b981)"
                                    title="Blue, Cyan & Green"
                                    description="Calm and natural progression."
                                />
                            </div>

                            {/* Triadic */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-900">3. Triadic Color Scheme</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    A triadic color scheme uses colors that are evenly spaced around the color wheel. They tend to be quite vibrant.
                                </p>
                                <HarmonyExample
                                    gradient="linear-gradient(to right, #ef4444 33%, #eab308 33%, #eab308 66%, #3b82f6 66%)"
                                    title="Red, Yellow & Blue"
                                    description="Balanced yet vibrant."
                                />
                            </div>
                        </div>
                    </section>

                    <section className="bg-gray-900 text-white rounded-[3rem] p-10 space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Zap className="text-yellow-400" size={32} />
                            Why Color Harmony Matters
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 text-lg">
                            <div className="space-y-2">
                                <h4 className="font-bold text-indigo-400">Emotional Connection</h4>
                                <p className="text-gray-300">Harminous colors can evoke specific moods instantly.</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-bold text-pink-400">Visual Order</h4>
                                <p className="text-gray-300">Guides the eye and highlights what's important.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900">Practical Tips for Designers</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
                                    <Sparkles size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">The 60-30-10 Rule</h4>
                                <p className="text-gray-600">Use 60% dominant color, 30% secondary, and 10% accent.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                    <CheckCircle size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">Value Contrast</h4>
                                <p className="text-gray-600">Ensure enough brightness difference between colors for readability.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Start Creating Today</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Apply these principles using our professional design tools.
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

function HarmonyExample({ gradient, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="space-y-3 group"
        >
            <div
                className="h-32 rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300"
                style={{ background: gradient }}
            />
            <div className="space-y-1 text-base">
                <h4 className="font-bold text-gray-900">{title}</h4>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
}
