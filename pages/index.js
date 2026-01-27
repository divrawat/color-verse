import Link from 'next/link';
import { motion } from 'framer-motion';
import { Palette, Layers, ArrowRight, Zap, Sparkles, Github, Linkedin, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import SchemaOrg from '@/components/SchemaOrg';

export default function Home() {
  return (
    <>
      <SEO
        title="Professional CSS Tools for Developers"
        description="ColorVerse provides a suite of high-quality CSS tools including a Gradient Generator, Color Shades Explorer, and a curated gallery of Gradient Backgrounds. Design beautiful UIs faster."
        canonicalUrl="/"
      />
      <SchemaOrg
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://colorverse.online/#website",
              "url": "https://colorverse.online",
              "name": "ColorVerse",
              "description": "Professional CSS tools for developers: Gradient Generator, Color Shades, and Backgrounds.",
              "publisher": {
                "@id": "https://colorverse.online/#organization"
              },
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": "https://colorverse.online/color-shades?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              ]
            },
            {
              "@type": "Organization",
              "@id": "https://colorverse.online/#organization",
              "name": "ColorVerse",
              "url": "https://colorverse.online",
              "logo": "https://colorverse.online/logo.png",
              "sameAs": [
                "https://github.com/divrawat",
                "https://www.linkedin.com/in/divrawat2001/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "divrawat2001second@gmail.com",
                "contactType": "customer support"
              }
            },
            {
              "@type": "SoftwareApplication",
              "name": "ColorVerse Tool Suite",
              "applicationCategory": "DesignApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "CSS Gradient Generator",
                "Color Shades & Tints Explorer",
                "Curated Gradient Backgrounds Gallery"
              ]
            }
          ]
        }}
      />

      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex flex-col items-center justify-center text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                filter: ["blur(60px)", "blur(80px)", "blur(60px)"]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -60, 0],
                filter: ["blur(60px)", "blur(90px)", "blur(60px)"]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply"
            />
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                x: [0, 100, 0],
                filter: ["blur(60px)", "blur(70px)", "blur(60px)"]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 left-1/2 w-96 h-96 bg-yellow-300/30 rounded-full mix-blend-multiply"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-white/60 shadow-sm text-sm font-medium text-gray-600 mb-6 backdrop-blur-sm">
              <Sparkles size={16} className="text-yellow-500" />
              <span>Discover the magic of CSS</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Design with <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
                Vibrant Color
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Unleash your creativity with our suite of CSS tools. Generate stunning gradients, explore color shades, and bring your web projects to life.
            </p>

            <div className="flex gap-4 justify-center">
              <Link href="/gradient-generator" className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Creating <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="#tools" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-bold shadow-sm hover:bg-gray-50 transition-all">
                Explore Tools
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Feature Cards */}
        <section id="tools" className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12">
          <ToolCard
            href="/gradient-generator"
            title="Gradient Generator"
            description="Create beautiful CSS gradients visually. Customize colors, angles, and types with real-time preview and instant code export."
            icon={<Palette className="text-pink-500" size={32} />}
            gradient="from-pink-500/10 to-purple-500/10"
          />
          <ToolCard
            href="/gradient-backgrounds"
            title="Gradient Backgrounds"
            description="Explore our curated collection of stunning, production-ready gradient backgrounds for your next web project."
            icon={<Sparkles className="text-yellow-500" size={32} />}
            gradient="from-yellow-500/10 to-orange-500/10"
          />
          <ToolCard
            href="/color-shades"
            title="Color Shades Explorer"
            description="Generate perfect tints and shades for any base color. Copy hex codes instantly for your design system and UI components."
            icon={<Layers className="text-indigo-500" size={32} />}
            gradient="from-indigo-500/10 to-blue-500/10"
          />
        </section>

        {/* Author Section */}
        <section className="max-w-4xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-gray-50"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-gradient-to-tr from-pink-500 to-violet-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl flex-shrink-0"
              >
                DR
              </motion.div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Created by <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600">Divyanshu Rawat</span>
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Full Stack Developer from India, passionate about building modern web applications and design tools.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <SocialLink
                    href="https://github.com/divrawat"
                    icon={<Github size={18} />}
                    label="GitHub"
                  />
                  <SocialLink
                    href="https://www.linkedin.com/in/divrawat2001/"
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}

function ToolCard({ href, title, description, icon, gradient }) {
  return (
    <Link href={href} className="group">
      <motion.div
        whileHover={{ y: -5 }}
        className={`h-full p-8 rounded-3xl border border-gray-100 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${gradient}`}
      >
        <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm w-fit group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:gap-4 transition-all">
          Try it now <ArrowRight size={16} />
        </div>
      </motion.div>
    </Link>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-900 hover:text-white border border-gray-200 rounded-full text-sm font-bold transition-all group"
    >
      {icon}
      <span>{label}</span>
      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}
