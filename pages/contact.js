import Head from 'next/head';
import { Mail, Github, Linkedin, MessageSquare, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function Contact() {
    const email = "divrawat2001second@gmail.com";

    return (
        <>
            <SEO
                title="Contact Divyanshu Rawat"
                description="Get in touch with Divyanshu Rawat for full stack development projects, collaborations, or questions about ColorVerse."
                canonicalUrl="/contact"
            />
            <SchemaOrg
                type="ContactPage"
                data={{
                    "mainEntity": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "email": email
                    }
                }}
            />

            <div className="max-w-4xl mx-auto py-12 space-y-16">
                <header className="text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-sm font-bold border border-pink-100 mb-4"
                    >
                        <MessageSquare size={16} />
                        <span>Collaboration</span>
                    </motion.div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-8" aria-label="Contact options">
                    {/* Email Card */}
                    <motion.article
                        whileHover={{ y: -5 }}
                        className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="flex flex-col h-full justify-between gap-8">
                            <div className="space-y-4">
                                <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                                    <Mail size={28} />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900">Email Me</h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Send me an email for inquiries, collaborations, or just to say hi! I usually respond within 24 hours.
                                </p>
                            </div>
                            <a
                                href={`mailto:${email}`}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <code className="font-mono font-bold break-all">{email}</code>
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.article>

                    {/* Social Links Card */}
                    <motion.article
                        whileHover={{ y: -5 }}
                        className="bg-gray-900 p-8 rounded-[2.2rem] shadow-2xl relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div className="space-y-4 text-white">
                                <h2 className="text-2xl font-bold">Social Channels</h2>
                                <p className="text-gray-400 leading-relaxed">
                                    Connect with me professionally or check out my open-source work on these platforms.
                                </p>
                            </div>

                            <nav className="space-y-3" aria-label="Social links">
                                <SocialPlatform
                                    href="https://github.com/divrawat"
                                    icon={<Github size={20} />}
                                    label="GitHub"
                                    username="@divrawat"
                                />
                                <SocialPlatform
                                    href="https://www.linkedin.com/in/divrawat2001/"
                                    icon={<Linkedin size={20} />}
                                    label="LinkedIn"
                                    username="Divyanshu Rawat"
                                />
                            </nav>
                        </div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>
                    </motion.article>
                </section>

                {/* Call to Action Footer on Contact Page */}
                <section className="bg-gradient-to-br from-pink-500 to-violet-600 p-12 rounded-[3rem] text-center text-white shadow-xl shadow-pink-500/20 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">Availability</h2>
                        <p className="text-white/80 mb-8 max-w-md mx-auto">
                            I am currently available for new freelance projects and full-time opportunities as a Full Stack Developer.
                        </p>
                        <button
                            onClick={() => window.location.href = `mailto:${email}`}
                            className="px-10 py-4 bg-white text-gray-900 rounded-full font-bold hover:scale-105 transition-transform shadow-lg shadow-black/10 active:scale-95"
                        >
                            Start a conversation
                        </button>
                    </div>
                    <div className="absolute inset-0 bg-white/5 opacity-20 pointer-events-none"></div>
                </section>
            </div>
        </>
    );
}

function SocialPlatform({ href, icon, label, username }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all group shadow-inner"
        >
            <div className="flex items-center gap-4 text-white">
                {icon}
                <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-1">{label}</p>
                    <p className="font-bold">{username}</p>
                </div>
            </div>
            <ExternalLink size={18} className="text-white/20 group-hover:text-white transition-colors" />
        </a>
    );
}
