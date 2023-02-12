import { useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import PlanCard from "components/plancard/PlanCard";
import * as S from "./ManagePlanPage.style";
import axios from "axios";

const URL = "http://localhost:9999/baekgu";

const ManagePlanPage = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });
  const [planList, setPlanList] = useState(() => {
    axios({
      url: `${URL}/plan`,
      method: "get",
      headers: {
        "X-AUTH-TOKEN": accessToken,
      },
    }).then((res) => {
      console.log(res.data);
    });
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
