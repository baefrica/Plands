import TravelPlanTemplate from "components/collaborative/TravelPlanTemplate";
import { useState } from "react";
import VideoSpace from "components/collaborative/VideoSpace";
import GoPlanHeader from "components/collaborative/GoPlanHeader";
import * as S from "./GoPlanPage.style";
import SideNav from "components/collaborative/SideNav";

function App() {
  const [input, setInput] = useState("");
  const [room, setRoom] = useState("");

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnClick = () => {
    setRoom(input);
  };

  return (
    <div className="App">
      <input value={input} onChange={handleOnChange} />
      <button onClick={handleOnClick}>입장</button>

      {room && (
        <S.MainContent>
          <S.StickySpace>
            <GoPlanHeader />
            <VideoSpace
              mySessionId={room}
              myUserName={"Participant" + Math.floor(Math.random() * 100)}
            />
          </S.StickySpace>
          <S.ContentSpace>
            <TravelPlanTemplate room={room} />
            <SideNav />
          </S.ContentSpace>
        </S.MainContent>
      )}
    </div>
  );
}

export default App;
