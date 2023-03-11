(() => {
    // Define blocked ids. Hardcoded for now, working on changing that.
    const blockedIds = require('./blockedIds.js');
    console.log(blockedIds);

    // We grab the storage every time in case an id gets added while we're browsing (futureproofing)
    const checkLink = () => chrome.storage.local.get(['bypassed', 'totalRickRolls', 'extDisabled'], res => {
        // Check if blocking is enabled and if url in blocked links
        if (!res.extDisabled && blockedIds.find(i => location.href.includes(i))) {
            // If not bypassed (user clicked continue), show warning page
            if (!res.bypassed) {
                // Update total rickrolls blocked counter
                chrome.storage.local.set({ totalRickRolls: (res.totalRickRolls ?? 0) + 1 })

                location = chrome.runtime.getURL('warn/warn.html') + '?' + location.href;
            } else {
                chrome.storage.local.set({ bypassed: false })
            }
        }
    });

    // Make sure we're not already on a blocked link
    checkLink();

    // Hook into youtube navigation event
    addEventListener('yt-navigate-start', checkLink);
})();
