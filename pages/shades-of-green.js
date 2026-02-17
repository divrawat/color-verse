import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#10b981',
    name: 'Green',
    description: 'Green symbolizes growth, harmony, and freshness. In design, it is often used to represent nature, wealth, and stability.'
};

export async function getStaticProps() {
    const tints = chroma
        .scale(['#ffffff', colorData.hex])
        .mode('lch')
        .colors(22)
        .slice(1, 21)
        .reverse();

    const shades = chroma
        .scale([colorData.hex, '#000000'])
        .mode('lch')
        .colors(22)
        .slice(1, 21);

    return {
        props: {
            colorData,
            tints,
            shades,
            slug: 'shades-of-green',
        },
    };
}

export default function GreenShades(props) {
    return <StaticColorPage {...props} />;
}
