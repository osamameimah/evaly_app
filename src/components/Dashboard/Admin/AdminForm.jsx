import { Field, ErrorMessage, Form, Formik } from 'formik';
import Button from '../Button';
import Style from "../../../assets/css/style.module.css";
import DropImage from '../DropImage';
const AdminForm = ({ initialValues, validationSchema, onSubmit }) => {

  // const handleFileInputChange = (event, setFieldValue) => {
  //   const file = event.currentTarget.files[0];
  //   setFieldValue("image", file);
  // };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid, dirty, isSubmitting, errors, touched, setFieldValue }) => (
        <Form className={Style.CustomForm}>
          <div>
            <label>Admin Name</label>
            <Field type="text" name="name" placeholder="Enter Admin Name" style={{ border: touched.name && errors.name ? "1px solid red" : "" }} />
            <ErrorMessage name="name" component="div" className={Style.error_message} />
          </div>

          {/* <div>
            <label>Admin Image</label>
            <input
              type="file"
              name="image"
              onChange={(event) => handleFileInputChange(event, setFieldValue)}
              style={{ border: touched.image && errors.image ? "1px solid red" : "" }}
            />
            <ErrorMessage name="image" component="div" className={Style.error_message} />
          </div> */}


          <div>
            <label>Admin Image</label>
            <Field name="image">
              {({ field }) => (
                // console.log("000",field),
                <DropImage
                  image={field.value}
                  onDrop={(acceptedFiles) => setFieldValue("image", acceptedFiles[0])}

                // style={{ border: touched.image && errors.image ? "1px solid red" : "" }}
                />
              )}
            </Field>
            <ErrorMessage name="image" component="div" className={Style.error_message} />
          </div>
          <div>
            <label>Phone Number</label>
            <Field type="text" name="number" placeholder="Enter Phone Number" style={{ border: touched.number && errors.number ? "1px solid red" : "" }} />
            <ErrorMessage name="number" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Email</label>
            <Field type="text" name="email" placeholder="Enter Email" style={{ border: touched.email && errors.email ? "1px solid red" : "" }} />
            <ErrorMessage name="email" component="div" className={Style.error_message} />
          </div>

          <div>
            <label>Address</label>
            <Field type="text" name="address" placeholder="Enter Address" style={{ border: touched.address && errors.address ? "1px solid red" : "" }} />
            <ErrorMessage name="address" component="div" className={Style.error_message} />
          </div>

          <div>
            <Button text="Save" type="submit" disabled={!isValid || !dirty || isSubmitting} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AdminForm;
