import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#6366f1',
    name: 'Indigo',
    description: 'Indigo is a deep, sophisticated color that represents intuition and perception. It feels modern and premium.'
};

const tints = [
    "#6e6df2",
    "#7774f3",
    "#807bf3",
    "#8982f4",
    "#9189f5",
    "#9a90f6",
    "#a297f6",
    "#ab9ef7",
    "#b3a5f8",
    "#bbacf9",
    "#c3b3f9",
    "#cbbafa",
    "#d3c1fb",
    "#dbc8fc",
    "#e3cffc",
    "#ebd6fd",
    "#f3ddfe",
    "#fbe4fe",
    "#ffebff",
    "#fff2ff"
];

const shades = [
    "#5b60ea",
    "#535ae3",
    "#4a54dc",
    "#414ed5",
    "#3749cf",
    "#2b43c8",
    "#193dc1",
    "#0037bb",
    "#0031b4",
    "#002cad",
    "#0026a6",
    "#0020a0",
    "#001b99",
    "#001693",
    "#00118c",
    "#000d86",
    "#000880",
    "#00047a",
    "#000074",
    "#00006e"
];

export default function IndigoShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-indigo"
        />
    );
}
