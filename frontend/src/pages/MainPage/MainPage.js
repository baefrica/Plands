import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Carousel from "components/main/carousel/Carousel";
import ServiceInfo from "components/main/serviceInfo/ServiceInfo";

function MainPage() {
  return (
    <div>
      <Header />
      <Nav />
      <Carousel />
      <ServiceInfo />
    </div>
  );
}

export default MainPage;
