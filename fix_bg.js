const fs = require('fs');

const files = [
  'components/ProductSection.tsx',
  'components/HowToOrder.tsx',
  'components/PaymentMethods.tsx',
  'components/SocialSection.tsx',
  'components/ContactCTA.tsx'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let c = fs.readFileSync(file, 'utf8');
  
  // Remove opaque background styles and classes
  c = c.split('style={{ background: "linear-gradient(180deg, #050B18 0%, #081426 50%, #050B18 100%)" }}').join('');
  c = c.split('bg-[#081426]').join('bg-transparent');
  c = c.split('bg-[#050B18]').join('bg-transparent');
  c = c.split('bg-[#020812]').join('bg-transparent'); // from ContactCTA maybe
  
  fs.writeFileSync(file, c);
}

// Enhance orb animations in globals.css
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace(/width: \d+px;/g, 'width: 100vw;');
css = css.replace(/height: \d+px;/g, 'height: 100vh;');

css = css.split('background: radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%);').join('background: radial-gradient(circle at center, rgba(59,130,246,0.2) 0%, transparent 50%);');
css = css.split('background: radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%);').join('background: radial-gradient(circle at center, rgba(168,85,247,0.15) 0%, transparent 50%);');
css = css.split('background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);').join('background: radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 50%);');

css = css.replace('top: -120px;', 'top: -20vh;');
css = css.replace('left: -100px;', 'left: -20vw;');
css = css.replace('top: 40%;', 'top: 20vh;');
css = css.replace('right: -150px;', 'right: -20vw;');
css = css.replace('bottom: 10%;', 'bottom: -20vh;');
css = css.replace('left: 20%;', 'left: 20vw;');

fs.writeFileSync('app/globals.css', css);

console.log('done');
