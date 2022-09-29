"use strict";
exports.__esModule = true;
exports.topla = void 0;
function topla(x, y) {
    return x + y;
}
exports.topla = topla;
function topla2(x, y) {
    return x + y;
}
var topla3 = function (x, y) {
    return x + y;
};
console.log(topla(2, 3));
console.log(topla("Ankara", 2));
console.log(topla2(2, 4));
console.log(topla3(3, 4));
function topla4(x, y) {
    if (y === void 0) { y = 4; }
    return x + y;
}
console.log(topla4(3));
function topla5(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
console.log(topla5(3));
//alınacak parametre sayısı belli değilse rest parametrelerden yararlanıyoruz.
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + "  " + digerleri.join(" ");
}
console.log(davetEt("Engin", "Salih", "Ahmet"));
