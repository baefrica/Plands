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
import { chunk } from "utils/util/chunk";
import DescPlanModal from "components/modal/DescPlanModal";
import { getMemberDetail } from "utils/api/memberApi";
const ManagePlanPage = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });

  const [planList, setPlanList] = useState([]);
  const [addModalToggle, setAddModalToggle] = useState(false);
  const [descModalToggle, setDescModalToggle] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getMemberDetail(accessToken).then((res) => {
      setNickName(res.data.nickname);
    });
  }, []);

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
      getPlanList(accessToken, 0, 27)
        .then((res) => {
          console.log(res);
          return res;
        })
        .then((res) => {
          const divided = chunk(res.data, 3);
          setPlanList([...divided]);
        });
    }
  }, [accessToken, navigate, addModalToggle, descModalToggle]);

  const handleAddPlanButton = () => {
    // 모달창 띄우고 해당 모달창에서 입력받은 제목으로 생성
    // createPlan()
    setAddModalToggle(!addModalToggle);
  };

  const handleDescPlanButton = (event) => {
    // 모달창 띄우고 해당 모달창에서 입력받은 제목으로 생성
    // createPlan()
    console.log(event.target);
    setSelectedPlan({});
    setDescModalToggle(!descModalToggle);
  };
  return (
    <>
      {addModalToggle && (
        <AddPlanModal
          accessToken={accessToken}
          setAddModalToggle={setAddModalToggle}
        />
      )}
      {descModalToggle && (
        <DescPlanModal
          uuid={selectedPlan.uuid}
          title={selectedPlan.title}
          nickName={nickName}
          accessToken={accessToken}
          setDescModalToggle={setDescModalToggle}
        />
      )}
      <Nav />
      <S.ContentWrapper>
        <S.PlanListHeader>
          <S.PlanAddButton onClick={handleAddPlanButton}>
            여행계획 추가하기
          </S.PlanAddButton>
        </S.PlanListHeader>
        <S.PlanListWrapper>
          {planList.map((items) => (
            <S.ItemWrapper>
              {items.map((item) => (
                <PlanCard
                  uuid={item.code}
                  title={item.title}
                  setDescModalToggle={setDescModalToggle}
                  setSelectedPlan={setSelectedPlan}
                />
              ))}
            </S.ItemWrapper>
          ))}
        </S.PlanListWrapper>
        <S.PlanListFooter></S.PlanListFooter>
      </S.ContentWrapper>
    </>
  );
};

export default ManagePlanPage;
