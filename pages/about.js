import Head from 'next/head';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code } from 'lucide-react';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function About() {
    const skills = ['React.js', 'Next.js', 'Tailwind', 'Node.js', 'Angular', 'SEO'];

    return (
        <>
            <SEO
                title="About Divyanshu Rawat | Creator of ColorVerse"
                description="Learn more about Divyanshu Rawat, the Full Stack Developer from India who built ColorVerse. Expert in React, Next.js, and modern web design."
                canonicalUrl="/about"
            />
            <SchemaOrg
                type="AboutPage"
                data={{
                    "mainEntity": {
                        "@type": "Person",
                        "name": "Divyanshu Rawat",
                        "jobTitle": "Full Stack Developer",
                        "knowsAbout": skills
                    }
                }}
            />

            <div className="max-w-4xl mx-auto space-y-16">
                <section className="text-center space-y-8">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-32 h-32 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
                    >
                        DR
                    </motion.div>
                    <header className="space-y-4">
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">About the Creator</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Hi, I'm <span className="text-gray-900 font-bold underline decoration-pink-500 decoration-4 underline-offset-4">Divyanshu Rawat</span>, the developer behind ColorVerse.
                        </p>
                    </header>
                </section>

                <section className="grid md:grid-cols-2 gap-12 items-center">
                    <article className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                            <Code className="text-pink-500" /> Full Stack Developer
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Based in India, I am a passionate Full Stack Developer with extensive experience building modern web applications.
                            My journey involves turning complex problems into elegant, user-centric designs.
                        </p>
                        <div className="flex flex-wrap gap-2" aria-label="Professional skills">
                            {skills.map(skill => (
                                <span key={skill} className="px-4 py-2 bg-white border border-gray-100 rounded-full text-sm font-bold text-gray-700 shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                    <aside className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-50 space-y-6">
                        <h3 className="text-xl font-bold text-gray-900">Connect with me</h3>
                        <nav className="space-y-4">
                            <SocialLink
                                href="https://github.com/divrawat"
                                icon={<Github size={20} />}
                                label="GitHub"
                                username="@divrawat"
                            />
                            <SocialLink
                                href="https://www.linkedin.com/in/divrawat2001/"
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                                username="Divyanshu Rawat"
                            />
                        </nav>
                    </aside>
                </section>

                <section className="bg-gray-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-left space-y-2">
                            <h2 className="text-3xl font-bold">Have a project in mind?</h2>
                            <p className="text-gray-400">Let's build something amazing together.</p>
                        </div>
                        <a href="mailto:divrawat2001second@gmail.com" className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-lg">
                            <Mail size={20} /> Get in touch
                        </a>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
                </section>
            </div>
        </>
    );
}

function SocialLink({ href, icon, label, username }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl border border-gray-100 hover:border-pink-200 hover:bg-pink-50/50 transition-all group"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
                    {icon}
                </div>
                <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">{label}</p>
                    <p className="font-bold text-gray-900">{username}</p>
                </div>
            </div>
            <ExternalLink size={18} className="text-gray-300 group-hover:text-pink-500 transition-colors" />
        </a>
    );
}
