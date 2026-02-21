import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Accessibility, Sparkles, CheckCircle, AlertTriangle, Type, Ghost, Target, Info, ShieldCheck, Sun, Moon } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function ContrastAccessibilityGuide() {
    return (
        <>
            <SEO
                title="The Designer's Guide to Color Contrast: Balancing Aesthetics and Accessibility"
                description="Master the art of accessible design. Learn about WCAG 2.2, contrast ratios, and how to design beautiful, readable interfaces in both light and dark mode."
                canonicalUrl="/blog/how-contrast-affects-readability-web-design"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "The Designer's Guide to Color Contrast: Balancing Aesthetics and Accessibility",
                    "description": "A deep dive into the critical role of contrast in UI/UX design, covering accessibility standards, perceived luminance, and practical toolkit for designers.",
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
                        "@id": "https://colorverse.online/blog/how-contrast-affects-readability-web-design"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 text-sm font-bold text-teal-600"
                    >
                        <ShieldCheck size={16} />
                        <span>Accessibility First</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
                    >
                        The Designer's Guide <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                            to Color Contrast
                        </span>
                        <div className="text-2xl md:text-3xl mt-4 font-bold text-gray-400 tracking-normal">
                            Balancing Aesthetics and Accessibility
                        </div>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Aesthetics shouldn't come at the cost of inclusion. Learn how to meet WCAG 2.2 standards without sacrificing premium visual design.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-4 text-sm text-gray-500"
                    >
                        <span>By <Link href="/about" className="text-teal-600 font-semibold hover:underline">Divyanshu Rawat</Link></span>
                        <span>•</span>
                        <span>February 21, 2026</span>
                        <span>•</span>
                        <span>22 min read</span>
                    </motion.div>
                </header>

                <article className="prose prose-lg max-w-none space-y-16">
                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full" />
                            The Hidden Psychology of Clarity
                        </h2>
                        <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                            <p>
                                When we talk about contrast, we often talk about numbers and ratios. But for the user, contrast is about <strong>trust</strong>. When an interface is easy to read, the user feels comfortable and in control. When text is faint or hard to distinguish, it creates subtle cognitive friction—a feeling that the site is "difficult" even if they can't pinpoint why.
                            </p>
                            <p>
                                Understanding contrast isn't just about meeting laws; it's about optimizing the speed at which a user can scan, understand, and act upon your content.
                            </p>
                        </div>
                    </section>

                    <section className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 shadow-inner">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <Accessibility className="text-teal-600" />
                            Deciphering WCAG 2.2
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">Standard Text (Level AA)</h4>
                                <div className="bg-white p-6 rounded-2xl border border-teal-100 flex items-center justify-between">
                                    <span className="text-gray-900 font-bold">Requirement</span>
                                    <span className="text-teal-600 font-black text-2xl">4.5:1</span>
                                </div>
                                <p className="text-sm text-gray-600">This is the "gold standard" for most web content. It ensures that users with 20/40 vision can read your body text clearly.</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-gray-900">Large Text / UI Icons</h4>
                                <div className="bg-white p-6 rounded-2xl border border-teal-100 flex items-center justify-between">
                                    <span className="text-gray-900 font-bold">Requirement</span>
                                    <span className="text-teal-600 font-black text-2xl">3.0:1</span>
                                </div>
                                <p className="text-sm text-gray-600">Headers (over 18pt) and graphical objects (like borders and icons) have a lower threshold because their size makes them inherently easier to see.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <Moon className="text-indigo-600" />
                            Contrast in the Dark
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Designing for Dark Mode introduces unique challenges. High contrast (Pure White on Pure Black) can actually lead to <strong>"halation"</strong>—where the text appears to bleed or glow into the background for users with astigmatism.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-700 space-y-4">
                                <h4 className="text-white font-bold">The Better Way</h4>
                                <div className="p-4 bg-slate-800 rounded-xl text-slate-300">
                                    Using an off-white (#E2E8F0) on a deep charcoal (#0F172A) provides a 15:1 ratio while remaining comfortable for long-term reading.
                                </div>
                                <div className="inline-flex items-center gap-2 text-emerald-400 text-sm font-bold">
                                    <CheckCircle size={16} /> RECOMMENDED
                                </div>
                            </div>
                            <div className="bg-black p-8 rounded-3xl border border-red-900/30 space-y-4">
                                <h4 className="text-white font-bold">The Harsh Way</h4>
                                <div className="p-4 bg-black rounded-xl text-white">
                                    Pure white text on pure black background creates extreme visual vibration and eye fatigue over time.
                                </div>
                                <div className="inline-flex items-center gap-2 text-red-500 text-sm font-bold">
                                    <AlertTriangle size={16} /> CAUTION
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <Target className="text-orange-500" size={32} />
                            APCA: The Future of Contrast
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            The next generation of accessibility standards (WCAG 3.0) will likely move away from the simple 4.5:1 math and adopt the <strong>APCA (Advanced Perceptual Contrast Algorithm)</strong>.
                        </p>
                        <div className="bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100 flex gap-6 items-start">
                            <Info className="text-orange-600 shrink-0" size={32} />
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">Why APCA is Better</h4>
                                <p className="m-0 text-gray-700">Unlike current math, APCA takes into account the "context" of the color. It knows that dark text on light backgrounds is perceived differently than light text on dark backgrounds.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-4xl font-bold text-gray-900">Checklist: Contrast Verification</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-lg space-y-2">
                                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black">1</div>
                                <h5 className="font-bold text-gray-900">Text on Images</h5>
                                <p className="text-sm text-gray-600">Never place text directly on raw photos. Use a 40% opaque overlay.</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-lg space-y-2">
                                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black">2</div>
                                <h5 className="font-bold text-gray-900">Active States</h5>
                                <p className="text-sm text-gray-600">Buttons must have distinct focus, hover, and press states that meet 3:1 contrast.</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-lg space-y-2">
                                <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center font-black">3</div>
                                <h5 className="font-bold text-gray-900">Color Blindness</h5>
                                <p className="text-sm text-gray-600">Simulate Protanopia and Deuteranopia to ensure critical info isn't lost.</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-teal-900 rounded-[3rem] p-12 text-center text-white space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
                        <h2 className="text-5xl font-bold relative z-10">Design with Purpose</h2>
                        <p className="text-2xl opacity-90 max-w-2xl mx-auto relative z-10">
                            Build products that everyone can enjoy. Use our professional tools to verify your contrast and colors.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap relative z-10">
                            <Link href="/gradient-generator" className="px-10 py-5 bg-teal-500 text-white rounded-full font-extrabold shadow-2xl hover:bg-teal-400 transition-all hover:-translate-y-1">
                                Check My Design
                            </Link>
                            <Link href="/color-shades" className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full font-extrabold hover:bg-white/20 transition-all">
                                Get Accessible Shades
                            </Link>
                        </div>
                    </section>
                </article>
            </div>
        </>
    );
}
