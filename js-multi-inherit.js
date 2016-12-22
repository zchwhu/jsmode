/**
 * Created by Administrator on 2016/11/28 0028.
 */
var extend = function (target,source) {
    for(var property in source){
        target[property] = source[property];
    }
    return target;
}

var book = {
    name:"JavaScript设计模式",
    alike:["css","html","JavaScript"]
}

var anotherBook = {
    color:"blue"
}

extend(anotherBook,book);
console.log(anotherBook.name);
console.log(anotherBook.alike);

anotherBook.alike.push("ajax");
anotherBook.name = "设计模式";

console.log(anotherBook.name);
console.log(anotherBook.alike);
console.log(book.name);
console.log(book.alike);
