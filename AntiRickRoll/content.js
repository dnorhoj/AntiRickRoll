(() => {
    // Define blocked ids. Hardcoded for now, working on changing that.
    const blockedIds = [
        'dQw4w9WgXcQ',
        '2ocykBzWDiM',
        'HPk-VhRjNI8',
        'IO9XlQrEt2Y',
        'zL19uMsnpSU',
        'rTgj1HxmUbg',
        'th0pH9srXRY',
        'gPkZS92WCIo',
        'ENYalQvZG4Q',
        'QhuZIEkKkXA',
        'SjTOn5scRmY',
        'XfIIQYnBHrQ',
        'bkOVXdvijmQ',
        'G8iEMVr7GFg',
        'AyOqGRjVtls',
        'SpZ2FsEfwP4',
        'nrsnN23tmUA',
        '8mkofgRW1II',
        'rAx5LIul1N8',
        'sO4wVSA9UPs',
        'doEqUhFiQS4',
        'epyRUp0BhrA',
        'rbsPu1z3ugQ',
        'ptw2FLKXDQE',
        '8leAAwMIigI',
        'E4ihJMQUmUQ',
        'cjBHXvBYw5s',
        'xaazUgEKuVA',
        'Uj1ykZWtPYI',
        'EE-xtCF3T94',
        'V-_O7nl0Ii0',
        'cqF6M25kqq4',
        '0SoNH07Slj0',
        'j5a0jTc9S10',
        'dPmZqsQNzGA',
        'nHRbZW097Uk',
        'BjDebmqFRuc',
        'Gc2u6AFImn8',
        '8VFzHYtOARw',
        'cSAp9sBzPbc',
        'Dx5i1t0mN78',
        'Oo0twK2ZbLU',
        'cvh0nX08nRw',
        'lXMskKTw3Bc',
        '7z_1E8VGJOw',
        'VgojnNgmgVs',
        '5wOXc03RwVA',
        '6_b7RDuLwcI',
        'rrs0B_LM898',
        'uK5WDo_3s7s',
        'wzSVOcgKq0',
        'E50L-JYWm3w',
        'eBGIQ7ZuuiU',
        'H8ZH_mkfPUY',
        'LLFhKaqnWwk',
        'xvFZjo5PgG0',
        'lpiB2wMc49g',
        'PzqQSOaCcnw',
        'p7YXXieghto',
        'xbXoWRs2C8M',
        '7lEodsmjeQU',
        'xfr64zoBTAQ',
        'pKskW7wJ0v0',
        'j7gKwxRe7MQ',
        'LWErcuHm_C4',
        'dRV6NaciZVk',
        'iik25wqIuFo',
        'll-mQPDCn-U',
        'a6pbjksYUHY',
        'MCjlo7PtXMQ',
        'j8PxqgliIno',
        'mrThFRR3n8A',
        'QB7ACr7pUuE',
        'HnfkEVtetuE',
        'bIwVIx5pp88',
        'AACOcpA8i-U',
        'Yb6dZ1IFlKc',
        'ub82Xb1C8os',
        'RvBwypGUkPo',
        'gvGyS5j9aFY',
        'r8tXjJL3xcM',
        'oHg5SJYRHA0',
        'hxCXEX2JOKE',
        'JzjldPdpT7Q',
        'GHMjD0Lp5DY'
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
