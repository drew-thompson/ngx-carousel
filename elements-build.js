const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/apps/ngx-carousel/runtime-es5.js',
    './dist/apps/ngx-carousel/polyfills-es5.js',
    './dist/apps/ngx-carousel/scripts.js',
    './dist/apps/ngx-carousel/main-es5.js'
  ];

  const dist = 'dist/elements';
  await fs.ensureDir(dist);
  await concat(files, `${dist}/ngx-carousel.js`);
})();
