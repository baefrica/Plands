import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Carousel from "components/main/carousel/Carousel";
import {
  Container,
  Slide,
  Page,
  Side,
  Cont,
} from "./MainPage.style";
import ServiceInfo from "components/main/serviceInfo/ServiceInfo";
import ServiceEx from "components/main/serviceEx/ServiceEx";
import ServiceResult from "components/main/serviceResult/ServiceResult";
import ServiceShare from "components/main/serviceShare/ServiceShare";
import SideBar1 from "components/main/side/SideBar1";
import SideBar2 from "components/main/side/SideBar2";
import SideBar3 from "components/main/side/SideBar3";
import SideBar4 from "components/main/side/SideBar4";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Container>
        <Carousel />

        <Slide>
          
          <Cont>
            <Page>
              <ServiceInfo />      
            </Page>
            <Page>
              <ServiceEx />
            </Page>
            <Page>
              <ServiceResult />
            </Page>
            <Page>
              <ServiceShare />
            </Page>
          </Cont>

          <Side>
            <SideBar1 />
            <SideBar2 />
            <SideBar3 />
            <SideBar4 />
          </Side>
          
        </Slide>  
      </Container>            

      
    </div>
  );
};

export default MainPage;
