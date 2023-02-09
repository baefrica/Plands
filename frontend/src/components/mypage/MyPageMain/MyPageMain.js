import { useEffect, useState } from "react";
import { Container, Form, Label } from "./MyPageMain.style";
import axios from "axios";
import { useSelector } from "react-redux";

const MyPageMain = () => {
  const URL = "http://localhost:9999/beakgu/member";

  const [id, setId] = useState();
  const [name, setName] = useState();
  const [nickName, setNickName] = useState();
  const [gender, setGender] = useState();
  const [birthDay, setBirthDay] = useState();
  const [pNumber, setPNumber] = useState();
  const [email, setEmail] = useState();

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  axios({
    url: URL,
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

  return (
    <Container>
      <Form>
        <Label>
          <label>아이디</label>
          <input type="text" value={id} disabled />
        </Label>
        <Label>
          <label>이름</label>
          <input type="text" value={name} disabled />
        </Label>
        <Label>
          <label>닉네임</label>
          <input type="text" value={nickName} disabled />
        </Label>
        <Label>
          <label>성별</label>
          <input type="text" value={gender} disabled />
        </Label>
        <Label>
          <label>생년월일</label>
          <input type="text" value={birthDay} disabled />
        </Label>
        <Label>
          <label>전화번호</label>
          <input type="text" value={pNumber} disabled />
        </Label>
        <Label>
          <label>이메일</label>
          <input type="text" value={email} disabled />
        </Label>
      </Form>
    </Container>
  );
};

export default MyPageMain;
