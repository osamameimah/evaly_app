import React, { useRef, useState } from "react";
import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "../../assets/css/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../redux/category-slice";
import Category from "../../model/Category";
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import CategoryForm from "../../components/Dashboard/Category/CategoryForm";
import Alert from "../../components/Dashboard/alert/alert";

const AddCategories = () => {
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const [successMessages, setSuccessMessages] = useState([]);
  const categories = useSelector((state) => state.category.data);

  const onAddCategoryHandler = (values) => {
    // const newCategory = new Category(
    //   uuidv4().slice(0, 5),
    //   values.name,
    //   "22-02-2022"
    // );

const newCategory = {
id:  uuidv4().slice(0, 5),
 name: values.name,
 date: "22-02-2022"
}
    
    dispatch(createCategory(newCategory));
    setSuccessMessages((prevMessages) => [...prevMessages, "Category Add Successfully"]);


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
    name: '',
  };

  return (
    <>
      <Header headerName="Add Category" prevText="Categories / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <CategoryForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onAddCategoryHandler}
        buttonText="Add"
      />
    </>
  );
};

export default AddCategories;
