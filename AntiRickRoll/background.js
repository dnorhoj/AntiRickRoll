(() => {
    let blocked_ids = [
        "dQw4w9WgXcQ",
        "-51AfyMqnpI",
        "oHg5SJYRHA0",
        "cvh0nX08nRw",
        "V-_O7nl0Ii0",
        "2ocykBzWDiM"
    ];

    if(blocked_ids.find(i => location.href.includes(i))) {
        chrome.storage.local.get('bypassed', result => {
            console.log(result)
            if(result['bypassed'] !== true) {
                location = chrome.runtime.getURL("warn/warn.html")+"?"+location.href;
            } else {
                chrome.storage.local.set({"bypassed": false})
            }
        });
    }
})();
