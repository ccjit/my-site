if (localStorage.clicks == undefined) {
    localStorage.setItem('clicks', 0)
}
if (localStorage.clickers == undefined || localStorage.clickers == "0") {
    localStorage.setItem('clickerPrice', 10)
    localStorage.setItem('clickers', 0)
}
function addCount() {
    localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1);
    document.getElementById("timesClicked").innerHTML = localStorage.clicks;
    document.getElementById("clickers").innerHTML = localStorage.clickers;
    document.getElementById("price").innerHTML = "Clicker price: " + localStorage.clickerPrice;
}
function clicker() {
    clearInterval(autoClick)
    let autoClick = setInterval(addCount(), 2000 / parseInt(localStorage.clickers))
}
function buyClicker() {
    if (localStorage.clickers == undefined) {
        localStorage.setItem('clickers', 0)
    }
    if (parseInt(localStorage.clicks) < parseInt(localStorage.clickerPrice)) {
        document.getElementById("clickers").innerHTML = "You don't have enough clicks to buy that.";
        setTimeout(function(){document.getElementById("clickers").innerHTML = localStorage.clickers},5000)
    } else {
        localStorage.setItem("clickers", parseInt(localStorage.clickers) + 1)
        document.getElementById("clickers").innerHTML = localStorage.clickers;
        localStorage.setItem('clicks', parseInt(localStorage.clicks) - parseInt(localStorage.clickerPrice))
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
        localStorage.setItem('clickerPrice', parseInt(localStorage.clickerPrice) + (parseInt(localStorage.clickerPrice) / 2))
        document.getElementById("price").innerHTML = "Clicker price: " + localStorage.clickerPrice;
        clicker()
    }
}
let clickclick = {
    reset: function(noparam) { localStorage.setItem('clicks', 0); localStorage.setItem('clickers', 0); localStorage.setItem('clickerPrice', 10); document.getElementById("clickers").innerHTML = localStorage.clickers; document.getElementById("timesClicked").innerHTML = localStorage.clicks; },
    price: console.log("Clicker Price: " + localStorage.clickerPrice)
}
