/**
 * Created by Administrator on 2016/11/28 0028.
 */
function add() {
    var arg = arguments,
        len = arg.length;
    switch(len){
        case 0:
            return 10;
        case 1:
            return 10+arg[0];
        case 2:
            return arg[0]+arg[1];
    }
}

console.log(add());
console.log(add(5));
console.log(add(6,7));

function Add() {
    function zero() {
        return 10;
    }
    function one(num) {
        return 10+num;
    }
    function two(num1,num2) {
        return num1+num2;
    }

    this.add = function () {
        var arg = arguments,
            len = arg.length;
        switch(len){
            case 0:
                return zero();
            case 1:
                return one(arg[0]);
            case 2:
                return two(arg[0],arg[1]);
        }
    }
}

var A = new Add();
console.log(A.add());
console.log(A.add(5));
console.log(A.add(6,7));