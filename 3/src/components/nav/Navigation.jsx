import { NavLink } from "react-router-dom";
import './nav.scss';

export const Navigation = () => {
  const NavLinkStyles = ({ isActive }) => {
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav className="nav__all">
      <NavLink style={NavLinkStyles} to='/' className='nav__item'>
        Post List
      </NavLink>   
      <NavLink  style={NavLinkStyles} to='/todo' className='nav__item'> 
        Todo List
      </NavLink>  
      <NavLink style={NavLinkStyles} to='/userlist' className='nav__item'>
        User List
      </NavLink>
    </nav>
  )
}