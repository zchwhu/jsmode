/**
 * Created by Administrator on 2016/12/22 0022.
 */

var Observer = (function () {
    var _messages = {};
    return {
        regist:function (type,fn) {
            if(typeof _messages[type]==='undefined'){
                _messages[type] = [fn];
            }else{
                _messages[type].push(fn);
            }
        }
        ,
        fire:function (type,args) {
            if(!_messages[type])
                return;
            var events = {
                    type:type,
                    args:args || {}
                },
                i = 0,
                len = _messages[type].length;
            for(;i<len;i++){
                _messages[type][i].call(this,events);
            }
        },
        remove:function (type,fn) {
            if(_messages[type] instanceof  Array){
                var i = _messages[type].length-1;
                for(;i>=0;i--){
                    _messages[type][i] === fn&&_messages[type].splice(i,1);
                }
            }
        }
    }
})();

var Student = function (result) {
    var that = this;
    that.result = result;
    that.say = function () {
        console.log(that.result);
    }
}

Student.prototype.answer = function (question) {
    Observer.regist(question,this.say);
}

Student.prototype.sleep = function (question) {
    console.log(this.result + '' + question+' 已被注销');
    Observer.remove(question,this.say);
}

var Teacher = function () {

}

Teacher.prototype.ask = function (question) {
    console.log('问题是：'+question);
    Observer.fire(question);
}

var student1 = new Student("学生1回答问题"),
    student2 = new Student("学生2回答问题"),
    student3 = new Student("学生3回答问题");

student1.answer('什么是设计模式');
student1.answer('简述观察者模式');
student2.answer('什么是设计模式');
student3.answer('什么是设计模式');
student3.answer('简述观察者模式');
student3.sleep('简述观察者模式');


var teacher = new Teacher();
teacher.ask("什么是设计模式");
teacher.ask("简述观察者模式");