"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Ev = /** @class */ (function () {
    function Ev(odaSayisi, pencereSayisi, kat) {
        this.odaSayisi = odaSayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log(this.kat + "  katlı evde " + "Yemek yenildi");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);
var Kisi = /** @class */ (function () {
    function Kisi() {
    }
    Object.defineProperty(Kisi.prototype, "isim", {
        get: function () {
            return "Sayın :" + this._isim;
        },
        set: function (ad) {
            this._isim = ad;
        },
        enumerable: false,
        configurable: true
    });
    Kisi.prototype.kaydet = function () {
        console.log("Kisi kaydedildi.");
    };
    return Kisi;
}());
var Muster = /** @class */ (function (_super) {
    __extends(Muster, _super);
    function Muster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Muster.prototype.satisYapildi = function () {
        console.log("Stis yapildi");
    };
    return Muster;
}(Kisi));
var Personel = /** @class */ (function (_super) {
    __extends(Personel, _super);
    function Personel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Personel.prototype.maasOde = function () {
        console.log("Maas alindi.");
    };
    return Personel;
}(Kisi));
var personel = new Personel();
personel.isim = "Engin";
console.log(personel.isim);
personel.kaydet();
personel.maasOde();
