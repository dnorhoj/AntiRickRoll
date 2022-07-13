(() => {
	// Get elements
	let toggler = document.querySelector('#enableToggle');
	console.log(toggler);
	console.log("toggler");
    	toggler.checked = true;

	// Set toggler's initial value
	chrome.storage.local.get('disabled', res => {
		toggler.checked = !res.disabled;
	});

	// Give toggler functionality
	toggler.addEventListener('click', () => {
        chrome.storage.local.set({"disabled": !toggler.checked});
	});
})();
