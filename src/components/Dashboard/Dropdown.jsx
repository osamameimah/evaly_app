import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Styled from "../../assets/css/style.module.css";
import Notification from "./Notification";
import ProfileItem from "./Profile/ProfileItem";
 
const Dropdown = ({ src, lable }) => {
  return (
    <div className={Styled.ir}>
      <Menu>
        <Menu.Button className={Styled.dropdown_button}>
          <img src={src} alt="Avatar" />
        </Menu.Button>
        <Transition
          enter={Styled.custom_enter}
          enterFrom={Styled.custom_enter}
          enterTo={Styled.custom_enter_active}
          leave={Styled.custom_leave}
          leaveFrom={Styled.custom_leave}
          leaveTo={Styled.custom_leave_active}
        >
          {lable == "profile" ? <ProfileItem /> : <Notification />}
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
