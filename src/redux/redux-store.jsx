import { configureStore } from "@reduxjs/toolkit";
import { TransactionReducer } from "./transaction-slice";
import { CustomerReducer } from "./customer-slice";
import { OrderSliceReducer } from "./order-slice";
import { CategoryReducer } from "./category-slice";
import { AdminReducer } from "./admin-slice";
import { ProductReducer } from "./product-slice";
import { CouponReducer } from "./coupon-slice";
import { BrandReducer } from "./brand-slice";

export const reduxStore = configureStore({
  reducer: {
    transaction: TransactionReducer,
    customer: CustomerReducer,
    order: OrderSliceReducer,
    category: CategoryReducer,
    admin:AdminReducer,
    product:ProductReducer,
    coupon:CouponReducer,
    brand:BrandReducer,
  },
});
