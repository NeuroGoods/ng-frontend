import styles from "./Input.module.css";
import { useState } from "react";

const Input = ({variation, type, onChange}) => {
  const [inputValue, setInputValue] = useState('');


  return (
    <input
        type={type}
        onChange={onChange}
        placeholder="Escribe algo..."
         className={`${styles.input} ${styles[variation]}`}   
      />
  );
};

export default Input;
