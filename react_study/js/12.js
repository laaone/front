


 let date = new Date(24*3600*1000); 
console.log( date.getTime() ) // 2026-10-23T02:31:12.293Z

let today1 = "2026-10-23"; // 문자 --> 날짜 
let date1 = new Date( today1 );
console.log( date1 ) // 2026-10-23T02:31:12.293Z

let date2 = new Date( 2026, 10, 23 ); // 숫자->날짜 월 0~11  일 0~30
let timeStamp = date2.getTime();
console.log( timeStamp ); // 1795359600000
let date3 = new Date(timeStamp);
console.log( date3 ); 

// 정리 new Date() - 오늘날짜 ; new Date("2026-10-23"), new Date(timeStamp), new Date(2026,10,23)
// 이렇게 넣으면 날짜형식으로 만들 수 있다. 

let date4 = new Date();
console.log( date4 ); // 오늘 날짜 UTC시간으로 -9시간 한 것이 표현 
console.log(date4.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })); 

console.log( date4.getFullYear() );
console.log( date4.getMonth()+1 );// 월 0-1월 ... 9-10월 
console.log( date4.getDate() );// 23일 
console.log( date4.getDay() ); // 요일 반환 0-일요일 1-월요일 ... 5-금요일 

let date5 = new Date(2026, 10, 10);
date5.setFullYear(2027);
console.log( date5.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) );

// 125page
const today = new Date(2026, 9,23, 12);
console.log( today ); // 2000-10-10T13:00:00.000Z
console.log( today.toString() ); // 날짜 --> 문자로 바꾸기  Fri Oct 23 2026 12:00:00 GMT+0900 (대한민국 표준시)
console.log( today.toDateString() ); // Fri Oct 23 2026
console.log( today.toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }) ); // Fri Oct 23 2026
console.log( today.toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' }) ); // Fri Oct 23 2026   

//126
function moveMonth(date, moveMonth){
    const curTimestamp = date.getTime(); // 타임스탬프를 구한다. 1970-1-1부터 날짜까지의 밀리초를 구함
    const curMonth = date.getMonth();
    const resDate = new Date(curTimestamp);
    resDate.setMonth(curMonth + moveMonth);
    return resDate;
}

const dateA = new Date("2000-10-10");
console.log("A:", dateA);

const dateB = moveMonth(dateA, 1);
console.log("B:", dateB);

const dateC = moveMonth(dateA, -1);
console.log("C:", dateC);

function moveMonth(date, moveDate){
    const curTimestamp = date.getTime(); // 타임스탬프를 구한다. 1970-1-1부터 날짜까지의 밀리초를 구함
    const curMonth = date.getDate();
    const resDate = new Date(curTimestamp);
    resDate.setDate(curMonth + moveDate);
    return resDate;
}

const dateD = new Date("2000-10-23");
console.log("D:", dateD);

const dateE = moveMonth(dateD, 14);
console.log("E:", dateE);

const dateF = moveMonth(dateD, -14);
console.log("F:", dateF);

//127
function filterThisMonth( pivotDate, dateArray){
    const year = pivotDate.getFullYear();//2000 년도만
    const month = pivotDate.getMonth();//10
    console.log(year, month, "~~~~");//9
    
    const startDay = new Date( year, month, 1,0,0,0,0);// 2000-10-1-0시 0분 0초 0밀리초
    const endDay = new Date( year, month+1,1,0,0,0,0 );//

    const resArr = dateArray.filter(
                    (it)=> startDay.getTime() <= it.getTime() && it.getTime() <= endDay.getTime() );
    return resArr;    
}

const dateArray = [
    new Date("2000-10-01"), 
    new Date("2000-10-31"), 
    new Date("2000-11-01"), 
    new Date("2000-9-30"), 
    new Date("2000-10-11"), 
];
//오늘은 2000년 10월 10일이라고 가정한다
const today15 = new Date("2000-10-10/00:00:00");
const filterArray = filterThisMonth(today15, dateArray);
console.log(filterArray);

