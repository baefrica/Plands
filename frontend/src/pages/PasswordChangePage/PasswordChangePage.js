import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import MyPageTitle from "../../components/mypage/MyPageTitle/MyPageTitle";
import MyPageNav from "../../components/mypage/MyPageNav/MyPageNav";
import PasswordChangeMain from "components/mypage/PasswordChangeMain/PasswordChangeMain";
import { NavAndMain } from "./PasswordChangePage.style";

function PasswordChangePage() {
  return (
    <div>
      <Header />
      <Nav />
      <MyPageTitle />
      <NavAndMain>
        <MyPageNav />
        <PasswordChangeMain />
      </NavAndMain>
    </div>
  );
}

export default PasswordChangePage;