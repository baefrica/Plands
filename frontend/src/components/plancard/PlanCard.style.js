import styled from "styled-components";

export const PlanWrapper = styled.div`
  width: 350px;
  height: 300px;
  border-radius: 15px;
  background: linear-gradient(
    180deg,
    #fcfcfc 71.87%,
    rgba(0, 0, 0, 0.6) 79.17%
  );
  box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.25);
`;

export const PlanCardHeader = styled.div`
  border-radius: 15px 15px 0 0;
  height: 23%;
  text-align: center;
`;

export const PlanCardBody = styled.div`
  height: 54%;
  text-align: center;
`;

export const PlanCardFooter = styled.div`
  border-radius: 0 0 15px 15px;
  height: 23%;
  text-align: center;
`;

export const PlanTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
`;
