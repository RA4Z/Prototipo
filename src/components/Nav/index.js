import { Link } from 'react-router-dom';
import Avatar from '../Avatar'
import './style.css';

function NavBar() {
    return (
      <div className="barra"><div className='avatarAang'><Avatar/></div>
        <Link to="/"><img src="https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand-white.svg" className="logo" alt="logo"/></Link>
      </div>
    );
  }
  
  export default NavBar;