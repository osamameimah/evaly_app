// Add-Product.js
import React from "react";
import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "../../assets/css/style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { ProductActions } from "../../redux/product-slice";
import Product from "../../model/Product";
import { v4 as uuidv4 } from 'uuid';
import ProductForm from "../../components/Dashboard/Product/ProductForm";
import * as Yup from 'yup';
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { createProduct } from "../../redux/product-slice";

const AddProducts = () => {
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const [successMessages, setSuccessMessages] = useState([]);
  const Prdct = useSelector((state) => state.product.data);

  const onAddProductHandler = async (values) => {
    //   const NewProduct = new Product(
    //     uuidv4().slice(0, 5),
    //     values.name,
    //     values.description,
    //     values.shortdescription,
    //     values.price,
    //     values.category,
    //     values.image
    //   );

    const NewProduct = {
      id: uuidv4().slice(0, 5),
      name: values.name,
      description: values.description,
      shortdescription: values.shortdescription,
      price: values.price,
      category: values.category,
      image: values.image,
    };

    dispatch(createProduct(NewProduct));
    setSuccessMessages((prevMessages) => [...prevMessages, "Product Add Successfully"]);

    setTimeout(() => {
      Navigator("/dashboard/products");
    }, 1000);
  };

  function checkIfNameExists(name) {
    return Prdct.some((Prdct) => Prdct.name === name);
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }),
    description: Yup.string().required('Description is required'),
    shortdescription: Yup.string().required('Short description is required'),
    price: Yup.string().required('Price is required'),
    category: Yup.string().required('Category is required'),
  });

  const initialValues = {
    name: '',
    description: '',
    shortdescription: '',
    price: '',
    category: '',
    image: null,
  };

  return (
    <>
      <Header headerName="Add Products" />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <ProductForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onAddProductHandler}
      />
    </>
  );
};

export default AddProducts;
