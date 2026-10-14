// 스크롤 시 헤더 스타일 변경
window.addEventListener('scroll', function() {
 const header = document.querySelector('.header');
 if (window.scrollY > 50) {
 header.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
 header.style.backdropFilter = 'blur(10px)';
 } else {
 header.style.backgroundColor = '#d3dae2';
 header.style.backdropFilter = 'none';
 }
});

// 사이드바 메뉴 클릭 시 active 클래스 추가
document.querySelectorAll('.sidebar a').forEach(link => {
 link.addEventListener('click', function(e) {
 // 기존 active 클래스 제거
 document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
 // 클릭된 링크에 active 클래스 추가
 this.classList.add('active');
 });
});