function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
if (localStorage.token == undefined) {
    localStorage.setItem(randomString(24, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"))
}
function light() {
    location.replaceState(null, "", "https://ccjit.github.io/")
}
