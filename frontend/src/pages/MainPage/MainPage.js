import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Carousel from "components/main/carousel/Carousel";
<<<<<<< HEAD
import * as S from "./MainPage.style";
import ServiceInfo from "components/main/serviceInfo/ServiceInfo";
import SideNavMain from "components/SideNavForMain/SideNavMain";

/*
=======
import ServiceInfo from "components/main/serviceInfo/ServiceInfo";

function MainPage() {
  return (
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051
    <div>
      <Header />
      <Nav />
      <Carousel />
      <ServiceInfo />
    </div>
<<<<<<< HEAD

*/
const MainPage = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <S.InfoWrapper>
        <ServiceInfo />
        <SideNavMain />
      </S.InfoWrapper>
    </div>
  );
};
=======
  );
}
>>>>>>> 57b61a95181248a06208e8334d7cd8172cb6f051

export default MainPage;
