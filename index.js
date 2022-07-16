// let isAdult = confirm("당신은 성인 입니까?");

// console.log(isAdult);

// String(3)

// for(let i = 0 ; i <100 ; i++){
//     console.log(i);
// }

// let i = 0;

// while(i<100){
//     i++;
//     console.log(i);
// }

// while(true){
//     let answer = confirm("계속 할까요?");
//     if(!answer){
//         break;
//     }
// }

// for(let i = 0; i<10; i++){
//     if(i%2){
//         continue
//     }
//     console.log(i);
// }

let fruit = prompt("무슨 과일을 사고 싶나요?");

switch(fruit){
    case"사과" :
    console.log("100원 입니다");
}

function showError(){
    alert("에러가 발생 했습니다");
}

showError();

function sayHello(name){
    let msg = "hello";
    if(name){
        msg = 'hello ${name}';
    }
    console.log(msg);
}

sayHello("mike");