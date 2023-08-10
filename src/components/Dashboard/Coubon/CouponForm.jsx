// CouponForm.js
 import { Form, Field, Formik, ErrorMessage } from "formik";
 import Style from "../../../assets/css/style.module.css";
import Button from "../../Dashboard/Button";

const CouponForm = ({ initialValues, validationSchema, onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting, errors, touched }) => (
        <Form className={Style.CustomForm}>
          <div>
            <label>Coupon Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter Coubon Name"
              style={{ border: touched.name && errors.name ? "1px solid red" : "" }}
            />
            <ErrorMessage name="name" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Percentage</label>
            <Field
              type="number"
              name="persintage"
              placeholder="Enter Percentage"

              style={{ border: touched.persintage && errors.persintage ? "1px solid red" : "" }}
            />
            <ErrorMessage name="persintage" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Expire Date</label>
            <Field
              type="date"
              name="expire"
              style={{ border: touched.date && errors.date ? "1px solid red" : "" }}
            />
            <ErrorMessage name="expire" component="div" className={Style.error_message} />
          </div>

          <div>
            <Button text="Save" type="submit" disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CouponForm;
