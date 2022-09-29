interface Product{
    id:number;
    name:string;
    uniPrice:number;
}
//tüm değerleri vermek zorundaysan interface zorunda değilsen class
class Product2{
    id:number;
    name:string;
    uniPrice:number;
}
function save (product:Product){
    console.log(product.name +"  kaydedildi")
}
function save2 (product:Product2){
    console.log(product.name +"  kaydedildi")
}
save({id:1,name:"Laptop",uniPrice:10});
let mouse = new Product2();
mouse.name="ATech";
save2(mouse);
interface PersonService{
    save();
}
class CustumerService implements PersonService{
    save(){

    }
}