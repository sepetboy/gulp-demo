var M = function (name) {
  this.name = name
}

M.prototype.action = function () {
  console.log("M原型方法");
}

var a = new M("a");
console.log(a.name);
a.action();