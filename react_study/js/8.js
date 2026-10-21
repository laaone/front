if (!undefined){
    console.log("undefined는 falsy한 값입니다.");
    
}
if (!null){
    console.log("null는 falsy한 값입니다.");
    
}
if (!0n){
    console.log("0n는 falsy한 값입니다.");
    
}
if (!0){
    console.log("0는 falsy한 값입니다.");
    
}
if (!-0){
    console.log("-0는 falsy한 값입니다.");
    
}
if (!NaN){
    console.log("NaN는 falsy한 값입니다.");//Not a Number Number("10개")
    
}
if (!""){
    console.log('""NaN는 falsy한 값입니다.');
    
}

const num = "222";

if(num){
    console.log("true");
    
}else{
console.log("false");

}

let varA;
if(varA){
    console.log("값이 있음");
    
}else{
    console.log("값이 없음");
    
}

function calcA(){
    console.log("a");
    return true;
}
function calcB(){
    console.log("b");
    return false;
}
console.log( calcA() && calcB()); //그리고 and && 두개가 다 참이면 참인것     (달락평가)
// 또는 or || 둘둥에 하나가 참이면 참이다.

function getName(person){
    if( person !== undefined){
    
    return person.name;
}else{
    return "매개변수가 객체가 아닙니다";
}

}
let person; //undefined
let name = getName(person);
console.log(name);

function calcA1(){
    console.log("a");
    return false;
}
function calcB1(){
    console.log("b");
    return false;
}
console.log( calcA() || calcB());

const varAA = 0;
const varBB = "이정환";

const resultA = varAA || varBB;
const resultB = varAA ?? varBB; //38~39page
console.log( resultA);
console.log( resultB);

const arr1 = [1,2,3];
console.log( arr1.length);
arr1.push(4);
console.log(arr1);

arr1.push(5);
console.log(arr1.pop());
console.log( arr1);
console.log(arr1.pop());
console.log(arr1.pop());
console.log(arr1.pop());
console.log(arr1.pop());
console.log(arr1.pop());

//87
function myFunction(){
    console.log("hi");
    
}
 console.log( myFunction.name);

 //89 객체 = 클래스 person2는 주소담기 참조변수 (주소담은 변수)

 let person2 = {
    name: "이정환"
 }
 let man = person2;
 man.age = 25;

 console.log(person2);
 console.log(man);

 let numA = 1;
 let nunB = 1;
 console.log( numA === nunB );

 let person3 = {
    name: "이정환"
 }
 let man3 = {
    name: "이정환"
 }
 console.log( person3 === man3 );

 let arr3 = [1,2,3];
 let arr4 = [1,2,3];
 console.log( arr3 === arr4);

 let func1 = function(){
    console.log("func1");  
 }
 
 let func2 = function(){
    console.log("func2");  
 }
 console.log( func1 === func2 ); //false 함수도 참조값
 
 
 
 
 
 


 
