import {
  Container,
  Form,
  Label,
  WithdrawBtn,
} from "./UserWithdrawMain.style";

function UserWithdrawMain() {
  return (
    <Container>
      <Form>
        <Label>회원 탈퇴를 도와드릴까요?</Label>
        <WithdrawBtn>회원 탈퇴</WithdrawBtn>
      </Form>
    </Container>
  );
}

export default UserWithdrawMain;
