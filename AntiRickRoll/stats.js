function toggleBlocking() {
}

window.onload = function(){
    var total;
    var unique;

    // Update total and unique variable numbers here
  
    document.getElementById('total').innerHTML = total;
    document.getElementById('unique').innerHTML = unique;
};

document.querySelector("form").addEventListener("toggle", toggleBlocking);