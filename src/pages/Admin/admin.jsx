import Header from "../../components/Dashboard/Layout/Header/Header";
import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import srh from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Dashboard/Button";
import HeaderTable from "../../components/Dashboard/HeaderTable";

const Admin = () => {
  return (
    <>
      <Header headerName="Admin" />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="Search..."
          imageSrc={srh}
          padding="8px 16px"
          name="admin"
        />
        <Link to="/dashboard/admin/add">
 
          <Button
            text="Add Admin"
            type="submit" 
            padding="10px"
          />
        </Link>
      </div> */}

      <HeaderTable placeholder="Search..." nameSearch="Admin" textButton="Add Admin" LinkTo="/dashboard/admin/add" />

      <Pagination type="admin" />
    </>
  );
};

export default Admin;
