import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#f59e0b',
    name: 'Yellow',
    description: 'Yellow is the color of sunshine, hope, and happiness. It is often used to grab attention and evoke positivity.'
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
            slug: 'shades-of-yellow',
        },
    };
}

export default function YellowShades(props) {
    return <StaticColorPage {...props} />;
}
