import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { albumCategories, albumItems } from '../data/albumData';

export default function AlbumPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('전체 앨범');

  const list =
    tab === '전체 앨범'
      ? albumItems
      : albumItems.filter((a) => a.category === tab);

  return (
    <>
      <button className="back" onClick={() => navigate('/')}>← 홈으로</button>
      <h2>▧ 가족 앨범</h2>
      <p className="sub">사진과 동영상</p>

      <div className="chips">
        {albumCategories.map((c) => (
          <button
            key={c}
            className={c === tab ? 'chip active' : 'chip'}
            onClick={() => setTab(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="panel">
        <div className="row">
          <div>
            <h3>{tab}</h3>
            <small>총 {list.length}개</small>
          </div>
          <button
            className="btn"
            onClick={() => alert('사진 업로드는 다음 단계에서 만들 거예요.')}
          >
            ＋ 사진 업로드
          </button>
        </div>

        {list.length === 0 ? (
          <div className="empty">아직 등록된 항목이 없어요.</div>
        ) : (
          <div className="photos">
            {list.map((p) => (
              <div
                key={p.id}
                className="photo"
                style={{
                  backgroundImage: `url(${p.src}), linear-gradient(135deg, ${p.color}, #ffffff)`,
                }}
              >
                {p.type === 'video' && <span className="play">▶</span>}
                <div className="cap">
                  <b>{p.title}</b>
                  {p.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}