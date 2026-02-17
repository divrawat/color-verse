import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#ec4899',
    name: 'Pink',
    description: 'Pink represents playful energy and soft elegance. It is commonly used for romantic, youthful, and vibrant designs.'
};

const tints = [
    "#ee549e",
    "#f05ea2",
    "#f167a7",
    "#f371ab",
    "#f47aaf",
    "#f684b4",
    "#f78db8",
    "#f896bc",
    "#fa9fc1",
    "#fba8c5",
    "#fcb1c9",
    "#fdbace",
    "#fec3d2",
    "#ffccd6",
    "#ffd5db",
    "#ffdedf",
    "#ffe7e4",
    "#fff0e8",
    "#fff9ed",
    "#fffff1"
];

const shades = [
    "#e43f92",
    "#db368b",
    "#d32c84",
    "#ca217d",
    "#c21476",
    "#ba006f",
    "#b20068",
    "#aa0061",
    "#a2005a",
    "#9a0053",
    "#92004c",
    "#8a0045",
    "#82003e",
    "#7a0037",
    "#720030",
    "#6a0029",
    "#630022",
    "#5b001b",
    "#540014",
    "#4d000d"
];

export default function PinkShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-pink"
        />
    );
}
