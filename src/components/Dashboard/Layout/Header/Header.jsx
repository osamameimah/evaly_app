import Dropdown from "../../Dropdown";
 import Styled from "../../../../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";
import avatar from "../../../../assets/images/avtr.png"
import Notification from "../../../../assets/images/notification.svg"


const Header = ({ headerName, prevText }) => {
  const navigate = useNavigate();

  const ClickRoute=() =>{
    navigate(-1);
  }
  return (
    <>
      <div className={Styled.header}>
        <div>
          <span style={{ color: "#4f5257" ,cursor:"pointer"}} onClick={ClickRoute}>{prevText}</span>
          <span>{headerName}</span>
        </div>
        <div>
    
          <div style={{ position: "relative" }}>
            <Dropdown src={Notification} lable="notification"/>
            <span className={Styled.animated_badge}>5</span>{" "}
          </div>
          <p className={Styled.name_profile}>Osama meimah</p>

          <Dropdown src={avatar} lable="profile" />
        </div>
      </div>{" "}
    </>
  );
};

export default Header;
