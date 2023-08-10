import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Dashboard/Layout/Header/Header";
import CoubonForm from "../../components/Dashboard/Coubon/CouponForm";
import * as Yup from 'yup';
import Coubon from "../../model/Coubon";
// import { CouponActions } from "../../redux/coupon-slice";
import Alert from "../../components/Dashboard/alert/alert";
import { useState } from "react";
import { updateCoupon } from "../../redux/coupon-slice";

const CouponEdit = () => {

  const Couponn = useSelector((state) => state.coupon.data);
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  const couponNow = Couponn.find((item) => item.name === name);
  const [successMessages, setSuccessMessages] = useState([]);

  const onUpdateCouponHandler = (values) => {
    // const AddNewCoubon = new Coubon(
    //   couponNow.id,
    //   values.name,
    //   values.persintage,
    //   values.expire,
    // );
    const AddNewCoubon = {
      id: couponNow.id,
      name: values.name,
      persintage: values.persintage,
      expire: values.expire

    }

    // console.log("ttt", AddNewCoubon);
    setSuccessMessages((prevMessages) => [...prevMessages, "Coupon Updated Successfully"]);

    dispatch(updateCoupon({ Coopo: AddNewCoubon }));

    setTimeout(() => {
      Navigator(-1);
    }, 1000);
  };


  const initialValues = {
    name: couponNow ? couponNow.name : '',
    persintage: couponNow ? couponNow.persintage : '',
    expire: couponNow ? couponNow.expire : '',

  };
  function checkIfNameExists(name) {
    return Couponn.some((Prdct) => Prdct.name === name);
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .test('unique-name', 'The name already exists', function (value) {
        return !checkIfNameExists(value);
      }), persintage: Yup.number().required('Percentage is required'),
    expire: Yup.string().required('Date is required'),
  });

  return (
    <>
      <Header headerName="Edit Coupon" prevText="Coupon / " />
      <Alert successMessages={successMessages} setSuccessMessages={setSuccessMessages} background="green" />

      <CoubonForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onUpdateCouponHandler}

      />
    </>
  );
};

export default CouponEdit;
