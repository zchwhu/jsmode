/**
 * Created by Administrator on 2016/12/5 0005.
 */
var Human = function (param) {
    this.skill = param&&param.skill||"保密";
    this.hobby = param&&param.hobby||"保密";
}

Human.prototype = {
    getSkill:function () {
        return this.skill;
    },
    getHobby:function () {
        return this.hobby;
    }
}

var Named = function (name) {
    var that = this;
    (function (name,that) {
        that.wholeName = name;
        if(name.indexOf(' ')>-1){
            that.FirstName = name.slice(0,name.indexOf(' '));
            that.secondName = name.slice(name.indexOf(' '));
        }
    })(name,that);
}

var Work = function (work) {
    var that = this;
    (function (work,that) {
        switch(work){
            case 'code':{
                that.work = '工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            }
            case 'UI':
            case 'UE':{
                that.work = '设计师';
                that.workDescript = '设计更似一种艺术';
                break;
            }
            case 'teach':{
                that.work = '教师';
                that.workDescript = '分享也是一种快乐';
                break;
            }
            default:{
                that.work = work;
                that.workDescript = '对不起，我们还不清楚您所选择职位的相关描述';
            }
        }
    })(work,that);
}

Work.prototype.changeWork = function (work) {
    this.work = work;
}

Work.prototype.changeDescription = function (setence) {
    this.workDescript = setence;
}

var Person = function (name,work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

var person = new Person("xiao ming","code");

console.log(person.skill);
console.log(person.name.FirstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescription('更改一下职位描述!');
console.log(person.work.workDescript);