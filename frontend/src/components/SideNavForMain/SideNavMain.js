import * as S from "./SideNavMain.style";

const SideNavMain = () => {
  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <S.SideNavWrapper>
      <S.SideNavTreeWrapper>
        <S.SideNavTree>
          <S.SideNavUl>
            <S.LineForSide />
            <S.SideNavDiv onClick={() => handleClick("serviceInfo")}>
              <li>소개</li>
            </S.SideNavDiv>
            <S.SideNavDiv onClick={() => handleClick("serviceEx")}>
              <li>예시</li>
            </S.SideNavDiv>
            <S.SideNavDiv onClick={() => handleClick("serviceResult")}>
              <li>결과</li>
            </S.SideNavDiv>
            <S.SideNavDiv onClick={() => handleClick("serviceShare")}>
              <li>공유</li>
            </S.SideNavDiv>
          </S.SideNavUl>
        </S.SideNavTree>
      </S.SideNavTreeWrapper>
    </S.SideNavWrapper>
  );
};

export default SideNavMain;
