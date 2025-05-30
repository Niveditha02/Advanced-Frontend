//function constructor
function product(n,p,d){
      this.name = n;
      this.price = p;
      this.description = d;
}
const p1 = new product("fridge",50000,"nice fridge");
console.log(p1);


//contructor
class Product {
  constructor(n, p, d) {
    this.name = n;
    this.price = p;
    this.description = d;
  }

  display() {
    console.log(`Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`);
  }
}

// Syntax to create an object
const p = new Product("iphone", 5000, "nice phone");
console.log(p);         
p.display();
