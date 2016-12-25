/**
 * Created by Administrator on 2016/12/25 0025.
 */
var InputStrategy = function () {
    var strategy = {
        notnull:function (value) {
            return /\s+/.test(value)?'请输入内容':'';
        },
        number:function (value) {
            return /^[0-9]+(\.[0-9]+)?$/.test(value)?'':'请输入数字';
        },
        phone:function (value) {
            return /^\d{3}]\-\d{8}$|^d{4}\-\d{7}$/.test(value)?'':'请输入正确的电话号码格式，如：010-12345678或0418-1234567'
        }
    }

    return {
        check:function (type,value) {
            value = value.replace(/^\s+|\s+$/g,'');
            return strategy[type]?strategy[type](value):'没有该类型的检测方法'
        },
        add:function (type,fn) {
            strategy[type] = fn;
        }
    }
}();

InputStrategy.add('nickname',function (value) {
    return /^[a-zA-Z]\w{3,7}$/.test(value)?'':'请输入4-8位昵称，如：YYQH';
})

function $tag(tag,context) {
    context = context || document;
    return context.getElementsByTagName(tag);
}

$tag('input')[1].onclick = function () {
    var value = $tag('input')[0].value;
    $tag('span')[0].innerHTML = InputStrategy.check('nickname',value);
}
