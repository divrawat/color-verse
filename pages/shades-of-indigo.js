import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#6366f1',
    name: 'Indigo',
    description: 'Indigo is a deep, sophisticated color that represents intuition and perception. It feels modern and premium.'
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
            slug: 'shades-of-indigo',
        },
    };
}

export default function IndigoShades(props) {
    return <StaticColorPage {...props} />;
}
