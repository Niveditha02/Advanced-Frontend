function Sum(prevresult,currvalue){
      console.log(prevresult,currvalue);
      return prevresult+currvalue;
}
const arr=[1,2,3,4,5,6,7];
let result = arr.reduce(Sum);
console.log(result);

//using reduce in real world example
function Addtheprices(prevresult,currvalue){
      let newprice= prevresult.price + currvalue.price;
      return {price:newprice};

}
let cart = [{price:1000000, name:"Iphone"},
{price:500,name:"backcover"},
{price:300,name:"tempered glass"}]
const totalprice = cart.reduce(Addtheprices);
console.log(totalprice.price);