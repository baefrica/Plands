import { useState } from "react";
import * as S from "./PlanCard.style";

function PlanCard({ uuid, title, setDescModalToggle, setSelectedPlan }) {
  const handlePlancardOnClick = (event) => {
    // 여기서 모달 띄워서 입장 삭제 버튼 구현
    // 삭제의 경우에는 leader인 경우에만 표시
    // 입장 시에는 뒤에 uuid 붙여서 라우팅\
    setDescModalToggle(true);
    setSelectedPlan({ uuid, title });
    console.log("-------플랜입니다------", uuid);
  };
  return (
    <S.PlanWrapper onClick={handlePlancardOnClick}>
      <S.PlanCardHeader></S.PlanCardHeader>
      <S.PlanCardBody></S.PlanCardBody>
      <S.PlanCardFooter>
        <S.PlanTitle>{title}</S.PlanTitle>
      </S.PlanCardFooter>
    </S.PlanWrapper>
  );
}

export default PlanCard;
