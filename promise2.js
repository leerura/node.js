function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { //조건없이 첫번쨰 유저만 가져옴옴
        if (err) {
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {
            if (err) {
                return console.error(err);
            }
            Users.findOne({gender: 'm'}, (err,user) => {
                //생략
            });
        });
    });
};

function findAndSaveUser2(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne( { gender: 'm'});
        })
        .then((user) => {
            //생략
        })
        .catch(err => {
            console.error(err);
        })
}