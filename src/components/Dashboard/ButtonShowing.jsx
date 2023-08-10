import { useState } from "react";
import Styled from "../../assets/css/style.module.css";
import Arrow from "../../assets/images/arrow-top.svg";
const ButtonShowing = ({ setPostPerPage }) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("Choose");
  const option = ["10", "20", "30"];
  const onChangeSelectHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div
        className={Styled.dropdownn}
        style={{ width: "80px", height: "38px", fontSize: "14px" }}
      >
        <div
          className={Styled.dropdown_btnn}
          style={{
            backgroundColor: "#E9E7FD",
            color: "#7f8083",
            boxShadow: "none",
          }}
          onClick={onChangeSelectHandler}
        >
          {selected}
          <img src={Arrow} />
        </div>

        {isActive && (
          <div className={Styled.dropdown_contentt}>
            {option.map((option) => (
              <div
                className={Styled.dropdown_itemm}
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                  setPostPerPage(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonShowing;
