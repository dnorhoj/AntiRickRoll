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

window.onload = function()
{

	var total = 0;
	var unique = 0;
	var tempArr = [false,false,false,false,false,false,false,false];

	// Update total and unique variable numbers here


	chrome.storage.local.get('total', result =>
	{
		total = result['total'] || total;
		document.getElementById('total').innerHTML = total
		chrome.storage.local.set({'total': total})
	});

	chrome.storage.local.get('idArr', result =>
	{
		tempArr = result['idArr'] || tempArr;
		for (let i = 0; i < tempArr.length; i += 1)
		{
			if(tempArr[i] === true)
			{
				unique += 1;
			}
		}
		if (total === 0)
		{
			unique = 0;
		}
		document.getElementById('unique').innerHTML = unique;
	});
};
