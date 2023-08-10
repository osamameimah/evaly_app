import React from "react";
import Styled from "../../assets/css/style.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { TransactionActions } from "../../redux/transaction-slice";
// import { CustomerActions } from "../../redux/customer-slice";
import { OrderSliceActions } from "../../redux/order-slice";
// import { ProductActions } from "../../redux/product-slice";
// import { CategoryActions } from "../../redux/category-slice";
import { AdminActions, filterSearchAdmin } from "../../redux/admin-slice";
// import { CouponActions } from "../../redux/coupon-slice";
import { filterSearchProduct } from "../../redux/product-slice";
import { filterSearchTransaction } from "../../redux/transaction-slice";
import { filterSearchCategory } from "../../redux/category-slice";
import { filterSearchCoupon } from "../../redux/coupon-slice";
import { filterSearchCustomer } from "../../redux/customer-slice";

const Search = ({ placeholder, imageSrc, padding, name }) => {
  const dispatch = useDispatch();

  const onSearchChangeHandler = (event) => {
    name == "transaction"
      ? dispatch(filterSearchTransaction(event.target.value))
      : name == "customer"
      ? dispatch(filterSearchCustomer(event.target.value))
      : name == "product"
      ? dispatch(filterSearchProduct(event.target.value))
      : name == "order"
      ? dispatch(OrderSliceActions.filterBySearch(event.target.value))
      : name == "categories"
      ? dispatch(filterSearchCategory(event.target.value))
      : name == "coubon"
      ? dispatch(filterSearchCoupon(event.target.value))
      // : dispatch(AdminActions.filterBySearch(event.target.value));
      : dispatch(filterSearchAdmin(event.target.value));

  };

  return (
    <div className={Styled.search}>
      <input
        type="search"
        style={{ padding: padding }}
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
      <div>
        <img src={imageSrc} alt="Search Icon" />
      </div>
    </div>
  );
};

export default Search;
