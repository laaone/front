// 3.js 
for (let i=1; i<=100; i+=10) {
    console.log(i);
    
}  
let j = 10;
let sum = 0;
while ( j <= 50) {
    sum = sum + j;
    j++;
}  
console.log( sum );

//do{
//    참이면 처리할 내용;
//}while( 조건식);
//1~100까지 의 합을 구하다가 합이 3000이상이면 멈추기 합 출력
let k=0;
sum = 0;
do{
    sum = sum + k;
    if (sum >= 3000) break;
    k++;
}while( k <= 100);
console.log( k, sum);

// function 함수이름( 매개변수 ){
//     처리할 내용
// }

function a(){
    console.log("프린트 해주기");
    
}
function b( i, j){
    return i + j ;
}
a();
a();
a();

console.log(
 b(10,50));

let max = -9999;
function maxf( i, j, k){
    if( max < i ) max =i;
    if( max < j ) max =j;
    if( max < k ) max =k;
    return max;
 }
 console.log( maxf( 10,4,8));

sum=0;
function evenf(){ 
    for( let i=0; i<=100; i+=2){
        sum += i;
    }
   console.log( sum );
}  
evenf();


function person(name, age, city) {
    console.log(name + "님은 " + age + "살이고 " + city + "에 거주합니다.");
}

person( "홍길동",30, "서울");
        
 function greeting(){
    function greetingWithName( name ){
        console.log( `hello! ${name}`);
        
    }
    let name ="이정환";
    greetingWithName(name); 
 }  
 greeting(); 

 //함수와 호이스팅

 func();

 function func(){
    console.log( "hello 호이스팅");
    
 }
 // 함수 표현식

 let gre = function(){
    console.log("hello 함수표현식");
    
 }
 gre();

 let fExp = function(a,b){
    console.log(a,b);
    
 }
 fExp( "이동원","500만원");




 let pSt = function( d, e,f){
    console.log(d,e,f);
 }
    
 pSt( "서울대", "AI 학과", "이명수");

 //콜백함수
 //기능동일 

 function parentFunc( callBack ){
    console.log("parent");
    callBack();
 }

 function childFunc( callBack ){
    console.log("child"); 
 }
 
 function childFunc1( callBack ){
    console.log("child1"); 
 }
 
 function childFunc2( callBack ){
    console.log("child2"); 

 }
 parentFunc( childFunc2);

 //58
 function repeat( count ){
    for( let idx=0; idx<=count; idx++){
        console.log(idx + 1);
        
    }
 }
 repeat(5);
 
 function repeatDouble( count ){
    for( let idx=0; idx<=count; idx++){
        console.log(idx + 1)*2;
        
    }
 }
  repeatDouble(5);

console.log("\n-------");

  function repeatCall( count, callBack ){
    for( let idx=0; idx<=count; idx++){
        callBack( idx + 1);
    }
  }
  function origin( count ){
    console.log( count );
    
  }
  function double( count ){
    console.log( count*2 );
  }
  repeatCall( 5,origin );
  console.log( "\n-------" );
  repeatCall( 5, double );

  function a( callBack ){
    for( let i=1; i<=10; i++){
        callBack();
    }
  }
 





