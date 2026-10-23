//128 비동기
//동기 vs 비동기 
// 동기 : 주는 쪽과 받는 쪽 만나서 자료 전달하는 방식(전화)
          // 함수 호출하는 순서대로 차례 차례 실행 되는 것 
// 비동기 : 주는 쪽(서버)에서 받는 쪽(클라이언트) 만나지 않아도 우체통 넣어두는 방식 (카톡, 일반우편 )
         // 함수호출하는 순서가 차례 차례가 아닐 수 있다. 
         // 로그인-답변 3초, 검색 - 답변 1초  
setTimeout( () => { console.log("1번"),3000
})
console.log("2번!");

function orderCoffee( coffee, time){
    setTimeout(()=> {
        console.log(`${coffee}제조 완료`);
    }, time) 
}
orderCoffee("달콤한 커피", 4000)
orderCoffee("레몬티", 2000)
orderCoffee("시원한 커피", 3000)

//130 
function double(num){
    setTimeout( ()=> {
        const doubleNum = num*2;
        // console.log(doubleNum);
        return doubleNum; //비동기 리턴X
        
    }, 1000)
}
console.log(double(10),"~~~~~"); // undefined ~~~~~~

//132
function double132(num, cd){
    setTimeout( ()=> {
        const doubleNum = num*2;
      
       cd(doubleNum); 
        
    }, 1000)
}
double132(10, (res)=>{
    console.log( res,"@@" );//20
    
})
console.log("마지막");

//132 프로미스

const promise = new Promise(
    function(resolve, rejext){
    setTimeout( ()=>{
        console.log("안녕","~~~~~");
        
    }, 500);
}
);
const promise1 = new Promise(
    function(resolve, reject){
    setTimeout( ()=>{
      resolve("성공","~~~~~");
    //  reject("로그인실패","~~~~~");
        
    }, 5000);
}
);
// promise1.then( function(res){
//     console.log(res);
    
// })

promise1.then( function(res){
    console.log(res,"$$$");   
})
.catch( function(err){
    console.log(err,"###");
}) 



