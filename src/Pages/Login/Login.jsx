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
                <Input variation="login" placeHolder="Email" type="email"/>
                <Input variation="login" placeHolder="Contraseña" type="password"/>
                <p style={{color:"blue", margin: "20px 0px 30px 0px", cursor:"pointer"}}>¿Olvidaste la contraseña?</p>
                <Button text="Login" variation="big"/>
                <p className={styles.register}>
                    ¿No estas registrado? <span style={{color:"blue", cursor:"pointer"}}>Registrate ahora</span>
                </p>
            </form>
            <div className={styles.socialLogin}>
                <hr />
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
