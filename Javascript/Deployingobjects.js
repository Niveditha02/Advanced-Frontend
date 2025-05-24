function product(n,p,c){
      this.name = n;
      this.product = p;
      category.call(this,c);
}

function category(c){
      this.categoryName = c;
      this.getcategoryName = function() {
            console.log(this.categoryName);
      }
}

product.prototype = Object.create(category.prototye);

let p = new product("niveditha",25000,"electronics");
p.getcategoryName();
