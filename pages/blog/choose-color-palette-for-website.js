import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Sparkles, Zap, CheckCircle, Target, Eye, Layers } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function ColorPaletteGuide() {
    return (
        <>
            <SEO
                title="How to Choose the Right Color Palette for Your Website"
                description="Learn how to create perfect color palettes for your website. Discover color theory, practical strategies, and proven techniques for choosing harmonious color combinations."
                canonicalUrl="/blog/choose-color-palette-for-website"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "How to Choose the Right Color Palette for Your Website",
                    "description": "A comprehensive guide to selecting the perfect color palette for your website using color theory, psychology, and practical design principles.",
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
                        "@id": "https://colorverse.online/blog/choose-color-palette-for-website"
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-100 text-sm font-bold text-pink-600"
                    >
                        <Palette size={16} />
                        <span>Design Guide</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        How to Choose the Right Color Palette for Your Website
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Master the art of creating harmonious, effective color palettes that elevate your web design.
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
                        <span>14 min read</span>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-5 gap-2 h-32 rounded-[2rem] overflow-hidden shadow-2xl"
                >
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-700" />
                    <div className="bg-gradient-to-br from-purple-500 to-purple-600" />
                    <div className="bg-gradient-to-br from-pink-500 to-pink-600" />
                    <div className="bg-gradient-to-br from-orange-400 to-orange-500" />
                    <div className="bg-gradient-to-br from-amber-300 to-amber-400" />
                </motion.div>

                <article className="prose prose-lg max-w-none space-y-12">

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full" />
                            Introduction
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Choosing the right color palette is one of the most critical decisions in web design. Colors don't just make your website look pretty—they communicate your brand identity, influence user emotions, guide attention, and can even impact conversion rates.
                            </p>
                            <p>
                                Yet, many designers struggle with color selection. With millions of possible color combinations, how do you choose the right ones? The answer lies in understanding color theory, knowing your brand and audience, and following proven design principles.
                            </p>
                            <p>
                                In this comprehensive guide, we'll walk you through everything you need to know about creating effective color palettes for websites, from fundamental color theory to practical, step-by-step strategies you can apply immediately.
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 border border-blue-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Zap className="text-blue-500" size={32} />
                            Why Color Palettes Matter
                        </h2>

                        <div className="space-y-4">
                            <FeatureItem text="90% of snap judgments about products are based on color alone" />
                            <FeatureItem text="Consistent color usage increases brand recognition by 80%" />
                            <FeatureItem text="The right color palette can increase conversion rates by up to 24%" />
                            <FeatureItem text="Colors influence 85% of consumers' purchase decisions" />
                            <FeatureItem text="Well-chosen colors improve user experience and reduce bounce rates" />
                            <FeatureItem text="Color creates visual hierarchy and guides user attention" />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                            Understanding Color Theory Basics
                        </h2>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">The Color Wheel</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                The color wheel is your fundamental tool for understanding color relationships. It consists of 12 colors arranged in a circle, showing how colors relate to each other.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <ColorTypeCard
                                    title="Primary Colors"
                                    colors={['#EF4444', '#F59E0B', '#3B82F6']}
                                    description="Red, Yellow, Blue - Cannot be created by mixing other colors"
                                />
                                <ColorTypeCard
                                    title="Secondary Colors"
                                    colors={['#10B981', '#F97316', '#8B5CF6']}
                                    description="Green, Orange, Purple - Created by mixing two primary colors"
                                />
                                <ColorTypeCard
                                    title="Tertiary Colors"
                                    colors={['#EC4899', '#14B8A6', '#6366F1']}
                                    description="Created by mixing primary and secondary colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-gray-900">Color Harmony Schemes</h3>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                Color harmony refers to pleasing arrangements of colors. Here are the most popular schemes:
                            </p>

                            <ColorSchemeCard
                                title="Monochromatic"
                                description="Uses variations of a single hue with different shades, tints, and tones. Creates a cohesive, harmonious look."
                                colors={['hsl(229, 76%, 30%)', 'hsl(229, 76%, 50%)', 'hsl(229, 76%, 70%)', 'hsl(229, 76%, 90%)']}
                                pros={["Very harmonious and pleasing", "Easy to create", "Professional and clean"]}
                                cons={["Can lack contrast", "May be boring if not varied enough"]}
                                bestFor="Minimalist designs, professional services, elegant brands"
                            />

                            <ColorSchemeCard
                                title="Analogous"
                                description="Uses colors that are next to each other on the color wheel. Creates serene and comfortable designs."
                                colors={['hsl(200, 70%, 50%)', 'hsl(220, 70%, 50%)', 'hsl(240, 70%, 50%)', 'hsl(260, 70%, 50%)']}
                                pros={["Harmonious and natural", "Easy on the eyes", "Versatile"]}
                                cons={["Can lack contrast", "Needs careful balance"]}
                                bestFor="Nature-related sites, calming designs, cohesive layouts"
                            />

                            <ColorSchemeCard
                                title="Complementary"
                                description="Uses colors opposite each other on the color wheel. Creates high contrast and vibrant looks."
                                colors={['hsl(229, 76%, 66%)', 'hsl(49, 76%, 66%)', '#FFFFFF', '#000000']}
                                pros={["High contrast", "Vibrant and energetic", "Draws attention"]}
                                cons={["Can be jarring if overused", "Difficult to balance"]}
                                bestFor="Call-to-action buttons, sports brands, energetic designs"
                            />

                            <ColorSchemeCard
                                title="Triadic"
                                description="Uses three colors equally spaced on the color wheel. Creates vibrant, balanced palettes."
                                colors={['hsl(0, 70%, 50%)', 'hsl(120, 70%, 50%)', 'hsl(240, 70%, 50%)', '#F3F4F6']}
                                pros={["Vibrant yet balanced", "Offers variety", "Dynamic"]}
                                cons={["Can be overwhelming", "Requires careful balance"]}
                                bestFor="Playful brands, creative agencies, children's sites"
                            />

                            <ColorSchemeCard
                                title="Split-Complementary"
                                description="Uses a base color and two colors adjacent to its complement. Offers contrast with less tension."
                                colors={['hsl(229, 76%, 66%)', 'hsl(29, 76%, 66%)', 'hsl(69, 76%, 66%)', '#FFFFFF']}
                                pros={["Good contrast", "More subtle than complementary", "Versatile"]}
                                cons={["Can be complex to balance", "Requires refinement"]}
                                bestFor="Sophisticated designs, modern websites, balanced layouts"
                            />
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            The 60-30-10 Rule
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                The 60-30-10 rule is a timeless interior design principle that works perfectly for web design. It creates visual balance and hierarchy by distributing colors in specific proportions:
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <RuleCard
                                percentage="60%"
                                title="Dominant Color"
                                color="#F3F4F6"
                                description="Your main color, usually a neutral. Used for backgrounds and large areas."
                                examples={["Page backgrounds", "Large sections", "Main containers"]}
                            />
                            <RuleCard
                                percentage="30%"
                                title="Secondary Color"
                                color="#667eea"
                                description="Your brand or accent color. Supports the dominant color and adds interest."
                                examples={["Headers", "Sidebars", "Featured sections", "Navigation"]}
                            />
                            <RuleCard
                                percentage="10%"
                                title="Accent Color"
                                color="#F59E0B"
                                description="Your pop of color. Used sparingly for emphasis and calls-to-action."
                                examples={["Buttons", "Links", "Highlights", "Icons"]}
                            />
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Example Application</h4>
                            <div className="space-y-4">
                                <div className="h-32 bg-gray-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-100" style={{ width: '60%' }} />
                                    <div className="absolute inset-0 left-[60%] bg-indigo-500" style={{ width: '30%' }} />
                                    <div className="absolute inset-0 left-[90%] bg-amber-500" style={{ width: '10%' }} />
                                    <div className="relative z-10 text-gray-900 font-bold">60% - 30% - 10%</div>
                                </div>
                                <p className="text-gray-600 text-sm">This visual representation shows how the 60-30-10 rule creates balanced, harmonious designs.</p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
                            Step-by-Step: Creating Your Color Palette
                        </h2>

                        <StepCard
                            number="1"
                            title="Define Your Brand Personality"
                            description="Before choosing colors, clearly define what your brand represents."
                            content={
                                <div className="space-y-3">
                                    <p className="text-gray-700">Ask yourself:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>What emotions should your brand evoke?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>What are 5-7 adjectives that describe your brand?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Who is your target audience?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>What makes you different from competitors?</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />

                        <StepCard
                            number="2"
                            title="Research Your Industry"
                            description="Look at successful competitors and industry leaders to understand color trends and expectations."
                            content={
                                <div className="space-y-3">
                                    <p className="text-gray-700">Common industry color associations:</p>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <IndustryColor industry="Tech/Finance" colors={['#3B82F6', '#6366F1']} reason="Trust, professionalism" />
                                        <IndustryColor industry="Health/Wellness" colors={['#10B981', '#14B8A6']} reason="Growth, healing" />
                                        <IndustryColor industry="Food/Restaurant" colors={['#EF4444', '#F97316']} reason="Appetite, energy" />
                                        <IndustryColor industry="Luxury/Fashion" colors={['#000000', '#8B5CF6']} reason="Elegance, sophistication" />
                                    </div>
                                </div>
                            }
                        />

                        <StepCard
                            number="3"
                            title="Choose Your Primary Color"
                            description="Select one main color that represents your brand. This will be the foundation of your palette."
                            content={
                                <div className="space-y-3">
                                    <p className="text-gray-700">Consider:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Color psychology and emotional associations</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Your brand personality and values</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Target audience preferences</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Differentiation from competitors</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />

                        <StepCard
                            number="4"
                            title="Build Supporting Colors"
                            description="Use color harmony rules to create a cohesive palette around your primary color."
                            content={
                                <div className="space-y-3">
                                    <p className="text-gray-700">Typical palette structure:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Primary:</strong> Your main brand color</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Secondary:</strong> 1-2 supporting colors</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Accent:</strong> 1 contrasting color for CTAs</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Neutrals:</strong> 3-5 shades of gray/white/black</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />

                        <StepCard
                            number="5"
                            title="Create Tints, Shades, and Tones"
                            description="Expand your palette by creating variations of your main colors for different use cases."
                            content={
                                <div className="space-y-3">
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-semibold text-gray-900">Tints (add white):</p>
                                            <div className="flex gap-2 mt-2">
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 90%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 80%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 70%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 66%)' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Shades (add black):</p>
                                            <div className="flex gap-2 mt-2">
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 66%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 50%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 35%)' }} />
                                                <div className="h-16 flex-1 rounded-lg" style={{ backgroundColor: 'hsl(229, 76%, 20%)' }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                        />

                        <StepCard
                            number="6"
                            title="Test for Accessibility"
                            description="Ensure your color palette meets WCAG accessibility standards for contrast ratios."
                            content={
                                <div className="space-y-3">
                                    <p className="text-gray-700">Minimum contrast ratios:</p>
                                    <ul className="space-y-2 text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Normal text:</strong> 4.5:1 minimum</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>Large text:</strong> 3:1 minimum</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span><strong>UI components:</strong> 3:1 minimum</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle className="text-orange-500 shrink-0 mt-1" size={16} />
                                            <span>Test with color blindness simulators</span>
                                        </li>
                                    </ul>
                                </div>
                            }
                        />
                    </section>

                    <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[2.5rem] p-10 border border-purple-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Sparkles className="text-purple-500" size={32} />
                            Tools for Creating Color Palettes
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ToolCard
                                name="ColorVerse Gradient Generator"
                                description="Create beautiful gradients and extract color palettes"
                                link="/gradient-generator"
                                internal={true}
                            />
                            <ToolCard
                                name="ColorVerse Color Shades"
                                description="Generate tints and shades for any color"
                                link="/color-shades"
                                internal={true}
                            />
                            <ToolCard
                                name="Adobe Color"
                                description="Professional color wheel and harmony rules"
                                link="https://color.adobe.com"
                                internal={false}
                            />
                            <ToolCard
                                name="Coolors"
                                description="Fast color palette generator"
                                link="https://coolors.co"
                                internal={false}
                            />
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                            Common Mistakes to Avoid
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <MistakeCard
                                title="Using Too Many Colors"
                                description="Limit your palette to 3-5 main colors plus neutrals. Too many colors create visual chaos."
                                solution="Stick to the 60-30-10 rule and use variations of your main colors instead of adding new ones."
                            />
                            <MistakeCard
                                title="Ignoring Accessibility"
                                description="Low contrast makes content unreadable for many users, especially those with visual impairments."
                                solution="Always test contrast ratios and use accessibility checkers before finalizing your palette."
                            />
                            <MistakeCard
                                title="Following Trends Blindly"
                                description="Trendy colors may not align with your brand or stand the test of time."
                                solution="Choose colors based on your brand identity first, then incorporate trends subtly if appropriate."
                            />
                            <MistakeCard
                                title="Not Testing on Real Devices"
                                description="Colors can look different on various screens and in different lighting conditions."
                                solution="Test your palette on multiple devices, browsers, and in different environments."
                            />
                            <MistakeCard
                                title="Forgetting About Color Blindness"
                                description="About 8% of men and 0.5% of women have some form of color blindness."
                                solution="Don't rely on color alone to convey information. Use icons, patterns, and text labels."
                            />
                            <MistakeCard
                                title="Inconsistent Application"
                                description="Using colors randomly without a system creates a disjointed experience."
                                solution="Create a style guide documenting when and how to use each color in your palette."
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
                                Choosing the right color palette for your website is both an art and a science. It requires understanding color theory, knowing your brand and audience, and following proven design principles. But most importantly, it requires testing and iteration.
                            </p>
                            <p>
                                Don't be afraid to experiment with different combinations. Use the tools and techniques we've covered to create multiple options, then test them with real users to see what resonates best. Remember that your color palette isn't set in stone—it can evolve as your brand grows and matures.
                            </p>
                            <p>
                                The perfect color palette is one that not only looks beautiful but also serves your business goals, communicates your brand values, and creates an excellent user experience. Take your time, be intentional with your choices, and don't hesitate to seek feedback.
                            </p>
                            <p>
                                Ready to create your perfect color palette? Try our <Link href="/gradient-generator" className="text-purple-600 font-bold hover:underline">Gradient Generator</Link> and <Link href="/color-shades" className="text-purple-600 font-bold hover:underline">Color Shades Tool</Link> to start experimenting!
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Create Your Perfect Palette!</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Use our free tools to experiment with colors and build harmonious palettes for your website.
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

function FeatureItem({ text }) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle className="text-blue-500 shrink-0 mt-1" size={20} />
            <p className="text-gray-700 text-lg">{text}</p>
        </div>
    );
}

function ColorTypeCard({ title, colors, description }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
            <h4 className="text-lg font-bold text-gray-900">{title}</h4>
            <div className="flex gap-2">
                {colors.map((color, index) => (
                    <div key={index} className="h-16 flex-1 rounded-lg" style={{ backgroundColor: color }} />
                ))}
            </div>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
}

function ColorSchemeCard({ title, description, colors, pros, cons, bestFor }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
            <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-700">{description}</p>
            </div>

            <div className="flex gap-2">
                {colors.map((color, index) => (
                    <div key={index} className="h-20 flex-1 rounded-lg" style={{ backgroundColor: color }} />
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold text-green-700 mb-2">✓ Pros:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                        {pros.map((pro, index) => (
                            <li key={index}>• {pro}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-semibold text-red-700 mb-2">✗ Cons:</p>
                    <ul className="space-y-1 text-sm text-gray-700">
                        {cons.map((con, index) => (
                            <li key={index}>• {con}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-blue-900"><strong>Best For:</strong> {bestFor}</p>
            </div>
        </div>
    );
}

function RuleCard({ percentage, title, color, description, examples }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
            <div className="text-4xl font-bold text-gray-900">{percentage}</div>
            <div className="h-20 rounded-xl" style={{ backgroundColor: color }} />
            <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
                <p className="text-gray-700 mb-3">{description}</p>
                <p className="text-sm font-semibold text-gray-900 mb-2">Examples:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                    {examples.map((example, index) => (
                        <li key={index}>• {example}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function StepCard({ number, title, description, content }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 space-y-4">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-xl shrink-0">
                    {number}
                </div>
                <div className="flex-1 space-y-3">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                        <p className="text-gray-600 mt-1">{description}</p>
                    </div>
                    {content}
                </div>
            </div>
        </div>
    );
}

function IndustryColor({ industry, colors, reason }) {
    return (
        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-gray-900">{industry}</p>
            <div className="flex gap-2">
                {colors.map((color, index) => (
                    <div key={index} className="h-12 flex-1 rounded" style={{ backgroundColor: color }} />
                ))}
            </div>
            <p className="text-sm text-gray-600">{reason}</p>
        </div>
    );
}

function ToolCard({ name, description, link, internal }) {
    const Component = internal ? Link : 'a';
    const linkProps = internal ? { href: link } : { href: link, target: "_blank", rel: "noopener noreferrer" };

    return (
        <Component {...linkProps} className="block bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all space-y-3 group">
            <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">{name}</h4>
            <p className="text-gray-600">{description}</p>
            <div className="flex items-center gap-2 text-sm font-semibold text-purple-600">
                {internal ? 'Try it now' : 'Visit site'} <ArrowLeft className="rotate-180 group-hover:translate-x-1 transition-transform" size={16} />
            </div>
        </Component>
    );
}

function MistakeCard({ title, description, solution }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-3">
            <h4 className="text-lg font-bold text-red-600">❌ {title}</h4>
            <p className="text-gray-700">{description}</p>
            <div className="bg-green-50 rounded-lg p-4">
                <p className="text-sm text-green-900"><strong>✓ Solution:</strong> {solution}</p>
            </div>
        </div>
    );
}
