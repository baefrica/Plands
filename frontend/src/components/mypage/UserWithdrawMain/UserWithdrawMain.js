import {
  Container,
  Form,
  Label,
  WithdrawBtn,
} from "./UserWithdrawMain.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WITH_DRAW } from "store/slice/userSlice";
import { deleteMember } from "utils/api/sessionApi";

const UserWithdrawMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  const onClickWithdrawBtn = () => {
    // 회원탈퇴 요청
    deleteMember(accessToken)
      .then((res) => {
        alert("성공적으로 회원탈퇴하였습니다.");
        dispatch(WITH_DRAW());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Form>
        <Label>회원 탈퇴를 도와드릴까요?</Label>
        <WithdrawBtn onClick={onClickWithdrawBtn}>
          회원 탈퇴
        </WithdrawBtn>
      </Form>
    </Container>
  );
};

export default UserWithdrawMain;
