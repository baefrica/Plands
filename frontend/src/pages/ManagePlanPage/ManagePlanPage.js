import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import PlanCard from "components/plancard/PlanCard";
import * as S from "./ManagePlanPage.style";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManagePlanPage = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      Swal.fire({
        title: "Error!",
        text: "로그인을 해주세요",
        icon: "error",
        confirmButtonText: "확인",
        timer: 1000,
      }).then(navigate("/login"));
    }
  });

  const [planList, setPlanList] = useState();
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
