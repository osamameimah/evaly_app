import { Link } from "react-router-dom";
import Style from "./register.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const onSubmit = (values) => {
    alert(`${values.name} ${values.email} ${values.password} ${values.confirmPassword}`);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("User name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords do not match"),
  });

  return (
    <>
      <div className={Style.body_Register}>
        <div>
          <h1>Register</h1>
        </div>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid, dirty, isSubmitting, errors, touched }) => (
            <Form>
              <div>
                <label>User Name</label>
                <Field type="text" name="name" placeholder="Enter User Name" />
                <ErrorMessage name="name" component="span" className={Style.error} />
              </div>
              <div>
                <label>Email</label>
                <Field type="text" name="email" placeholder="Enter Email" />
                <ErrorMessage name="email" component="span" className={Style.error} />
              </div>
              <div>
                <label>Password</label>
                <Field type="password" name="password" placeholder="Enter Password" />
                <ErrorMessage name="password" component="span" className={Style.error} />
              </div>

              <div>
                <label>Confirm Password</label>
                <Field type="password" name="confirmPassword" placeholder="Enter Confirm Password" />
                <ErrorMessage name="confirmPassword" component="span" className={Style.error} />
              </div>

              <div>
                <button type="submit" disabled={!isValid || !dirty || isSubmitting} style={{ background: isValid && dirty ? "blue" : "#DCDCDC" }}>
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div>
          <p>Already registered?</p>
          <Link to="/dashboard/login">Sign In</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
