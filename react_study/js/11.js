// 105 순회 메서드
function cd(item, idx){
    console.log(`${idx}번째 요소: ${item}`);   
}
const arr = [1,2,3];
arr.forEach(cd); //

let sum = 0;
arr.forEach((item, idx)=> {
    sum = sum + item;
    console.log(`${idx}번째 요소: ${item}`);
    
    
});
console.log( sum);

//

 const name = ["이수지", "이경미","박지연"];
 name.forEach((item,idx)=> {
     console.log(`${idx +1}번 ${item}`);
     });
const scores = [75,90,65,85,100,70];
scores.forEach((item,idx) => {
    if(item >=80) 
        console.log(`${idx+1}번,${item}점`);
       
});

//107 탐색 메서드
let arr4 = [1,3,5,7,1];
console.log( arr4.indexOf(1,0));//1이라는 숫자가 몇번째 인덱스에 있어?ㅇ 0번째
//구조 배열명.indexOf( 찾으려는 원소, 찾는 시작 위치)

//  let name = ["이수지", "이경미","박지연"];
 console.log(name.indexOf( "이경미",0));
 if(name.indexOf("이경미",0) === -1){
    console.log("우리학생이 아닙니다.");
}else{
    console.log("우리학생이다.");   
}


console.log(name.includes("이수지")); // 배열안에"이수지" 가 있으면 true 없으면  false


//findIndex함수
//배열명.findIndex (콜백함수

function determine( item, idx, arr ){
    if( item % 2 === 0){
        return true;
    }else{
        return false;
    }
}let arr5 =[1,3,5,6,8];
let index = arr5.findIndex(determine);
console.log(index);

let arr6 = [4,3,5,6,8];
let index2 = arr6.findIndex(
   ( item, idx, arr )=>{
                            if( item % 2 === 0){
                                return true;
                            }else{
                                return false;
                            }
                        }

);
console.log(index2); // 0

let arr7 = [
    {name: "이종원" },
    {name: "이정환" },
    {name: "신다민" },
    {name: "김효빈" }
];
let findName = arr7.find( (item)=> item.name === "이정환"); 
console.log( findName );

//문제:  나이가 20살 아래인 사람의 나이와 이름    출력  김효빈 5살 
let arr8 = [
    {name: "이종원",age: 25 },
    {name: "이정환",age: 35 },
    {name: "신다민",age: 55 },
    {name: "김효빈",age: 5 }
];
let findAge = arr8.find( (item)=> item.age < 20);
console.log( findAge.name, findAge.age );

let arr9 = [
    {name:"이종원", hobby:"축구"},
    {name:"이정환" , hobby:"영화"},
    {name:"신다민 ", hobby:"축구"},
    {name:"김효빈" , hobby:"노래"}
]
let filterArr = arr9.filter( (item)=>item.hobby === '축구');
console.log( filterArr );


const scores11 = [65, 90, 75, 88, 100, 55, 80];

let filterArr1 = scores11.filter( (item)=>item >= 80);
console.log( filterArr1 );

let filterArr2 = scores11.filter( (item)=>item % 2 === 1);
console.log( filterArr2 );


const products = [
    { name: "키보드", category: "전자제품", price: 70000, stock: 15 },
    { name: "마우스", category: "전자제품", price: 30000, stock: 20 },
    { name: "모니터", category: "전자제품", price: 250000, stock: 5 },
    { name: "스피커", category: "전자제품", price: 80000, stock: 12 },
    { name: "의자", category: "가구", price: 150000, stock: 20 },
    { name: "웹캠", category: "전자제품", price: 60000, stock: 10 }
];
/*
온라인 쇼핑몰의 상품 목록에서 다음 조건을 모두 만족하는 상품만 추출하세요.
- 가격이 50,000원 이상
- 재고가 10개 이상
- 상품 카테고리가 "전자제품"인 상품
*/
let filterArr3 = products.filter( (item)=>item.price >= 50000 && item.stock >= 10 && item.category === "전자제품" );
console.log( filterArr3 );

const students = [
    { name: "김민수", korean: 90, english: 85, math: 80, attendance: 95 },
    { name: "이영희", korean: 95, english: 55, math: 90, attendance: 100 },
    { name: "박철수", korean: 70, english: 80, math: 85, attendance: 90 },
    { name: "최지우", korean: 88, english: 92, math: 90, attendance: 75 },
    { name: "정하늘", korean: 80, english: 85, math: 90, attendance: 85 },
    { name: "한서준", korean: 60, english: 65, math: 70, attendance: 80 }
];
/*
학생별 시험 점수와 출석률이 주어져 있습니다. 다음 조건을 만족하는 학생만 추출하세요.
- 국어, 영어, 수학 점수의 평균이 80점 이상
- 출석률이 80% 이상
- 세 과목 중 어느 하나라도 60점 미만이면 제외
*/

let student = students.filter( (item) => ( item.korean + item.english + item.math ) / 3 >= 80 &&
                                           item.attendance >= 80 &&
                                           item.korean >= 60 && item.english >= 60 && item.math >= 60
                             )
console.log(student)

let arr10 = [1,2,3,4]
let newArr10 = arr10.map( (item)=> item*3 )
console.log( newArr10)


//

const students2 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 }
];
/*
각 학생 객체에서 이름을 유지하고, 국어·영어·수학 점수의 합계를 계산하여 새로운 객체 배열을 만드세요.
[
    { name: "김민수", total: 255 },
    { name: "이영희", total: 275 },
    { name: "박철수", total: 225 }
]

*/

let newArr12 = students2.map((item) => {
                  let sum = item.korean + item.english + item.math;
                  return {name: item.name, total: sum}
               });
console.log( newArr12 )

let newArr13 = students2.map(function(item) {
                             return {name: item.name, total: item.korean + item.english + item.math}
                           });
console.log( newArr13) 

//문제 회원의 성인 여부 확인하기
const members = [
    { id: 1, name: "김민수", age: 17 },
    { id: 2, name: "이영희", age: 25 },
    { id: 3, name: "박철수", age: 20 },
    { id: 4, name: "최지우", age: 19 }
];
let newArr14 = members.map(function(item) {
                             return { name:  item.name, 
                                      age: item.age,
                                      isAdult: item.age>=20
                                     }
                           });
console.log( newArr14) 

// 113page sort

let arr12 = [10,5,3]
arr12.sort()
 console.log(arr12);
 
function compare( a, b){
    if(a>b){
        return 1
    }else if( a<b){
        return -1
    }else{
        return 0
    }
}
let arr13 = [10,5,3]
arr13.sort(compare)

console.log(arr13);

// 문제1 숫자 오름차순과 내림차순 정렬
// 오름차순: [5, 10, 25, 40, 100]
// 내림차순: [100, 40, 25, 10, 5]
// 힌트: 숫자는 다음과 같이 비교해야 합니다.
// (a, b) => a - b  // 오름차순
// (a, b) => b - a  // 내림차순

const numbers = [40, 5, 100, 25, 10];
const ascending = [...numbers].sort((a,b)=> a-b)
const descending = [...numbers].sort((a,b)=> b-a)
//numbers.sort(ascending);
console.log( ascending );
console.log( descending );


// 문제2 문자 오름차순 정렬
const names = ["박철수", "김민수", "최지우", "이영희", "강하늘"];
const descendingNames = [...names].sort( (a,b)=> b.localeCompare(a, "ko" ) );
console.log( names.sort());
console.log( names.sort().reverse());

//문제3  상품 객체 배열을 가격이 낮은 순서대로 정렬하세요.
const products1 = [
    { name: "노트북", price: 1200000 },
    { name: "마우스", price: 30000 },
    { name: "모니터", price: 350000 },
    { name: "키보드", price: 80000 }
];
/*
[
    { name: "마우스", price: 30000 },
    { name: "키보드", price: 80000 },
    { name: "모니터", price: 350000 },
    { name: "노트북", price: 1200000 }
]
*/

const asPrice = [...products1].sort(  (a,b)=>  a.price - b.price   );//가격 오름차순
const desPrice = [...products1].sort(  (a,b)=>  b.price - a.price   ); //가격 내림차순
const asName1 = [...products1].sort(  (a,b)=>  a.name.localeCompare(b.name, "ko" )   );// name 오름차순으로 정렬
console.log( asPrice );
console.log( desPrice );
console.log( asName1 );


const asPrice1 = [...products1].sort((a,b)=>a.name - b.name )
const desPrice1 = [...products1].sort((a,b)=>b.name - a.name )
const asName = [...products1].sort(  (a,b)=>  a.name.localeCompare(b.name, "ko" )   );// name 오름차순으로 정렬
console.log( asPrice1);
console.log( desPrice1);

// 문제4 학생 평균 점수 내림차순 정렬하기
/*
 학생별 국어, 영어, 수학 점수가 있습니다.
1. 각 학생의 평균 점수를 계산합니다.
2. 평균 점수가 높은 학생부터 정렬합니다.
3. 평균 점수는 소수점 둘째 자리까지 출력합니다.
실행결과
[
    { name: "이영희", average: 91.67 },
    { name: "최지우", average: 90.00 },
    { name: "김민수", average: 85.00 },
    { name: "박철수", average: 75.00 }
]
*/
const students1 = [
    { name: "김민수", korean: 80, english: 90, math: 85 },
    { name: "이영희", korean: 95, english: 88, math: 92 },
    { name: "박철수", korean: 70, english: 75, math: 80 },
    { name: "최지우", korean: 90, english: 90, math: 90 }
];
let studentAvgAsc = students1.map((item) => {
                  let avg = (item.korean + item.english + item.math)/3;
                  return {name: item.name, average: avg.toFixed(2)}
               }
            ).sort((a,b)=>a. average- b. average )   ;

console.log( studentAvgAsc )


//join
let arr15 = ["안녕","나는","이정환"]
console.log(arr15.join());
console.log(arr15.join("-"));
console.log(arr15.join(" "));

//115 reduce
// 배열명.reduce(( acc, item, index, array) => {} )
let arr16 = [1,2,3,4,5]
let result16 = arr16.reduce((acc,item)=>acc+item,0) //0은 초기값  
console.log(result16);

//1000-아이템 빼기
 
const numbers17 = [10,20,30,40,50]
let result17 = numbers17.reduce((acc,item)=>acc-item,1000)
console.log(result17);

  




