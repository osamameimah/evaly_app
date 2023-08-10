import Styled from "../../../assets/css/style.module.css";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { CouponActions } from "../../../redux/coupon-slice";
import Alert from "../alert/alert";
import { useState } from "react";
import { deleteCoupon } from "../../../redux/coupon-slice";

const CoubonTable = ({ Coubon }) => {
  const dispatch = useDispatch();
  const [successMessages, setSuccessMessages] = useState([]);

  const onDeleteCoubonHandler = (id) => {
    dispatch(deleteCoupon(id));
    setSuccessMessages((prevMessages) => [...prevMessages, "Coupon Deleted Successfully"]);

  }

  return (
    <>
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Styled.ClassParentTable}>

        <table className={Styled.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Coubon Name</th>
              <th>Persintage (Hint : %)</th>
              <th>Expire As</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Coubon.map((coupon, index) => (
              <tr key={index}>
                <td>#{coupon.id}</td>
                <td>{coupon.name}</td>
                <td>{coupon.persintage}%</td>
                <td>{coupon.expire}</td>
                <td>
                  <Link to={`/dashboard/coupon/edit/${coupon.name}`} href="#">
                    <img src={edit} />
                  </Link>

                  <Link onClick={() => onDeleteCoubonHandler(coupon.id)}>
                    <img src={trash} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CoubonTable;
