import { useState } from "react";
import { Tab } from "@headlessui/react";
import Styled from "../../assets/css/style.module.css";
import Styles from "../../pages/OrderManagement/OrderManagement.module.css";
import CustomDrop from "./CustomDrop";
import Search from "./Search";
import srh from "../../assets/images/search.svg";
import Pagination from "./Pagination";
import { useSelector } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {

  const [categories] = useState({
    Pending: [

    ],
    Confirmed: [

    ],
    Processing: [

    ],

    Picked: [
    ],

    Shipped: [
    ],

    Delivered: [
    ],

    Cancelled: [
    ],
  });

  const option = ["Id", "Total"];

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className={Styled.tabList} style={{overflowX:"auto"}}>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  Styled.tab,
                  selected
                    ? Styled.selected
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>

        <div className={Styled.Headertapes} style={{}}>
          <Search placeholder="Search..." imageSrc={srh} padding="8px 16px" name="order" />
          <CustomDrop
            width="199px"
            Option={option}
            // height="30px"
            placeHolder=" date range"
            backgroundColor="#fff"
            start="Filter By :"
          />
        </div>

        <Tab.Panels className={Styled.tabPanels}>
          <Tab.Panel className={Styled.tabPanel}>
            <Pagination type="order" />
          </Tab.Panel>


        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
