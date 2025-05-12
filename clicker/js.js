if (localStorage.clicks == undefined) {
    localStorage.setItem('clicks', 0)
}
if (localStorage.clickers == undefined || localStorage.clickers == "0") {
    localStorage.setItem('clickerPrice', 10)
    localStorage.setItem('clickers', 0)
}
let autoClick
function addCount() {
    localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1);
    document.getElementById("timesClicked").text = localStorage.clicks;
    document.getElementById("clickers").text = localStorage.clickers;
    document.getElementById("price").text = "Clicker price: " + localStorage.clickerPrice;
}
function clicker() {
    clearInterval(autoClick)
    autoClick = setInterval(addCount(), 2000 / parseInt(localStorage.clickers))
}
function buyClicker() {
    if (localStorage.clickers == undefined) {
        localStorage.setItem('clickers', 0)
    }
    if (parseInt(localStorage.clicks) < parseInt(localStorage.clickerPrice)) {
        document.getElementById("clickers").text = "You don't have enough clicks to buy that.";
        setTimeout(function(){document.getElementById("clickers").text = localStorage.clickers},5000)
    } else {
        localStorage.setItem("clickers", parseInt(localStorage.clickers) + 1)
        document.getElementById("clickers").text = localStorage.clickers;
        localStorage.setItem('clicks', parseInt(localStorage.clicks) - parseInt(localStorage.clickerPrice))
        document.getElementById("timesClicked").text = localStorage.clicks;
        localStorage.setItem('clickerPrice', parseInt(localStorage.clickerPrice) + (parseInt(localStorage.clickerPrice) / 2))
        document.getElementById("price").text = "Clicker price: " + localStorage.clickerPrice;
        clicker()
    }
}
let clickclick = {
    reset: function(no, parameters) { localStorage.setItem('clicks', 0); localStorage.setItem('clickers', 0); localStorage.setItem('clickerPrice', 10); document.getElementById("clickers").text = localStorage.clickers; document.getElementById("timesClicked").text = localStorage.clicks; },
    price: console.log("Clicker Price: " + localStorage.clickerPrice)
}
clicker()
