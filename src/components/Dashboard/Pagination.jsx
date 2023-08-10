import React, { useState } from "react";
import Styled from "../../assets/css/style.module.css";
import arrow_left from "../../assets/images/arrow-left.svg";
import arrow_right from "../../assets/images/arrow-right.svg";
import TransTable from "./Transaction/TransTable";
import CustomerTable from "./Customer/CustomerTable";
import OrderTable from "./Order/OrderTable";
import ButtonShowing from "./ButtonShowing";
import { useSelector } from "react-redux";
import CategoryTable from "../Dashboard/Category/CategoryTable";
import AdminTable from "././Admin/AdminTable";
import ProductTable from "././Product/ProductTable";
import CoubonTable from "./Coubon/CoubonTable";

const Pagination = ({ Data, type }) => {
  const transaction = useSelector((state) => state.transaction.filteredData);
  const customer = useSelector((state) => state.customer.filteredData);
  const order = useSelector((state) => state.order.filterButton);
  const category = useSelector((state) => state.category.filteredData);
  const admin = useSelector((state) => state.admin.filteredData);
  const product = useSelector((state) => state.product.filteredData);
  const coubon = useSelector((state) => state.coupon.filteredData);

  const [postPerPage, setPostPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPost = postPerPage * currentPage;
  const firstPost = lastPost - postPerPage;
  // const postPage = transaction.slice(firstPost, lastPost);
  // const postPage =
  //   type == "transaction"
  //     ? transaction.slice(firstPost, lastPost)
  //     : type == "customer"
  //       ? customer.slice(firstPost, lastPost)
  //       : type == "order"
  //         ? order.slice(firstPost, lastPost)
  //         : type == "categories"
  //           ? category.slice(firstPost, lastPost)
  //           : type == "admin"
  //             ? admin.slice(firstPost, lastPost)
  //             : type == "product"
  //               ? product.slice(firstPost, lastPost)
  //               : type == "coubon"
  //                 ? coubon.slice(firstPost, lastPost)
  //                 : "";
  const postPage = (() => {
    switch (type) {
      case "transaction":
        return transaction.slice(firstPost, lastPost);
      case "customer":
        return customer.slice(firstPost, lastPost);
      case "order":
        return order.slice(firstPost, lastPost);
      case "categories":
        return category.slice(firstPost, lastPost);
      case "admin":
        return admin.slice(firstPost, lastPost);
      case "product":
        return product.slice(firstPost, lastPost);
      case "coubon":
        return coubon.slice(firstPost, lastPost);
      default:
        return [];
    }
  })();

  // const pageNumbers = [];


  // for (
  //   let i = 1;
  //   i <=
  //   Math.ceil(
  //     type == "transaction"
  //       ? transaction.length / postPerPage
  //       : type == "customer"
  //         ? customer.length / postPerPage
  //         : type == "order"
  //           ? order.length / postPerPage
  //           : type == "categories"
  //             ? category.length / postPerPage
  //             : type == "admin"
  //               ? admin.length / postPerPage
  //               : type == "product"
  //                 ? product.length / postPerPage
  //                 : type == "coubon"
  //                   ? coubon.length / postPerPage
  //                   : ""
  //   );
  //   i++
  // ) {
  //   pageNumbers.push(i);
  const pageNumbers = [];

  let dataLength;
  switch (type) {
    case "transaction":
      dataLength = transaction.length;
      break;
    case "customer":
      dataLength = customer.length;
      break;
    case "order":
      dataLength = order.length;
      break;
    case "categories":
      dataLength = category.length;
      break;
    case "admin":
      dataLength = admin.length;
      break;
    case "product":
      dataLength = product.length;
      break;
    case "coubon":
      dataLength = coubon.length;
      break;
    default:
      dataLength = 0;
  }

  for (let i = 1; i <= Math.ceil(dataLength / postPerPage); i++) {
    pageNumbers.push(i);
  }

  // }

  const onLoadPosts = (number) => {
    setCurrentPage(number);
  };

  const next = () => {
    if (lastPost < transaction.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (firstPost > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getTableComponent = () => {
    switch (type) {
      case "transaction":
        return <TransTable postPage={postPage} Transaction={postPage} />;
      case "customer":
        return <CustomerTable postPage={postPage} Customer={postPage} />;
      case "order":
        return <OrderTable postPage={postPage} Order={postPage} />;
      case "categories":
        return <CategoryTable postPage={postPage} Category={postPage} />;
      case "admin":
        return <AdminTable postPage={postPage} Admin={postPage} />;
      case "product":
        return <ProductTable postPage={postPage} Product={postPage} />;
      case "coubon":
        return <CoubonTable postPage={postPage} Coubon={postPage} />;
      default:
        return null;
    }
  };

  const getDataLength = () => {
    switch (type) {
      case "transaction":
        return transaction.length;
      case "customer":
        return customer.length;
      case "order":
        return order.length;
      case "categories":
        return category.length;
      case "admin":
        return admin.length;
      case "product":
        return product.length;
      case "coubon":
        return coubon.length;
      default:
        return 0;
    }
  };
  return (
    <>


      {getTableComponent()}

      <ul className={Styled.ShowingNumberAndPAgination}

      >
        <li className={Styled.ShowingNumber}

        >
          <span>Showing</span>
          {/*  */}

          <ButtonShowing setPostPerPage={setPostPerPage} />

          <span>of</span>

          <span>
            {/* {type == "transaction"
              ? transaction.length
              : type == "customer"
                ? customer.length
                : type == "order"
                  ? order.length
                  : type == "categories"
                    ? category.length
                    : type == "admin"
                      ? admin.length
                      : type == "product"
                        ? product.length
                        : type == "coubon"
                          ? coubon.length
                          : ""} */}
            {getDataLength()}
          </span>
        </li>
        <div style={{ display: "flex" }}>
          <li>
            <button className={Styled.pp} onClick={prev}>
              <img src={arrow_left} alt="Previous" />
            </button>
          </li>

          {pageNumbers.map((number, index) => (
            <a href="#" key={index} onClick={() => onLoadPosts(number)}>
              <li
                className={`${currentPage === number ? Styled.p : Styled.pp}`}
              >
                {number}
              </li>
            </a>
          ))}


          <li>
            <button className={Styled.pp} onClick={next}>
              <img src={arrow_right} alt="Next" />
            </button>
          </li>

        </div>
      </ul>
    </>
  );
};

export default Pagination;
