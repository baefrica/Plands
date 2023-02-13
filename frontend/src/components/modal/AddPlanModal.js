import { useState } from "react";
import * as S from "./AddPlanModal.style";
import { createPlan } from "utils/api/planApi";
import { useNavigate } from "react-router-dom";
const AddPlanModal = ({ accessToken, setModalToggle }) => {
  const [planName, setPlanName] = useState("");
  const navigate = useNavigate();

  const handleAddOnClick = (event) => {
    createPlan(accessToken, {
      title: planName,
    }).then((res) => console.log(res.data));
    // .then(
    //     navigate(`/goplan/${uuid}/${title}`);
    // );
  };

  const handleCanCelOnClick = () => {
    setModalToggle(false);
  };

  return (
    <S.ModalWrapper>
      <S.ModalFormDiv>
        <S.CustomH1>여행 계획 생성</S.CustomH1>
        <S.CustomHr />
        <S.CustomH1>여행 제목</S.CustomH1>
        <S.CustomInput
          type="text"
          value={planName}
          onChange={(event) => setPlanName(event.target.value)}
        />
        <S.ButtonDiv>
          <S.AddButton onClick={handleAddOnClick}>추가</S.AddButton>
          <S.CancelButton onClick={handleCanCelOnClick}>취소</S.CancelButton>
        </S.ButtonDiv>
      </S.ModalFormDiv>
    </S.ModalWrapper>
  );
};

export default AddPlanModal;
