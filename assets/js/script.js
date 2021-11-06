window.onload = () => {
    let switcher = document.querySelector('#switcher');
    let screenshot_light = document.querySelector('#screenshot1');
    let screenshot_dark = document.querySelector('#screenshot2');

    switcher.addEventListener('click', () => {
        if (DarkReader.isEnabled()) {
            screenshot_light.style.display = 'block';
            screenshot_dark.style.display = 'none';
            DarkReader.disable();
        } else {
            screenshot_light.style.display = 'none';
            screenshot_dark.style.display = 'block';
            DarkReader.enable();
        }
    });

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        switcher.click();
    }
};