var log = console.log.bind(console);
var random = function (start, end) {
    start = start === void 0 ? 0 : start;
    end = end === void 0 ? 1 : end;
    end = end + 1;
    var rand = Math.random() * (end - start) + start;
    return Math.floor(rand);
};
var $ = function (elem) {
    return document.querySelectorAll(elem);
}
var on = function (elem, type, callback) {
    elem.addEventListener(type, function (e) {
        callback(e);
    });
}

var indexToPos = function (index) {
    return {
        x: index % 4,
        y: Math.floor(index / 4),
    }
}