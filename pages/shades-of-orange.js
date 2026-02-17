import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#f97316',
    name: 'Orange',
    description: 'Orange combines the energy of red and the happiness of yellow. It represents creativity, success, and encouragement.'
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
            slug: 'shades-of-orange',
        },
    };
}

export default function OrangeShades(props) {
    return <StaticColorPage {...props} />;
}
