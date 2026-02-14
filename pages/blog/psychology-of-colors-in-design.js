import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Heart, Zap, CheckCircle, TrendingUp, Users, Target } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function ColorPsychologyGuide() {
    return (
        <>
            <SEO
                title="The Psychology of Colors in Design - Complete Guide"
                description="Discover how colors influence emotions, behavior, and decision-making. Learn the psychological meanings of colors and how to use them effectively in your designs."
                canonicalUrl="/blog/psychology-of-colors-in-design"
            />
            <SchemaOrg
                type="Article"
                data={{
                    "headline": "The Psychology of Colors in Design",
                    "description": "A comprehensive guide to understanding color psychology and how different colors affect human emotions, behavior, and decision-making in design.",
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
                        "@id": "https://colorverse.online/blog/psychology-of-colors-in-design"
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
                        <Brain size={16} />
                        <span>Psychology</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        The Psychology of Colors in Design
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Discover how colors influence emotions, behavior, and decision-making in design.
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
                        <span>15 min read</span>
                    </motion.div>
                </header>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative h-64 rounded-[3rem] overflow-hidden shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)'
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white space-y-2">
                            <Brain size={48} className="mx-auto opacity-90" />
                            <p className="text-lg font-bold opacity-90">Colors Speak to Our Subconscious</p>
                        </div>
                    </div>
                </motion.div>

                <article className="prose prose-lg max-w-none space-y-12">

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            Understanding Color Psychology
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                Color psychology is the study of how colors affect human behavior, emotions, and decision-making. It's a powerful tool in design, marketing, and branding because colors can evoke specific feelings and influence how people perceive and interact with your content.
                            </p>
                            <p>
                                While color associations can vary across cultures and personal experiences, certain psychological responses to colors are remarkably consistent. Understanding these associations helps designers create more effective, emotionally resonant work that connects with their audience on a deeper level.
                            </p>
                            <p>
                                In this comprehensive guide, we'll explore the psychological meanings of major colors, how they influence user behavior, and practical strategies for applying color psychology in your design work.
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] p-10 border border-blue-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                            <Zap className="text-blue-500" size={32} />
                            Why Color Psychology Matters
                        </h2>

                        <div className="space-y-4">
                            <FeatureItem text="Colors can increase brand recognition by up to 80%" />
                            <FeatureItem text="93% of consumers focus on visual appearance when making purchase decisions" />
                            <FeatureItem text="Color improves comprehension and learning by 73%" />
                            <FeatureItem text="The right colors can increase conversion rates by 24%" />
                            <FeatureItem text="Colors influence 85% of shoppers' purchase decisions" />
                            <FeatureItem text="First impressions are 94% design-related, with color being a key factor" />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                            Psychology of Individual Colors
                        </h2>

                        <ColorPsychologyCard
                            color="#EF4444"
                            name="Red"
                            emotions="Passion, Energy, Urgency, Excitement"
                            description="Red is the most emotionally intense color. It stimulates faster heartbeat and breathing, making it perfect for calls-to-action and creating a sense of urgency."
                            useCases={[
                                "Sale and clearance promotions",
                                "Food and beverage brands (stimulates appetite)",
                                "Call-to-action buttons",
                                "Warning messages and alerts",
                                "Sports and energy brands"
                            ]}
                            brands="Coca-Cola, YouTube, Netflix, Target"
                            cautions="Can be overwhelming if overused. May evoke anger or danger in some contexts."
                        />

                        <ColorPsychologyCard
                            color="#3B82F6"
                            name="Blue"
                            emotions="Trust, Security, Calm, Professionalism"
                            description="Blue is the most universally liked color. It evokes feelings of trust, security, and stability, making it the top choice for corporate and financial brands."
                            useCases={[
                                "Corporate and business websites",
                                "Financial institutions and banks",
                                "Healthcare and medical services",
                                "Technology companies",
                                "Social media platforms"
                            ]}
                            brands="Facebook, Twitter, LinkedIn, PayPal, IBM"
                            cautions="Can feel cold or impersonal. Avoid in food industry (suppresses appetite)."
                        />

                        <ColorPsychologyCard
                            color="#10B981"
                            name="Green"
                            emotions="Growth, Health, Nature, Harmony"
                            description="Green represents nature, growth, and renewal. It's associated with health, tranquility, and environmental consciousness."
                            useCases={[
                                "Environmental and eco-friendly brands",
                                "Health and wellness products",
                                "Financial growth and prosperity",
                                "Organic and natural products",
                                "Outdoor and nature-related businesses"
                            ]}
                            brands="Whole Foods, Starbucks, Spotify, Android"
                            cautions="Can appear bland if not paired with complementary colors."
                        />

                        <ColorPsychologyCard
                            color="#F59E0B"
                            name="Yellow"
                            emotions="Optimism, Happiness, Warmth, Caution"
                            description="Yellow is the color of sunshine and happiness. It grabs attention and stimulates mental activity, but can be overwhelming in large amounts."
                            useCases={[
                                "Children's products and toys",
                                "Optimistic and cheerful brands",
                                "Warning and caution signs",
                                "Food brands (stimulates appetite)",
                                "Highlighting important information"
                            ]}
                            brands="McDonald's, IKEA, Snapchat, Best Buy"
                            cautions="Can cause eye strain and anxiety if overused. May appear cheap if not used carefully."
                        />

                        <ColorPsychologyCard
                            color="#8B5CF6"
                            name="Purple"
                            emotions="Luxury, Creativity, Wisdom, Spirituality"
                            description="Purple combines the stability of blue and energy of red. It's associated with royalty, luxury, and creativity."
                            useCases={[
                                "Luxury and premium brands",
                                "Creative and artistic services",
                                "Beauty and cosmetics",
                                "Spiritual and wellness products",
                                "Innovation and imagination"
                            ]}
                            brands="Cadbury, Hallmark, Yahoo, Twitch"
                            cautions="Can feel too feminine or mystical for some audiences."
                        />

                        <ColorPsychologyCard
                            color="#EC4899"
                            name="Pink"
                            emotions="Romance, Femininity, Playfulness, Compassion"
                            description="Pink evokes feelings of romance, sweetness, and playfulness. Modern brands use it to convey innovation and boldness."
                            useCases={[
                                "Beauty and cosmetics brands",
                                "Feminine products and services",
                                "Romantic and wedding services",
                                "Youth-oriented brands",
                                "Modern tech startups (hot pink)"
                            ]}
                            brands="Barbie, Victoria's Secret, T-Mobile, Lyft"
                            cautions="Can be perceived as too feminine or childish if not balanced properly."
                        />

                        <ColorPsychologyCard
                            color="#F97316"
                            name="Orange"
                            emotions="Enthusiasm, Creativity, Adventure, Confidence"
                            description="Orange combines the energy of red with the happiness of yellow. It's friendly, cheerful, and creates a sense of urgency without being as aggressive as red."
                            useCases={[
                                "Call-to-action buttons",
                                "Creative and artistic brands",
                                "Sports and adventure brands",
                                "Food and beverage (stimulates appetite)",
                                "Affordable and accessible brands"
                            ]}
                            brands="Nickelodeon, Fanta, Amazon, Home Depot"
                            cautions="Can appear unprofessional or cheap if not used thoughtfully."
                        />

                        <ColorPsychologyCard
                            color="#000000"
                            name="Black"
                            emotions="Sophistication, Power, Elegance, Mystery"
                            description="Black represents sophistication, luxury, and power. It's timeless, elegant, and creates strong contrast."
                            useCases={[
                                "Luxury and high-end brands",
                                "Fashion and cosmetics",
                                "Technology products",
                                "Professional services",
                                "Creating contrast and emphasis"
                            ]}
                            brands="Chanel, Nike, Apple, Prada"
                            cautions="Can feel heavy or oppressive if overused. May appear morbid in some contexts."
                        />

                        <ColorPsychologyCard
                            color="#FFFFFF"
                            name="White"
                            emotions="Purity, Simplicity, Cleanliness, Minimalism"
                            description="White represents purity, simplicity, and cleanliness. It creates a sense of space and is essential for modern, minimalist designs."
                            useCases={[
                                "Minimalist and modern designs",
                                "Healthcare and medical services",
                                "Luxury and premium brands",
                                "Creating breathing room",
                                "Tech and innovation brands"
                            ]}
                            brands="Apple, Tesla, Adidas, Google"
                            cautions="Can feel sterile or empty if not balanced with other elements."
                        />
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                            Cultural Considerations
                        </h2>

                        <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                            <p>
                                While many color associations are universal, it's crucial to understand that color meanings can vary significantly across cultures. What evokes positive emotions in one culture might have negative connotations in another.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <CulturalCard
                                color="#EF4444"
                                colorName="Red"
                                western="Danger, passion, love, excitement"
                                eastern="Luck, prosperity, celebration, happiness"
                                note="In China, red is the color of good fortune and is used extensively in celebrations."
                            />
                            <CulturalCard
                                color="#FFFFFF"
                                colorName="White"
                                western="Purity, innocence, cleanliness, weddings"
                                eastern="Mourning, death, funerals"
                                note="In many Asian cultures, white is associated with death and mourning."
                            />
                            <CulturalCard
                                color="#F59E0B"
                                colorName="Yellow"
                                western="Happiness, caution, optimism"
                                eastern="Royalty, prosperity, sacred"
                                note="In Buddhism, yellow represents freedom from worldly cares."
                            />
                            <CulturalCard
                                color="#8B5CF6"
                                colorName="Purple"
                                western="Royalty, luxury, creativity"
                                eastern="Wealth, nobility, spirituality"
                                note="Historically, purple dye was expensive, making it a color of royalty worldwide."
                            />
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                            <div className="w-1.5 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                            Applying Color Psychology in Design
                        </h2>

                        <div className="space-y-6">
                            <ApplicationCard
                                icon={<Target size={32} className="text-indigo-500" />}
                                title="Define Your Brand Personality"
                                description="Before choosing colors, clearly define your brand's personality. Are you trustworthy and professional? Energetic and playful? Luxurious and sophisticated? Your color choices should align with these attributes."
                                tips={[
                                    "List 5-7 adjectives that describe your brand",
                                    "Research competitors' color choices",
                                    "Consider your target audience's preferences",
                                    "Think about the emotions you want to evoke"
                                ]}
                            />

                            <ApplicationCard
                                icon={<Users size={32} className="text-blue-500" />}
                                title="Know Your Audience"
                                description="Different demographics respond to colors differently. Age, gender, culture, and personal experiences all influence color preferences."
                                tips={[
                                    "Research your target demographic's color preferences",
                                    "Consider cultural contexts if targeting global audiences",
                                    "Test color choices with actual users",
                                    "Be aware of accessibility needs (color blindness)"
                                ]}
                            />

                            <ApplicationCard
                                icon={<TrendingUp size={32} className="text-green-500" />}
                                title="Use Color to Guide Action"
                                description="Strategic use of color can guide users through your interface and encourage specific actions."
                                tips={[
                                    "Use contrasting colors for call-to-action buttons",
                                    "Apply color hierarchy to emphasize important elements",
                                    "Use warm colors (red, orange) for urgency",
                                    "Use cool colors (blue, green) for calm, thoughtful actions"
                                ]}
                            />

                            <ApplicationCard
                                icon={<Heart size={32} className="text-pink-500" />}
                                title="Create Emotional Connections"
                                description="Colors can create powerful emotional connections with your audience, building brand loyalty and recognition."
                                tips={[
                                    "Be consistent with your color usage across all touchpoints",
                                    "Use color to tell your brand story",
                                    "Create color associations unique to your brand",
                                    "Evoke the right emotions for your industry"
                                ]}
                            />
                        </div>
                    </section>

                    <section className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-[2.5rem] p-10 border border-yellow-100 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Best Practices for Using Color Psychology</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <BestPractice
                                number="1"
                                title="Don't Rely on Color Alone"
                                description="Always use additional visual cues (icons, text, patterns) alongside color to ensure accessibility and clarity."
                            />
                            <BestPractice
                                number="2"
                                title="Test with Real Users"
                                description="Color perception is subjective. A/B test different color schemes to see what resonates with your actual audience."
                            />
                            <BestPractice
                                number="3"
                                title="Consider Context"
                                description="The same color can evoke different emotions depending on context, surrounding colors, and cultural background."
                            />
                            <BestPractice
                                number="4"
                                title="Maintain Consistency"
                                description="Once you've established your color palette, use it consistently across all brand touchpoints to build recognition."
                            />
                            <BestPractice
                                number="5"
                                title="Balance is Key"
                                description="Use your primary brand color strategically, not everywhere. Too much of any color can be overwhelming."
                            />
                            <BestPractice
                                number="6"
                                title="Accessibility First"
                                description="Ensure sufficient contrast ratios and consider color blindness when designing. About 8% of men have some form of color blindness."
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
                                Color psychology is a powerful tool in a designer's arsenal, but it's not a magic formula. While colors do evoke emotional responses, the effectiveness of your color choices depends on many factors: your brand personality, target audience, cultural context, and how colors are combined and applied.
                            </p>
                            <p>
                                The key is to understand the general psychological associations of colors, then test and refine your choices based on your specific audience and goals. Pay attention to how successful brands in your industry use color, but don't be afraid to break conventions if it serves your unique brand story.
                            </p>
                            <p>
                                Remember that color is just one element of effective design. It works best when combined with strong typography, clear hierarchy, compelling content, and intuitive user experience. Use color psychology as a guide, not a rulebook, and always prioritize your users' needs and preferences.
                            </p>
                            <p>
                                Ready to experiment with colors? Try our <Link href="/gradient-generator" className="text-purple-600 font-bold hover:underline">Gradient Generator</Link> or explore our <Link href="/color-shades" className="text-purple-600 font-bold hover:underline">Color Shades Tool</Link> to create psychologically effective color schemes!
                            </p>
                        </div>
                    </section>

                    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] p-12 text-center text-white space-y-6">
                        <h2 className="text-4xl font-bold">Create Emotionally Powerful Designs!</h2>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Use our tools to experiment with color psychology and create designs that resonate with your audience.
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

function ColorPsychologyCard({ color, name, emotions, description, useCases, brands, cautions }) {
    return (
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
            <div className="h-32" style={{ backgroundColor: color }} />
            <div className="p-8 space-y-4">
                <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{name}</h3>
                    <p className="text-lg font-semibold text-gray-600">{emotions}</p>
                </div>

                <p className="text-gray-700 leading-relaxed">{description}</p>

                <div className="space-y-3">
                    <h4 className="font-bold text-gray-900">Best Used For:</h4>
                    <ul className="space-y-2">
                        {useCases.map((useCase, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-700">
                                <CheckCircle className="shrink-0 mt-1" size={16} style={{ color }} />
                                <span>{useCase}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600"><strong>Famous Brands:</strong> {brands}</p>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-700"><strong>⚠️ Caution:</strong> {cautions}</p>
                </div>
            </div>
        </div>
    );
}

function CulturalCard({ color, colorName, western, eastern, note }) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl" style={{ backgroundColor: color }} />
                <h3 className="text-xl font-bold text-gray-900">{colorName}</h3>
            </div>
            <div className="space-y-3">
                <div>
                    <p className="font-semibold text-gray-900">Western Cultures:</p>
                    <p className="text-gray-600">{western}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-900">Eastern Cultures:</p>
                    <p className="text-gray-600">{eastern}</p>
                </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-sm text-blue-900">{note}</p>
            </div>
        </div>
    );
}

function ApplicationCard({ icon, title, description, tips }) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all space-y-4">
            <div className="flex items-start gap-4">
                <div className="shrink-0">{icon}</div>
                <div className="space-y-3 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                    <div className="space-y-2">
                        <p className="font-semibold text-gray-900">Key Tips:</p>
                        <ul className="space-y-2">
                            {tips.map((tip, index) => (
                                <li key={index} className="flex items-start gap-2 text-gray-700">
                                    <CheckCircle className="text-purple-500 shrink-0 mt-1" size={16} />
                                    <span>{tip}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BestPractice({ number, title, description }) {
    return (
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center shrink-0">
                {number}
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
}
