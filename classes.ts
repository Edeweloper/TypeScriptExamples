export{}
 class Ev {
    odaSayisi:number;
    pencereSayisi : number;
    kat :number;
    constructor(odaSayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi=odaSayisi;
        this.pencereSayisi=pencereSayisi;
        this.kat=kat;
    }
    yemekYe(){
        console.log(this.kat +"  katlı evde " +"Yemek yenildi")
    }
}

let ev=new Ev(3,4,5);
ev.yemekYe();
console.log(ev.kat)

class Kisi{
    private _isim:string
    get isim():string{
        return "Sayın :"+ this._isim;
    }
    set isim(ad :string){
        this._isim=ad;
    }
kaydet(){
    console.log("Kisi kaydedildi.")
}
}
 class Muster extends Kisi{
    satisYapildi(){
        console.log("Stis yapildi")
    }
 }

 class Personel extends Kisi{
    maasOde(){
        console.log("Maas alindi.")
    }
 }
 let personel = new Personel();
 personel.isim="Engin"
 console.log(personel.isim)
 personel.kaydet();
 personel.maasOde();