function product(n){
      this.name = n;
}

product.prototype.getDetails = function(){
      console.log("name of the product is",this.name);
}
const d = new product("iphone");
d.getDetails();