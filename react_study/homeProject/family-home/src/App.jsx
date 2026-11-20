import { useState } from 'react';
import { menus } from './data/menus';
import TopBar from './components/TopBar';
import SideNav from './components/SideNav';
import HomePage from './components/HomePage';
import SectionPage from './components/SectionPage';
import AlbumPage from './components/AlbumPage';


export default function App() {
  const [current, setCurrent] = useState('home');
  const menu = menus.find((m) => m.key === current);

  return (
    <div className="app">
      <TopBar />
      <div className="layout">
        <SideNav menus={menus} current={current} onSelect={setCurrent} />
        <main>
          {current === 'home' ? (
            <HomePage menus={menus} onSelect={setCurrent} />
          ) : (
            <SectionPage menu={menu} onBack={() => setCurrent('home')} />
          )}
        </main>
      </div>
      <footer>OUR FAMILY HOME · 가족 전용 공간 · 화면 구성 검토용 프로토타입</footer>
    </div>
  );
}