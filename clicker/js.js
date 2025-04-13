if (localStorage.clicks == undefined) {
    localStorage.setItem('clicks', 0)
}
function btnClick() {
    localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1);
    document.getElementById("timesClicked").innerHTML = localStorage.clicks;
}  
