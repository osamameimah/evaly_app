import React from "react";
import Button from "../../../components/Dashboard/Button";
import Style from "../../../assets/css/style.module.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
 
const CategoryForm = ({ initialValues, validationSchema, onSubmit, buttonText }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting, errors, touched }) => (
        <Form className={Style.CustomForm}>
          <div>
            <label>Category Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter Category Name"

              style={{ border: touched.name && errors.name ? "1px solid red" : "" }}
            />
            <ErrorMessage name="name" component="div" className={Style.error_message} />
          </div>

          <div>
            <Button text={buttonText} type="submit" disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CategoryForm;
