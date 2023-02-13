import logo from "assets/images/logo_white.png";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./Header.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "store/slice/userSlice";
import { getMemberDetail } from "utils/api/memberApi";
import { logout } from "utils/api/sessionApi";
import Swal from "sweetalert2";

const Header = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });
  const [nickName, setNickName] = useState("");

  if (accessToken !== null) {
    console.log("여기들어옴?", accessToken);

    // 멤버 정보 요청
    getMemberDetail(accessToken).then((res) => {
      console.log("여기서 에러야?");
      setNickName(res.data.nickname);
    });
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 로그인 버튼 클릭
  const onClickLoginBtn = () => {
    navigate("/login");
  };
  // 회원가입 버튼 클릭
  const onClickRegistnBtn = () => {
    navigate("/regist");
  };
  // 마이페이지 버튼 클릭
  const onClickMyPageBtn = () => {
    navigate("/mypage");
  };
  // 로그아웃 버튼 클릭
  const onClickLogOutBtn = () => {
    // 로그아웃 요청 -> ****에러 있음
    logout(accessToken)
      .then((res) => {
        Swal.fire({
          title: "안녕히 가세요.",
          icon: "success",
          confirmButtonText: "확인",
          timer: 3000,
        });

        dispatch(LOG_OUT());
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <S.HeaderDiv>
      <S.LogoLink to="/">
        <S.LogoImg src={logo} />
      </S.LogoLink>
      {accessToken !== null ? (
        <S.Loginned>
          <S.LoginMsg>{nickName}님 환영합니다</S.LoginMsg>
          <S.MyPageBtn onClick={onClickMyPageBtn}>
            마이 페이지
          </S.MyPageBtn>
          <S.LogoutBtn onClick={onClickLogOutBtn}>
            로그아웃
          </S.LogoutBtn>
        </S.Loginned>
      ) : (
        <S.HeaderButtonDiv>
          <S.LoginBtnStyle onClick={onClickLoginBtn}>
            로그인
          </S.LoginBtnStyle>
          <S.RegistBtnStyle onClick={onClickRegistnBtn}>
            회원가입
          </S.RegistBtnStyle>
        </S.HeaderButtonDiv>
      )}
    </S.HeaderDiv>
  );
};

export default Header;
