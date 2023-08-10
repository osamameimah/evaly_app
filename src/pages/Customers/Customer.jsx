import Header from "../../components/Dashboard/Layout/Header/Header";
import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import Style from "./Customer.module.css";
import srh from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Dashboard/Button";
import HeaderTable from "../../components/Dashboard/HeaderTable";

const Customer = () => {
 
  return (
    <>
      <Header headerName="Customer" />
      
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="Search..."
          imageSrc={srh}
          padding="8px 16px"
          name="customer"
        />
        <Link to="/dashboard/customer/add">
          <Button
            text="Add Customer"
            padding="10px"
          />
        </Link>
      </div> */}

      <HeaderTable placeholder="Search..." nameSearch="customer" textButton="Add Customer" LinkTo="/dashboard/customer/add"/>
      <Pagination type="customer" />
    </>
  );
};

export default Customer;
