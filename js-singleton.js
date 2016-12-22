/**
 * Created by Administrator on 2016/12/9 0009.
 */
var Conf = (function () {
    var conf={
        MAX_NUM:100,
        MIN_NUM:10,
        COUNT:1000
    }
    return{
        get:function (name) {
            return conf[name]?conf[name]:null;
        }
    }
})();

var count = Conf.get('COUNT');
console.log(count);

var LazySingle = (function () {
    var _instance = null;
    function Single() {
        return {
            publicMethod:function () {

            },
            publicProperty:'1.0'
        }
    }

    return function () {
        if(!_instance){
            _instance = Single();
        }
        return _instance;
    }
})();

console.log(LazySingle().publicProperty);