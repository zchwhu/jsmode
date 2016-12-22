/**
 * Created by Administrator on 2016/12/19 0019.
 */
function inheritPrototype(subClass,supClass) {
    var p = inheritObject(supClass.prototype);
    p.constructor = subClass;
    subClass.prototype = p;
}

function inheritObject(o) {
    function F() {};
    F.prototype = o;
    return new F();
}

var Base = function () {
    this.children = [];
    this.element = null;
}

Base.prototype = {
    init:function () {
        throw new Error("请重写你的方法")
    },
    add:function () {
        throw new Error("请重写你的方法")
    },
    getElement:function () {
        throw new Error("请重写你的方法")
    }
}

var FormItem = function (id,parent) {
    Base.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}

inheritPrototype(FormItem,Base);

FormItem.prototype.init = function () {
    this.element = document.createElement("form");
    this.element.id = this.id;
    this.element.className = 'new-form';
}

FormItem.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

FormItem.prototype.show = function () {
    this.parent.appendChild(this.element);
}

FormItem.prototype.getElement = function () {
    return this.element;
}

var FieldItem = function (classname) {
    Base.call(this);
    this.classname = classname || '';
    this.init();
}

inheritPrototype(FieldItem,Base);

FieldItem.prototype.init = function () {
    this.element = document.createElement("fieldset");
    this.element.className = this.classname;
}

FieldItem.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

FieldItem.prototype.getElement = function () {
    return this.element;
}

var Group = function (classname) {
    Base.call(this);
    this.classname = classname || '';
    this.init();
}

inheritPrototype(Group,Base);

Group.prototype.init = function () {
    this.element = document.createElement("div");
    this.element.className = this.classname;
}

Group.prototype.add = function (child) {
    this.children.push(child);
    this.element.appendChild(child.getElement());
    return this;
}

Group.prototype.getElement = function () {
    return this.element;
}

var InputItem = function (type,placehold,name) {
    Base.call(this);
    this.type = type;
    this.placehold = placehold;
    this.name = name;
    this.init();
}

inheritPrototype(InputItem,Base);

InputItem.prototype.init = function () {
    this.element = document.createElement("input");
    this.element.type = this.type;
    this.element.name = this.name;
    this.element.placehold = this.placehold;
}

InputItem.prototype.add = function () {};

InputItem.prototype.getElement = function () {
    return this.element;
}

var SpanItem = function (text) {
    Base.call(this);
    this.text = text;
    this.init();
}

inheritPrototype(SpanItem,Base);

SpanItem.prototype.init = function () {
    this.element = document.createElement("span");
    this.element.innerHTML = this.text;
}

SpanItem.prototype.add = function () {};

SpanItem.prototype.getElement = function () {
    return this.element;
}

var LabelItem = function (title) {
    Base.call(this);
    this.title = title;
    this.init();
}

inheritPrototype(LabelItem,Base);

LabelItem.prototype.init = function () {
    this.element = document.createElement("label");
    this.element.innerHTML = this.title;
}

LabelItem.prototype.add = function () {}

LabelItem.prototype.getElement = function () {
    return this.element;
}

var LegendItem = function (legend) {
    Base.call(this);
    this.legend = legend;
    this.init();
}

inheritPrototype(LegendItem,Base);

LegendItem.prototype.init = function () {
    this.element = document.createElement("legend");
    this.element.innerHTML = this.legend;
}

LegendItem.prototype.add = function () {}

LegendItem.prototype.getElement = function () {
    return this.element;
}

var ButtonItem = function (type,text) {
    Base.call(this);
    this.type = type;
    this.text = text;
    this.init();
}

inheritPrototype(ButtonItem,Base);

ButtonItem.prototype.init = function () {
    this.element = document.createElement("button");
    this.element.type = this.type;
    this.element.innerText = this.text;
}

ButtonItem.prototype.add = function () {};

ButtonItem.prototype.getElement = function () {
    return this.element;
}

var newForm = new FormItem('new-form',document.body);

newForm.add(
    new FieldItem('field').add(
        new LegendItem("账号")
    ).add(
        new Group("group").add(
            new LabelItem("用户名：")
        ).add(
            new InputItem("text","请输入用户名","username")
        ).add(
            new SpanItem("4到6位数字或者字母")
        )
    ).add(
        new Group("group").add(
            new LabelItem("密码：")
        ).add(
            new InputItem("password","请输入密码","password")
        ).add(
            new SpanItem("6到12位数字或者字母")
        )
    )
).add(
    new ButtonItem("submit","提交")
).show();