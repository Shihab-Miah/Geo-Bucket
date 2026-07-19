const fs = require('fs');

let html = fs.readFileSync('docs/index.html', 'utf8');

// Replace relative paths with absolute GitHub Pages paths
html = html.replace(/href="logo\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/logo.png"');
html = html.replace(/src="logo\.png"/g, 'src="https://shihab-miah.github.io/Client-Koi/logo.png"');
html = html.replace(/href="logo-red\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/logo-red.png"');
html = html.replace(/href="assets\/banner\.png"/g, 'href="https://shihab-miah.github.io/Client-Koi/assets/banner.png"');

// Split HTML into head and body
const headMatch = html.match(/<head>([\s\S]*?)<\/head>/);
const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);

if (!headMatch || !bodyMatch) {
    console.error("Could not find head or body in index.html");
    process.exit(1);
}

let headContent = headMatch[1];
let bodyContent = bodyMatch[1];

// Blogger XML Template
const bloggerXml = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <b:skin><![CDATA[
    /* Custom Blogger Skin - Intentionally Left Blank */
  ]]></b:skin>
${headContent}
</head>
<body>
  <b:section class='main' id='main' showaddelement='no' />
${bodyContent}
</body>
</html>`;

fs.writeFileSync('blogger_theme.xml', bloggerXml);
console.log("Blogger theme generated successfully at blogger_theme.xml");
