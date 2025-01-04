function sayHello(name, callback) {
    const words = '안녕하세요 내 이름은 ' + name + ' 입니다.';

    callback(words);
};

sayHello("석원", (name) => { //words가 들어옴
    console.log(name);
});

//콜백함수는 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것을 말한다.