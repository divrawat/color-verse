import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#8b5cf6',
    name: 'Purple',
    description: 'Purple combines the stability of blue and the energy of red. It is often associated with royalty, luxury, and ambition.'
};

const tints = [
    "#9264f7",
    "#996bf7",
    "#9f73f8",
    "#a67af8",
    "#ac82f9",
    "#b289f9",
    "#b891fa",
    "#be98fa",
    "#c4a0fb",
    "#caa7fb",
    "#cfaffc",
    "#d5b6fc",
    "#dabefd",
    "#e0c5fd",
    "#e5cdfe",
    "#ead4fe",
    "#f0dcff",
    "#f5e3ff",
    "#faebff",
    "#fff2ff"
];

const shades = [
    "#8456ef",
    "#7c50e8",
    "#754ae1",
    "#6d44da",
    "#663ed3",
    "#5e38cd",
    "#5632c6",
    "#4e2cbf",
    "#4526b9",
    "#3b20b2",
    "#2f1aac",
    "#1e14a5",
    "#000e9f",
    "#000899",
    "#000093",
    "#00008d",
    "#000088",
    "#000082",
    "#00007c",
    "#000077"
];

export default function PurpleShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-purple"
        />
    );
}
