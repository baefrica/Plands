import Nav from "../../components/nav/Nav";
import HAN from "assets/images/HAN.jpg";
import JIN from "assets/images/JIN.PNG";
import HAK from "assets/images/HAK.jpg";
import CHAN from "assets/images/CHAN.jpg";
import MIN from "assets/images/MIN.jpg";
import * as S from "./AboutPage.style";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <S.Container>
        <S.Table>
          <S.Tr>
            <S.ProfileTd>
              <S.ProfileImg src={HAN} alt="HAN" />
            </S.ProfileTd>
            <S.Info>팀장 FE 김성한</S.Info>
            <S.InfoDetail>역할</S.InfoDetail>
          </S.Tr>
          <S.Tr>
            <S.ProfileTd>
              <S.ProfileImg src={HAK} alt="HAK" />
            </S.ProfileTd>
            <S.Info>팀원 BE 이상학</S.Info>
            <S.InfoDetail>역할</S.InfoDetail>
          </S.Tr>
          <S.Tr>
            <S.ProfileTd>
              <S.ProfileImg src={JIN} alt="JIN" />
            </S.ProfileTd>
            <S.Info>팀원 BE 김소진</S.Info>
            <S.InfoDetail>역할</S.InfoDetail>
          </S.Tr>
          <S.Tr>
            <S.ProfileTd>
              <S.ProfileImg src={CHAN} alt="CHAN" />
            </S.ProfileTd>
            <S.Info>팀원 FE 배성찬</S.Info>
            <S.InfoDetail>역할</S.InfoDetail>
          </S.Tr>
          <S.Tr>
            <S.ProfileTd>
              <S.ProfileImg src={MIN} alt="MIN" />
            </S.ProfileTd>
            <S.Info>팀원 BE 김경민</S.Info>
            <S.InfoDetail>역할</S.InfoDetail>
          </S.Tr>
        </S.Table>
      </S.Container>
    </div>
  );
};

export default AboutPage;
