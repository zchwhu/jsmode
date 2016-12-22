/**
 * Created by Administrator on 2016/11/29 0029.
 */
var Basketball = function () {
    this.intro = "篮球盛行于美国";
};

Basketball.prototype = {
    getMember:function() {
        console.log("每个队伍需要5名队员");
    },
    getBallSize:function(){
        console.log("篮球很大");
    }
};

var Football = function () {
    this.intro = "足球在世界范围内很流行";
};

Football.prototype = {
    getMember:function () {
        console.log("每个队伍需要11名队员");
    },
    getBallSize:function () {
        console.log("足球很大");
    }
};

var Tennis = function () {
    this.intro = "每年有很多网球系列赛";
}

Tennis.prototype = {
    getMember:function () {
        console.log("每个队伍需要1名队员");
    },
    getBallSize:function () {
        console.log("网球很小");
    }
};

var SportFactory = function (name) {
    switch (name){
        case "NBA":
            return new Basketball();
        case "worldCup":
            return new Football();
        case "FrenchOpen":
            return new Tennis();
    }
}

var football = SportFactory("worldCup");
console.log(football);
console.log(football.intro);
football.getMember();



