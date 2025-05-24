function product(n,p,d){
      this.name = n;
      this.price = p;
      this.description = d;
}
const p1 = new product("niveditha",50000,"I am quick learner");
console.log(p1);


//contructor function
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
console.log(p);         // Logs the object
p.display();            // Calls the display method
