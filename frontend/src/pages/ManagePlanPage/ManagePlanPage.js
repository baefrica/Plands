import { useState } from "react";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import AddPlanBtn from "components/plancard/AddPlanBtn";
import PlanCard from "components/plancard/PlanCard";

const ManagePlanPage = () => {
  const [uuidList, setUuidList] = useState();

  return (
    <div>
      <Header />
      <Nav />
      <PlanCard />
      <AddPlanBtn />
    </div>
  );
};

export default ManagePlanPage;
