(() => {
	// Get elements
	let toggler = document.querySelector('#toggler');
	let total = document.querySelector('#total');

	// Set toggler's initial value
	chrome.storage.local.get('disabled', res => {
		toggler.innerHTML = !res.disabled ? "Disable" : "Enable";
	});

	// Give toggler functionality
	toggler.addEventListener('click', () => {
		chrome.storage.local.get('disabled', res => {
			chrome.storage.local.set({"disabled": !res.disabled}, () => {
				toggler.innerHTML = !!res.disabled ? "Disable" : "Enable";
			});
		});
	});

	// Display rickrolls blocked
	chrome.storage.local.get('total', res => {
		total.innerHTML = res['total'] || 0;
	});
})();