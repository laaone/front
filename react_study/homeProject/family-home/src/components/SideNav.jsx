export default function SideNav({ menus, current, onSelect }) {
  return (
    <nav>
      {menus.map((m) => (
        <button
          key={m.key}
          className={m.key === current ? 'active' : ''}
          onClick={() => onSelect(m.key)}
        >
          {m.icon}　{m.name}
        </button>
      ))}
    </nav>
  );
}