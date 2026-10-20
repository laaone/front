if(true){
    var a=1; //함수 스코프 
}
console.log( a );

let objA = {}; // 객체선언
let objB = new Object(); // 객체선언

let person = {
    name: "이정환", // 프로퍼티 (자바에서 멤버필드 )
    age: 25, 
    age: 30,
    "like cat": true,
    
}
let personName = person.name;
let personAge = person.age; 
let personLikeCat = person["like cat"];
console.log( personName );
console.log(personAge);
console.log(personLikeCat);

person.gender = "male"; // 객체에 추가하기 
const personGender = person.gender;
console.log(personGender);

person.name = "홍길동"; // 이미 있는 객체에 새로운 값을 넣으면 수정된다. 
personName = person.name;
console.log( personName );

// "like cat" -> false 수정하기
person["like cat"] = false; 
personLikeCat = person["like cat"];
console.log(personLikeCat);

// 객체의 필요없는 프로퍼티 삭제하기
delete person.age;
personAge = person.age
console.log(personAge);
/*
class Student{
    String name;
    int age;
    Student( name, age){
        this.name = name;
        this.age = age;
    }
}
Student st = new Student("이정환", 25); 
st.name; 
st.age;
*/