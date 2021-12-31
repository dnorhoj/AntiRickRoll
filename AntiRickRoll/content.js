(() => {
    // Define blocked ids. Hardcoded for now, working on changing that.
    let blocked_ids = [
        "dQw4w9WgXcQ",
        "-51AfyMqnpI",
        "oHg5SJYRHA0",
        "cvh0nX08nRw",
        "V-_O7nl0Ii0",
        "2ocykBzWDiM",
        "j5a0jTc9S10",
        "HPk-VhRjNI8",
        "iik25wqIuFo"
    ];

    chrome.storage.local.get(['disabled', 'bypassed', 'total'], res => {
        // Check if blocking is enabled and if url in blocked links
        if(!res.disabled && blocked_ids.find(i => location.href.includes(i))) {
            // Update total rickrolls blocked counter
            chrome.storage.local.set({"total": (res['total'] || 0) + 1})
            
            // If not bypassed (user clicked continue), show warning page
            if(!res.bypassed) {
                location = chrome.runtime.getURL("warn/warn.html")+"?"+location.href;
            } else {
                chrome.storage.local.set({"bypassed": false})
            }
        }
    });
})();
