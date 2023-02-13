import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 100%;
  height: 900px;
`;
export const PlanListWrapper = styled.div`
  margin: auto;
  border: 1px solid black;
  width: 80%;
  margin-top: 50px;
  padding: 50px;
  /* padding-left: 50px; */
`;

export const PlanListHeader = styled.div`
  width: 100%;
  height: 75px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #262e36;
  box-sizing: border-box;
`;

export const PlanListFooter = styled.div`
  width: 100%;
  height: 100px;
  border: 3px solid black;
  position: fixed;
  bottom: 0;
`;

export const PlanAddButton = styled.button`
  position: absolute;
  right: 0;
  height: 50px;

  background-color: #ef3d3d;
  color: white;
  font-weight: bold;
  padding: 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  margin-right: 50px;
  &:hover {
    cursor: pointer;
    background-color: #d83737;
  }
`;