if (localStorage.clicks == undefined) {
    localStorage.setItem('clicks', 0)
}
if (localStorage.clickers == undefined || localStorage.clickers == "0") {
    localStorage.setItem('clickerPrice', 10)
    localStorage.setItem('clickers', 0)
}
let audioFiles = [
    "chord C maj.wav",
    "chord C min.wav",
    "chord E min.wav",
    "chord F min.wav"
]
let autoClick
let audio
if (localStorage.clickers !== 0) {
     autoClick = setInterval(addCount(), 2000 / parseInt(localStorage.clickers))
}
let clicks = parseInt(localStorage.clicks)
function addCount() {
    audio = new Audio(audioFiles[Math.floor(Math.random()*audioFiles.length)]);
    audio.play();
    localStorage.setItem('clicks', parseInt(localStorage.clicks) + 1);
    document.getElementById("timesClicked").innerHTML = localStorage.clicks;
    document.getElementById("clickers").innerHTML = localStorage.clickers;
    document.getElementById("price").innerHTML = "Clicker price: " + localStorage.clickerPrice;
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
        document.getElementById("clickers").innerHTML = "You don't have enough clicks to buy that.";
        setTimeout(function(){document.getElementById("clickers").innerHTML = localStorage.clickers},5000)
    } else {
        localStorage.setItem("clickers", parseInt(localStorage.clickers) + 1)
        document.getElementById("clickers").innerHTML = localStorage.clickers;0
        localStorage.setItem('clicks', parseInt(localStorage.clicks) - parseInt(localStorage.clickerPrice))
        document.getElementById("timesClicked").innerHTML = localStorage.clicks;
        localStorage.setItem('clickerPrice', Math.round(parseInt(localStorage.clickerPrice) + (parseInt(localStorage.clickerPrice) / 2)))
        document.getElementById("price").innerHTML = "Clicker price: " + localStorage.clickerPrice;
        clicker()
    }
}
let clickclick = {
    reset: function(no, parameters) { localStorage.setItem('clicks', 0); localStorage.setItem('clickers', 0); localStorage.setItem('clickerPrice', 10); document.getElementById("clickers").innerHTML = localStorage.clickers; document.getElementById("timesClicked").innerHTML = localStorage.clicks; },
    hardreset: function(reloadPageType) { localStorage.removeItem('clicks'); localStorage.removeItem('clickers'); localStorage.removeItem('clickerPrice'); if (typeof reloadPageType === undefined) { if (reloadPageType === 0) { window.location.reload(true); } else if (reloadPageType === 1) { window.location.reload(false); } else if (reloadPageType !== 0 && reloadPagetype !== 1) { console.error("That is not a valid value. Please specify a valid value. 0 = refresh and load new page from server, 1 = refresh from cache") } } else { window.location.reload(true) } },
    price: console.log("Clicker Price: " + localStorage.clickerPrice)
}
function loadSave(key) {
    try {
        let decryptedKey = atob(key)
        let values = decryptedKey.split('|')
        let clicks = atob(values[0])
        let clickers = atob(values[1])
        let clickerPrice = atob(values[2])
    }
    catch (error) {
        throw "error when decrypting save data - " + error
    }
    try {
        localStorage.clicks = clicks
        localStorage.clickers = clickers
        localStorage.clickerPrice = clickerPrice
        return {
            clicks: clicks,
            clickers: clickers,
            clickerPrice: clickerPrice
        }
        console.log("Loaded with success!")
        window.location.reload(false)
    }
    catch (error) {
        throw "error when loading save data - " + error
    }
}
function createSave() {
    let clicks = btoa(localStorage.clicks)
    let clickers = btoa(localStorage.clickers)
    let clickerPrice = btoa(localStorage.clickerPrice)
    let values = [clicks, clickers, clickerPrice]
    let saveKey = btoa(values.join('|'))
    return saveKey
}
setTimeout(()=>{
    if (localStorage.clickers !== 0) {
        clicker()
    }
}, 1000)
