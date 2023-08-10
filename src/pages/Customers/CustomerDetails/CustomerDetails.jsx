import Header from "../../../components/Dashboard/Layout/Header/Header";
import Style from "./CustomerDetails.module.css";
import Avatar from "../../../assets/images/avatar.svg"
import Search from "../../../assets/images/search.svg"
const CustomerDetails = () => {
  return (
    <>
      <Header headerName="Customer Details" />

      <div className={Style.details}>
        <div className={Style.details_info}>
          <div className={Style.info - 1}>
            <div>
              <img src={Avatar} />
            </div>
            <div>
              <span>Robert Fox</span>
              <span>robert@gmail.com</span>
            </div>
          </div>
          <div className={Style.info - 2}>
            <div>
              <p>PERSONAL INFORMATION</p>
            </div>
            <div>
              <div>
                <span>Contact Number</span>
                <span>Gender</span>
                <span>Date of Birth</span>
                <span>Member Since</span>
              </div>
              <div>
                <span>(201) 555-0124</span>
                <span>Male</span>
                <span>1 Jan, 1985</span>
                <span>3 March, 2023</span>
              </div>
            </div>
          </div>
          <div className={Style.info - 3}>
            <div>
              <p>Shipping Address</p>
            </div>
            <div>
              <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
            </div>
            <div>
              <div>
                <span>150</span>
                <span>Total Order</span>
              </div>
              <div>
                <span>140</span>
                <span>Completed</span>
              </div>
              <div>
                <span>10</span>
                <span>Canceled</span>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.status}>
          <span>All Orders</span>
          <span>Completed</span>
          <span>Canceled</span>
        </div>
      </div>

      <div className={Style.operation}>
        <div className={Style.search}>
          <input
            type="search"
            placeholder="Search by order id"
            id="mySearchInput"
          />
          <img src={Search} />
        </div>
        <div className={Style.filter}>
          <button>Filter by date range</button>
        </div>
      </div>

     
    </>
  );
};

export default CustomerDetails;
