import { useEffect, useState } from "react";
// import Styled from "../../assets/css/style.module.css";
import Styled from "./../../../assets/css/style.module.css"
import avatar from "./../../../assets/images/avtr.png";
import edit from "./../../../assets/images/edit.svg";
 import trash from "./../../../assets/images/trash.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { CustomerActions } from "../../../redux/customer-slice";
import Alert from "../alert/alert";
import { deleteCustomer } from "../../../redux/customer-slice";


const CustomerTable = ({ postPage, Customer }) => {

  const dispatch = useDispatch();
  const [successMessages, setSuccessMessages] = useState([]);

  const onDeleteCustomerHandler = (CustomerId) => {
    dispatch(deleteCustomer(CustomerId));
    setSuccessMessages((prevMessages) => [...prevMessages, "Customer Deleted Successfully"]);

  }

  // setTimeout(() => {
  //   setSuccessMessage("");
  // }, 2500);


  const onEditCustomerHandler = () => {
  }

  return (
    <>
      {/* {successMessage && (
        <div
          style={{
            background: "red",
            padding: "15px",
            borderRadius: "4px",
            color: "white",
            transition: " 0.2s ease-in-out",
          }}
        >
          {successMessage}
        </div>
      )} */}
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Styled.ClassParentTable}>

        <table className={Styled.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Customer.map((post, index) => (
              <tr key={index}>
                <td>#{post.id}</td>
                <td>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      // border: "1px solid #d1b9b9",
                    }}
                  >
                    <img src={post.image ? URL.createObjectURL(post.image) : avatar} alt="Customer Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
                  </div>
                </td>
                <td className={Styled.info_name}>
                  <div>
                    <p>{post.nameandemail[0]}</p>
                    <p style={{ color: "#8B909A", fontSize: "15px" }}>
                      {post.nameandemail[1]}
                    </p>
                  </div>
                </td>
                <td>{post.phonenumber}</td>
                <td>{post.createat}</td>
                <td>
                  <Link to={`/dashboard/customer/edit/${post.nameandemail[0]}`} onClick={onEditCustomerHandler}

                  >
                    <img src={edit} alt="Edit" />
                  </Link>
                  {/* <Link to="">
                  <img src={lock} alt="Lock" />
                </Link> */}
                  <Link onClick={() => onDeleteCustomerHandler(post.id)}

                  >
                    <img src={trash} alt="Trash" />
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

export default CustomerTable;
