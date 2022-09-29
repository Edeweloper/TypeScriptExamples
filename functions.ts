export function topla(x,y){
    return x+y;
}
function topla2(x:number,y:number):number{
    return x+y;
}

let topla3=function(x:number,y:number):number{
    return x+y;
}
console.log(topla(2,3));
console.log(topla("Ankara",2))
console.log(topla2(2,4));
console.log(topla3(3,4));
function topla4(x:number,y:number=4):number{
    return x+y;
}
console.log(topla4(3))

function topla5(x:number,y?:number):number{
    if(y){
        return x+y;
    }
    return x;
}
console.log(topla5(3))
//alınacak parametre sayısı belli değilse rest parametrelerden yararlanıyoruz.
// ilkDavetliyi yazmasanda çalışır ama kod okunaklığı için böylede kullanılır.
function davetEt(ilkDavetli : string, ...digerleri : string[]){
    return ilkDavetli+"  "+digerleri.join(" ")
}
console.log(davetEt("Engin","Salih","Ahmet"))