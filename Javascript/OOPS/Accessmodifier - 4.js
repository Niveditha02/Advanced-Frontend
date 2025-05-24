class Product{
      #name;
      #price;
      constructor(n,p,d){
            this.#name =n;//#with keyword will make it a private using access modifier
            this.#price=p;
            this.description=d;
      }
      set Name(n) //adding condition only string to take as input 
      {
            if(typeof(n)!='string'){
                  console.log("invalid name passed");
                  return;
            }

            this.#name = n;
      }
      setprice(p){
            if(p<0){
                  return;
            }
                  this.#price = p;
      }

      get Name(){
            return this.#name;
      }
      display(){
            console.log(this.#name,this.description,this.#price);
      }
}
const p = new Product("niveditha",100000,"a nice phone with a cost of");
p.Name = "iphone";
console.log(p);
console.log(p.Name);

class shop{
      constructor(n){
      this.name = n;
      }
}
let d =  new shop("niveditha");
shop.prototype.display = function(){
      console.log("name of the shop is",this.name);
}
d.display();