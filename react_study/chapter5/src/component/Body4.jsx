import "./Body.css"

const Body4 = ()=>{
    return(
        <>
          <main>
                <section class="hero">
                <h2>환영합니다!</h2>
                <p>HTML과 CSS로 만든 간단한 홈페이지입니다.</p>
                <a href="#">자세히 보기</a>
                </section>

                <section class="cards">
                <article class="card">
                    <h3>HTML</h3>
                    <p>웹페이지의 구조를 만듭니다.</p>
                </article>
                <article class="card">
                    <h3>CSS</h3>
                    <p>색상과 배치를 꾸밉니다.</p>
                </article>
                <article class="card">
                    <h3>JavaScript</h3>
                    <p>동작과 기능을 추가합니다.</p>
                </article>
                </section>
            </main>
        </>
    )
}

export default Body4; 