import TravelPlanTemplate from "components/collaborative/TravelPlanTemplate";
import { useEffect, useState } from "react";
import VideoSpace from "components/collaborative/VideoSpace";
import GoPlanHeader from "components/collaborative/GoPlanHeader";
import * as S from "./GoPlanPage.style";
import SideNav from "components/collaborative/SideNav";
import { useParams } from "react-router-dom";
import SharePlanModal from "components/modal/SharePlanModal";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const GoPlanPage = () => {
  const accessToken = useSelector((state) => {
    return state.user.accessToken;
  });
  const { uuid, title, nickName } = useParams();
  const [shareModalToggle, setShareModalToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      Swal.fire({
        title: "접근 제한",
        text: "로그인 및 회원가입이 필요합니다.",
        icon: "warning",
        confirmButtonText: "확인",
        timer: 3000,
      }).then(() => navigate(`/login/${uuid}`));
    }
  });

  return (
    <div className="App">
      {shareModalToggle && (
        <SharePlanModal
          accessToken={accessToken}
          setShareModalToggle={setShareModalToggle}
          uuid={uuid}
        />
      )}
      <S.MainContent>
        <S.StickySpace>
          <GoPlanHeader
            title={title}
            setShareModalToggle={setShareModalToggle}
          />
          <VideoSpace mySessionId={uuid} myUserName={nickName} />
        </S.StickySpace>
        <S.ContentSpace>
          <TravelPlanTemplate room={uuid} />
          <SideNav />
        </S.ContentSpace>
      </S.MainContent>
    </div>
  );
};

export default GoPlanPage;
