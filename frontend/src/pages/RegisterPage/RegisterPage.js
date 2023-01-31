import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./css/RegisterPage.module.css";
import { isEmail, isLength, isAlphanumeric, isNumeric } from "validator";

function RegisterPage() {
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
  const [pwdErrorSpecial, setPwdErrorSpecial] = useState(true);
  const [pwdErrorLength, setPwdErrorLength] = useState(true);
  const [pwdValidError, setPwdValidError] = useState(true);
  const [nameErrorKorean, setNameErrorKorean] = useState(true);
  const [nicknameError, setNicknameError] = useState(true);
  const [pNumberError, setPNumberError] = useState(true);
  const [emailError, setEmailError] = useState(true);

  // Validation 영역

  // id 검사
  const onChangeId = (e) => {
    const cur = e.target.value;
    if (!isAlphanumeric(cur)) {
      setIdErrorAlpha(true);
    } else setIdErrorAlpha(false);
    if (!isLength(cur, { min: 4, max: 16 })) {
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
    const nicknameReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;

    if (!nicknameReg.test(cur)) setNicknameError(true);
    else setNicknameError(false);

    setNickname(cur);
  };

  const onChangeGender = (e) => {
    // const cur = e.target.value;
    // console.log("성별", cur);
    setGender(e.target.value);
  };

  const onChangeBirthDay = (e) => {
    // const cur = e.target.value;
    // console.log("생년월일", cur);
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

  //

  // 폼 제출전 확인 메서드

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
    else return true;
  };

  const onSubmit = (e) => {
    if (!validation()) {
      alert("회원가입 조건에 맞추어 다시 입력해주세요.");
      return;
    }

    // API Call
    alert("회원가입에 성공하셨습니다.");
  };

  return (
    <div>
      <div className={styles.loginFormDiv}>
        <form method="POST">
          <h1>회원 가입</h1>
          <h3>아이디</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="text"
              required
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={onChangeId}
            />
            {!idErrorLength && !idErrorAlpha && id && (
              <div className={styles.correctInput}>
                🟢&nbsp;올바른 입력입니다.
              </div>
            )}
            {idErrorLength && id && (
              <div className={styles.invalidInput}>
                ❌&nbsp;아이디는 4자 이상 16자 이하으로 되어있어야 합니다.
              </div>
            )}
            {idErrorAlpha && id && (
              <div className={styles.invalidInput}>
                ❌&nbsp;영문자 및 숫자로만 이루어져야 합니다.
              </div>
            )}
          </div>
          <h3>비밀번호</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="password"
              required
              placeholder="비밀번호를 입력하세요"
              value={pwd}
              onChange={onChangePwd}
            />
            {!pwdErrorLength && !pwdErrorSpecial && pwd && (
              <div className={styles.correctInput}>
                🟢&nbsp;올바른 입력입니다.
              </div>
            )}
            {pwdErrorLength && pwd && (
              <div className={styles.invalidInput}>
                ❌&nbsp;비밀번호는 8자 이상 16자 이하으로 구성되어야 합니다.
              </div>
            )}
            {pwdErrorSpecial && pwd && (
              <div className={styles.invalidInput}>
                ❌&nbsp;하나 이상의 문자, 하나의 숫자 및 하나의 특수 문자를
                포함해야합니다.
              </div>
            )}
          </div>
          <h3>비밀번호 확인</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="password"
              required
              placeholder="비밀번호를 다시 한번 입력하세요"
              value={pwdValid}
              onChange={onChangePwdValid}
            />
            {!pwdValidError && pwdValid && (
              <div className={styles.correctInput}>
                🟢&nbsp;비밀번호가 일치합니다.
              </div>
            )}
            {pwdValidError && pwdValid && (
              <div className={styles.invalidInput}>
                ❌&nbsp;비밀번호와 일치하지 않습니다. 확인해주세요
              </div>
            )}
          </div>
          <h3>이름</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="text"
              required
              placeholder="이름을 입력하세요"
              value={name}
              onChange={onChangeName}
            />
            {!nameErrorKorean && name && (
              <div className={styles.correctInput}>
                🟢&nbsp;올바른 입력입니다.
              </div>
            )}
            {nameErrorKorean && name && (
              <div className={styles.invalidInput}>
                ❌&nbsp;이름은 한글로 1~5자까지 입력가능합니다.
              </div>
            )}
          </div>
          <h3>닉네임</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="text"
              required
              placeholder="닉네임을 입력하세요"
              value={nickname}
              onChange={onChangeNickname}
            />
          </div>
          {!nicknameError && nickname && (
            <div className={styles.correctInput}>
              🟢&nbsp;올바른 입력입니다.
            </div>
          )}
          {nicknameError && nickname && (
            <div className={styles.invalidInput}>
              ❌&nbsp;닉네임은 한글,영어,숫자(최대10자) 이루어져야합니다.
            </div>
          )}
          <h3>성별</h3>
          <div className={styles.loginInputDiv}>
            <select
              name="gender"
              id="genderSelect"
              required
              value={gender}
              onChange={onChangeGender}
            >
              <option value="">성별을 선택해주세요</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>
          <h3>생년월일</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="date"
              required
              value={birthDay}
              onChange={onChangeBirthDay}
            />
          </div>
          <h3>전화번호</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="tel"
              required
              placeholder="전화번호를 입력하세요"
              value={pNumber}
              onChange={onChangePNumber}
            />
            {!pNumberError && pNumber && (
              <div className={styles.correctInput}>
                🟢&nbsp;올바른 입력입니다.
              </div>
            )}
            {pNumberError && pNumber && (
              <div className={styles.invalidInput}>
                ❌&nbsp; 번호 숫자만 입력해주세요.
              </div>
            )}
          </div>
          <h3>이메일</h3>
          <div className={styles.loginInputDiv}>
            <input
              type="email"
              required
              placeholder="이메일 주소를 입력하세요"
              value={email}
              onChange={onChangeEmail}
            />
            <div className={styles.emailConfirm}>
              <button className={styles.confirmBtn}>인증하기</button>
            </div>
            {!emailError && email && (
              <div className={styles.correctInput}>
                🟢&nbsp;올바른 입력입니다.
              </div>
            )}
            {emailError && email && (
              <div className={styles.invalidInput}>
                ❌&nbsp; 이메일 형식대로 입력해주세요.
              </div>
            )}
          </div>
          <div className={styles.loginBtnDiv}>
            <button onClick={onSubmit}>회원가입</button>
            {/*button으로 감싸서 잘못 클릿하면 submit 됨 해결해야함 */}
            <button>{/*<Link to={"/login"}>취소</Link>*/}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
