import { Link } from "react-router-dom";
import styles from "./css/LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.loginFormDiv}>
      <form method="POST">
        <h1>회원 로그인</h1>
        <div className={styles.inputSpace}>
          <h3>아이디</h3>
          <div class={styles.loginInputDiv}>
            <input type="text" required />
          </div>
          <h3>비밀번호</h3>
          <div class={styles.loginInputDiv}>
            <input type="password" required />
          </div>
        </div>
        <div className={styles.loginBtnDiv}>
          <button>로그인</button>
          <button>
            <Link to={"/register"}>회원가입</Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
