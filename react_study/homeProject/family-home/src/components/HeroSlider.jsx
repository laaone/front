import { useState, useEffect } from 'react';

const slides = [
  { src: '/images/hero1.jpg', color: '#f4e6d9' },
  { src: '/images/hero2.jpg', color: '#e8eee5' },
  { src: '/images/hero3.jpg', color: '#e8eef7' },
  { src: '/images/hero4.jpg', color: '#f6e5e8' },
  { src: '/images/hero5.jpg', color: '#f8f0dc' },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 4초마다 다음 사진으로 자동 변경
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section
      className="slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`slide ${i === index ? 'on' : ''}`}
          style={{
            backgroundImage: `url(${s.src}), linear-gradient(110deg, ${s.color}, #f4eee3)`,
          }}
        />
      ))}

      <div className="slider-text">
        <h1>우리 가족의 소중한 이야기 ♡</h1>
        <p>우리집에 오신 것을 환영합니다. 오늘도 함께 행복한 하루를 만들어요.</p>
      </div>

      <button className="arrow left" onClick={prev} aria-label="이전 사진">‹</button>
      <button className="arrow right" onClick={next} aria-label="다음 사진">›</button>

      <div className="dots">
        {slides.map((s, i) => (
          <button
            key={s.src}
            className={i === index ? 'dot on' : 'dot'}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}번 사진`}
          />
        ))}
      </div>
    </section>
  );
}