 import css from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from 'components/Friends/Friends';

let active = {
   color: 'gold'
}
let actives = ({ isActive }) => (isActive ? active : undefined);

const NavBar = (props) => {

  return (
    <nav className={css.nav}>
      <div className={css.item}>
        <NavLink to="/profile" style={actives}>
          Profile
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/dialogs" style={actives}>
          Message
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/news" style={actives}>
          New
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/music" style={actives}>
          Music
        </NavLink>
      </div>
      <div className={css.item}>
        <NavLink to="/setting" style={actives}>
          Settings
        </NavLink>
      </div>
      <div>
        
        <Friends friends={props} />
      </div>
    </nav>
  );

}

export { NavBar };