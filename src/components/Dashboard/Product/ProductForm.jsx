// ProductForm.js
import React from "react";
import Button from "../../../components/Dashboard/Button";
import Style from "../../../assets/css/style.module.css";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import DropImage from "../DropImage";

const ProductForm = ({ initialValues, validationSchema, onSubmit }) => {
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
            <label>Product Name</label>
            <Field type="text" name="name" placeholder="Enter Product Name" style={{ border: touched.name && errors.name ? "1px solid red" : "" }} />
            <ErrorMessage name="name" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Description</label>
            <Field type="text" name="description" placeholder="Enter Description" style={{ border: touched.description && errors.description ? "1px solid red" : "" }} />
            <ErrorMessage name="description" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>ShortDiscription</label>
            <Field type="text" name="shortdescription" placeholder="Enter ShortDescription" style={{ border: touched.shortdescription && errors.shortdescription ? "1px solid red" : "" }} />
            <ErrorMessage name="shortdescription" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Price</label>
            <Field type="text" name="price" placeholder="Enter Price" style={{ border: touched.price && errors.price ? "1px solid red" : "" }} />
            <ErrorMessage name="price" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Category</label>
            <Field type="text" name="category" placeholder="Enter Category" style={{ border: touched.category && errors.category ? "1px solid red" : "" }} />
            <ErrorMessage name="category" component="div" className={Style.error_message} />
          </div>

          {/* <div>
            <label>Product Image</label>
            <input type="file" name="image"
              onChange={(event) => handleFileInputChange(event, setFieldValue)}

              style={{ border: touched.image && errors.image ? "1px solid red" : "" }} />
            <ErrorMessage name="image" component="div" className={Style.error_message} />
          </div> */}

          <div>
            <label>Product Image</label>
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
            <Button text="Submit" type="submit" disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
