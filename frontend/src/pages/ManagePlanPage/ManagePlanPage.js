import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import PlanCard from "components/plancard/PlanCard";
import * as S from "./ManagePlanPage.style";
import { useNavigate } from "react-router-dom";
import { getPlanList, createPlan } from "utils/api/planApi";
import Swal from "sweetalert2";
import AddPlanModal from "components/modal/AddPlanModal";

const ManagePlanPage = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  const [planList, setPlanList] = useState([]);
  const [modalToggle, setModalToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      Swal.fire({
        title: "접근 제한",
        text: "로그인 해주세요",
        icon: "error",
        confirmButtonText: "확인",
        timer: 1000,
      }).then(() => navigate("/login"));
    } else {
      getPlanList(accessToken, 0, 6).then((res) => setPlanList(res.data));
    }
  });

  const handleAddPlanButton = () => {
    // 모달창 띄우고 해당 모달창에서 입력받은 제목으로 생성
    // createPlan()
    setModalToggle(!modalToggle);
  };

  return (
    <>
      {modalToggle && (
        <AddPlanModal
          accessToken={accessToken}
          setModalToggle={setModalToggle}
        />
      )}
      <Header />
      <Nav />
      <S.ContentWrapper>
        <S.PlanListHeader>
          <S.PlanAddButton onClick={handleAddPlanButton}>
            여행계획 추가하기
          </S.PlanAddButton>
        </S.PlanListHeader>
        <S.PlanListWrapper>
          {planList.map((item) => (
            <PlanCard item={item} />
          ))}
        </S.PlanListWrapper>
        <S.PlanListFooter></S.PlanListFooter>
      </S.ContentWrapper>
    </>
  );
};

export default ManagePlanPage;
