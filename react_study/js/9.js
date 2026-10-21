//91page
let arr=[1,2,3,4,5,6];
const len = arr.length;

for( let idx = 0; idx < len; idx++){
    console.log( arr[idx]);  
}

//for...of 
for( let itm of arr ){
    console.log( itm, "@@" );
    
}
//93page

let person = {
    name: "이정환",
    age: 25,
    location: "경기도"
}
const keyArr =Object.keys(person);
console.log( keyArr); //"name",'age,'location

console.log(person.name);


for( let key of keyArr){ //배열의 반복문 for (let 변수 of 배열명){ 반복할 내용 }
    console.log(person[key]);
    
}
let values = Object.values(person);
console.log( values); //[ '이정환',25,'경기도' ]


let person2 = {
    name: "김수진",
    age: 23,
    location: "서울"
}
console.log("----------");
for( let p in person2){
    
   console.log( typeof p); //name age location
   console.log("----------");
   console.log( person2[p] );

   
}

//board 객체 만들기
   // 프로퍼티 내용 no: 1, writer: 홍길동, content:"자바스크립트 공부", date:"2026-10-21"
   // 출력 1 writer: 홍길동, content:"자바스크립트 공부", date:"2026-10-21"
   
   
   let board = {
       no: 1,
        writer: "홍길동", 
        content:"자바스크립트 공부", 
        date:"2026-10-21"
   }
   for( let p in board){
   console.log( typeof p);
   console.log( board[p]);
   }

 //  95 구조분해할당
 let arr3 = [1,2];
 let [a1,a2,a3] =arr3;//배열의 구조분해는 1번은 1번으로 제짝을 찾아감
 console.log(a1);
 console.log(a2);
 console.log(a3);


 let person3 = {
    name: "이수진",
    age: 13,
    location: "서울"
}
let { newName, newAge,newLo } = person3;
console.log( newName,newAge,newLo);
let { age,no,name } = person3;//객체 구조 분해는 key이름이 동일한 것으로 값이 넣어진다.
console.log( age,name, no ); //13 이수진 undefined

let person4 = {
    name: "이수민",
    age: 26,
    location: "부산"
}
let func = ( {name, age, location})=>{
    console.log( `${name}님은 ${age}살이고 사는 곳은 ${location}입니다`);
}
func( person4);
    

 

 
   


