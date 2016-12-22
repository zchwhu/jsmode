/**
 * Created by Administrator on 2016/12/21 0021.
 */
function formateString(str,data) {
    return str.replace(/\{#(\w+)#\}/g,function (match,key) {
        return typeof data[key]===undefined?'':data[key];
    });
}

var Nav = function (data) {
    this.item = '<a href="{#href#}" title="{#title#}">{#name#}</a>';
    this.html = '';
    for(var i = 0,len = data.length;i<len;i++){
        this.html += formateString(this.item,data[i]);
    }
    return this.html;
}

var NumNav = function (data) {
    var tpl = '<b>{#num#}</b>';
    for(var i = 0;i<data.length;i++){
        data[i].name = data[i].name + formateString(tpl,data[i]);
    }
    return Nav.call(this,data);
}

var LinkNav = function (data) {
    var tpl = '<span>{#link#}</span>';
    for(var i=data.length-1;i>=0;i--){
        data[i].name += data[i].name+formateString(tpl,data[i]);
    }
    return Nav.call(this,data);
}

var nav = document.getElementById('content');
nav.innerHTML = NumNav([
    {
        href:'http://www.baidu.com/',
        title:'百度一下，你就知道',
        name:'百度',
        num:'10'
    },
    {
        href:'http://www.taobao.com/',
        title:'淘宝商城',
        name:'淘宝',
        num:'2'
    },
    {
        href:'http://www.qq.com/',
        title:'腾讯首页',
        name:'腾讯',
        num:'3'
    }
])