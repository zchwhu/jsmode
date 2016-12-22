/**
 * Created by Administrator on 2016/12/9 0009.
 */
var LoopImages = function (imgArr,container) {
    this.imagesArray = imgArr;
    this.container = container;
}

LoopImages.prototype = {
    createImage:function () {
        console.log('LoopImage createImage function');
    },
    changeImage:function () {
        console.log('LoopImage changeImage function');
    }
};

var SlideLoopImg = function (imgArr,container) {
    LoopImages.call(this,imgArr,container);
}

SlideLoopImg.prototype = new LoopImages();

SlideLoopImg.prototype.changeImage=function () {
    console.log("SlideLoopImg changeImage function");
}

var FadeLoopImg = function (imgArr,container,arrow) {
    LoopImages.call(this,imgArr,container);
    this.arrow = arrow;
}
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function () {
    console.log('FadeLoopImg changeImage function');
}

var fadeImg = new FadeLoopImg(['01.jpg','02.jpg'],'slide',['left.jpg','right.jpg']);
console.log(fadeImg.container);
fadeImg.changeImage();

LoopImages.prototype.getImageLength = function () {
    return this.imagesArray.length;
}
FadeLoopImg.prototype.getContainer = function () {
    return this.container;
}

console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());

var loopImage = new LoopImages([1,2],'slide');
console.log(loopImage.hasOwnProperty('changeImage'));