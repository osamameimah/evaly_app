import AdminForm from "../../components/Dashboard/Admin/AdminForm";
import Header from "../../components/Dashboard/Layout/Header/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../../model/Admin";
import { v4 as uuidv4 } from 'uuid';
import { format } from "date-fns";
import * as Yup from 'yup';
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { createAdmin } from "../../redux/admin-slice";

const AddAdmin = () => {
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const currentDateTime = new Date();
  const [successMessages, setSuccessMessages] = useState([]);
  const Admn = useSelector((state) => state.admin.data);

  const onAddAdminHandler = (values) => {
    // const NewAdmin = new Admin(
    //   uuidv4().slice(0, 5),
    //   values.image,
    //   values.name,
    //   values.number,
    //   values.email,
    //   values.address,
    //   format(currentDateTime, 'yyyy-MM-dd HH:mm:ss'),
    // );

    const NewAdmin = {
      id: uuidv4().slice(0, 5),
      image: values.image,
      name: values.name,
      number: values.number,
      email: values.email,
      address: values.address,
      created_at: format(currentDateTime, 'yyyy-MM-dd HH:mm:ss')
    }

    dispatch(createAdmin(NewAdmin));
    setSuccessMessages((prevMessages) => [...prevMessages, "Admin Add Successfully"]);
    setTimeout(() => {
      Navigator(-1);
    }, 1000);
  }

  const initialValues = {
    name: '',
    image: null,
    phoneNumber: '',
    email: '',
    address: '',
  };

  const validationSchema = Yup.object().shape({
    number: Yup.number().required('Number is required'),

    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }),
  });

  function checkIfNameExists(name) {
    return Admn.some((admin) => admin.name === name);
  }

  return (
    <>
      <Header headerName="Add Admin" prevText="Admin / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="blue" />

      <AdminForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onAddAdminHandler}
      />
    </>
  );
};

export default AddAdmin;
