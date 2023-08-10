import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
// import { CouponActions } from "../../redux/coupon-slice";
import { createCoupon } from "../../redux/coupon-slice"
import Coubon from "../../model/Coubon";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Dashboard/Layout/Header/Header";
import CoubonForm from "../../components/Dashboard/Coubon/CouponForm";
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";

const CouponAdd = () => {
  const dispatch = useDispatch();
  const Navigator = useNavigate();
  const [successMessages, setSuccessMessages] = useState([]);
  const Couponn = useSelector((state) => state.coupon.data);

  const onCreateCouponHandler = (values) => {
    // const coupon = new Coubon(
    //   uuidv4().slice(0, 5),
    //   values.name,
    //   values.persintage,
    //   values.expire
    // );
    const coupon = {
      id: uuidv4().slice(0, 5),
      name: values.name,
      persintage: values.persintage,
      expire: values.expire

    }
    setSuccessMessages((prevMessages) => [...prevMessages, "Coupon Add Successfully"]);

    dispatch(createCoupon(coupon));

 
    setTimeout(() => {
      Navigator(-1);
    }, 1000);
  };

  const initialValues = {
    name: '',
    persintage: '',
    expire: '',
  };
  function checkIfNameExists(name) {
    return Couponn.some((Prdct) => Prdct.name === name);
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }), persintage: Yup.string().required('Percentage is required'),
    expire: Yup.string().required('Date is required'),
  });

  return (
    <>
      <Header headerName="Add Coupon" prevText="Coupon / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <CoubonForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onCreateCouponHandler}
      />
    </>
  );
};

export default CouponAdd;
