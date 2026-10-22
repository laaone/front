function func({ name:n, age:a,location:l}){
    console.log( n,a,l);
}
let person = { 
    name: "이정환",
    age: 25,
    location: "경기도"
};
func( person);

//98 스프레드 연산자(...) 여러개 전개연산자와 
let arrA = [1,2,3];
let arrB = [...arrA, 4,5,6];

console.log(arrB);

//
let objA = {
    a: 1,
    b: 2
};
let objB = {
    ...objA,
    c: 3,
    d: 4
}
console.log(objB);


function func(a,b,c){
    console.log(a,b,c);   
}
let arr = [1,2,3];
func(...arr);  //1,2,3

//100 rest 매개변수
function func1(...r){
     console.log(r);//[1,2,3,4]
    
}
func1(1,2,3,4);

function func2(a, ...r){
     console.log(a);//[1,2,3,4]
     console.log(r);//[1,2,3,4]
    
}
func2(1,2,3,4);

// function func3( ...r, a, b){ // ...r이 앞에 ...이 다 가져감
//      console.log(a);//[1,2,3,4]
//      console.log(b);//[1,2,3,4]
//      console.log(r);//[1,2,3,4]
    
// }
// func3(1,2,3,4);

 //배열 메소드: 
 let food =["짜장면","피자","치킨"];
 const newLength = food.push("탕수육","라자냐");
  console.log(food);
  console.log(`새로운 배열의 길이 : ${newLength}`);

  const removedItem = food.pop();
  console.log(removedItem);
  console.log(food);

  const removedItem2 = food.shift();
  console.log(removedItem2);
  console.log(food);

  const newLength3 = food.unshift("갈비찜");
  console.log(food);
  console.log(`새로운 배열의 길이 : ${newLength3}`);

  
  const newLength4 = food.unshift("갈비찜","갈비탕");
  console.log(food);
  console.log(`새로운 배열의 길이 : ${newLength4}`);
  //shift, unshift 느려진다 
  //pop, push 더 권장
  const arr3 = [1,2,3];
  const sliced = arr3.slice(-2); //0~1
  console.log( arr);
  console.log( sliced );

  let arrA3 = [1,2];
  let arrB3 = [3,4];
  let arrC3 = arrA3.concat(arrB3);
  console.log( arrC3 );
  console.log( arrA3);
  
  let arrA4 = [1,2];//배열
  let arrB4 = { a: 3, b: 4 };//객체
  let arrC4 = arrA3.concat(arrB4);// 배열+ 객체 합치기
  console.log( arrC4);//[ 1, 2, { a: 3, b: 4 } ]
  console.log( arrA4);
  
  
  
  

  
  
  
  
  
  

