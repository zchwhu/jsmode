/**
 * Created by Administrator on 2016/11/28 0028.
 */
function SuperClass(name) {
    this.name = name;
    this.books = ["html","css","JavaScript"];
}

SuperClass.prototype.getName = function () {
    console.log(this.name);
}

function SubClass(name,time) {
    SuperClass.call(this,name);
    this.time = time;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getTime = function () {
    console.log(this.time);
}

var instance1 = new SubClass("js book",2014);
instance1.books.push("设计模式");
console.log(instance1.books);
instance1.getName();
instance1.getTime();

var instance2 = new SubClass("css book",2013);
console.log(instance2.books);
instance2.getName();
instance2.getTime();
