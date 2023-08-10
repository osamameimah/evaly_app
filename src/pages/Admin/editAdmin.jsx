import { useNavigate, useParams } from "react-router-dom";
import AdminForm from "../../components/Dashboard/Admin/AdminForm";
import Header from "../../components/Dashboard/Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { updateAdmin } from "../../redux/admin-slice";
import { useEffect } from "react";

const EditAdmin = () => {
  const { name } = useParams();
  const [successMessages, setSuccessMessages] = useState([]);
  const Admn = useSelector((state) => state.admin.data);
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const AdminNow = Admn.find((add) => add.name === name);
  const onUpdateAdminHandler = (values) => {

    if (AdminNow) {
      const UpdatedAdmin = {
        id: AdminNow.id,
        image: values.image,
        name: values.name,
        number: values.number,
        email: values.email,
        address: values.address,
        created_at: AdminNow.created_at
      }


      // dispatch(AdminActions.update({ Admns: NewAdmin }));
      // console.log("qwe", UpdatedAdmin)
      dispatch(updateAdmin({ Admns: UpdatedAdmin }));

      setSuccessMessages((prevMessages) => [...prevMessages, "Admin Updated Successfully"]);
      setTimeout(() => {
        Navigator(-1);
      }, 1000);
    };
  }

  const initialValues = {
    name: AdminNow ? AdminNow.name : '',
    image: AdminNow ? AdminNow.image : '',
    number: AdminNow ? AdminNow.number : '',
    email: AdminNow ? AdminNow.email : '',
    address: AdminNow ? AdminNow.address : '',
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
      <Header headerName="Edit Admin" prevText="Admin / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

      <AdminForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onUpdateAdminHandler}
      />
    </>
  );
};

export default EditAdmin;


    // const NewAdmin = new Admin(
    //   AdminNow.id,
    //   values.image,
    //   values.name,
    //   values.number,
    //   values.email,
    //   values.address,
    //   AdminNow.created_at
    // );