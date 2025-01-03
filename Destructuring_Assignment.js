var candyMachine = {
    status : {
        name : 'node',
        count : 5,
    },
    getCandy : function() {
        this.status.count--;
        return this.status.count;
    },
};

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count; //굳이 이렇게...? 코드가 길어어

const {getCandy, status: {count}} = candyMachine; // 코드가 짧아짐짐
