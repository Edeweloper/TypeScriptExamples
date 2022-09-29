abstract class  KrediBase {
    constructor() {
        
    }
    kaydet(){
        console.log("Kaydedildi")
    }
    abstract hesapla():void;
} 
    
class TuketiciKredi extends KrediBase{
    hesapla(): void {
        console.log("Tüketici kredisine göre hesap yapıldı")
    }

}
class KonutKredisi extends KrediBase{
    hesapla(): void {
        console.log("Konut kredisine göre hesap yapıldı")
    }

}
class MortgageKredi extends KrediBase{
    hesapla(): void {
        console.log("Mortgage kredisine göre hesap yapıldı")
    }
    baskaBirOperasyon(){
        console.log("Bu başka bir operasyondur")
    }
}
let tuketiciKredi=new TuketiciKredi();
tuketiciKredi.hesapla();
tuketiciKredi.kaydet();
let mortgageKrdi = new MortgageKredi();
mortgageKrdi.hesapla();
mortgageKrdi.kaydet();
mortgageKrdi.baskaBirOperasyon();

let kredi : KrediBase
kredi = new TuketiciKredi();
kredi= new MortgageKredi();