/**
 * Created by Administrator on 2016/11/28 0028.
 */
function SuperClass() {
    this.superValue = true;
}

SuperClass.prototype.getSuperValue =function () {
    return this.superValue;
}

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSubValue = function () {
    return this.subValue;
}

var instance = new SubClass();
//        console.log(instance.getSuperValue());
//        console.log(instance.getSubValue());
console.log(instance instanceof SuperClass);
console.log(instance instanceof SubClass);
console.log(SubClass instanceof SuperClass);