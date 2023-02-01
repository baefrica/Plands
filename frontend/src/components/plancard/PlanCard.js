import {
  PlanWrapper,
  PlanCardHeader,
  PlanCardBody,
  PlanCardFooter,
} from "./PlanCard.style";

function PlanCard() {
  return (
    <PlanWrapper>
      <PlanCardHeader>여행 계획 카드</PlanCardHeader>
      <PlanCardBody>여행계획바디</PlanCardBody>
      <PlanCardFooter>여행 계획 푸터</PlanCardFooter>
    </PlanWrapper>
  );
}

export default PlanCard;
