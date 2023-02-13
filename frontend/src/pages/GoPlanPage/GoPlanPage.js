import TravelPlanTemplate from "components/collaborative/TravelPlanTemplate";
import { useState } from "react";
import VideoSpace from "components/collaborative/VideoSpace";
import GoPlanHeader from "components/collaborative/GoPlanHeader";
import * as S from "./GoPlanPage.style";
import SideNav from "components/collaborative/SideNav";
import { useParams } from "react-router-dom";

const GoPlanPage = () => {
  const { uuid, title, nickName } = useParams();
  return (
    <div className="App">
      <S.MainContent>
        <S.StickySpace>
          <GoPlanHeader title={title} />
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
