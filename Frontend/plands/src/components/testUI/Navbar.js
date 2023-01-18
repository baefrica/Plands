import { Link } from "react-router-dom";
import styles from "./css/NavBar.module.css";
function Navbar() {
  return (
    <div className={styles.NavBarDiv}>
      <nav>
        <Link to={"/"}>홈</Link>
        <Link to={"/login"}>로그인</Link>
        <Link to={"/register"}>회원가입</Link>
        <Link to={"/MyPage"}>마이페이지</Link>
      </nav>
    </div>
  );
}

export default Navbar;
