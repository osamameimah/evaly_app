import Header from "../../components/Dashboard/Layout/Header/Header";
import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import Styled from "./Product.module.css";
import srh from "../../assets/images/search.svg";

const Products = () => {
  return (
    <>
      <Header headerName="Products" />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Search
          placeholder="Search..."
          imageSrc={srh}
          padding="8px 16px"
          name="product"
        />

      </div>
      <Pagination type="product" />

    </>
  )

}

export default Products;