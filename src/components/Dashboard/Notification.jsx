import { Link } from "react-router-dom";
import Styled from "../../assets/css/style.module.css";

const Notification = () => {
  const notificationItem = [
    {
      h1: "Title Notification",
      p: "thivfknvknknknknknkdnnsdvnsnsnvklnvklsnvklsndvsvsdvsdv",
      span: "11-06-2023",
      link:"/dashboard/notification",
    },
    {
      h1: "Title Notification",
      p: "thivfknvknknknknknkdnnsdvnsnsnvklnvklsnvklsndvsvsdvsdv",
      span: "11-06-2023",
      link:"/dashboard/notification",

    },
    {
      h1: "Title Notification",
      p: "thivfknvknknknknknkdnnsdvnsnsnvklnvklsnvklsndvsvsdvsdv",
      span: "11-06-2023",
      link:"/dashboard/notification",

    },
    {
      h1: "Title Notification",
      p: "thivfknvknknknknknkdnnsdvnsnsnvklnvklsnvklsndvsvsdvsdv",
      span: "11-06-2023",
      link:"/dashboard/notification",

    },
    {
      h1: "Title Notification",
      p: "thivfknvknknknknknkdnnsdvnsnsnvklnvklsnvklsndvsvsdvsdv",
      span: "11-06-2023",
      link:"/dashboard/notification",

    },
  ];

  return (
    <>
      <div className={Styled.notification}>
        <span>Notification</span>

        {notificationItem.map((notificationItem) => (
          <Link to={notificationItem.link}>
            <div className={Styled.notification_details}>
              <h1>{notificationItem.h1}</h1>
              <p>{notificationItem.p}</p>
              <span>{notificationItem.span}</span>
 
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Notification;
