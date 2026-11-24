import { useParams, useNavigate } from 'react-router-dom';

export default function SectionPage({ menus }) {
  const { key } = useParams();
  const navigate = useNavigate();
  const menu = menus.find((m) => m.key === key);

  if (!menu) {
    return (
      <>
        <button className="back" onClick={() => navigate('/')}>← 홈으로</button>
        <h2>페이지를 찾을 수 없어요</h2>
        <p className="sub">주소를 다시 확인해 주세요.</p>
      </>
    );
  }

  return (
    <>
      <button className="back" onClick={() => navigate('/')}>← 홈으로</button>
      <h2>{menu.icon} {menu.name}</h2>
      <p className="sub">{menu.desc} · 상세 페이지 화면 시안</p>

      <div className="chips">
        {menu.sub.map((s) => (
          <span className="chip" key={s}>{s}</span>
        ))}
      </div>

      <section className="panel">
        <div className="row">
          <div>
            <h3>콘텐츠 목록</h3>
            <small>가족 구성원이 등록한 항목을 확인할 수 있습니다.</small>
          </div>
          <button
            className="btn"
            onClick={() => alert('화면 시안입니다. 실제 등록 기능은 개발 단계에서 연결합니다.')}
          >
            ＋ 새 항목 등록
          </button>
        </div>
        {menu.items.map((item, i) => (
          <div className="row" key={item}>
            <span>{item}</span>
            <small>{i === 0 ? '최근 등록' : '가족 공유'}</small>
          </div>
        ))}
      </section>

      <section className="panel">
        <h3>이 페이지에서 할 수 있는 일</h3>
        <p className="sub">하위 메뉴 선택 · 새 항목 등록 · 내용 확인 · 수정 및 삭제 · 검색과 분류 기능을 개발할 예정입니다.</p>
      </section>
    </>
  );
}