import {
  PlanWrapper,
  PlanCardHeader,
  PlanCardBody,
  PlanCardFooter,
  PlanTitle,
} from "./PlanCard.style";

function PlanCard() {
  return (
    <PlanWrapper>
      <PlanCardHeader></PlanCardHeader>
      <PlanCardBody></PlanCardBody>
      <PlanCardFooter>
        <PlanTitle>우주 여행</PlanTitle>
      </PlanCardFooter>
    </PlanWrapper>
  );
}

export default PlanCard;
