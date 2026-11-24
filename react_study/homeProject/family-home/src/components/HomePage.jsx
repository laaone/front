import { useNavigate } from 'react-router-dom';
import HeroSlider from './HeroSlider';

export default function HomePage({ menus }) {
  const navigate = useNavigate();
  const schedules = ['오후 4:00　아이 학원', '오후 6:30　가족 저녁식사', '오후 8:00　가족회의'];
  const notices = ['이번 주말 가족 나들이', '가족회의 안건을 등록해 주세요', '최근 앨범에 사진이 추가되었어요'];

  return (
    <>
      <HeroSlider />

      <div className="grid">
        {menus.slice(1).map((m) => (
          <button key={m.key} className="card" onClick={() => navigate(`/${m.key}`)}>
            <span className="emoji">{m.icon}</span>
            <b>{m.name}</b>
            <small>{m.desc}</small>
          </button>
        ))}
      </div>

      <div className="two">
        <section className="panel">
          <h3>오늘의 일정</h3>
          {schedules.map((s) => (
            <div className="row" key={s}>{s}</div>
          ))}
        </section>
        <section className="panel">
          <h3>가족 공지</h3>
          {notices.map((n) => (
            <div className="row" key={n}>{n}</div>
          ))}
        </section>
      </div>
    </>
  );
}