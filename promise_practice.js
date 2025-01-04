const condition = true;

if (condition) {
    console.log("성공");
} else {
    console.log("실패");
};

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve("성공");
    } else {
        reject("실패");
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error)
    })

promise
    .then((message) => {
        return new Promise((resolve, reject) => {
            resolve(message); //여기의 메시지가 다음 then의 인자로 넘어감감
        })
    })
    .then((message2) => {
        console.log(message2);
    })
    .catch((error) => {
        console.log(error);
    })
