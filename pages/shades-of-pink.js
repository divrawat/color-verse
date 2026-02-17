import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#ec4899',
    name: 'Pink',
    description: 'Pink represents playful energy and soft elegance. It is commonly used for romantic, youthful, and vibrant designs.'
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
            slug: 'shades-of-pink',
        },
    };
}

export default function PinkShades(props) {
    return <StaticColorPage {...props} />;
}
