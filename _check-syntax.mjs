import fs from 'fs';
const html = fs.readFileSync('./index.html', 'utf8');
const m = html.match(/<script type="module">([\s\S]*)<\/script>/);
if (!m) {
  console.error('no script');
  process.exit(1);
}
fs.writeFileSync('./_extracted.js', m[1]);
try {
  new Function(m[1]);
  console.log('OK');
} catch (e) {
  console.error(e);
  process.exit(1);
}
