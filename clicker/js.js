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
    document.getElementById("clickerAmount").innerHTML = localStorage.clickers;
}
function buyClicker() {
    let price = localStorage.clickerPrice
    if (localStorage.clickers == undefined) {
        localStorage.setItem('clickers', 0)
    }
    if (parseInt(localStorage.clicks) < price) {
        document.getElementById("clickerAmount").innerHTML = "You don't have enough clicks to buy that.";
        setTimeout(function(){document.getElementById("clickerAmount").innerHTML = localStorage.clickers},5000)
    } else {
        localStorage.setItem("clickers", parseInt(localStorage.clickers) + 1)
        localStorage.setItem('clicks', parseInt(localStorage.clicks) - price)
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
        document.getElementById("clickerAmount").innerHTML = localStorage.clickers;
        let price = price + (price / 2)
        localStorage.setItem('clickerPrice', price)
    }
}
if (parseInt(localStorage.clickers) > 0) {
    setInterval(function () {
        localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1); 
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
    }, 10000 / parseInt(localStorage.clickers))
}
