var M = function (name) {
  this.name = name;
}

var a = new M();

console.log(M.prototype === a.__proto__);