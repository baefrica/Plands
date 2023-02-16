import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import MyPageTitle from "../../components/mypage/MyPageTitle/MyPageTitle";
import MyPageNav from "../../components/mypage/MyPageNav/MyPageNav";
import UserInfoUpdateMain from "components/mypage/UserInfoUpdateMain/UserInfoUpdateMain";
import { NavAndMain } from "./UserInfoUpdatePage.style";

<<<<<<< HEAD
const UserInfoUpdatePage = () => {
  return (
    <div>
=======
function UserInfoUpdate() {
  return (
    <div>
      <Header />
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
      <Nav />
      <MyPageTitle />
      <NavAndMain>
        <MyPageNav />
        <UserInfoUpdateMain />
      </NavAndMain>
    </div>
  );
<<<<<<< HEAD
};

export default UserInfoUpdatePage;
=======
}

export default UserInfoUpdate;
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
