import Home from "../pages/Home/Home";
import Order from "../pages/OrderManagement/Order";
import Customer from "../pages/Customers/Customer";
import CustomerDetails from "../pages/Customers/CustomerDetails/CustomerDetails";
import Transaction from "../pages/Transaction/transaction";
import Coupon from "../pages/coupon/CouponAdd";
import Categories from "../pages/categories/categories";
import Brand from "../pages/Brand/brand";
import Products from "../pages/products/products";
import AddProducts from "../pages/products/Add-Products";
import Admin from "../pages/Admin/admin";
import RoleAdmin from "../pages/Admin/Role-admin";
import Profile from "../pages/Profile/Profile";
import ChangePassword from "../pages/Profile/ChangePassword";
import Notification from "../pages/Notification/Noticication";
import CustomerEdit from "../pages/Customers/CustomerEdit";
import CoubonList from "../pages/coupon/CoubonList";
import BrandEdit from "../pages/Brand/brandEdit";
import AddBrand from "../pages/Brand/addBrand";
import AddCategories from "../pages/categories/AddCategories";
import AddAdmin from "../pages/Admin/addAdmin";
import EditAdmin from "../pages/Admin/editAdmin";
import ProductEdit from "../pages/products/ProductEdit";
import EditCategory from "../pages/categories/EditCategory";
import CouponEdit from "../pages/coupon/CouponEdit";
import CustomerAdd from "../pages/Customers/CustomerAdd";
import Example from "../pages/Example";

const AppRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/dashboard/order",
    component: Order,
  },
  {
    path: "/dashboard/customer",
    component: Customer,
  },
  {
    path: "/dashboard/customer-details",
    component: CustomerDetails,
  },
  {
    path: "/dashboard/customer/add",
    component: CustomerAdd,
  },

  {
    path: "/dashboard/customer/edit/:name",
    component: CustomerEdit,
  },
  {
    path: "/dashboard/transaction",
    component: Transaction,
  },
  {
    path: "/dashboard/coupon/add",
    component: Coupon,
  },
  {
    path: "/dashboard/coupon/edit/:name",
    component: CouponEdit,
  },
  {
    path: "/dashboard/coupon",
    component: CoubonList,
  },

  {
    path: "/dashboard/categories",
    component: Categories,
  },
  {
    path: "/dashboard/categories/add",
    component: AddCategories,
  },

  {
    path: "/dashboard/categories/edit/:name",
    component: EditCategory,
  },
  {
    path: "/dashboard/brand",
    component: Brand,
  },

  {
    path: "/dashboard/brand/edit/:name",
    component: BrandEdit,
  },

  {
    path: "/dashboard/brand/add",
    component: AddBrand,
  },

  {
    path: "/dashboard/add-product",
    component: AddProducts,
  },
  {
    path: "/dashboard/products",
    component: Products,
  },
  {
    path: "/dashboard/products/edit/:name",
    component: ProductEdit,
  },

  {
    path: "/dashboard/admin",
    component: Admin,
  },

  {
    path: "/dashboard/admin/edit/:name",
    component: EditAdmin,
  },
  {
    path: "/dashboard/admin/add",
    component: AddAdmin,
  },
  {
    path: "/dashboard/admin-roles",
    component: RoleAdmin,
  },

  {
    path: "/dashboard/profile",
    component: Profile,
  },

  {
    path: "/dashboard/change-password",
    component: ChangePassword,
  },
  {
    path: "/dashboard/notification",
    component: Notification,
  },

  {
    path: "/dashboard/headless",
    component: Example,
  },

  



];

export default AppRoutes;
