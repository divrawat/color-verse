import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#14b8a6',
    name: 'Teal',
    description: 'Teal is a revitalizing and rejuvenating color that represents communication and clarity of mind.'
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
            slug: 'shades-of-teal',
        },
    };
}

export default function TealShades(props) {
    return <StaticColorPage {...props} />;
}
