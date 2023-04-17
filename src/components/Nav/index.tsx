import { Link } from 'react-router-dom';
import Avatar from '../Avatar'
import { Barra, Logo, AvatarAang } from './style'

const NavBar = () => (
  <Barra><AvatarAang><Avatar/></AvatarAang>
    <Link to="/"><Logo src= "https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand-white.svg" /></Link>
  </Barra>
);
  
  export default NavBar;