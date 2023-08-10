import { useEffect, useState } from "react";
import Styled from "../../../assets/css/style.module.css";
import CustomDrop from "../CustomDrop";
import Swal from "sweetalert2";

const TransTable = ({ postPage, Transaction }) => {
  const option = [
    "Pending",
    "Confirmed",
    "Processing",
    "Picked",
    "Shipped",
    "Delivered",
  ];

  const viewDetailsHandler = () => {
    Swal.fire({
      title: "Personal Information",
      html: `
        <p>Name: John Doe</p>
        <p>Email: johndoe@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      `,
      confirmButtonText: "Close",

      customClass: {
        htmlContainer: `${Styled.custom_swal_html_container}`,
      },
    });
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Transaction);
    console.log(data);
  }, [Transaction]);

  return (
    <>
        <div className={Styled.ClassParentTable}> 

      <table className={Styled.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((post, index) => (
            <tr key={index}>
              <td>#{post.item1}</td>
              <td>{post.item2}</td>
              <td>{post.item3}</td>
              <td>${post.item4}</td>
              <td>{post.item5}</td>
              <td >
                <span style={{ color: post.item6 == "Pending" ? "#ffc600" : post.item6 == "Picked" ? "#0F60FF" : post.item6 == "Confirmed" ? "#28C76F" : post.item6 == "Shipped" ? "#BD00FF" : post.item6 == "Processing" ? "#0FB7FF" : post.item6 == "Delivered" ? "#33189D" : "", padding: "6px 10px" }}>{post.item6}</span>
              </td>
              <td>
                <a href="#" onClick={viewDetailsHandler}>
                  {post.item7}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default TransTable;
