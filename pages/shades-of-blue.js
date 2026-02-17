import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#3b82f6',
    name: 'Blue',
    description: 'Blue represents stability, intelligence, and confidence. It is a popular choice for corporate and technology brand identities.'
};

const tints = [
    "#4d87f7",
    "#5b8df7",
    "#6792f8",
    "#7398f8",
    "#7d9ef9",
    "#87a3fa",
    "#91a9fa",
    "#9aaffb",
    "#a2b5fb",
    "#abbbfc",
    "#b3c1fc",
    "#bbc7fc",
    "#c3cdfd",
    "#cbd3fd",
    "#d3d9fe",
    "#dadffe",
    "#e2e6fe",
    "#e9ecfe",
    "#f1f2ff",
    "#f8f9ff"
];

const shades = [
    "#2e7bee",
    "#1e75e7",
    "#026edf",
    "#0068d7",
    "#0062d0",
    "#005bc8",
    "#0055c1",
    "#004fb9",
    "#0049b2",
    "#0043ab",
    "#003da4",
    "#00389c",
    "#003295",
    "#002d8e",
    "#002887",
    "#002380",
    "#001e79",
    "#001a72",
    "#00146b",
    "#000c65"
];

export default function BlueShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-blue"
        />
    );
}
