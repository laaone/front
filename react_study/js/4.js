
 //안녕10번
  //바보10번
  
function a(callBack){
    for( let i=1; i<=10; i++){
        callBack();
    }   

}
 function h( ){
    console.log("안녕");
 }  

 function h2( ){
    console.log("바보");
    
 }
 a(h);
 a(h2);

 //화살표함수 => 61페이지 
 let greeting =(name) => `hello ${name}`; //함수 만들기 (선언)
 const greetingText = greeting("이정환");
 console.log(greetingText);

 let greeting1 =(name)=>{
    let greetingText = `hello ${name}`;
    return greetingText;
 }
 console.log( greeting1("김정민"));


 let score =(name,jumsu) =>{
    if (jumsu >= 80) result = "합격";
    else result="불합격";

    let scoreText = ` ${name} 학생은 점수가 ,${jumsu} 점이면 , ${result}`;
    return scoreText;
 }



 console.log( score("김정민",100));



 let b =20;// 전역스코프(변수)
 function ss(){
    let a =100;
 }
 
//65페이지

 function foo(){
    console.log("foo");
    function bar(){  //지역스코프
    console.log("bar");
   }  
 }
// bar(); 지역스코프 함수는 외부에서 호출 못해
function hh(){
if(true){
    function foo(){
        console.log("barㅠㅠㅠ");
    }    //함수선언
}
for( let i=0; i<=5; i++){
    function bar11(){
        console.log("bar!!");
        
    }
}
}
 foo();
  
 