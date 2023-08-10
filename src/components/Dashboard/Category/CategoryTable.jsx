import { useEffect, useState } from "react";
import Styled from "../../../assets/css/style.module.css";
import edit from "../../../assets/images/edit.svg";
import trash from "../../../assets/images/trash.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Alert from "../alert/alert";
import { deleteCategory } from "../../../redux/category-slice";

const CategoryTable = ({ postPage, Category }) => {
  const dispatch = useDispatch();
  const [successMessages, setSuccessMessages] = useState([]);

  const onDeleteCategoryHandler = (id) => {
    dispatch(deleteCategory(id));
    setSuccessMessages((prevMessages) => [...prevMessages, "Category Deleted Successfully"]);
  }

  return (
    <>
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="red" />

      <div className={Styled.ClassParentTable}>
        <table className={Styled.table}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Category Name</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Category.map((category, index) => (
              <tr key={index}>
                <td>#{category.id}</td>
                <td>{category.name}</td>
                <td>{category.date}</td>
                <td>
                  <Link to={`/dashboard/categories/edit/${category.name}`} >
                    <img src={edit} alt="Edit" />
                  </Link>

                  <Link onClick={() => onDeleteCategoryHandler(category.id)}>
                    <img src={trash} alt="Delete" />
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

export default CategoryTable;
