import React, { useRef } from "react";
import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "../../assets/css/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { CategoryActions } from "../../redux/category-slice";
import Category from "../../model/Category";
import { formatDistanceToNow } from "date-fns";
import CategoryForm from "../../components/Dashboard/Category/CategoryForm";
import * as Yup from 'yup';
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { updateCategory } from "../../redux/category-slice";


const EditCategory = () => {
  const categories = useSelector((state) => state.category.data);
  const { name } = useParams();
  const categoryToEdit = categories.find((item) => item.name === name);
  const [successMessages, setSuccessMessages] = useState([]);

  const dispatch = useDispatch();
  const Navigator = useNavigate();

  const onEditCategoryHandler = (values) => {
    // const editedCategory = new Category(
    //   categoryToEdit.id,
    //   values.name,
    //   formatDistanceToNow(new Date())
    // );

    const editedCategory = {
      id: categoryToEdit.id,
      name: values.name,
      date: formatDistanceToNow(new Date())
    }
    dispatch(updateCategory({ categorys: editedCategory }));
    setSuccessMessages((prevMessages) => [...prevMessages, "Category Updated Successfully"]);
    setTimeout(() => {
      Navigator(-1);
    }, 1000);
  };
  function checkIfNameExists(name) {
    return categories.some((Prdct) => Prdct.name === name);
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }),
  });

  const initialValues = {
    name: categoryToEdit?.name || '',
  };

  return (
    <>
      <Header headerName="Edit Category" prevText="Categories / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

      <CategoryForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onEditCategoryHandler}
        buttonText="Update"
      />
    </>
  );
};

export default EditCategory;
