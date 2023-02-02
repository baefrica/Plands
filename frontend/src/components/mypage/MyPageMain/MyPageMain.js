import { Link } from "react-router-dom";
import { Container, Label } from "./MyPageMain.style";

function MyPageMain() {
  return (
    <div>
      <Container>
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
      </Container>
    </div>
  );
}

export default MyPageMain;
