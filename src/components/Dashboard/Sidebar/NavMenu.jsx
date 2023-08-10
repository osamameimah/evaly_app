import { NavLink } from "react-router-dom";
import Styled from "../../../assets/css/style.module.css";
import OrderIcon from "../../../assets/images/shopping-cart.svg";
import Customer from "../../../assets/images/users.svg";
import Coupon from "../../../assets/images/ticket.svg";
import Category from "../../../assets/images/circle-square.svg";

import Transaction from "../../../assets/images/file-text.svg";
import Brand from "../../../assets/images/star (1).svg";
import Dashboard from "../../../assets/images/smart-home.svg";
import AddProducts from "../../../assets/images/circle-plus.svg";
import Products from "../../../assets/images/box.svg";
import Admin from "../../../assets/images/user-circle.svg";

const Nav = [
  [
    {
      title: "MAIN MENU",
    },
    {
      link: "/dashboard/order",
      icon: OrderIcon,
      text: "Order Management",
    },
    {
      link: "/dashboard/customer",
      icon: Customer,
      text: "Customers",
    },
    {
      link: "/dashboard/coupon",
      icon: Coupon,
      text: "Coupon Code",
    },
    {
      link: "/dashboard/categories",
      icon: Category,
      text: "Categories",
    },

    {
      link: "/dashboard/transaction",
      icon: Transaction,
      text: "Transaction",
    },

    {
      link: "/dashboard/brand",
      icon: Brand,
      text: "Brand",
    },

    {
      link: "/",
      icon: Dashboard,
      text: "Dashboard",
    },
  ],
  [
    {
      title: "PRODUCTS",
    },
    {
      link: "/dashboard/add-product",
      icon: AddProducts,
      text: "Add Products",
    },
    {
      link: "/dashboard/products",
      icon: Products,
      text: "Product List",
    },
  ],
  [
    {
      title: "ADMIN",
    },
    {
      link: "/dashboard/admin",
      icon: Admin,
      text: "Manage Admins",
    },
    // {
    //   link: "/dashboard/admin-roles",
    //   icon: "/images/settings.svg",
    //   text: "Admin Roles",
    // },
  ],
];

const NavMenu = ({ open }) => {
  return (
    <>
      <div className={Styled.sidebar_body}>
        <ul>
          {Nav.map((section, index) => (
            <>
              {section[0].title && (
                <li
                  className={Styled.text}
                  style={{ display: open ? "" : "none" }}
                >
                  {section[0].title}
                </li>
              )}
              {section.slice(1).map((item, i) => (
                <li key={i}>
                  <NavLink
                    className={(props) =>
                      props.isActive
                        ? `${Styled.unactive} ${Styled.active}`
                        : Styled.unactive
                    }
                    aria-current="page"
                    to={item.link}
                  // end
                  >
                    <img src={item.icon} alt="Shopping Cart" />
                    <span style={{ display: open ? "" : "none" }}>
                      {item.text}
                    </span>
                  </NavLink>
                </li>
              ))}
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavMenu;
