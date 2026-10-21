const obj ={
    a: 1,
    b: "text"
};

obj.a = 2;
obj.c = undefined;
delete obj.b;
console.log( obj );
// in연산자

let obj1 = {
    a: 1
}
console.log( obj1.b); //undefined 정의되지 않았다/

let isPropertyExist = obj1.b !== undefined;
console.log( isPropertyExist);

let person = {
    age:10
};
let isNameExist ="age" in person;
console.log(isNameExist);

if( !("name" in person)){
    person.name="홍길동";
}
console.log( person);

//메서드 객체안에 있는 함수
let person1 = {
    name: "이정환",
    sayHi: function(){
        console.log("안녕");
        
    },
    add: function(x,y){
        return x+y;
    },
    mul: function(x,y,z){
        return x*y*z;

    },
};
person1.sayHi();
person1.add(10,20);
console.log( person1.add(10,20));
console.log( person1.mul(10,20,3)); //3개 전부 곱하기


person1.getPerson = function(tel,age){
    return `${this.name}씨는 나이가  ${age}살이고 전화번호는 ${tel}입니다`;
}

console.log( person1.getPerson("010-1234-4567", 29));

//배열 
let arrA = new Array();
let arrB = [];
let arr =[ 1, "1",true, null, undefined, ()=>{}, function(){}, [1,2,3],{a:1}];
console.log(arr[3]);
console.log(arr[8].a);
console.log(arr[7][2]);




