import { motion } from 'framer-motion';
import { ArrowLeft, Thermometer, Sun, Snowflake, Zap, CheckCircle, Palette, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function WarmCoolColorsGuide() {
    return (
        <>
            <SEO
                title="Warm vs Cool Colors: When to Use Each - Complete Guide"
                description="Master the difference between warm and cool colors. Learn when to use each type, how they affect emotions, and practical strategies for combining them in your designs."
                canonicalUrl="/blog/warm-vs-cool-colors-when-to-use-each"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "Warm vs Cool Colors: When to Use Each",
                    "description": "A comprehensive guide to understanding warm and cool colors, their psychological effects, and when to use each type in design.",
                    "author": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "url": "https://colorverse.online/about"
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
                        "@id": "https://colorverse.online/blog/warm-vs-cool-colors-when-to-use-each"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-blue-50 border border-orange-100 text-sm font-bold text-orange-600"
                    >
                        <Thermometer size={16} />
                        <span>Color Theory</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        Warm vs Cool Colors: When to Use Each
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Master the temperature of colors and learn how to use warm and cool tones strategically in your designs.
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
                        <span>13 min read</span>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 gap-4 h-48 rounded-[3rem] overflow-hidden shadow-2xl"
                >
                    <div className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400 flex items-center justify-center">
                        <div className="text-center text-white space-y-2">
                            <Sun size={48} className="mx-auto opacity-90" />
                            <p className="text-lg font-bold opacity-90">Warm Colors</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400 flex items-center justify-center">
                        <div className="text-center text-white space-y-2">
                            <Snowflake size={48} className="mx-auto opacity-90" />
                            <p className="text-lg font-bold opacity-90">Cool Colors</p>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none space-y-12">

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-orange-500 to-blue-500 rounded-full" />
                            Understanding Color Temperature
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Color temperature is one of the most fundamental concepts in color theory, yet it's often misunderstood or overlooked. The "temperature" of a color refers to the psychological warmth or coolness it evokes, not its actual physical temperature.
                            </p>
                            <p>
                                This concept originates from our natural associations: warm colors remind us of fire, sunlight, and heat, while cool colors evoke water, ice, and shade. These associations are so deeply ingrained in human psychology that they influence our emotions, perceptions, and even our physical sensations.
                            </p>
                            <p>
                                Understanding when to use warm versus cool colors can dramatically improve your designs, helping you create the right mood, guide user attention, and communicate your message more effectively. In this comprehensive guide, we'll explore everything you need to know about color temperature and how to use it strategically.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                            Warm Colors
                        </h2>

                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-[2.5rem] p-10 border border-red-100 space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Sun className="text-orange-500" size={32} />
                                <h3 className="text-2xl font-bold text-gray-900">What Are Warm Colors?</h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Warm colors are those that remind us of warmth and heat. They include red, orange, yellow, and variations of these hues. On the color wheel, warm colors occupy one half, from yellow-green through red to red-violet.
                            </p>

                            <div className="grid grid-cols-6 gap-3">
                                <WarmColorSwatch color="#DC2626" name="Red" />
                                <WarmColorSwatch color="#EA580C" name="Red-Orange" />
                                <WarmColorSwatch color="#F97316" name="Orange" />
                                <WarmColorSwatch color="#FB923C" name="Yellow-Orange" />
                                <WarmColorSwatch color="#FBBF24" name="Yellow" />
                                <WarmColorSwatch color="#FDE047" name="Yellow-Green" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Psychological Effects of Warm Colors</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <EffectCard
                                    icon="🔥"
                                    title="Energy & Excitement"
                                    description="Warm colors are stimulating and energizing. They increase heart rate and create a sense of urgency and excitement."
                                />
                                <EffectCard
                                    icon="👁️"
                                    title="Attention-Grabbing"
                                    description="Warm colors advance visually, appearing closer to the viewer. They naturally draw the eye and demand attention."
                                />
                                <EffectCard
                                    icon="😊"
                                    title="Optimism & Happiness"
                                    description="Associated with sunshine and warmth, these colors evoke positive emotions, cheerfulness, and optimism."
                                />
                                <EffectCard
                                    icon="🍔"
                                    title="Appetite Stimulation"
                                    description="Warm colors, especially red and orange, are known to stimulate appetite, making them popular in food branding."
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <Zap className="text-orange-500" size={28} />
                                When to Use Warm Colors
                            </h3>

                            <div className="space-y-3">
                                <UseCase
                                    title="Call-to-Action Buttons"
                                    description="Warm colors, especially red and orange, create urgency and encourage clicks. Perfect for 'Buy Now,' 'Sign Up,' or 'Get Started' buttons."
                                    example="E-commerce checkout buttons, newsletter signups, limited-time offers"
                                />
                                <UseCase
                                    title="Food & Beverage Brands"
                                    description="Warm colors stimulate appetite and create a welcoming, energetic atmosphere."
                                    example="Restaurant websites, food delivery apps, snack brands"
                                />
                                <UseCase
                                    title="Energy & Sports Brands"
                                    description="Convey excitement, passion, and high energy. Perfect for active, dynamic brands."
                                    example="Fitness apps, sports teams, energy drinks"
                                />
                                <UseCase
                                    title="Sale & Clearance Promotions"
                                    description="Create urgency and grab attention for time-sensitive offers."
                                    example="Flash sales, clearance banners, limited-time deals"
                                />
                                <UseCase
                                    title="Children's Products"
                                    description="Bright, warm colors appeal to children and create a playful, fun atmosphere."
                                    example="Toy websites, kids' apps, educational platforms"
                                />
                                <UseCase
                                    title="Creative & Artistic Brands"
                                    description="Express creativity, passion, and innovation."
                                    example="Design agencies, art galleries, creative portfolios"
                                />
                            </div>
                        </div>

                        <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                            <h4 className="text-lg font-bold text-red-900 mb-3">⚠️ Cautions with Warm Colors</h4>
                            <ul className="space-y-2 text-red-800">
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Can be overwhelming or aggressive if overused</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>May increase stress or anxiety in large amounts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Not ideal for calm, professional, or trustworthy brands</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Can appear cheap or unprofessional if not balanced properly</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                            Cool Colors
                        </h2>

                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-[2.5rem] p-10 border border-blue-100 space-y-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Snowflake className="text-blue-500" size={32} />
                                <h3 className="text-2xl font-bold text-gray-900">What Are Cool Colors?</h3>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-lg">
                                Cool colors are those that evoke coolness and calmness. They include blue, green, purple, and variations of these hues. On the color wheel, cool colors occupy the opposite half from warm colors, from yellow-green through blue to red-violet.
                            </p>

                            <div className="grid grid-cols-6 gap-3">
                                <CoolColorSwatch color="#84CC16" name="Yellow-Green" />
                                <CoolColorSwatch color="#10B981" name="Green" />
                                <CoolColorSwatch color="#14B8A6" name="Blue-Green" />
                                <CoolColorSwatch color="#06B6D4" name="Cyan" />
                                <CoolColorSwatch color="#3B82F6" name="Blue" />
                                <CoolColorSwatch color="#8B5CF6" name="Purple" />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Psychological Effects of Cool Colors</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <EffectCard
                                    icon="🧘"
                                    title="Calm & Relaxation"
                                    description="Cool colors are soothing and calming. They decrease heart rate and create a sense of tranquility and peace."
                                />
                                <EffectCard
                                    icon="🤝"
                                    title="Trust & Professionalism"
                                    description="Especially blue, cool colors convey reliability, security, and professionalism. They're favored by corporate brands."
                                />
                                <EffectCard
                                    icon="🌿"
                                    title="Nature & Health"
                                    description="Green evokes nature, growth, and health. It's associated with environmental consciousness and wellness."
                                />
                                <EffectCard
                                    icon="📏"
                                    title="Receding & Spacious"
                                    description="Cool colors recede visually, appearing farther away. They create a sense of space and depth."
                                />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                                <Zap className="text-blue-500" size={28} />
                                When to Use Cool Colors
                            </h3>

                            <div className="space-y-3">
                                <UseCase
                                    title="Corporate & Business Websites"
                                    description="Cool colors, especially blue, convey professionalism, trust, and reliability."
                                    example="Financial services, law firms, consulting agencies"
                                />
                                <UseCase
                                    title="Healthcare & Medical Services"
                                    description="Create a calming, clean, and trustworthy environment."
                                    example="Hospitals, clinics, health apps, wellness brands"
                                />
                                <UseCase
                                    title="Technology & Software"
                                    description="Convey innovation, intelligence, and reliability."
                                    example="SaaS products, tech startups, software companies"
                                />
                                <UseCase
                                    title="Environmental & Eco-Friendly Brands"
                                    description="Green represents nature, sustainability, and environmental consciousness."
                                    example="Eco-products, organic brands, environmental organizations"
                                />
                                <UseCase
                                    title="Spa & Wellness"
                                    description="Create a relaxing, peaceful atmosphere that promotes well-being."
                                    example="Spas, yoga studios, meditation apps"
                                />
                                <UseCase
                                    title="Social Media & Communication"
                                    description="Blue is associated with communication, connection, and trust."
                                    example="Social networks, messaging apps, communication tools"
                                />
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                            <h4 className="text-lg font-bold text-blue-900 mb-3">⚠️ Cautions with Cool Colors</h4>
                            <ul className="space-y-2 text-blue-800">
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Can feel cold, distant, or impersonal if overused</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>May appear boring or uninspiring without warm accents</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Blue suppresses appetite (avoid for food brands)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="shrink-0">•</span>
                                    <span>Can evoke sadness or melancholy in some contexts</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            Combining Warm and Cool Colors
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                While understanding warm and cool colors individually is important, the real magic happens when you combine them strategically. The contrast between warm and cool creates visual interest, depth, and balance.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <CombinationCard
                                title="Complementary Contrast"
                                description="Use warm and cool colors that are opposite on the color wheel for maximum contrast and visual impact."
                                example="Blue (cool) with Orange (warm), Purple (cool) with Yellow (warm)"
                                colors={['#3B82F6', '#F97316', '#FFFFFF']}
                                bestFor="Call-to-action buttons, hero sections, attention-grabbing elements"
                            />

                            <CombinationCard
                                title="Dominant Temperature with Accent"
                                description="Use primarily cool colors with warm accents (or vice versa) to create balance and guide attention."
                                example="Cool blue interface with warm orange buttons"
                                colors={['#3B82F6', '#60A5FA', '#93C5FD', '#F97316']}
                                bestFor="Professional websites that need occasional emphasis, balanced layouts"
                            />

                            <CombinationCard
                                title="Split-Complementary"
                                description="Use one warm color with two cool colors (or vice versa) for a sophisticated, balanced palette."
                                example="Orange with blue and green, or blue with red and yellow"
                                colors={['#F97316', '#3B82F6', '#10B981', '#F3F4F6']}
                                bestFor="Complex designs, multi-section websites, sophisticated brands"
                            />

                            <CombinationCard
                                title="Analogous with Temperature Shift"
                                description="Use colors next to each other on the wheel, transitioning from warm to cool (or vice versa)."
                                example="Red to orange to yellow-green, or blue to purple to pink"
                                colors={['#EF4444', '#F97316', '#FBBF24', '#84CC16']}
                                bestFor="Gradients, smooth transitions, nature-inspired designs"
                            />
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-[2.5rem] p-10 border border-indigo-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Palette className="text-indigo-500" size={32} />
                            Quick Reference Guide
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b-2 border-indigo-200">
                                        <th className="p-4 font-bold text-gray-900">Aspect</th>
                                        <th className="p-4 font-bold text-gray-900">Warm Colors</th>
                                        <th className="p-4 font-bold text-gray-900">Cool Colors</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Colors</td>
                                        <td className="p-4">Red, Orange, Yellow</td>
                                        <td className="p-4">Blue, Green, Purple</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Emotions</td>
                                        <td className="p-4">Energy, excitement, passion</td>
                                        <td className="p-4">Calm, trust, professionalism</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Visual Effect</td>
                                        <td className="p-4">Advance, appear closer</td>
                                        <td className="p-4">Recede, create depth</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Energy Level</td>
                                        <td className="p-4">High, stimulating</td>
                                        <td className="p-4">Low, calming</td>
                                    </tr>
                                    <tr className="border-b border-indigo-100">
                                        <td className="p-4 font-semibold">Best For</td>
                                        <td className="p-4">CTAs, food, energy brands</td>
                                        <td className="p-4">Corporate, health, tech</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Avoid For</td>
                                        <td className="p-4">Professional services, calm spaces</td>
                                        <td className="p-4">Food brands, urgent actions</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            Practical Tips for Using Color Temperature
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <TipCard
                                number="1"
                                title="Consider Your Industry"
                                description="Different industries have established color expectations. Tech and finance lean cool, while food and entertainment lean warm."
                            />
                            <TipCard
                                number="2"
                                title="Use Temperature for Hierarchy"
                                description="Warm colors naturally draw attention. Use them for important elements like CTAs, while cool colors work for backgrounds."
                            />
                            <TipCard
                                number="3"
                                title="Balance is Key"
                                description="Don't use only warm or only cool. A touch of the opposite temperature creates visual interest and prevents monotony."
                            />
                            <TipCard
                                number="4"
                                title="Test with Your Audience"
                                description="Cultural and personal preferences vary. A/B test different temperature combinations to see what resonates."
                            />
                            <TipCard
                                number="5"
                                title="Consider Context"
                                description="The same color can feel warm or cool depending on surrounding colors. A yellow-green might feel warm next to blue, cool next to red."
                            />
                            <TipCard
                                number="6"
                                title="Use Neutrals as Buffers"
                                description="Gray, white, and black can help balance warm and cool colors, preventing clashes and creating breathing room."
                            />
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full" />
                            Conclusion
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Understanding the difference between warm and cool colors—and knowing when to use each—is a fundamental skill in design. Color temperature affects not just aesthetics, but also user emotions, perceptions, and actions.
                            </p>
                            <p>
                                Warm colors energize, excite, and grab attention. They're perfect for calls-to-action, food brands, and creating urgency. Cool colors calm, build trust, and create space. They're ideal for professional services, healthcare, and technology.
                            </p>
                            <p>
                                But the real power comes from combining warm and cool strategically. Use contrast to guide attention, create depth with receding cool colors and advancing warm ones, and balance your palette to prevent monotony or overwhelm.
                            </p>
                            <p>
                                Remember, these are guidelines, not rules. The best color choices depend on your specific brand, audience, and goals. Experiment, test, and refine until you find the perfect temperature balance for your design.
                            </p>
                            <p>
                                Ready to experiment with warm and cool colors? Try our <Link href="/gradient-generator" className="text-purple-600 font-bold hover:underline">Gradient Generator</Link> to create stunning color combinations, or use our <Link href="/color-shades" className="text-purple-600 font-bold hover:underline">Color Shades Tool</Link> to explore different temperatures of your favorite colors!
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Master Color Temperature!</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Use our tools to experiment with warm and cool colors and create perfectly balanced designs.
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

function WarmColorSwatch({ color, name }) {
    return (
        <div className="space-y-2">
            <div className="h-20 rounded-xl shadow-md" style={{ backgroundColor: color }} />
            <p className="text-xs font-semibold text-gray-700 text-center">{name}</p>
        </div>
    );
}

function CoolColorSwatch({ color, name }) {
    return (
        <div className="space-y-2">
            <div className="h-20 rounded-xl shadow-md" style={{ backgroundColor: color }} />
            <p className="text-xs font-semibold text-gray-700 text-center">{name}</p>
        </div>
    );
}

function EffectCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
            <div className="text-4xl">{icon}</div>
            <h4 className="text-lg font-bold text-gray-900">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

function UseCase({ title, description, example }) {
    return (
        <div className="border-l-4 border-purple-500 pl-4 py-2">
            <h4 className="font-bold text-gray-900 mb-1">{title}</h4>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-sm text-gray-600"><strong>Examples:</strong> {example}</p>
        </div>
    );
}

function CombinationCard({ title, description, example, colors, bestFor }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
            <h4 className="text-xl font-bold text-gray-900">{title}</h4>
            <p className="text-gray-700">{description}</p>

            <div className="flex gap-2">
                {colors.map((color, index) => (
                    <div key={index} className="h-16 flex-1 rounded-lg" style={{ backgroundColor: color }} />
                ))}
            </div>

            <div className="space-y-2">
                <p className="text-sm text-gray-600"><strong>Example:</strong> {example}</p>
                <p className="text-sm text-gray-600"><strong>Best For:</strong> {bestFor}</p>
            </div>
        </div>
    );
}

function TipCard({ number, title, description }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all space-y-3">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 text-white font-bold flex items-center justify-center shrink-0">
                    {number}
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-bold text-gray-900">{title}</h4>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
}
