import IconContainer from "../IconContainer/IconContainer"
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <IconContainer variation='envelope'/>
        <IconContainer variation='bell'/>
        <IconContainer variation='plus'/>
        <IconContainer variation='favorites'/>
    </div>
  )
}

export default Navbar