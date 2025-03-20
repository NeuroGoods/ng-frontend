import { FaBell, FaRegEnvelope, FaHome, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import styles from './IconContainer.module.css';

const icons = {
  bell: FaBell,
  envelope: FaRegEnvelope,
  home: FaHome,
  plus: LuCirclePlus,
  google: FaGoogle,
  apple: FaApple,
  facebook: FaFacebook
};

const IconContainer = ({ variation = "bell", size = 48, onClick }) => {
  const IconComponent = icons[variation] || FaBell;

  return (
    <button className={`${styles.iconContainer} ${styles[variation]}`} onClick={onClick}>
      <IconComponent className={styles.iconImg} size={size} />
    </button>
  );
};

export default IconContainer;