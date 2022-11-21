(() => {
	document.getElementById('back-btn').addEventListener('click', () => {
		if (history.length > 2) {
			history.go(-2);
		} else {
			// Close tab if we're on the first page
			chrome.tabs.getCurrent(tab => chrome.tabs.remove(tab.id));
		}
	});

	document.getElementById('continue-btn').addEventListener('click', () => {
		chrome.storage.local.set({ bypassed: true })
		location.href = window.location.search.slice(1);
	});
})();