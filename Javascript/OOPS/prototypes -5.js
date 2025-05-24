function product(n){
      this.name = n;
}

product.prototype.getDetails = function(){
      console.log("name of the product is",this.name);
}
const d = new product("iphone");
d.getDetails();

//example 2
function Player(fname, lname, position) {
  this.firstname = fname;
  this.lastname = lname;
  this.numbertoBat = position;
}

// Adding method to the prototype (not to each object individually)
Player.prototype.getDetails = function () {
  console.log(this.firstname, this.lastname, "comes at no", this.numbertoBat);
};

// Creating an object
const player2 = new Player("Rohit", "Sharma", 1);
player2.getDetails(); // Works because getDetails is on the prototype