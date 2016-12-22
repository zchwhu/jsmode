/**
 * Created by Administrator on 2016/12/20 0020.
 */
var Alert = function (data) {
    if(!data){
        return;
    }
    this.content = data.content;
    this.panel = document.createElement("div");
    this.contentNode = document.createElement("p");
    this.confirmBtn = document.createElement("span");
    this.closeBtn = document.createElement("b");

    this.panel.className = 'alert';
    this.closeBtn.className = 'a-close';
    this.confirmBtn.className = 'a-confirm';

    this.confirmBtn.innerHTML = data.confirm || '确认';
    this.contentNode.innerHTML = this.content;
    this.success = data.success || function () {};
    this.fail = data.fail || function () {};
}

Alert.prototype = {
    init:function () {
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        document.body.appendChild(this.panel);
        this.bindEvent();
        this.show();
    },
    bindEvent:function () {
        var me = this;
        this.closeBtn.onclick = function () {
            me.fail();
            me.hide();
        }
        this.confirmBtn.onclick = function () {
            me.success();
            me.hide();
        }
    },
    hide:function () {
        this.panel.style.display = 'none';
    },
    show:function () {
        this.panel.style.display = 'block';
    }
}

var RightAlert = function (data) {
    Alert.call(this,data);
    this.confirmBtn.className = this.confirmBtn.className+' right';
}
RightAlert.prototype = new Alert();

var TitleAlert = function (data) {
    Alert.call(this,data);
    this.title = data.title;
    this.titleNode = document.createElement("h3");
    this.titleNode.innerHTML = this.title;
}

TitleAlert.prototype = new Alert();
TitleAlert.prototype.init = function () {
    this.panel.insertBefore(this.titleNode,this.panel.firstChild);
    Alert.prototype.init.call(this);
}

var CancelAlert = function (data) {
    TitleAlert.call(this,data);
    this.cancel = data.cancel;
    this.cancelBtn = document.createElement('span');
    this.cancelBtn.className = 'cancel';
    this.cancelBtn.innerHTML = this.cancel || '取消';
}

CancelAlert.prototype = new Alert();
CancelAlert.prototype.init = function () {
    TitleAlert.prototype.init.call(this);
    this.panel.appendChild(this.cancelBtn);
}
CancelAlert.prototype.bindEvent = function () {
    var me = this;
    TitleAlert.prototype.bindEvent.call(me);
    this.cancelBtn.onclick = function () {
        me.fail();
        me.hide();
    }
}

new CancelAlert({
    title:'提示标题',
    content:'提示内容',
    success:function () {
        console.log('ok');
    },
    fail:function () {
        console.log('cancel');
    }
}).init();