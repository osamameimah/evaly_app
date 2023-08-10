import React, { useEffect, useRef } from "react";
import Header from "../../components/Dashboard/Layout/Header/Header";
import BrandForm from "../../components/Dashboard/Brand/BrandForm";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
// import Brand from "../../model/Brand";
// import { BrandActions } from "../../redux/brand-slice";
import { useState } from "react";
import Alert from "../../components/Dashboard/alert/alert";
import { updateBrand } from "../../redux/brand-slice";

const BrandEdit = () => {
  const { name } = useParams();
  const [successMessages, setSuccessMessages] = useState([]);

  const brandData = useSelector((state) => state.brand.data);
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const brandd = brandData.find((br) => br.name === name);
  const onUpdateBrandHandler = (values) => {
    if (brandd) {
      // const UpdateBrand = new Brand(
      //   brandd.id,
      //   values.name,
      //   values.image
      // );

      const UpdateBrand = {
        id: brandd.id,
        name: values.name,
        image: values.image
      }

      dispatch(updateBrand({ brands: UpdateBrand }));
      setSuccessMessages((prevMessages) => [...prevMessages, "Brand Updated Successfully"]);
      setTimeout(() => {
        Navigator(-1);
      }, 1000);
    }
  };

  const initialValues = {
    name: brandd ? brandd.name : '',
    image: null,
  };

  return (
    <>
      <Header headerName="Edit Brand" prevText="Brand / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

      <BrandForm initialValues={initialValues} onSubmit={onUpdateBrandHandler} />
    </>
  );
};

export default BrandEdit;
