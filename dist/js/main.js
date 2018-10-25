var m={name:"h"},o=new Object({age:"18"}),Mac=function(e){this.name=e},obj=new Mac,P={ace:"A"},objp=Object.create(P);
var M=function(o){this.name=o};M.prototype.action=function(){console.log("M原型方法")};var a=new M("a");console.log(a.name),a.action();
var M=function(o){this.name=o},a=new M;console.log(M.prototype===a.__proto__);