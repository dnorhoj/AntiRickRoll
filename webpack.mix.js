const mix = require('laravel-mix');
require('laravel-mix-svelte');
require('laravel-mix-clean');

const manifestVersion = process.env.MANIFEST || 'v3';

// Clean dist folder
if (mix.inProduction()) {
    mix.clean({
        cleanOnceBeforeBuildPatterns: ['dist'],
    });
}

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
    .copyDirectory('src/icons', 'dist/icons');

// Copy manifest
if (manifestVersion === 'v3') {
    mix.copy('src/manifest-v3.json', 'dist/manifest.json');
} else {
    mix.copy('src/manifest-v2.json', 'dist/manifest.json');
}

mix.svelte();