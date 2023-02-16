import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import MyPageTitle from "../../components/mypage/MyPageTitle/MyPageTitle";
import MyPageNav from "../../components/mypage/MyPageNav/MyPageNav";
import MyPageMain from "../../components/mypage/MyPageMain/MyPageMain";
import { NavAndMain } from "./MyPage.style";

<<<<<<< HEAD
const MyPage = () => {
  return (
    <div>
=======
function MyPage() {
  return (
    <div>
      <Header />
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
      <Nav />
      <MyPageTitle />
      <NavAndMain>
        <MyPageNav />
        <MyPageMain />
      </NavAndMain>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default MyPage;
