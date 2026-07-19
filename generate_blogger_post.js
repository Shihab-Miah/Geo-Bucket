const fs = require('fs');

let html = fs.readFileSync('docs/index.html', 'utf8');

// Replace relative paths with absolute GitHub Pages paths
html = html.replace(/href="logo\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/logo.png"');
html = html.replace(/src="logo\.png"/g, 'src="https://shihab-miah.github.io/Client-Koi/logo.png"');
html = html.replace(/href="logo-red\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/logo-red.png"');
html = html.replace(/href="assets\/banner\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/assets/banner.png"');

fs.writeFileSync('blogger_post.html', html);
console.log("Blogger post HTML generated successfully at blogger_post.html");
