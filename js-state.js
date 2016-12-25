/**
 * Created by Administrator on 2016/12/22 0022.
 */
var ResultState = function () {
    var State = {
        state0:function () {
            console.log('这是第一种情况')
        },
        state1:function () {
            console.log('这是第二种情况')
        },
        state2:function () {
            console.log('这是第三种情况')
        },
        state3:function () {
            console.log('这是第四种情况')
        }
    }

    function show(result) {
        State['state'+result] && State['state'+result]();
    }
    return {
        show:show
    }
}();

ResultState.show(3);

