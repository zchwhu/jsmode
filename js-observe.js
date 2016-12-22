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


Observer.regist('test',function (e) {
    console.log(e.type,e.args.msg);
})

Observer.fire('test',{msg:'传递参数'});

function $(id) {
    return document.getElementById(id);
}

(function () {
    function addMsgItem(e) {
        var text = e.args.text,
            ul = $('msg'),
            li = document.createElement('li'),
            span = document.createElement('span');
        li.innerText = text;

        span.onclick = function () {
            ul.removeChild(li);
            Observer.fire('removeCommentMessage',{
                num:-1
            });
        }

        li.appendChild(span);
        ul.appendChild(li);
    }

    Observer.regist('addCommentMessage',addMsgItem);
})();

(function () {
    function changeMsgNum(e) {
        var num = e.args.num;
        $('msg_num').innerHTML = parseInt($('msg_num').innerHTML)+num;
    }

    Observer.regist('addCommentMessage',changeMsgNum);
    Observer.regist('removeCommentMessage',changeMsgNum);
})();

(function () {
    $('user_submit').onclick = function () {
        var text = $('user_input');
        if(text.value === ''){
            return;
        }
        Observer.fire('addCommentMessage',{
            text:text.value,
            num:1
        });
        text.value = '';
    }
})();

