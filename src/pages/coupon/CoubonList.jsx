import { Link } from "react-router-dom";
import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "./Coubon.module.css";
import Button from "../../components/Dashboard/Button";
import Search from "../../components/Dashboard/Search";
import Pagination from "../../components/Dashboard/Pagination";
import srh from "../../assets/images/search.svg";
import HeaderTable from "../../components/Dashboard/HeaderTable";

const CoubonList = () => {
  return (
    <>
      <Header headerName="Coubon" />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="Search..."
          imageSrc={srh}
          padding="8px 16px"
          name="coubon"
        />
        <Link to="/dashboard/coupon/add">


          <Button
            text="Add Coubon"
            type="submit"
            padding="10px"
          />
        </Link>
      </div> */}

<HeaderTable placeholder="Search..." nameSearch="coubon" textButton="Add Coubon" LinkTo="/dashboard/coupon/add"/>

      <Pagination type="coubon" />
    </>
  );
};

export default CoubonList;
