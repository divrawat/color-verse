import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#10b981',
    name: 'Green',
    description: 'Green symbolizes growth, harmony, and freshness. In design, it is often used to represent nature, wealth, and stability.'
};

const tints = [
    "#2dbd87",
    "#3fc08c",
    "#4ec492",
    "#5bc798",
    "#67cb9e",
    "#72cea4",
    "#7cd1aa",
    "#86d5af",
    "#90d8b5",
    "#9adcbb",
    "#a4dfc1",
    "#ade2c7",
    "#b6e5cd",
    "#c0e9d4",
    "#c9ecda",
    "#d2efe0",
    "#dbf2e6",
    "#e4f6ec",
    "#edf9f2",
    "#f6fcf9"
];

const shades = [
    "#00b079",
    "#00a771",
    "#009f69",
    "#009661",
    "#008d59",
    "#008552",
    "#007d4a",
    "#007443",
    "#006c3b",
    "#006434",
    "#005c2d",
    "#005426",
    "#004c1f",
    "#004419",
    "#003c12",
    "#00350a",
    "#002f00",
    "#002900",
    "#002500",
    "#002100"
];

export default function GreenShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-green"
        />
    );
}
