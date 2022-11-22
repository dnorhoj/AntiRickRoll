const mix = require('laravel-mix');
const { CleanPlugin } = require('webpack');
require('laravel-mix-svelte');

// Enable svelte support
mix.svelte({
    preprocess: require('svelte-preprocess')({ postcss: true }),
    emitCss: true,
    dev: true,
});

// Disable notifications
mix.disableNotifications();

mix.js('src/background/content.js', 'dist/background/content.js')
    .js('src/warn/index.js', 'dist/warn/index.js')
    .copy('src/warn/index.html', 'dist/warn/warn.html')
    .copy('src/warn/critical.png', 'dist/warn/critical.png')
    .js('src/popup/index.js', 'dist/popup/index.js')
    .copy('src/popup/index.html', 'dist/popup/index.html')
    .copy('src/manifest.json', 'dist/manifest.json')
    .copyDirectory('src/icons', 'dist/icons');

mix.svelte();