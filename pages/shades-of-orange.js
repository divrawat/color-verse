import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#f97316',
    name: 'Orange',
    description: 'Orange combines the energy of red and the happiness of yellow. It represents creativity, success, and encouragement.'
};

const tints = [
    "#fb7a25",
    "#fd8132",
    "#ff883e",
    "#ff8f49",
    "#ff9554",
    "#ff9c5e",
    "#ffa369",
    "#ffa973",
    "#ffb07e",
    "#ffb688",
    "#ffbd93",
    "#ffc49d",
    "#ffcaa8",
    "#ffd1b3",
    "#ffd7bd",
    "#ffdec8",
    "#ffe5d3",
    "#ffebde",
    "#fff2e9",
    "#fff8f4"
];

const shades = [
    "#ef6b09",
    "#e56300",
    "#dc5b00",
    "#d25300",
    "#c84b00",
    "#be4300",
    "#b53b00",
    "#ab3200",
    "#a22a00",
    "#992100",
    "#901700",
    "#870a00",
    "#7e0000",
    "#760000",
    "#6e0000",
    "#660000",
    "#5e0000",
    "#570000",
    "#500000",
    "#4b0000"
];

export default function OrangeShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-orange"
        />
    );
}
