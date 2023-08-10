import { Link } from "react-router-dom";
import Style from "./login.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Facebook from "../../assets/images/facebook.png";
import Github from "../../assets/images/github.png";
import Google from "../../assets/images/google.png";
const Login = () => {
  const onSubmit = (values) => {
    alert(`Email: ${values.email}, Password: ${values.password}`);
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <div className={Style.body_Register}>
        <div>
          <h1>Login</h1>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isValid, dirty, isSubmitting, errors, touched, handleChange }) => (
            <Form>
              <div>
                <label>Email</label>
                <Field type="text" name="email" placeholder="Enter Email" onChange={handleChange} />
                {touched.email && errors.email && <span className={Style.error}>{errors.email}</span>}
              </div>
              <div>
                <label>Password</label>
                <Field type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
                {touched.password && errors.password && <span className={Style.error}>{errors.password}</span>}
              </div>

              <div>
                <button type="submit" disabled={!isValid || !dirty || isSubmitting} style={{ background: isValid && dirty ? "blue" : "#DCDCDC" }}>
                  Sign In
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className={Style.socialwithlogin}>
          <span>Or</span>
          <p>Login With :</p>
          <div>
          <img src={Google} width="35" height="35"/>
        <img src={Facebook} width="35" height="35"/>
        <img src={Github} width="35" height="35"/>
          </div>
 
        </div>

        <div>
          <p>Not an Account?</p>
          <Link to="/dashboard/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
