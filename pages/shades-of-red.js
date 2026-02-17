import chroma from 'chroma-js';
import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#ef4444',
    name: 'Red',
    description: 'Red is associated with energy, passion, and action. It is a high-visibility color that can evoke strong emotions.'
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
            slug: 'shades-of-red',
        },
    };
}

export default function RedShades(props) {
    return <StaticColorPage {...props} />;
}
