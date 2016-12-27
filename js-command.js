/**
 * Created by Administrator on 2016/12/26.
 */
var viewCommand = (function () {
    var tpl = {
        product:['<div>',
                    '<img src="{#src#}"/>',
                    '<p>{#text#}</p>',
                '</div>'
            ].join(''),
        title:[
            '<div class="title">',
                '<div class="main">',
                    '<h2>{#title#}</h2>',
                    '<p>{#tips#}</p>',
                '</div>',
            '</div>'
        ].join('')
    },
    html = '';
    function formateString(str,obj) {
        return str.replace(/\{#(\w+)#\}/g,function (match,key) {
            return obj[key];
        })
    }

    var Action = {
        create:function (data,view) {
            if(data.length){
                for(var i = 0,len = data.length;i<len;i++){
                    html+=formateString(tpl[view],data[i]);
                }
            }else{
                html+=formateString(tpl[view],data);
            }
        },
        display:function (container,data,view) {
            if(data){
                this.create(data,view);
            }
            document.getElementById(container).innerHTML = html;
            html = '';
        }
    }

    return function excute(msg) {
        msg.param = Object.prototype.toString.call(msg.param)==="[object Array]"?msg.param:[msg.param];
        Action[msg.command].apply(Action,msg.param);
    }
})();

var productData = [
        {
            src:'img/01.jpg',
            text:'绽放的桃花'
        },
        {
            src:'img/02.jpg',
            text:'阳光下的温馨'
        },
        {
            src:'img/03.jpg',
            text:'镜头前的绿色'
        }
    ],

    titleData = {
        title:'夏日里的一片温馨',
        tips:'暖暖的温情带给人们家的感受'
    };

viewCommand(
    {
        command:'display',
        param:['title',titleData,'title']
    }
);

viewCommand(
    {
        command:'display',
        param:['product',productData,'product']
    }
)