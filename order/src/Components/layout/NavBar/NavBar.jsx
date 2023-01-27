import classes from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <Link
        className={classes.logo}
        to="/"
      >
        Megaventory
      </Link>
    </div>
  );
};

export default NavBar;
