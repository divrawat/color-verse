import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#f59e0b',
    name: 'Yellow',
    description: 'Yellow is the color of sunshine, hope, and happiness. It is often used to grab attention and evoke positivity.'
};

const tints = [
    "#f7a222",
    "#f9a732",
    "#faab40",
    "#fbb04d",
    "#fcb55a",
    "#fdba67",
    "#fdbf73",
    "#fec380",
    "#fec88c",
    "#ffcd99",
    "#ffd1a5",
    "#ffd6b1",
    "#ffdabd",
    "#ffdfc9",
    "#ffe3d5",
    "#ffe8e1",
    "#ffecec",
    "#fff1f8",
    "#fff5ff",
    "#fffaff"
];

const shades = [
    "#ea9500",
    "#df8c00",
    "#d48300",
    "#c97a00",
    "#bf7100",
    "#b46800",
    "#aa5f00",
    "#a05600",
    "#964d00",
    "#8c4400",
    "#823b00",
    "#793200",
    "#6f2900",
    "#662000",
    "#5d1700",
    "#540e00",
    "#4c0500",
    "#440000",
    "#3d0000",
    "#360000"
];

export default function YellowShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-yellow"
        />
    );
}
