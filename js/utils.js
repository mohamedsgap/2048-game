var log = console.log.bind(console);
var random = function (start, end) {
    start = start === void 0 ? 0 : start;
    end = end === void 0 ? 1 : end;
    end = end + 1;
    var rand = Math.random() * (end - start) + start;
    return Math.floor(rand);
};