export function selamVer(name:string){
    return "Hello  " + name;
}
let mesaj = selamVer('Derin');
 console.log(mesaj);

let sayi : number =12
sayi = 10;
sayi=10.4;

let sehir : string ="İstanbul"
sehir = "Adana"
sehir ="Ankara"

let dogrumuu :boolean= false
dogrumuu=true
dogrumuu=false

let sayilar:number[] = [1,2,3]
let sayilar2 : Array <number>=[1,2,3]

let dizi:[number,string] = [2,"Ankara"]
// dizi[0]
// dizi[1]


enum Renk{Kirmizi,Mavi,Siyah}
let renk : Renk = Renk.Kirmizi

//any herhangi demek gelecek olan datanın veri tipinden emin değilsek kullanırız
let deger : any ="Ankara"
deger = 2
deger = {}
//void genellikle fonk kullanılır birşey döndürülmeyecekse.
let deger2 : void = undefined
function selamVer2():void{
    console.log("Hello")
}
//undefined null
let yas:number ;
yas=10;

class Musteri{
    //referansı oluşmamış
}
