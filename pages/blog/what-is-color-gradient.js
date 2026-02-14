import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Layers, Code, Sparkles, Zap, CheckCircle } from 'lucide-react';
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
                        What Is a Color Gradient?
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
                <article className="prose prose-lg max-w-none space-y-12">

                    {/* Introduction */}
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                            Introduction to Color Gradients
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                A <strong>color gradient</strong> (also known as a color ramp or color progression) is a gradual transition between two or more colors. Unlike solid colors, gradients create smooth, flowing transitions that add depth, dimension, and visual interest to designs.
                            </p>
                            <p>
                                In the world of web design and digital art, gradients have become an essential tool for creating modern, eye-catching interfaces. They can transform a flat, boring design into something vibrant and engaging with just a few lines of CSS code.
                            </p>
                            <p>
                                Whether you're designing a website, creating a mobile app, or working on graphic design projects, understanding how to use gradients effectively can significantly enhance your creative toolkit.
                            </p>
                        </div>
                    </section>

                    {/* Why Use Gradients */}
                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 border border-blue-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Zap className="text-blue-500" size={32} />
                            Why Use Color Gradients?
                        </h2>

                        <div className="space-y-4">
                            <FeatureItem text="Add depth and dimension to flat designs" />
                            <FeatureItem text="Create visual hierarchy and guide user attention" />
                            <FeatureItem text="Make designs more modern and visually appealing" />
                            <FeatureItem text="Establish brand identity with unique color combinations" />
                            <FeatureItem text="Enhance user experience with smooth color transitions" />
                            <FeatureItem text="Stand out from competitors with distinctive visual style" />
                        </div>
                    </section>

                    {/* Types of Gradients */}
                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                            Types of Color Gradients
                        </h2>

                        {/* Linear Gradient */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">1. Linear Gradients</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Linear gradients transition colors along a straight line. They can flow in any direction: top to bottom, left to right, or at any angle you specify.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <GradientExample
                                    gradient="linear-gradient(to right, #f093fb 0%, #f5576c 100%)"
                                    title="Horizontal Linear"
                                    description="Left to Right"
                                />
                                <GradientExample
                                    gradient="linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)"
                                    title="Vertical Linear"
                                    description="Top to Bottom"
                                />
                                <GradientExample
                                    gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                    title="Diagonal Linear"
                                    description="135 Degree Angle"
                                />
                                <GradientExample
                                    gradient="linear-gradient(to right, #fa709a 0%, #fee140 100%)"
                                    title="Multi-color Linear"
                                    description="Pink to Yellow"
                                />
                            </div>
                        </div>

                        {/* Radial Gradient */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">2. Radial Gradients</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Radial gradients radiate outward from a central point, creating a circular or elliptical color transition. They're perfect for creating spotlight effects, buttons, and backgrounds.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <GradientExample
                                    gradient="radial-gradient(circle, #ee9ca7 0%, #ffdde1 100%)"
                                    title="Circular Radial"
                                    description="Center Outward"
                                />
                                <GradientExample
                                    gradient="radial-gradient(ellipse at top, #a8edea 0%, #fed6e3 100%)"
                                    title="Elliptical Radial"
                                    description="Top Position"
                                />
                            </div>
                        </div>

                        {/* Conic Gradient */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900">3. Conic Gradients</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Conic gradients rotate colors around a central point, like a color wheel. They're excellent for creating pie charts, loading spinners, and unique design elements.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <GradientExample
                                    gradient="conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #ff6b6b)"
                                    title="Rainbow Conic"
                                    description="Full Color Wheel"
                                />
                                <GradientExample
                                    gradient="conic-gradient(from 45deg, #667eea 0%, #764ba2 50%, #667eea 100%)"
                                    title="Two-tone Conic"
                                    description="Purple Rotation"
                                />
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
