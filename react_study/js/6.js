// 객체 만들기 
// 객체명 board
// 프로퍼티 id: "no1", writer: "홍길동" content: "내용1"

let board = {
    id: "no1",
    writer: "홍길동",
    content: "내용1"
}

// no1을 id1로 수정하기 
board.id = "id1";

// writer를 "이순신"으로 수정하기 
board.writer = "이순신";

// date: "2026-10-20" 추가하기 
board.date = "2026-10-20";

// count: 20 추가하기 
board.count = 20;

// writer 삭제하기 
delete board.writer;

console.log( board ); 
console.log( board.date ); 