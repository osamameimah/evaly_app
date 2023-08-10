import Header from "../../components/Dashboard/Layout/Header/Header";
import Customer from "../../model/Customer";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { CustomerActions } from "../../redux/customer-slice";
import { useNavigate } from "react-router-dom";
import { format, formatDistanceToNow } from "date-fns";
import CustomerForm from "../../components/Dashboard/Customer/CustomerForm";
import Alert from "../../components/Dashboard/alert/alert";
import { createCustomer } from "../../redux/customer-slice";

const CustomerAdd = () => {

  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const currentDateTime = new Date();

  const [successMessages, setSuccessMessages] = useState([]);
  const customers = useSelector((state) => state.customer.data);


  const onAddCustomerHandler = (values) => {
    // const NewCustomer = new Customer(
    //   uuidv4().slice(0, 5),
    //   values.image,
    //   [values.name, values.email],
    //   values.phone,
    //   format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
    // );

    const NewCustomer = {
      id: uuidv4().slice(0, 5),
      image: values.image,
      nameandemail: [values.name, values.email],
      phonenumber: values.phone,
      createat: format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
    }
    dispatch(createCustomer(NewCustomer));
    setSuccessMessages((prevMessages) => [...prevMessages, "Customer Add Successfully"]);

    setTimeout(() => {
      Navigator(-1);
    }, 1000);
  }


  const initialValues = {
    name: "",
    email: "",
    phone: "",
    image: null,
  };
  function checkIfNameExists(name) {
    return customers.some((customers) => customers.name === name);
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);

      }), email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone is required"),
  });



  return (
    <>
      <Header headerName="Add Customer" prevText="Customer / " />

      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <CustomerForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onAddCustomerHandler}
      // handleImageChange={handleImageChange}
      />

    </>
  );
};

export default CustomerAdd;
