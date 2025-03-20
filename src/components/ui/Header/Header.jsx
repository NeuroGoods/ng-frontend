import styles from './Header.module.css'
import logo from '../../../assets/logo/Logo.svg'
import userIcon from '../../../assets/icons/Perfil user.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img className={styles.logo}  src={logo} alt="" />
        <button className={styles.userIcon}><img src={userIcon} alt="" /></button>
    </div>
  )
}

export default Header