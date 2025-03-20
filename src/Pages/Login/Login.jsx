import ImageContainer from "../../components/ui/ImageContainer/ImageContainer";
import styles from "./Login.module.css";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";
import IconContainer from "../../components/ui/IconContainer/IconContainer";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <ImageContainer />
            <h2>¡Bienvenide!</h2>
            <form action="">
                <Input variation="login" placeHolder="Email"/>
                <Input variation="login" placeHolder="Contraseña"/>
                <p style={{color:"blue"}}>¿Olvidaste la contraseña?</p>
                <Button text="Login" variation="big"/>
                <p>
                    ¿No estas registrado? <span>Registrate ahora</span>
                </p>
            </form>
            <div className={styles.socialLogin}>
                <p>O continuar con</p>
                <div className={styles.socialIcons}>
                    <IconContainer variation="google" />
                    <IconContainer variation="apple" />
                    <IconContainer variation="facebook" />
                </div>
            </div>
        </div>
    );
};

export default Login;
