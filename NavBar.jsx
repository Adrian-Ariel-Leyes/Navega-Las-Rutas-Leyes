import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <NavLink to="/">Todos</NavLink>
      <NavLink to="/categoria/tableros">Tableros</NavLink>
      <NavLink to="/categoria/piezas">Piezas</NavLink>
      <NavLink to="/categoria/relojes">Relojes</NavLink>
    </nav>
  );
}