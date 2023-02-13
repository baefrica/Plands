import {
  Container,
  Form,
  Label,
  CorrectInput,
  InvalidInput,
  ButtonDiv,
  UpdateBtn,
  CancelBtn,
} from "./UserInfoUpdateMain.style";
import { isNumeric } from "validator";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfoUpdateMain = () => {
  const URL = "http://localhost:9999/baekgu";
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  useEffect(() => {
    axios({
      url: `${URL}/member`,
      method: "get",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setNickName(res.data.nickname);
      setGender(res.data.gender);
      setBirthDay(res.data.birthDay);
      setPNumber(res.data.pnumber);
      setEmail(res.data.email);
    });
  }, [accessToken]);

  // 유효성 검사 조건들
  const [nameErrorKorean, setNameErrorKorean] =
    useState(false);
  const [nickNameError, setNickNameError] = useState(false);
  const [pNumberError, setPNumberError] = useState(false);

  // 이름 검사
  const isKorean = (txt) => {
    const nameReg = /^[가-힣]{1,5}$/;

    if (nameReg.test(txt)) {
      return true;
    } else {
      return false;
    }
  };

  const onChangeName = (e) => {
    const cur = e.target.value;

    if (!isKorean(cur)) {
      setNameErrorKorean(true);
    } else {
      setNameErrorKorean(false);
    }

    setName(cur);
  };

  // 닉네임 검사
  const onChangeNickName = (e) => {
    const cur = e.target.value;
    const nickNameReg =
      /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]{1,10}$/;

    if (!nickNameReg.test(cur)) {
      setNickNameError(true);
    } else {
      setNickNameError(false);
    }

    setNickName(cur);
  };

  // 전화번호 검사
  const onChangePNumber = (e) => {
    const cur = e.target.value;

    if (!isNumeric(cur)) {
      setPNumberError(true);
    } else {
      setPNumberError(false);
    }

    setPNumber(cur);
    console.log(pNumberError);
  };

  const validation = () => {
    if (nameErrorKorean) {
      return false;
    } else if (nickNameError) {
      return false;
    } else if (pNumberError) {
      return false;
    } else {
      return true;
    }
  };

  const onClickUpdateBtn = () => {
    console.log(pNumber);
    if (!validation()) {
      alert("조건에 맞추어 다시 입력해주세요.");
      return;
    } else {
      axios({
        url: `${URL}/member`,
        method: "put",
        headers: {
          "X-AUTH-TOKEN": accessToken,
          "Content-Type": "application/json",
        },
        // ****비밀번호를 보낼 방법???
        data: {
          name: name,
          nickname: nickName,
          gender: gender,
          birthDay: birthDay,
          pnumber: pNumber,
          // pwd: "rjqnrdl28@",
        },
      })
        .then((res) => {
          alert("회원 정보 수정이 완료되었습니다");
          navigate("/mypage");
        })
        .catch((err) => {
          console.log("수정 에러");
          console.log(err);
        });
    }
  };

  return (
    <Container>
      <Form>
        <Label>
          <label>아이디</label>
          <input type="text" value={id} disabled />
        </Label>
        <Label>
          <label>이름</label>
          <div>
            <input
              type="text"
              required
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
          </div>
        </Label>
        <Label>
          <label>닉네임</label>
          <div>
            <input
              type="text"
              required
              value={nickName}
              onChange={onChangeNickName}
            />
            {!nickNameError && nickName && (
              <CorrectInput>
                🟢&nbsp;올바른 입력입니다.
              </CorrectInput>
            )}
            {nickNameError && nickName && (
              <InvalidInput>
                ❌&nbsp;닉네임은 한글,영어,숫자(최대10자)
                이루어져야합니다.
              </InvalidInput>
            )}
          </div>
        </Label>
        <Label>
          <label>성별</label>
          <input
            type="text"
            required
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
        </Label>
        <Label>
          <label>생년월일</label>
          <input
            type="text"
            required
            value={birthDay}
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
          />
        </Label>
        <Label>
          <label>전화번호</label>
          <div>
            <input
              type="text"
              required
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
          </div>
        </Label>
        <Label>
          <label>이메일</label>
          <input type="text" value={email} disabled />
        </Label>
        <ButtonDiv>
          <UpdateBtn onClick={onClickUpdateBtn}>
            수정 완료
          </UpdateBtn>
          <CancelBtn to="/mypage">취소</CancelBtn>
        </ButtonDiv>
      </Form>
    </Container>
  );
};

export default UserInfoUpdateMain;
