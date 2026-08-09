const fs = require('fs');
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace('::-webkit-scrollbar       { width: 100vw; }', '::-webkit-scrollbar       { width: 6px; }');
fs.writeFileSync('app/globals.css', css);
console.log('Fixed scrollbar');
