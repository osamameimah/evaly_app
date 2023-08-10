import Header from "../../components/Dashboard/Layout/Header/Header";
import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import srh from "../../assets/images/search.svg";
import { Link } from "react-router-dom";
import Button from "../../components/Dashboard/Button";
import HeaderTable from "../../components/Dashboard/HeaderTable";

const Categories = () => {
  return (
    <>
      <Header headerName="Categories" />
      {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="Search..."
          imageSrc={srh}
          padding="8px 16px"
          name="categories"
        />
        <Link to="/dashboard/categories/add">
 

          <Button
            text="Add Categories"
            type="submit"
            padding="10px"
          />
        </Link>
      </div> */}

<HeaderTable placeholder="Search..." nameSearch="categories" textButton="Add Category" LinkTo="/dashboard/categories/add"/>

      <Pagination type="categories" />
    </>
  );
};

export default Categories;
