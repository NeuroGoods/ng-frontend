import IconContainer from "../IconContainer/IconContainer"
import styles from './Navbar.module.css';
import {NavLink, Navigate} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <NavLink to='/'><IconContainer variation='envelope'/> </NavLink >
      <NavLink  to='/'><IconContainer variation='bell'/></NavLink >
      <NavLink to='/publish-product'><IconContainer variation='plus'/></NavLink >
      <NavLink to='/favorites'><IconContainer variation='favorites'/></NavLink >
    </div>
  )
}

export default Navbar