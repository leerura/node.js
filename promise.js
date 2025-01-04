const condition = true;

const promise = new Promise((resolve, reject) =>  {
    if (condition) {
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

//프로미스 내부에서 resolve가 호출되면 then이 실행, 이때 resolve의 인자가 then의 message로 전송