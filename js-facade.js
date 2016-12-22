/**
 * Created by Administrator on 2016/12/19 0019.
 */
function addEvent(dom,type,fn) {
    if(dom.addEventListener){
        dom.addEventListener(type,fn,false);
    }else if(dom.attachEvent){
        dom.attachEvent('on'+type,fn)
    }else{
        dom['on'+type] = fn;
    }
}

var myInput = document.getElementById("mynput");
addEvent(myInput,"click",function () {
    console.log("绑定第一个事件");
})
addEvent(myInput,"click",function () {
    console.log("绑定第二个事件");
})