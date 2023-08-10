import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CustomerActions } from "../../redux/customer-slice";
import { useNavigate, useParams } from "react-router-dom";
import Customer from "../../model/Customer";
import * as Yup from "yup";
import CustomerForm from "../../components/Dashboard/Customer/CustomerForm";
import Header from "../../components/Dashboard/Layout/Header/Header";
import { format, formatDistanceToNow } from "date-fns";
import Alert from "../../components/Dashboard/alert/alert";
import { updateCustomer } from "../../redux/customer-slice";

const CustomerEdit = () => {
  const currentDateTime = new Date();
  const [successMessages, setSuccessMessages] = useState([]);

  const customers = useSelector((state) => state.customer.data);
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  const customer = customers.find((item) => item.nameandemail[0] === name);

  const onUpdateCustomerHandler = (values) => {
    // const updatedCustomer = new Customer(
    //   customer.id,
    //   values.image,
    //   [values.name, values.email],
    //   values.phone,
    //   format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
    // );

    const updatedCustomer = {
      id: customer.id,
      image: values.image,
      nameandemail: [values.name, values.email],
      phonenumber: values.phone,
      createat: format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
    }
    
    dispatch(updateCustomer({ cusm: updatedCustomer }));
    setSuccessMessages((prevMessages) => [...prevMessages, "Customer Updated Successfully"]);
    setTimeout(() => {
      Navigator(-1);
    }, 1000);

  };
  function checkIfNameExists(name) {
    return customers.some((customers) => customers.name === name);
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }),

  });

  const initialValues = {
    name: customer?.nameandemail[0] || "",
    email: customer?.nameandemail[1] || "",
    phone: customer?.phonenumber || "",
  };



  return (
    <>
      <Header headerName="Customer Edit" prevText="Customer / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

      <CustomerForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onUpdateCustomerHandler}
      />
    </>
  );
};

export default CustomerEdit;
