/**
 * Created by Administrator on 2016/11/28 0028.
 */
function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var book = {
    name:"js book",
    alikeBook:["css book","html book"]
};

var newBook = inheritObject(book);
newBook.name = "ajax book";
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push("as book");

console.log(newBook.name);
console.log(newBook.alikeBook);
console.log(otherBook.name);
console.log(otherBook.alikeBook);
console.log(book.name);
console.log(book.alikeBook);

var mix = function () {
    var i,
        len = arguments.length,
        target = arguments[0],
        arg;
    for(;i<len;i++){
        arg = arguments[i];
        for (var property in arg){
            target[property] = arg[property];
        }
    }
    return target;
}

Object.prototype.mix = function () {
    var i = 0,
        len = arguments.length,
        arg;
    for(;i<len;i++){
        arg = arguments[i];
        for(var property in arg){
            this[property] = arg[property];
        }
    }
}

