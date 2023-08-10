import Header from "../../components/Dashboard/Layout/Header/Header";
import Style from "./profile.module.css";

const ChangePassword = () => {
  return (
    <>
      <Header headerName="Change Password" />
      <form className={Style.ChangePassword}>
        <div className={Style.form_control}>
          <label>Enter Password</label>
          <input type="password" placeholder="Enter Your Password" />
        </div>

        <div className={Style.form_control}>
          <label>Enter New Password</label>
          <input type="password" placeholder="Enter New Password" />
        </div>

        <div className={Style.form_control}>
          <label>Enter Confirm Password</label>
          <input type="password" placeholder="Enter Confirm Password" />
        </div>

        <button>Save</button>
      </form>
    </>
  );
};

export default ChangePassword;
