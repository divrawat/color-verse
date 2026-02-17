import StaticColorPage from '@/components/StaticColorPage';

const colorData = {
    hex: '#14b8a6',
    name: 'Teal',
    description: 'Teal is a revitalizing and rejuvenating color that represents communication and clarity of mind.'
};

const tints = [
    "#30bcaa",
    "#42bfae",
    "#50c3b2",
    "#5dc6b6",
    "#69c9ba",
    "#74cdbf",
    "#7fd0c3",
    "#89d4c7",
    "#93d7cb",
    "#9cdbcf",
    "#a6ded4",
    "#afe1d8",
    "#b8e5dc",
    "#c1e8e1",
    "#caebe5",
    "#d3efe9",
    "#dcf2ed",
    "#e5f5f2",
    "#edf8f6",
    "#f6fcfb"
];

const shades = [
    "#00af9d",
    "#00a695",
    "#009e8d",
    "#009584",
    "#008c7c",
    "#008474",
    "#007c6c",
    "#007364",
    "#006b5c",
    "#006355",
    "#005b4d",
    "#005346",
    "#004b3f",
    "#004337",
    "#003b30",
    "#00342a",
    "#002d23",
    "#00281c",
    "#002316",
    "#001f0e"
];

export default function TealShades() {
    return (
        <StaticColorPage
            colorData={colorData}
            tints={tints}
            shades={shades}
            slug="shades-of-teal"
        />
    );
}
