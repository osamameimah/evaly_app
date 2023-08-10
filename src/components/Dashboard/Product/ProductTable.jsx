import { useDispatch } from "react-redux";
import Styled from "../../../assets/css/style.module.css";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";
import { Link } from "react-router-dom";
// import { ProductActions } from "../../../redux/product-slice";
import defaultProduct from "../../../assets/images/logobrand.png"
import { useState } from "react";
import Alert from "../alert/alert";
import { deleteProduct } from "../../../redux/product-slice";

const ProductTable = ({ Product }) => {
  const [successMessages, setSuccessMessages] = useState([]);

  const dispatch = useDispatch();
  const onDeleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
    setSuccessMessages((prevMessages) => [...prevMessages, "Product Deleted Successfully"]);

  }

  return (
    <>
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Styled.ClassParentTable}>

        <table className={Styled.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Short Discription</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Product.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <img src={product.image ? URL.createObjectURL(product.image) : defaultProduct} alt="Customer Avatar" style={{ height: "50px" }} />

                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.shortdescription}</td>
                <td>{product.price}$</td>
                <td>{product.category}</td>
                <td >
                  <Link to={`/dashboard/products/edit/${product.name}`} className={Styled.edit}>
                    <img src={edit} />
                  </Link>

                  <Link className={Styled.delete}>
                    <img src={trash} onClick={() => onDeleteProductHandler(product.id)} />
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

export default ProductTable;
