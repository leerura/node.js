function findAndSaveUser (Users) {
    Users.findOne({}, (err,user) => { //콜백함수의 첫번쨰 객체로는 err가 보내짐
        if (err) {
            return console.err(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if (err) {
                return console.err(err);
            }
            Users.findOne({gender : 'm'}, (err, user) => {
                //생략
            });
        });
    });
} //이것이 콜백헬...??