import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#3b82f6',
    name: 'Blue',
    description: 'Blue represents stability, intelligence, and confidence. It is a popular choice for corporate and technology brand identities.'
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
            slug: 'shades-of-blue',
        },
    };
}

export default function BlueShades(props) {
    return <StaticColorPage {...props} />;
}
