import ApexChart from "../../components/Dashboard/Chart/ApexChart";
import Header from "../../components/Dashboard/Layout/Header/Header";
import HomeCard from "../../components/Dashboard/Home/HomeCard";
import HomeTable from "../../components/Dashboard/Home/HomeTable";
import LineChart from "../../components/Dashboard/Chart/LineChart";
import TrendProduct from "../../components/Dashboard/Home/TrendProduct";
import Style from "./home.module.css";
import TodayOrder from "../../components/Dashboard/Chart/TodayOrder";
import Dot from "../../assets/images/dots.svg";
const Home = () => {

  const homeCardData = [
    {
      title: "Total Orders",
      time1: "Last 7 days",
      number1: "25.7K",
      number2: "",
      number3: "6%",
      time2: "vs last 7 days",
      chart: <LineChart color="#ff0000" />,
    },
    {
      title: "Total Profit",
      time1: "Last 7 days",
      number1: "50K",
      number2: "",
      number3: "12%",
      time2: "vs last 7 days",
      chart: <LineChart color="#0000FF" />,
    },
    {
      title: "Discounted Amount",
      time1: "Last 7 days",
      number1: "12K",
      number2: "",
      number3: "2%",
      time2: "vs last 7 days",
      chart: <LineChart color="#0000FF" />,
    },
  ];

  return (
    <>
      <Header headerName="Dashboard" />
      <div className={Style.section_card_1}>
        <HomeCard
          // maxWidth="646px"
          title="Total Sales & Costs"
          time1="Last 7 days"
          number1="350K"
          number2="$235K"
          number3="8.56K"
          time2="vs last 7 days"
          chart={<ApexChart />}

        />
        <HomeCard
          // maxWidth="454px"
          title="Sessions"
          time1="Last 7 days"
          number1="16.5K"
          number2=""
          number3="3%"
          time2="vs last 7 days"
          chart={<LineChart color="#0000FF" />}

        />
      </div>

      <div className={Style.section_card_2}>
        {homeCardData.map((data, index) => (
          <HomeCard
            key={index}
            maxWidth="100%"
            title={data.title}
            time1={data.time1}
            number1={data.number1}
            number2={data.number2}
            number3={data.number3}
            time2={data.time2}
            chart={data.chart}
          />
        ))}
      </div>

      <div className={Style.Sales_operations}>
        <div className={Style.topSelling}>
          <div>
            <div>
              <p>Top Selling Category</p>
              <p>Total 10.4k Visitors</p>
            </div>
            <div>
              {" "}
              <img src={Dot} />
            </div>
          </div>

          <div class={Style.circle}>
            <div class={Style.circle1}>
              <span>Fashion</span>
              <span>4.567</span>
              <span>Per Day</span>
            </div>
            <div class={Style.circle2}>
              <span>Make-up</span>
              <span>1.845</span>
              <span>Per Day</span>
            </div>
            <div class={Style.circle3}>
              <span>Electronics</span>
              <span>3.167</span>
              <span>Per Day</span>
            </div>
          </div>
        </div>

        <div className={Style.last_transaction}>
          <div>
            <span>Last Transactions</span>
            <span>
              <a href="#">View All</a>
            </span>
          </div>

          <HomeTable nameTable="transaction" />
        </div>
      </div>

      {/*  */}

      <div className={Style.profetional_products}>
        <div className={Style.best_Selling}>
          <div>
            <span>Best Selling Products</span>
            <span>
              <a href="#">
                {" "}
                <img src={Dot} />
              </a>
            </span>
          </div>

          <HomeTable nameTable="bestSelling" />
        </div>
        <div className={Style.Trent_products}>
          <div>
            <div>
              <span>Trending Products</span>
              <span>Total 10.4k Visitors</span>
            </div>
            <div>
              <a href="#">
                <img src={Dot} />
              </a>
            </div>
          </div>

          <TrendProduct />
        </div>
      </div>

      {/*  */}

      <div class={Style.Order_statuses}>
        <div class={Style.Today_Order}>
          <div>
            <div>
              <span>Today Order</span>
              <div>
                <a href="#">
                  <img src={Dot} />
                </a>
              </div>
            </div>
            <div>
              <div>
                <span>16.5K</span>
                <span>Orders Over Time</span>
              </div>
              <div>
                <span>6%</span>
                <span>vs last day</span>
              </div>
            </div>
          </div>
          <div>
            {/* <img src="/images/img-5.svg" /> */}
            <TodayOrder />
          </div>
        </div>

        <div class={Style.Recent_Orders}>
          <div>
            <span>Recent Orders</span>
            <div>
              <a href="#">
                <img src={Dot} />
              </a>
            </div>
          </div>

          <HomeTable nameTable="order" />
        </div>
      </div>

      {/*  */}
    </>
  );
};
export default Home;
