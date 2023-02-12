(() => {
    // Define blocked ids. Hardcoded for now, working on changing that.
    const blockedIds = [
        'dQw4w9WgXcQ',
        '-51AfyMqnpI',
        'oHg5SJYRHA0',
        'cvh0nX08nRw',
        'V-_O7nl0Ii0',
        '2ocykBzWDiM',
        'j5a0jTc9S10',
        'HPk-VhRjNI8',
        'IO9XlQrEt2Y',
        'QB7ACr7pUuE',
        'iik25wqIuFo',
        'zL19uMsnpSU',
        'rTgj1HxmUbg',
        'xvFZjo5PgG0',
        '8ybW48rKBME',
        'ub82Xb1C8os',
        'j8PxqgliIno',
        'j7gKwxRe7MQ',
        'th0pH9srXRY',
        'gPkZS92WCIo',
        'ENYalQvZG4Q',
        'QhuZIEkKkXA',
        'SjTOn5scRmY',
        'XfIIQYnBHrQ',
        'bkOVXdvijmQ',
        'LLFhKaqnWwk',
        'xvFZjo5PgG0'
    ];

    // We grab the storage every time in case an id gets added while we're browsing (futureproofing)
    const checkLink = () => chrome.storage.local.get(['disabled', 'bypassed', 'total'], res => {
        // Check if blocking is enabled and if url in blocked links
        if (!res.disabled && blockedIds.find(i => location.href.includes(i))) {
            // Update total rickrolls blocked counter
            chrome.storage.local.set({ total: (res.total || 0) + 1 })

            // If not bypassed (user clicked continue), show warning page
            if (!res.bypassed) {
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
