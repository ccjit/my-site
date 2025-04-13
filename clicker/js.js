if (localStorage.clicks == undefined) {
    localStorage.setItem('clicks', 0)
}
if (localStorage.clickers == undefined) {
    let price = 10
}
let clicks = localStorage.clicks
document.getElementById("timesClicked").innerHTML = localStorage.clicks;
function addCount() {
    if (clicks == localStorage.clicks) {
        localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1);
    } else {
        localStorage.setItem('clicks', 0);
    }
    let clicks = localStorage.clicks
    document.getElementById("timesClicked").innerHTML = localStorage.clicks;
}
function buyClicker() {
    if (localStorage.clickers == undefined) {
        localStorage.setItem('clickers', 0)
    }
    if (parseInt(localStorage.clicks) < price) {
        document.getElementById("timesClicked").innerHTML = "You don't have enough clicks to buy that.";
        setTimeout(function(){document.getElementById("timesClicked").innerHTML = localStorage.clicks},5000)
    } else {
        localStorage.setItem("clickers", parseInt(localStorage.clickers) + 1)
        localStorage.setItem('clicks', parseInt(localStorage.clicks) - price)
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
        document.getElementById("clickerAmount").innerHTML = localStorage.clickers;
        let price = price + (price / 2)
    }
}
if (parseInt(localStorage.clickers) > 0) {
    setInterval(function () {
        localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1); 
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
    }, 10000 / parseInt(localStorage.clickers))
}
