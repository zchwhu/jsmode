/**
 * Created by Administrator on 2016/12/25 0025.
 */
var PriceStrategy = function () {
    var strategy = {
        return30:function (price) {
            return +price + parseInt(price/100)*30;
        },
        return50:function (price) {
            return +price + parseInt(price/100)*50;
        },
        percent90:function (price) {
            return price *100 *90/10000;
        },
        percent80:function (price) {
            return price *100*80/10000;
        },
        percent50:function (price) {
            return price *100*80/10000;
        }
    }

    return function (algorithum,price) {
        return strategy[algorithum]&&strategy[algorithum](price);
    }
}();

var  price = PriceStrategy('return50','314.67');
console.log(price);