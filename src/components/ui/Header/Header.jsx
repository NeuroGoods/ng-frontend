import styles from './Header.module.css'
import logo from '../../../assets/logo/Logo.svg'
import userIcon from '../../../assets/icons/Perfil user.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleUserClick = () => {
    navigate('/login')
  }

  return (
    <div className={styles.header}>
        <img className={styles.logo} src={logo} alt="logo" onClick={handleLogoClick} />
        <button className={styles.userIcon}><img src={userIcon} alt="" onClick={handleUserClick}/></button>
    </div>
  )
}

export default Header