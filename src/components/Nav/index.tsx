import { Link } from 'react-router-dom';
import { Barra, Logo, AvatarAang } from './style'
import Avatar from '../Avatar'
export const linkLogo : string = "https://www.weg.net/institutional/_ui/desktop/theme-institutional/img/brand-white.svg";

const NavBar = () => (
  <Barra><AvatarAang><Avatar/></AvatarAang>
    <Link to="/"><Logo src={linkLogo} /></Link>
  </Barra>
);
  
  export default NavBar;