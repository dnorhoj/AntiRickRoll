chrome.storage.local.get('bypassed', async result => {
    if (result.bypassed) {
        chrome.storage.local.set({"bypassed": false});
    } else {
        const res = await fetch(`${location.protocol}//antirickroll.theblock.heliohost.org/api?url=${location.href}&extension=1`)
            .then(data => { return data.json() })
            .catch(e => { console.error(`Error checking for Rick Roll: ${e}`) });
        console.log(res);
        if (res.status) {
            location = chrome.runtime.getURL("warn/warn.html")+"?"+location.href;
        }
    }
});
