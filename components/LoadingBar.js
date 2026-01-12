import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingBar() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => {
            if (url !== router.pathname) {
                setLoading(true);
            }
        };
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 4, ease: "circOut" }} /* Fake progress duration */
                        style={{ boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)' }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
