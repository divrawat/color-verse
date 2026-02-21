import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Layers, Code, Sparkles, Zap, CheckCircle, Activity, History, Eye } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function ColorGradientGuide() {
    return (
        <>
            <SEO
                title="What Is a Color Gradient? A Beginner's Guide"
                description="Learn everything about color gradients in this comprehensive beginner's guide. Discover types of gradients, how to create them, and best practices for web design."
                canonicalUrl="/blog/what-is-color-gradient"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "What Is a Color Gradient? A Beginner's Guide",
                    "description": "A comprehensive guide to understanding color gradients, their types, applications, and how to create stunning gradient effects for web design.",
                    "author": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "url": "https://github.com/divrawat"
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
                        "@id": "https://colorverse.online/blog/what-is-color-gradient"
                    }
                }}
            />

            <div className="max-w-4xl mx-auto space-y-12">
                {/* Back Navigation */}
                <nav className="flex items-center gap-4">
                    <Link href="/" className="p-2 hover:bg-white rounded-xl transition-colors text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100 inline-flex items-center gap-2 font-bold text-sm">
                        <ArrowLeft size={18} /> Back to Home
                    </Link>
                </nav>

                {/* Hero Section */}
                <header className="space-y-6 text-center pb-8 border-b border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 text-sm font-bold text-pink-600"
                    >
                        <Sparkles size={16} />
                        <span>Beginner's Guide</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        What Is a Color Gradient? <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600">
                            A Beginner's Guide
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        A comprehensive beginner's guide to understanding color gradients, their types, and how to use them effectively in modern web design.
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
                        <span>8 min read</span>
                    </motion.div>
                </header>

                {/* Featured Gradient Example */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white space-y-2">
                            <Palette size={48} className="mx-auto opacity-90" />
                            <p className="text-lg font-bold opacity-90">Beautiful Color Gradient Example</p>
                        </div>
                    </div>
                </motion.div>

                {/* Article Content */}
                <article className="prose prose-xl max-w-none space-y-32">

                    {/* Section 01: Introduction & Neural Geometry (NEW) */}
                    <section className="space-y-12">
                        <div className="flex items-center gap-4 text-pink-600 font-black uppercase tracking-[0.2em] text-sm">
                            <Activity size={20} />
                            <span>Section 01 // Differentiable Geometry</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            The Topology of <br />
                            <span className="text-gray-400">Color Surfaces</span>
                        </h2>
                        <div className="text-xl text-gray-700 leading-relaxed space-y-8 text-lg">
                            <p>
                                A color gradient is not just an aesthetic trend; it is a <strong>Mathematical Surface</strong>. In the world of machine learning, gradients are essential because they are "differentiable." This means a neural network can calculate the slope of a color transition to understand the "direction" of visual importance.
                            </p>
                            <p>
                                When we define a gradient from #FF0000 to #0000FF, we are creating a <strong>Manifold</strong> in RGB space. Professional designers use differential geometry to ensure that the rate of change (the 'derivative') of the color is constant, preventing visual jarring or "flat spots" in the transition.
                            </p>
                        </div>
                    </section>

                    {/* Section 02: CRT Physics (NEW) */}
                    <section className="bg-gray-900 p-24 rounded-[4rem] text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 blur-[150px] rounded-full" />
                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-4 text-pink-400 font-black uppercase tracking-[0.2em] text-sm">
                                <History size={20} />
                                <span>Section 02 // Hardware Archaeology</span>
                            </div>
                            <h2 className="text-7xl font-black leading-none tracking-tighter">
                                CRT Physics & <br />
                                <span className="text-gray-500 font-mono italic">Electron Modulation</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-16 items-start text-lg">
                                <div className="space-y-6">
                                    <p>
                                        Before LCDs, gradients were created by physically modulating the intensity of an <strong>Electron Beam</strong>. As the beam swept across the phosphors of a Cathode Ray Tube, a rapid increase in voltage created a smooth brightening effect.
                                    </p>
                                    <p>
                                        The "warmth" of vintage gradients comes from the physical decay of the phosphor itself—a natural 10-bit dithering process that modern 8-bit digital screens struggle to replicate without manual noise injection.
                                    </p>
                                </div>
                                <div className="p-10 bg-black/50 rounded-3xl border border-white/5 font-mono text-xs text-pink-300">
                                    {`[HARDWARE INTERRUPT]
SIGNAL type: SAWTOOTH_WAVE
FREQUENCY: 15.7 kHz
MODULATION: Intensity(t) = V_min + (V_max - V_min) * (t / T_line)
RESULT: Horizontal Ramp Detected.`}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 03: Types of Gradients (Original, but improved) */}
                    <section className="space-y-12">
                        <div className="flex items-center gap-4 text-orange-600 font-black uppercase tracking-[0.2em] text-sm">
                            <Layers size={20} />
                            <span>Section 03 // Multi-Dimensional Ramping</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            The Algebra of <br />
                            <span className="text-gray-400 font-italic">Linear & Conic</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h4 className="text-2xl font-black text-gray-900">1. Linear Gradients</h4>
                                <p className="text-lg text-gray-600">
                                    Interpolating along a vector <strong>V</strong>. Linear gradients are the workhorses of the web, but they require <code>OKLCH</code> easing to avoid the "Muddy Middle" desaturation zone.
                                </p>
                                <div className="p-10 bg-orange-50 rounded-[3rem] border border-orange-100">
                                    <div className="h-20 bg-gradient-to-r from-[#f093fb] to-[#f5576c] rounded-2xl shadow-inner" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-2xl font-black text-gray-900">2. Conic Gradients</h4>
                                <p className="text-lg text-gray-600">
                                    The gradient of rotation. By mapping color to <strong>Theta (θ)</strong>, we create a surface that follows the polar coordinate system—essential for color wheels and high-end UI spinners.
                                </p>
                                <div className="p-10 bg-emerald-50 rounded-[3rem] border border-emerald-100">
                                    <div className="h-20 w-20 mx-auto rounded-full bg-[conic-gradient(from_0deg,#ff6b6b,#feca57,#48dbfb,#ff6b6b)] shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 04: Bio-photons & Mood (NEW) */}
                    <section className="bg-pink-950 p-24 rounded-[4rem] text-white relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent" />
                        <div className="relative z-10 space-y-12">
                            <div className="flex items-center gap-4 text-pink-400 font-black uppercase tracking-[0.2em] text-sm">
                                <Eye size={20} />
                                <span>Section 04 // Psychology & Bio-photons</span>
                            </div>
                            <h2 className="text-7xl font-black leading-none">
                                The Biology of <br />
                                <span className="text-pink-300 font-mono">Gradient Calm</span>
                            </h2>
                            <div className="prose prose-invert prose-xl max-w-4xl">
                                <p>
                                    Why do humans prefer gradients over flat blocks of color? It's evolutionary. In nature, "Pure" flat colors are extremely rare—usually signifying danger or artificiality.
                                </p>
                                <p>
                                    The sky, the sea, and the forest are defined by <strong>Atmospheric Perspective</strong>—natural gradients. Our brains are hard-wired to perceive gradients as "Safe" and "Real." When you use a gradient in your UI, you are tapping into 4 billion years of biological light preference.
                                </p>
                                <div className="p-10 bg-black/40 rounded-3xl border border-pink-500/20 backdrop-blur-xl space-y-6">
                                    <h4 className="text-xl font-bold text-pink-300 italic">"The Circadian Transformation"</h4>
                                    <p className="text-sm text-pink-100/60 leading-relaxed font-medium">
                                        Advanced interfaces now use <strong>Time-Dynamic Gradients</strong>—shifting from high-vibrancy blues and yellows during the day to deep, low-energy purples and oranges at night to protect the user's melatonin production.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 05: Sub-surface Scattering (NEW) */}
                    <section className="space-y-16">
                        <div className="flex items-center gap-4 text-indigo-600 font-black uppercase tracking-[0.2em] text-sm">
                            <Zap size={20} />
                            <span>Section 05 // Surface Physics</span>
                        </div>
                        <h2 className="text-6xl font-black text-gray-900 leading-none">
                            Sub-surface <br />
                            <span className="text-gray-400 font-italic">Scattering (SSS)</span>
                        </h2>
                        <div className="text-xl text-gray-700 leading-relaxed space-y-12">
                            <p>
                                To make a UI element feel "Premium," like wax, skin, or high-end plastic, you must simulate how light penetrates the surface and bounces back. This is achieved through <strong>Inner Radial Gradients</strong>.
                            </p>
                            <div className="bg-white border border-gray-100 p-16 rounded-[4rem] shadow-sm space-y-10 group transition-all hover:border-indigo-200">
                                <div className="grid md:grid-cols-2 gap-16">
                                    <div className="space-y-6">
                                        <h4 className="text-3xl font-black text-gray-900 italic">The "Apple Diffusion"</h4>
                                        <p className="text-lg text-gray-500">By stacking three 10% opacity white-to-transparent radial gradients at the top edge of a button, you simulate the internal light scattering found in premium glassmorphism.</p>
                                        <div className="flex gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-indigo-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]" />
                                            <div className="w-16 h-16 rounded-2xl bg-teal-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.4)]" />
                                        </div>
                                    </div>
                                    <div className="relative p-10 bg-gray-50 rounded-3xl text-center">
                                        <p className="text-[10px] font-black uppercase text-gray-400 mb-4">SSS Simulation Active</p>
                                        <div className="w-full h-40 bg-white rounded-2xl shadow-inner relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                                            <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient(at top left, white, transparent 70%) opacity-30" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How to Create Gradients */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            How to Create CSS Gradients
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Creating gradients in CSS is straightforward. Here are the basic syntax patterns for each gradient type:
                            </p>
                        </div>

                        <div className="space-y-6">
                            <CodeBlock
                                title="Linear Gradient Syntax"
                                code={`/* Basic linear gradient */
background: linear-gradient(direction, color1, color2);

/* Example */
background: linear-gradient(to right, #667eea, #764ba2);

/* With angle */
background: linear-gradient(135deg, #667eea, #764ba2);

/* Multiple colors */
background: linear-gradient(to right, #fa709a, #fee140, #30cfd0);`}
                            />

                            <CodeBlock
                                title="Radial Gradient Syntax"
                                code={`/* Basic radial gradient */
background: radial-gradient(shape, color1, color2);

/* Example */
background: radial-gradient(circle, #ee9ca7, #ffdde1);

/* With position */
background: radial-gradient(ellipse at top, #a8edea, #fed6e3);`}
                            />

                            <CodeBlock
                                title="Conic Gradient Syntax"
                                code={`/* Basic conic gradient */
background: conic-gradient(from angle, color1, color2);

/* Example */
background: conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb);`}
                            />
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] p-10 border border-purple-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Layers className="text-purple-500" size={32} />
                            Best Practices for Using Gradients
                        </h2>

                        <div className="space-y-6 text-gray-700 text-lg">
                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 text-xl">1. Choose Harmonious Colors</h4>
                                <p>Select colors that work well together. Use color theory principles or tools like ColorVerse to find complementary color combinations.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 text-xl">2. Don't Overuse Gradients</h4>
                                <p>While gradients are beautiful, using too many can make your design feel cluttered. Use them strategically for maximum impact.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 text-xl">3. Consider Accessibility</h4>
                                <p>Ensure sufficient contrast when placing text over gradients. Test readability across different devices and screen sizes.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 text-xl">4. Keep It Subtle</h4>
                                <p>Subtle gradients often work better than harsh transitions. Aim for smooth, natural-looking color progressions.</p>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 text-xl">5. Test Performance</h4>
                                <p>Complex gradients can impact performance on older devices. Optimize and test across different browsers and devices.</p>
                            </div>
                        </div>
                    </section>

                    {/* Popular Gradient Trends */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
                            Popular Gradient Trends in 2026
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <TrendCard
                                title="Pastel Gradients"
                                description="Soft, muted color transitions that create a calm, sophisticated aesthetic."
                                gradient="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
                            />
                            <TrendCard
                                title="Vibrant Neon"
                                description="Bold, electric colors that grab attention and create energy."
                                gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                            />
                            <TrendCard
                                title="Duotone Effects"
                                description="Two-color gradients that create striking, modern visuals."
                                gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                            />
                            <TrendCard
                                title="Nature-Inspired"
                                description="Earthy tones and organic color combinations from nature."
                                gradient="linear-gradient(135deg, #0ba360 0%, #3cba92 100%)"
                            />
                        </div>
                    </section>

                    {/* Tools Section */}
                    <section className="bg-gray-900 text-white rounded-[3rem] p-10 space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <Code size={32} className="text-pink-400" />
                            Tools to Create Gradients
                        </h2>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            Creating the perfect gradient doesn't have to be difficult. Here are some excellent tools to help you:
                        </p>

                        <div className="space-y-4">
                            <ToolLink
                                href="/gradient-generator"
                                title="ColorVerse Gradient Generator"
                                description="Our powerful, easy-to-use gradient generator with real-time preview"
                            />
                            <ToolLink
                                href="/gradient-backgrounds"
                                title="Gradient Background Gallery"
                                description="Explore curated collection of beautiful, ready-to-use gradients"
                            />
                            <ToolLink
                                href="/color-shades"
                                title="Color Shades Explorer"
                                description="Find perfect color combinations for your gradient designs"
                            />
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" />
                            Conclusion
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Color gradients are a powerful design tool that can transform ordinary designs into extraordinary visual experiences. Whether you're creating a website, mobile app, or any digital project, understanding how to use gradients effectively will elevate your design skills.
                            </p>
                            <p>
                                Start experimenting with different gradient types, color combinations, and applications. Remember to keep accessibility in mind, follow best practices, and don't be afraid to try bold, creative combinations.
                            </p>
                            <p>
                                Ready to create your own stunning gradients? Try our <Link href="/gradient-generator" className="text-purple-600 font-bold hover:underline">Gradient Generator</Link> and start designing today!
                            </p>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Ready to Create Amazing Gradients?</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Use our free gradient generator to create beautiful color transitions for your next project.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/gradient-generator" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                Try Gradient Generator
                            </Link>
                            <Link href="/gradient-backgrounds" className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-bold hover:bg-white/20 transition-all">
                                Browse Gradients
                            </Link>
                        </div>
                    </section>

                    {/* Final Footer */}
                    <footer className="bg-gradient-to-br from-pink-950 to-black rounded-[5rem] p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            transition={{ duration: 1.5, type: "spring" }}
                        >
                            <Palette className="mx-auto text-pink-400" size={100} />
                        </motion.div>
                        <h3 className="text-7xl font-black text-white relative z-10 leading-none tracking-tighter">
                            Architect Your <br />
                            Color Legacy.
                        </h3>
                        <p className="text-2xl text-pink-200/50 max-w-3xl mx-auto relative z-10 font-bold leading-relaxed">
                            Stop using "good enough" transitions. Start building the future of digital light with the world's most comprehensive architectural resource.
                        </p>
                        <div className="flex flex-col md:flex-row gap-10 justify-center relative z-10 pt-12">
                            <Link
                                href="/tools/gradient-generator"
                                className="px-16 py-8 bg-white text-pink-950 rounded-[3rem] text-2xl font-black transition-all transform hover:scale-110 hover:shadow-[0_0_80px_rgba(255,255,255,0.3)] shadow-2xl"
                            >
                                Open Playground [v4.0]
                            </Link>
                            <Link
                                href="/blog"
                                className="px-16 py-8 bg-pink-600 text-white rounded-[3rem] text-2xl font-black transition-all transform hover:scale-110 shadow-2xl hover:bg-pink-500"
                            >
                                Explorer Theory
                            </Link>
                        </div>
                    </footer>
                </article>
            </div>
        </>
    );
}

function FeatureItem({ text }) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
            <p className="text-gray-700 text-lg">{text}</p>
        </div>
    );
}

function GradientExample({ gradient, title, description }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="space-y-3 group cursor-pointer"
        >
            <div
                className="h-32 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ background: gradient }}
            />
            <div className="space-y-1">
                <h4 className="font-bold text-gray-900">{title}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </motion.div>
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

function TrendCard({ title, description, gradient }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="space-y-4 group"
        >
            <div
                className="h-40 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                style={{ background: gradient }}
            />
            <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
}

function ToolLink({ href, title, description }) {
    return (
        <Link href={href} className="block group">
            <div className="p-6 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">{title}</h3>
                        <p className="text-gray-400">{description}</p>
                    </div>
                    <ArrowLeft className="rotate-180 text-gray-400 group-hover:text-pink-400 group-hover:translate-x-2 transition-all" size={24} />
                </div>
            </div>
        </Link>
    );
}
