import * as S from "./GoPlanHeader.style";
import { Link } from "react-router-dom";
const GoPlanHeader = () => {
  const handlePDFOnClick = () => {
    alert("아직 제공되지 않는 기능입니다.");
  };
  return (
    <>
      <S.HeaderWrapper>
        <Link to="/">
          <S.QuitButton>나가기</S.QuitButton>
        </Link>
        <S.ShareButton>링크 공유</S.ShareButton>
        <S.PDFButton onClick={handlePDFOnClick}>PDF 다운로드 받기</S.PDFButton>
      </S.HeaderWrapper>
    </>
  );
};

export default GoPlanHeader;
