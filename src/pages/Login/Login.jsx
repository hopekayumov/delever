import React from "react";
import { Checkbox } from "@mui/material";
import styles from "./Login.module.css";
import Mac from "../../assets/images/Mac.png";
import Bootcamp from "../../assets/images/Bootcamp.svg";
import LoginSVG from "../../assets/images/login.svg";
import PasswordSVG from "../../assets/images/password.svg";

function Login() {
  return (
    <div className={styles.login}>
        {/* Left side */}
      <div className={styles.loginLeftSide}>
        <div className="container">
          <img className={styles.loginLogo} src={Bootcamp} alt="Bootcamp" />
          <img className={styles.loginImg} src={Mac} alt="PC" />
        </div>
      </div>
      {/* Right Side */}
      <div className={styles.loginRightSide}>
        <div className="container">
          <div className={styles.loginContainer}>
            <h1 className={styles.loginTitle}>Вход в платформу</h1>
            <form className={styles.loginForm}>
                {/* Login */}
                <label className={styles.loginLabel} >Имя пользователья<span>*</span></label>
                <img className={styles.loginLoginImg} src={LoginSVG} alt="Login" />
                <input className={styles.loginInut} type="text" placeholder="Арина Соколова" />
                {/* Password */}
                <label className={styles.loginLabel}>Пароль<span>*</span></label>
                <img className={styles.loginPasswordImg} src={PasswordSVG} alt="Login" />
                <input className={styles.loginInut} type="password" placeholder="Введите пароль" />
                {/* Checkbox */}
                <div className={styles.loginRem}>
                    <Checkbox/>
                    <span>Запомнить меня</span>
                </div>
                <button className={styles.loginButton}>Войти</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

