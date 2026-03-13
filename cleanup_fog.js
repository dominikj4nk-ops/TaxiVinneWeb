const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\jdomi\\Desktop\\VineTaxi\\vinetaxi\\components\\sections';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const fp = path.join(dir, file);
    let content = fs.readFileSync(fp, 'utf8');
    const original = content;

    // Remove import line
    content = content.replace(/import AtmosphericFog from ['"]@\/components\/ui\/AtmosphericFog['"];?\s*\r?\n/g, '');

    // Remove comment lines about fog
    content = content.replace(/\s*\{\/\*.*?(?:Atmospheric|Mist Portal|Mid-section drift).*?\*\/\}\s*/g, '\n');

    // Remove all <AtmosphericFog ... /> blocks (multi-line self-closing)
    content = content.replace(/\s*<AtmosphericFog\s[\s\S]*?\/>\s*/g, '\n');

    if (content !== original) {
        fs.writeFileSync(fp, content, 'utf8');
        console.log('Cleaned: ' + file);
    }
});

console.log('Done!');
