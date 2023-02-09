import {
  Container,
  Form,
  Label,
  ButtonDiv,
  CancelBtn,
  ChangeBtn,
} from "./PasswordChangeMain.style";

const PasswordChangeMain = () => {
  return (
    <Container>
      <Form>
        <Label id="nowPw">
          <label>현재 비밀번호</label>
          <input type="password" />
        </Label>
        <Label>
          <label>신규 비밀번호</label>
          <input type="password" />
        </Label>
        <Label>
          <label>신규 비밀번호 확인</label>
          <input type="password" />
        </Label>
        <ButtonDiv>
          <CancelBtn to="/mypage">취소</CancelBtn>
          <ChangeBtn to="/mypage">완료</ChangeBtn>
        </ButtonDiv>
      </Form>
    </Container>
  );
};

export default PasswordChangeMain;
