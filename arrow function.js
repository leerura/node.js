var relationship1 = {
    name : 'zero',
    friends : [ 'nero' , 'hero' , 'xero' ],
    logfriends : function() {
        var that = this;  //굳이 귀찮게 that으로 임시저장을 해야할까?
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
};
relationship1.logfriends();

var relationship2 = {
    name : 'zero',
    friends : [ 'nero', 'hero', 'xero'],
    logfriends() {
        this.friends.forEach( (friend) => {
            console.log(this.name, friend); //여기서 화살표 함수를 사용함 => function 사용하지 않았기 떄문에 스코프 변화가 없음음
        });
    },
};
relationship2.logfriends();