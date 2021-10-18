(() => {
	let toggler = document.querySelector('#toggler')
	let update = () => {
		chrome.storage.local.get(['disabled'], (result) => {
			toggler.innerHTML = !result.disabled ? "Disable" : "Enable"
		});
	}
	
	update()

	toggler.addEventListener('click', () => {
		chrome.storage.local.get(['disabled'], (res) => {
			chrome.storage.local.set({"disabled": !res.disabled}, update)
		});
	})
})();