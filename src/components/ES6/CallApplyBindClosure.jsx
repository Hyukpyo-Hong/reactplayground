import React from "react";

export default () => {
  return <div />;
};

var obj = {
  a: 1
};
var func = {
  a: 100,
  show: function(b, c) {
    console.log("a:", this.a);
    console.log("b:", b);
    console.log("c:", c);
  }
};
// ------------------------ Call
console.info(
  "Call: Injecting object as a first argument. From second arguments needs to be seperated parameters"
);
func.show.call(obj);
func.show.call(obj, 2, 3);
console.log(" ");
// ------------------------ Apply
console.info(
  "Apply: Injecting object as a first argument. Second parameter should be array type, and it will be mapped"
);
func.show.apply(obj, [2, 3]);
console.info("Apply can be replaced by spread syntax ...");
var params = [2, 3];
func.show(...params);
console.log(" ");
// ------------------------ Bind
console.info(
  "Bind: Like Call method, it injects object, useful when creating a new function, and it loses this scope "
);
obj = {
  a: 1,
  getA: function() {
    console.log("This.a: ", this.a);
  }
};

let tempObj = obj.getA;
console.log("If just call obj.getA(), this.a is empty");
console.log(tempObj);
console.log("If just call obj.getA().bind(obj), this.a is injected");
tempObj = obj.getA.bind(obj);
console.log(tempObj());
console.log(" ");

console.log("Another Bind example");
obj = {
  asyncGet(cb) {
    cb();
  },
  parse() {
    console.log("parse method is called");
  },
  render() {
    console.log("This: ", this);
    this.asyncGet(
      function() {
        console.log("Inner This: ", this);
        this.parse();
      }.bind(this)
    );
  }
};
console.log("If there is no bind, inner This will be null");
obj.render();
console.log(" ");

//Closures
console.info(
  "Closure: Inner funtion has three scope chains: 1) its own scope 2) it's 1 step parent(outer) scope 3) global. And even outer function executed, and finished, outer variables are preserved by inner function. This is the closure. Since this outer variable cannot be accessible from external, we can use it as private.  "
);
function outer() {
  var b = 10;
  function inner() {
    var a = 20;
    console.log("a= " + a + " b= " + b);
    a++;
    b++;
  }
  return inner;
}
var X = outer();
var Y = outer();
X();
X();
X();
Y();
