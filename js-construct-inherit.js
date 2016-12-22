/**
 * Created by Administrator on 2016/11/28 0028.
 */
function SuperClass(id) {
    this.books = ["JavaScript","html","css"];
    this.id = id;
}

SuperClass.prototype.showBooks = function () {
    console.log(this.books);
}

function SubClass(id) {
    SuperClass.call(this,id);
}

var instance1 = new SubClass(10);
var instance2 = new SubClass(11);

instance1.books.push("设计模式");
console.log(instance1.books);
console.log(instance1.id);
console.log(instance2.books);
console.log(instance2.id);

// instance1.showBooks();

