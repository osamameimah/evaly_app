import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../components/Dashboard/Button";
import Style from "../../../assets/css/style.module.css";
import DropImage from "../DropImage";

const CustomerForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  // handleImageChange,
}) => {

  const handleFileInputChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    setFieldValue("image", file);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting, errors, touched, setFieldValue }) => (
        <Form className={Style.CustomForm}>
          <div>
            <label>Customer Name</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter Customer Name"
              style={{ border: touched.name && errors.name ? "1px solid red" : "" }}
            />
            <ErrorMessage name="name" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Customer Email</label>
            <Field
              type="text"
              name="email"
              placeholder="Enter Customer Email"
              style={{ border: touched.email && errors.email ? "1px solid red" : "" }}
            />
            <ErrorMessage name="email" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Phone Number</label>
            <Field
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              style={{ border: touched.phone && errors.phone ? "1px solid red" : "" }}
            />
            <ErrorMessage name="phone" component="div" className={Style.error_message} />
          </div>

          {/* <div>
            <label>Image</label>
            <input type="file"
              // onChange={handleImageChange} 
              onChange={(event) => handleFileInputChange(event, setFieldValue)}

            />

            <ErrorMessage name="image" component="div" className={Style.error_message} />
          </div> */}

          <div>
            <label>Customer Image</label>
            <Field name="image">
              {({ field }) => (
                <DropImage
                  image={field.value}
                  onDrop={(acceptedFiles) => setFieldValue("image", acceptedFiles[0])}

                />
              )}
            </Field>
            <ErrorMessage name="image" component="div" className={Style.error_message} />
          </div>

          <div>
            <Button text="Save" type="submit" disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomerForm;
