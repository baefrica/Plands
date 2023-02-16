<<<<<<< HEAD
import { useEffect, useState } from "react";
import * as T from "../table.style/table.style";
import * as S from "./MyPageMain.style";
import { useSelector } from "react-redux";
import { getMemberDetail } from "utils/api/memberApi";

const MyPageMain = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [pNumber, setPNumber] = useState("");
  const [email, setEmail] = useState("");

  const [genderKor, setGenderKor] = useState("");
  useEffect(() => {
    if (gender === "M") {
      setGenderKor("남성");
    } else {
      setGenderKor("여성");
    }
  }, [gender]);

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  useEffect(() => {
    getMemberDetail(accessToken).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setNickName(res.data.nickname);
      setGender(res.data.gender);
      setBirthDay(res.data.birthDay);
      setPNumber(res.data.pnumber);
      setEmail(res.data.email);
    });
  }, [accessToken]);

  return (
    <S.Container>
      <T.table>
        <T.tr>
          <T.td>
            <label>ID</label>
          </T.td>
          <T.td>
            <input type="text" value={id} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>NAME</label>
          </T.td>
          <T.td>
            <input type="text" value={name} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>NICKNAME</label>
          </T.td>
          <T.td>
            <input type="text" value={nickName} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>GENDER</label>
          </T.td>
          <T.td>
            <input type="text" value={genderKor} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>BIRTHDAY</label>
          </T.td>
          <T.td>
            <input type="text" value={birthDay} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>PHONE NUMBER</label>
          </T.td>
          <T.td>
            <input type="text" value={pNumber} disabled />
          </T.td>
        </T.tr>
        <T.tr>
          <T.td>
            <label>EMAIL</label>
          </T.td>
          <T.td>
            <input type="text" value={email} disabled />
          </T.td>
        </T.tr>
      </T.table>
    </S.Container>
  );
};
=======
import { Container, Form, Label } from "./MyPageMain.style";

function MyPageMain() {
  return (
    <Container>
      <Form>
        <Label>
          <label>아이디</label>
          <input type="text" value="plands" disabled />
        </Label>
        <Label>
          <label>이름</label>
          <input type="text" value="손흥민" disabled />
        </Label>
        <Label>
          <label>닉네임</label>
          <input type="text" value="플랜즈" disabled />
        </Label>
        <Label>
          <label>성별</label>
          <input type="text" value="남" disabled />
        </Label>
        <Label>
          <label>생년월일</label>
          <input type="text" value="960320" disabled />
        </Label>
        <Label>
          <label>전화번호</label>
          <input type="text" value="01073297703" disabled />
        </Label>
        <Label>
          <label>이메일</label>
          <input
            type="text"
            value="scbsoccer@naver.com"
            disabled
          />
        </Label>
      </Form>
    </Container>
  );
}
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default MyPageMain;
