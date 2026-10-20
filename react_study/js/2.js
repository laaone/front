let numA =1;
let numB;
let numC;

numB = numC =numA;
console.log(numA,numB,numC); //=이라는 연산자는 오른쪽부터

let numberA =1;
let numberB =2;

console.log( numberA + numberB);
console.log( numberA - numberB);
console.log( numberA * numberB);
console.log( numberA / numberB);
console.log( numberA % numberB);

let a=1;
a++; //a=a+1

let boolA = true;
let boolB = false;
console.log( boolA || boolB ); //or
console.log( boolA && boolB ); // and
console.log( !boolA); //not

console.log( a === 2); //같다  !== 같지않다

// null 값이없다. 확정
let varA = 10;
let varB = 20;
let varC;
let varD;
let varE = null;

console.log( varA ?? varB); //10 ?? null 병합연산자 
console.log( varC ?? varB);//20
console.log( varB ?? varC);//20
console.log( varC ?? varD);// 둘다 미확정 undefined 출력
console.log( varA ?? varE);//10
console.log( varE ?? varA);//10
console.log( varE ?? varC);//undefined
console.log( varC ?? varE);//null

let name = "홍길동"; 
let nickname = "winterlood";
let user = name ?? nickname;
console.log(user);

let varAA = 10;
console.log( ++varAA ); //11

varAA = "이";
console.log( typeof varAA ); //동적 타이핑  변수안에 넣어준 데이터에 따라서 자료형이 바뀌는 것    참고:( 정적 static ) vs ( 동적 Dynamic ) 
// typeof 예약어 

//3항 연산자 구조  변수 = 조건식 ?  참 : 거짓;
let varAAA = "안녕";
varAAA = 10;
let result = typeof varAAA === "string" ? "문자":"문자아님";
console.log();

console.log("\n" + result );//"\n" 줄바꿈 이스케이프 문자

let jumsu =89;
let ok = jumsu >= 80 ? "합격" : "불합격";
console.log(ok);

let 학교= "서울대햑교";
 let  대학 = 학교 === "고려대" ?  "동문" : "타대학";
 console.log(대학);

 //나이 변수에 "25" 입력하고 기본급 500000입력하기
 //만약에 나이가 20상 이상이고 기본급이 300000 이상이면 "보통" 아니면 "빈곤"출력

 let num =1;
 if ( num >= 10){
    console.log( num + 100);
    
 }
 else {
    console.log( num - 100);
    
 }
 let fruit = "apple";
 switch (fruit) {
    case "apple" :{
        console.log("사과");
        break;
    }
    case "banana":{
        console.log("바나나");
        break;    
    }
    default:{
        console.log("우리가 찾는 과일이 아님");  
    }
   
 }

















