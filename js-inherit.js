/**
 * Created by Administrator on 2016/11/28 0028.
 */
function SuperClass() {
    this.books = ["JavaScript","html","css"];
}

function SubClass() {

}

SubClass.prototype = new SuperClass();

var instance1 = new SubClass();
var instance2 = new SubClass();

console.log(instance2.books);
instance1.books.push("设计模式");
console.log(instance2.books);