import { useNavigate, useLocation } from 'react-router-dom';

export default function SideNav({ menus }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav>
      {menus.map((m) => {
        const path = m.key === 'home' ? '/' : `/${m.key}`;
        return (
          <button
            key={m.key}
            className={pathname === path ? 'active' : ''}
            onClick={() => navigate(path)}
          >
            <span className="nav-icon">{m.icon}</span>
            {m.name}
          </button>
        );
      })}
    </nav>
  );
}