var sayNode = function() {
    console.log('Node');
};

var es = 'ES';

var oldObject = {
    sayJs : function() {
        console.log('JS');
    }, //굳이 function을 넣을 필요가 있을까?
    sayNode : sayNode, // 굳이 똑같은 걸 두번 쓸 필요가 있을까?
};
oldObject[es + 6] = "Fantastic"; //속성에 변수가 있을 때 굳이 밖에서 정의할 필요가 있을까?

oldObject.sayJs();
oldObject.sayNode();
console.log(oldObject.ES6);

var newObject = {
    sayJs() {
        console.log('JS');
    },
    sayNode,
    [es + 6] : "Fantastic",
};