import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#8b5cf6',
    name: 'Purple',
    description: 'Purple combines the stability of blue and the energy of red. It is often associated with royalty, luxury, and ambition.'
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
            slug: 'shades-of-purple',
        },
    };
}

export default function PurpleShades(props) {
    return <StaticColorPage {...props} />;
}
