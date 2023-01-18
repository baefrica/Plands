import { Link } from "react-router-dom";
import styles from "./css/RegisterPage.module.css";

function RegisterPage() {
  return (
    <div>
      <div className={styles.loginFormDiv}>
        <form method="POST">
          <h1>회원 가입</h1>
          <h3>아이디</h3>
          <div class={styles.loginInputDiv}>
            <input type="text" required />
          </div>
          <h3>비밀번호</h3>
          <div class={styles.loginInputDiv}>
            <input type="password" required />
          </div>
          <h3>비밀번호 확인</h3>
          <div class={styles.loginInputDiv}>
            <input type="password" required />
          </div>
          <h3>이름</h3>
          <div class={styles.loginInputDiv}>
            <input type="text" required />
          </div>
          <h3>닉네임</h3>
          <div class={styles.loginInputDiv}>
            <input type="text" required />
          </div>
          <h3>성별</h3>
          <div class={styles.loginInputDiv}>
            <select name="gender" id="genderSelect">
              <option value="">성별을 선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>
          <h3>생일</h3>
          <div class={styles.loginInputDiv}>
            <input type="date" required />
          </div>
          <h3>전화번호</h3>
          <div class={styles.loginInputDiv}>
            <input type="tel" required />
          </div>
          <h3>이메일</h3>
          <div class={styles.loginInputDiv}>
            <input type="email" required />
          </div>
          <div className={styles.loginBtnDiv}>
            <button>회원가입</button>
            <button>
              <Link to={"/login"}>취소</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
