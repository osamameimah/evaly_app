import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "./transaction.module.css";

import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import srh from "../../assets/images/search.svg";
 import CustomDrop from "../../components/Dashboard/CustomDrop";
const Transaction = () => {
  const Data = [
    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },

    {
      item1: "#5089",
      item2: "Joseph Wheeler",
      item3: "6 April, 2023",
      item4: "$2,564",
      item5: "CC",
      item6: "Pending",
      item7: "View Details",
    },
  ];
  const option = ["Id", "Total"];

  return (
    <>
      <Header headerName="Transaction" />
      {/* <div className={Style.search}> */}
      <div className={Style.searchAndFilter}>
        <Search placeholder="Search..." imageSrc={srh} padding="8px 16px"  name ="transaction"/>
        <CustomDrop
          width="199px"
          Option={option}
          height="40px"
          placeHolder=" date range"
          backgroundColor="#fff"
          start="Filter By :"
        />
      </div>
      <Pagination  type="transaction" />
    </>
  );
};

export default Transaction;
