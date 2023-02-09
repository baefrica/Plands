import { useState } from "react";
import {
  isEmail,
  isLength,
  isAlphanumeric,
  isNumeric,
} from "validator";
import Header from "components/header/Header";
import Nav from "components/nav/Nav";
import {
  Container,
  RegistFormDiv,
  RegistInputDiv,
  RegistBtnDiv,
  CorrectInput,
  InvalidInput,
  EmailConfirm,
  ConfirmBtn,
  RegistBtn,
  CancelBtn,
} from "./RegisterPage.style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:9999/beakgu/member";

const RegisterPage = () => {
  // 사용자 입력값
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdValid, setPwdValid] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");

  // 입력값 에러 상태
  const [idErrorAlpha, setIdErrorAlpha] = useState(true);
  const [idErrorLength, setIdErrorLength] = useState(true);
  const [pwdErrorSpecial, setPwdErrorSpecial] =
    useState(true);
  const [pwdErrorLength, setPwdErrorLength] =
    useState(true);
  const [pwdValidError, setPwdValidError] = useState(true);
  const [nameErrorKorean, setNameErrorKorean] =
    useState(true);
  const [nicknameError, setNicknameError] = useState(true);
  const [pNumberError, setPNumberError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  const [eauthBtn, setEauthBtn] = useState(false);
  const [eauthSuccess, setEauthSuccess] = useState(false);

  const navigate = useNavigate();

  // Validation 영역

  // id 검사
  const onChangeId = (e) => {
    const cur = e.target.value;

    if (!isAlphanumeric(cur)) {
      setIdErrorAlpha(true);
    } else setIdErrorAlpha(false);

    if (!isLength(cur, { min: 8, max: 16 })) {
      setIdErrorLength(true);
    } else setIdErrorLength(false);
    setId(cur);
  };

  const onChangePwd = (e) => {
    const cur = e.target.value;
    const passwordRegex =
      /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (!isLength(cur, { min: 8, max: 16 })) {
      setPwdErrorLength(true);
    } else setPwdErrorLength(false);

    if (!passwordRegex.test(cur)) {
      setPwdErrorSpecial(true);
    } else setPwdErrorSpecial(false);
    setPwd(cur);
  };

  const onChangePwdValid = (e) => {
    const cur = e.target.value;

    if (pwd !== cur) {
      setPwdValidError(true);
    } else setPwdValidError(false);

    setPwdValid(cur);
  };

  const isKorean = (txt) => {
    const nameReg = /^[가-힣]{1,5}$/;

    if (nameReg.test(txt)) return true;
    else return false;
  };

  const onChangeName = (e) => {
    const cur = e.target.value;

    if (!isKorean(cur)) setNameErrorKorean(true);
    else setNameErrorKorean(false);

    setName(cur);
  };

  const onChangeNickname = (e) => {
    const cur = e.target.value;
    const nicknameReg =
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;

    if (!nicknameReg.test(cur)) setNicknameError(true);
    else setNicknameError(false);

    setNickname(cur);
  };

  const onChangeGender = (e) => {
    if (e.target.value === "male") {
      setGender("M");
    } else {
      setGender("W");
    }
  };

  const onChangeBirthDay = (e) => {
    setBirthDay(e.target.value);
  };

  const onChangePNumber = (e) => {
    const cur = e.target.value;

    if (!isNumeric(cur)) setPNumberError(true);
    else setPNumberError(false);

    setPNumber(cur);
  };

  const onChangeEmail = (e) => {
    const cur = e.target.value;

    if (!isEmail(cur)) setEmailError(true);
    else setEmailError(false);

    setEmail(cur);
  };

  // 폼 제출 전 확인 메서드

  const validation = () => {
    if (idErrorAlpha) return false;
    else if (idErrorLength) return false;
    else if (pwdErrorSpecial) return false;
    else if (pwdErrorLength) return false;
    else if (pwdValidError) return false;
    else if (nameErrorKorean) return false;
    else if (nicknameError) return false;
    else if (pNumberError) return false;
    else if (emailError) return false;
    else if (!eauthSuccess) return false;
    else return true;
  };

  const onClickEmailConfirmBtn = () => {
    if (!emailError) {
      axios
        .post(`${URL}/eauth`, email.toString("utf-8"), {
          headers: {
            // 이상함 : 오타체크할것!!!
            "Content-Type": "applcation/json;",
          },
        })
        .then((res) => {
          setEauthBtn(true);
          console.log(res);
        })
        .catch(() => {});
    }
  };

  const onHandleEauthSuccess = () => {
    // input 값과 response 의 인증번호를 비교한 후, 맞다면
    setEauthSuccess(true);
  };

  const onClickRegistBtn = (e) => {
    if (!validation()) {
      alert("회원가입 조건에 맞추어 다시 입력해주세요.");
      return;
    } else {
      alert("회원가입에 성공하였습니다.");

      axios.post(`${URL}/regist`, {
        id: id,
        pwd: pwd,
        name: name,
        nickname: nickname,
        gender: gender,
        birthDay: birthDay,
        pnumber: pNumber,
        email: email,
      });

      navigate("/login");
    }
  };

  const onClickCancelBtn = (e) => {
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <RegistFormDiv method="POST">
          <h1>SIGN UP</h1>
          <h3>아이디</h3>
          <RegistInputDiv>
            <input
              type="text"
              required
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChangeId}
            />
            {!idErrorLength && !idErrorAlpha && id && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {idErrorLength && id && (
              <InvalidInput>
                ❌&nbsp;아이디는 8자 이상 16자 이하로
                되어있어야 합니다.
              </InvalidInput>
            )}
            {idErrorAlpha && id && (
              <InvalidInput>
                ❌&nbsp;영문자 및 숫자로만 이루어져야
                합니다.
              </InvalidInput>
            )}
          </RegistInputDiv>
          <h3>비밀번호</h3>
          <RegistInputDiv>
            <input
              type="password"
              required
              placeholder="비밀번호를 입력하세요"
              value={pwd}
              onChange={onChangePwd}
            />
            {!pwdErrorLength && !pwdErrorSpecial && pwd && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {pwdErrorLength && pwd && (
              <InvalidInput>
                ❌&nbsp;비밀번호는 8자 이상 16자 이하으로
                구성되어야 합니다.
              </InvalidInput>
            )}
            {pwdErrorSpecial && pwd && (
              <InvalidInput>
                ❌&nbsp;하나 이상의 문자, 하나의 숫자 및
                하나의 특수 문자를 포함해야합니다.
              </InvalidInput>
            )}
          </RegistInputDiv>
          <h3>비밀번호 확인</h3>
          <RegistInputDiv>
            <input
              type="password"
              required
              placeholder="비밀번호를 다시 한번 입력하세요"
              value={pwdValid}
              onChange={onChangePwdValid}
            />
            {!pwdValidError && pwdValid && (
              <CorrectInput>
                🟢&nbsp;비밀번호가 일치합니다.
              </CorrectInput>
            )}
            {pwdValidError && pwdValid && (
              <InvalidInput>
                ❌&nbsp;비밀번호와 일치하지 않습니다.
                확인해주세요
              </InvalidInput>
            )}
          </RegistInputDiv>
          <h3>이름</h3>
          <RegistInputDiv>
            <input
              type="text"
              required
              placeholder="이름을 입력하세요"
              value={name}
              onChange={onChangeName}
            />
            {!nameErrorKorean && name && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {nameErrorKorean && name && (
              <InvalidInput>
                ❌&nbsp;이름은 한글로 1~5자까지
                입력가능합니다.
              </InvalidInput>
            )}
          </RegistInputDiv>
          <h3>닉네임</h3>
          <RegistInputDiv>
            <input
              type="text"
              required
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={onChangeNickname}
            />
          </RegistInputDiv>
          {!nicknameError && nickname && (
            <CorrectInput>
              🟢&nbsp;올바른 입력입니다.
            </CorrectInput>
          )}
          {nicknameError && nickname && (
            <InvalidInput>
              ❌&nbsp;닉네임은 한글,영어,숫자(최대10자)
              이루어져야합니다.
            </InvalidInput>
          )}
          <h3>성별</h3>
          <RegistInputDiv>
            <select
              name="gender"
              id="genderSelect"
              required
              onChange={onChangeGender}
            >
              <option value="">성별을 선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </RegistInputDiv>
          <h3>생년월일</h3>
          <RegistInputDiv>
            <input
              type="text"
              required
              placeholder="YYYYMMDD"
              value={birthDay}
              onChange={onChangeBirthDay}
            />
          </RegistInputDiv>

          <h3>전화번호</h3>
          <RegistInputDiv>
            <input
              type="tel"
              required
              placeholder="전화번호를 입력하세요"
              value={pNumber}
              onChange={onChangePNumber}
            />
            {!pNumberError && pNumber && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {pNumberError && pNumber && (
              <InvalidInput>
                ❌&nbsp; 번호 숫자만 입력해주세요.
              </InvalidInput>
            )}
          </RegistInputDiv>
          <h3>이메일</h3>
          <RegistInputDiv>
            <input
              type="email"
              required
              placeholder="이메일 주소를 입력하세요"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
            <EmailConfirm>
              {eauthBtn ? (
                <>
                  <input placeholder="인증번호를 입력해주세요" />
                  <ConfirmBtn
                    onClick={onHandleEauthSuccess}
                  >
                    인증 확인
                  </ConfirmBtn>
                </>
              ) : (
                <ConfirmBtn
                  onClick={onClickEmailConfirmBtn}
                >
                  인증하기
                </ConfirmBtn>
              )}
            </EmailConfirm>
            {!emailError && email && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {emailError && email && (
              <InvalidInput>
                ❌&nbsp; 이메일 형식대로 입력해주세요.
              </InvalidInput>
            )}
          </RegistInputDiv>
          <RegistBtnDiv>
            <RegistBtn onClick={onClickRegistBtn}>
              회원가입
            </RegistBtn>
            <CancelBtn onClick={onClickCancelBtn}>
              취소
            </CancelBtn>
          </RegistBtnDiv>
        </RegistFormDiv>
      </Container>
    </div>
  );
};

export default RegisterPage;
