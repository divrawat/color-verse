const chroma = require('chroma-js');
const fs = require('fs');

const colors = {
    teal: '#14b8a6',
    orange: '#f97316'
};

const results = {};

for (const [name, hex] of Object.entries(colors)) {
    const tints = chroma.scale(['#ffffff', hex]).mode('lch').colors(22).slice(1, 21).reverse();
    const shades = chroma.scale([hex, '#000000']).mode('lch').colors(22).slice(1, 21);
    results[name] = { tints, shades };
}

fs.writeFileSync('temp_colors.json', JSON.stringify(results, null, 2));
console.log('Done');
