import React from "react";
import Header from "../../components/Dashboard/Layout/Header/Header";
import BrandForm from "../../components/Dashboard/Brand/BrandForm";
import { useDispatch, useSelector } from "react-redux";
// import { BrandActions } from "../../redux/brand-slice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Brand from "../../model/Brand";
import { useState } from "react";
import Alert from "../../components/Dashboard/alert/alert";
import { createBrand } from "../../redux/brand-slice";

const AddBrand = () => {
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const brandData = useSelector((state) => state.brand.data);

  const [successMessages, setSuccessMessages] = useState([]);

  const onAddBrandHandler = (values) => {
    // const NewBrand = new Brand(
    //   uuidv4().slice(0, 5),
    //   values.name,
    //   values.image
    // );

    const NewBrand = {
      id: uuidv4().slice(0, 5),
      name: values.name,
      image: values.image
    }
    dispatch(createBrand(NewBrand));
    setSuccessMessages((prevMessages) => [...prevMessages, "Brand Add Successfully"]);

    setTimeout(() => {
      Navigator(-1);
    }, 1000);  }

  const initialValues = {
    name: '',
    image: null,
  };

  return (
    <>
      <Header headerName="Add Brand" prevText="Brand / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <BrandForm initialValues={initialValues} onSubmit={onAddBrandHandler} />
    </>
  )
}

export default AddBrand;
