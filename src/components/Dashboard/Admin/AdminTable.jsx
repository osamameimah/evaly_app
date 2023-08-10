import { useDispatch } from "react-redux";
import Styled from "../../../assets/css/style.module.css";
import edit from "../../../assets/images/edit.svg";
 import trash from "../../../assets/images/trash.svg";
import { Link } from "react-router-dom";
import {deleteAdmin } from "../../../redux/admin-slice";
// import { AdminActions} from "../../../redux/admin-slice";
import avatar from "../../../assets/images/avtr.png"
import Alert from "../alert/alert";
import { useState } from "react";


const AdminTable = ({ Admin }) => {

  const dispatch = useDispatch();
  const [successMessages, setSuccessMessages] = useState([]);

  const onDeleteAdminHandler = (id) => {
    // dispatch(AdminActions.delete(id));
    dispatch(deleteAdmin(id));
    setSuccessMessages((prevMessages) => [...prevMessages, "Admin Deleted Successfully"]);

  }

  return (
    <>
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Styled.ClassParentTable}>

        <table className={Styled.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Admin Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Created At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Admin.map((admin, index) => (
              <tr key={index}>
                <td>#{admin.id}</td>
                <img src={admin.image ? URL.createObjectURL(admin.image) : avatar} alt="Customer Avatar" style={{ width: "40px", height: "40px", marginTop: "10px" }} />
                <td>{admin.name}</td>
                <td>{admin.number}</td>
                <td>{admin.email}</td>
                <td>{admin.address}</td>
                <td>{admin.created_at}</td>
                <td>
                  <Link to={`/dashboard/admin/edit/${admin.name}`}>
                    <img src={edit} />
                  </Link>

                  <Link onClick={() => onDeleteAdminHandler(admin.id)}>
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

export default AdminTable;
