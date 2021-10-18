(() => {
    let blocked_ids = [
        "dQw4w9WgXcQ",
        "-51AfyMqnpI",
        "oHg5SJYRHA0",
        "cvh0nX08nRw",
        "V-_O7nl0Ii0",
        "2ocykBzWDiM",
        "j5a0jTc9S10",
        "HPk-VhRjNI8"
    ];

    chrome.storage.local.get(['disabled', 'bypassed'], res => {
        if(!res.disabled && blocked_ids.find(i => location.href.includes(i))) {
            if(!res.bypassed) {
                location = chrome.runtime.getURL("warn/warn.html")+"?"+location.href;
            } else {
                chrome.storage.local.set({"bypassed": false})
            }
        }
    });
})();
