/**
 * Created by Administrator on 2016/11/29 0029.
 */
var VehicleFactory = function (subType,superType) {
    if(typeof VehicleFactory[superType]==="function"){
        function F() {};
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else{
        throw new Error("未创建该抽象类");
    }
}

VehicleFactory.Car = function () {
    this.type = "car";
};
VehicleFactory.Car.prototype = {
    getPrice:function () {
        return new Error("抽象方法不能调用");
    },
    getSpeed:function () {
        return new Error("抽象方法不能调用");
    }
}

VehicleFactory.Bus = function () {
    this.type = "bus";
};
VehicleFactory.Bus.prototype = {
    getPrice:function () {
        return new Error("抽象方法不能调用");
    },
    getSpeed:function () {
        return new Error("抽象方法不能调用");
    }
};

VehicleFactory.Truck = function () {
    this.type = "truck";
}
VehicleFactory.Truck.prototype = {
    getPrice:function () {
        return new Error("抽象方法不能调用");
    },
    getSpeed:function () {
        return new Error("抽象方法不能调用");
    }
}

var BMW = function (price,speed) {
    this.price = price;
    this.speed = speed;
}

VehicleFactory(BMW,'Car');
BMW.prototype.getPrice = function () {
    return this.price;
}
BMW.prototype.getSpeed = function () {
    return this.speed;
}

var Lamborghini = function (price,speed) {
    this.price = price;
    this.speed = speed;
}
VehicleFactory(Lamborghini,'Car');
Lamborghini.prototype.getPrice = function () {
    return this.price;
};
Lamborghini.prototype.getSpeed = function () {
    return this.speed;
};

var YUTONG =function (price,speed) {
    this.price = price;
    this.speed = speed;
}
VehicleFactory(YUTONG,'Bus');
YUTONG.prototype.getPrice = function () {
    return this.price;
};
YUTONG.prototype.getSpeed = function () {
    return this.speed;
};

var BenzTruck = function (price,trainLoad) {
    this.price = price;
    this.trainLoad = trainLoad;
}

VehicleFactory(BenzTruck,'Truck');
BenzTruck.prototype.getPrice = function () {
    return this.price;
}
BenzTruck.prototype.getTrainLoad = function () {
    return this.trainLoad;
}

var truck = new BenzTruck(1000000,1000);
console.log(truck.getPrice());
console.log(truck.type);

