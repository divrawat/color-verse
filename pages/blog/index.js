import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';
import { BLOG_ARTICLES } from '@/lib/blog_data';

export default function BlogIndex() {
    return (
        <>
            <SEO
                title="Blog - ColorVerse"
                description="Explore our blog for tutorials, guides, and insights about color gradients, CSS design, and web development best practices."
                canonicalUrl="/blog"
            />
            <SchemaOrg
                type="Blog"
                data={{
                    "name": "ColorVerse Blog",
                    "description": "Tutorials and guides about color gradients, CSS design, and web development.",
                    "url": "https://colorverse.online/blog"
                }}
            />

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Section */}
                <header className="text-center space-y-6 pb-8 border-b border-gray-100">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 text-sm font-bold text-pink-600"
                    >
                        <BookOpen size={16} />
                        <span>Blog</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
                    >
                        ColorVerse Blog
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
                    >
                        Tutorials, guides, and insights about color gradients, CSS design, and modern web development.
                    </motion.p>
                </header>

                {/* Articles Grid */}
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                        <div className="text-sm text-gray-500">
                            {BLOG_ARTICLES.length} {BLOG_ARTICLES.length === 1 ? 'article' : 'articles'}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_ARTICLES.map((article, index) => (
                            <ArticleCard key={article.slug} article={article} index={index} />
                        ))}
                    </div>
                </section>

                {/* Coming Soon Section */}
                <section className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-[3rem] p-12 text-center border border-purple-100">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mx-auto">
                            <BookOpen size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">More Articles Coming Soon!</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We're working on more tutorials and guides about CSS gradients, color theory, and web design best practices. Stay tuned!
                        </p>
                    </motion.div>
                </section>
            </div>
        </>
    );
}

function ArticleCard({ article, index }) {
    return (
        <Link href={`/blog/${article.slug}`} className="group block">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="h-full bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-2"
            >
                {/* Gradient Header */}
                <div
                    className="h-48 relative overflow-hidden"
                    style={{ background: article.gradient }}
                >
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-600 transition-colors">
                        {article.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{article.readTime}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-bold text-purple-600 group-hover:gap-4 transition-all pt-2">
                        Read Article <ArrowRight size={16} />
                    </div>
                </div>
            </motion.article>
        </Link>
    );
}
