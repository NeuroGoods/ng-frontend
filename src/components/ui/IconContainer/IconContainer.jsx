import { FaBell, FaRegEnvelope, FaHeart, FaHome, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import { LuCirclePlus } from "react-icons/lu";
import styles from './IconContainer.module.css';

const icons = {
  bell: FaBell,
  envelope: FaRegEnvelope,
  home: FaHome,
  plus: LuCirclePlus,
  favorites: IoHeartCircleOutline,
  google: FaGoogle,
  apple: FaApple,
  facebook: FaFacebook,
  like: FaHeart
};

const IconContainer = ({ variation = "bell", size = 48, onClick, className="" }) => {
  const IconComponent = icons[variation] || FaBell;

  return (
    <button className={`${styles.iconContainer} ${styles[variation]} ${className}`} onClick={onClick}>
      <IconComponent className={styles.iconImg} size={size} />
    </button>
  );
};

export default IconContainer;