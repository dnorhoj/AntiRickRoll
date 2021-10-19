(() => 
{
    let enabled = true;
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
    var length = 8;

    if(enabled && blocked_ids.find(i => location.href.includes(i))) 
    {
        chrome.storage.local.get('total', result =>
        {
            total = result['total'] || 0;
            chrome.storage.local.set({"total": total + 1})
        });

        chrome.storage.local.get('idArr', result =>
        {   
            tempArray = result['idArr'] || [false,false,false,false,false,false,false,false];
            tempArray[blocked_ids.findIndex(i => location.href.includes(i))] = true;
            chrome.storage.local.set({"idArr": tempArray})
        });

        chrome.storage.local.get('bypassed', result => 
        {
            console.log(result)
            if(result['bypassed'] !== true) 
            {
                location = chrome.runtime.getURL("warn/warn.html")+"?"+location.href;
            } 
            else 
            {
                chrome.storage.local.set({"bypassed": false})
            }
        });
    }
})();
