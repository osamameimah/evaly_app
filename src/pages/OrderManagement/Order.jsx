import Header from "../../components/Dashboard/Layout/Header/Header";
import Tabs from "../../components/Dashboard/Tabs";

import Pagination from "../../components/Dashboard/Pagination";
import Search from "../../components/Dashboard/Search";
import srh from "../../assets/images/search.svg";
import CustomDrop from "../../components/Dashboard/CustomDrop";
import Style from "../../assets/css/style.module.css";

const Order = () => {
  const option = ["Id", "Total"];

  const Data = [
    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },

    {
      item1: "#5089",
      item2: "2 min ago",
      item3: "Joseph Wheeler",
      item4: "$654",
      item5: "$154",
      item6: "Pending",
    },
  ];
  return (
    <>
      <Header headerName="Order Management" />
      <Tabs />
      {/* <div style={{display:"flex",justifyContent:"space-between"}}>
        <Search placeholder="Search..." imageSrc={srh} padding="8px 16px" name="order"/>
        <CustomDrop
          width="199px"
          Option={option}
          // height="30px"
          placeHolder=" date range"
          backgroundColor="#fff"
          start="Filter By :"
        />
      </div> */}
      {/* <Pagination Data={Data} type="order" /> */}
    </>
  );
};

export default Order;
