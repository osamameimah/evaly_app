import Style from "../../../assets/css/style.module.css";
import HomeTableBestProducts from "./HomeTableBestProducts";
import HomeTableOrder from "./HomeTableOrder";
import HomeTableTransaction from "./HomeTableTransaction";

const HomeTable = ({ nameTable }) => {
  return (
    <>
      <table className={Style.table_home}>
        {nameTable == "transaction" ? (
          <>
            <tr>
              <th>ID</th>
              <th>Issued Date</th>
              <th>Total</th>
              <th>ACTIONS</th>
            </tr>
            <HomeTableTransaction />
          </>
        ) : nameTable == "bestSelling" ? (
          <>
            <tr>
              <th>Product</th>
              <th>Total Order</th>
              <th>Status</th>
              <th>Price</th>
            </tr>
            <HomeTableBestProducts />
          </>

        ) : nameTable == "order" ? (
          <>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Total</th>
            </tr>
            <HomeTableOrder />
          </>
        ) : ""}
      </table>
    </>
  );
};

export default HomeTable;
