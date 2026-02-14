import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Palette, Layers, Home, Sparkles, Github, Linkedin, BookOpen } from 'lucide-react';
import clsx from 'clsx';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-pink-500 selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
              C
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              ColorVerse
            </span>
          </Link>

          <div className="hidden md:flex gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50">
            <NavLink href="/" icon={<Home size={18} />} active={router.pathname === '/'}>Home</NavLink>
            <NavLink href="/blog" icon={<BookOpen size={18} />} active={router.pathname.startsWith('/blog')}>Blog</NavLink>
            <NavLink href="/gradient-generator" icon={<Palette size={18} />} active={router.pathname === '/gradient-generator'}>Gradient Gen</NavLink>
            <NavLink href="/gradient-backgrounds" icon={<Sparkles size={18} />} active={router.pathname === '/gradient-backgrounds'}>Backgrounds</NavLink>
            <NavLink href="/color-shades" icon={<Layers size={18} />} active={router.pathname === '/color-shades'}>Color Shades</NavLink>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-4rem)]">
        <motion.div
          key={router.pathname}
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="border-t border-gray-100 bg-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="text-xl font-bold text-gray-900">ColorVerse</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed italic">
              "Crafting beauty with CSS, one gradient at a time."
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Tools</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/gradient-generator" className="hover:text-pink-600 transition-colors">Gradient Generator</Link></li>
              <li><Link href="/gradient-backgrounds" className="hover:text-pink-600 transition-colors">Background Gallery</Link></li>
              <li><Link href="/color-shades" className="hover:text-pink-600 transition-colors">Color Shades</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-pink-600 transition-colors">About Me</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600 transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-pink-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-pink-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-gray-900">Creator</h4>
            <p className="text-sm text-gray-500 leading-relaxed">
              Designed & Developed by <br />
              <span className="font-bold text-gray-900">Divyanshu Rawat</span>
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/divrawat" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/divrawat2001/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-gray-50 text-center text-gray-400 text-xs">
          <p>© {new Date().getFullYear()} ColorVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, children, active, icon }) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
        active
          ? "bg-white text-gray-900 shadow-sm ring-1 ring-gray-200"
          : "text-gray-500 hover:text-gray-900 hover:bg-gray-200/50"
      )}
    >
      {icon}
      {children}
    </Link>
  );
}
