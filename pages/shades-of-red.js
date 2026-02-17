import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#ef4444',
    name: 'Red',
    description: 'Red is associated with energy, passion, and action. It is a high-visibility color that can evoke strong emotions.'
};

const tints = [
    "#f2504c",
    "#f45a54",
    "#f5635c",
    "#f76c64",
    "#f8756c",
    "#f97e74",
    "#fa867d",
    "#fb8f85",
    "#fc978e",
    "#fca096",
    "#fda89f",
    "#feb1a7",
    "#feb9b0",
    "#ffc2b8",
    "#ffcac1",
    "#ffd3ca",
    "#ffdbd2",
    "#ffe4db",
    "#ffece4",
    "#fff5ed"
];

const shades = [
    "#e73c3e",
    "#de3338",
    "#d62932",
    "#ce1d2c",
    "#c60726",
    "#be001f",
    "#b60015",
    "#af0000",
    "#a70000",
    "#a00000",
    "#990000",
    "#920000",
    "#8b0000",
    "#840000",
    "#7e0000",
    "#770000",
    "#710000",
    "#6a0000",
    "#640000",
    "#5e0000"
];

export default function RedShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-red"
        />
    );
}
