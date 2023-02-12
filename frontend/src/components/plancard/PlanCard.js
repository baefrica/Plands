import * as S from "./PlanCard.style";

function PlanCard({ uuid, travelTitle }) {
  return (
    <S.PlanWrapper>
      <S.PlanCardHeader></S.PlanCardHeader>
      <S.PlanCardBody></S.PlanCardBody>
      <S.PlanCardFooter>
        <S.PlanTitle>우주 여행</S.PlanTitle>
      </S.PlanCardFooter>
    </S.PlanWrapper>
  );
}

export default PlanCard;
