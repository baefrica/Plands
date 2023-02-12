import { useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import AddPlanBtn from "components/plancard/AddPlanBtn";
import PlanCard from "components/plancard/PlanCard";
import * as S from "./ManagePlanPage.style";
import axios from "axios";
const ManagePlanPage = () => {
  const [planList, setPlanList] = useState(() => {
    axios.get();
  });
  const [uuidList, setUuidList] = useState();

  return (
    <>
      <Header />
      <Nav />
      <S.ContentWrapper>
        <S.PlanListHeader>
          <S.PlanAddButton>여행계획 추가하기</S.PlanAddButton>
        </S.PlanListHeader>
        <S.PlanListWrapper>
          <PlanCard />
        </S.PlanListWrapper>
        <S.PlanListFooter />
      </S.ContentWrapper>
      {/*<AddPlanBtn /> */}
    </>
  );
};

export default ManagePlanPage;
