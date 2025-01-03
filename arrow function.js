var relationship1 = {
    name : 'zero',
    friends : [ 'nero' , 'hero' , 'xero' ],
    logfriends : function() {
        var that = this;  //굳이 귀찮게 that으로 임시저장을 해야할까?
        this.friends.forEach(function(friend) {
            console.log(that.name, friend);
        });
    },
}
relationship1.logfriends()

var relationship2 = {
    name : 'zero',
    friends : [ 'nero', 'hero', 'xero'],
    logfriends() {
        this.friends.forEach( (friend) => {
            console.log(this.name, friend);
        });
    },
};
relationship2.logfriends()